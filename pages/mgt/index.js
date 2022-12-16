import Image from "next/image";
import { react, useState } from "react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import FormData  from 'form-data';
import '../../components/firebase/init'
import { FirebaseStorage, getStorage } from 'firebase/storage';

import { ref, uploadBytesResumable } from "firebase/storage"
import { uploadBytes } from "firebase/storage";

export default function Page() {
    const [files, setFiles] = useState();
    const [loading, setLoading] = useState(false);
    const [isUploaded, setUploaded] = useState(false);
    const [formInput, updateFormInput] = useState({
        product_id: null,
        product_name: '',
        description: '',
        image: '',
        price: '',
        stock_quantity: '',
        english_label: '',
    })
    const router = useRouter()
    const formData = new FormData();

    async function onChange(e) {
        const file = e.target.files[0];
        formData.append('file',file)
        try {
            const reader = new FileReader();
            // await axios.post('./products/', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //       },
            // });
            reader.onload = (e) => {
                setFiles(e.target.result)
            }
            reader.readAsDataURL(file);
            updateFormInput({ ...formInput, image: file.name });

            } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createProduct() {
        const response = await fetch('api/insert', {
            method: 'POST',
            body: JSON.stringify({ formInput }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        onFileUploadToFirebase(files);
        router.push('/')
    }

    async function onFileUploadToFirebase(file) {
        const storage = getStorage();
        const storageRef = ref(storage, `image/${file.name}`);
        console.log(storageRef)
        const uploadImage = uploadBytesResumable(storageRef, file);

        uploadImage.on(
            "state_changed",
            (snapshot) => {
                setLoading(true);
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
                console.log('Upload is ' + progress + '% done');
            },
            (err) => {
                console.log(err);
            },
            () => {
                setLoading(false);
                setUploaded(true);
            }

        )
    };

    return (
        <>
                <dl>
                    <dt><span>商品名</span></dt>
                    <dd><input
                        placeholder="Product Name"
                        type='text'
                        onChange={e => updateFormInput({ ...formInput, product_name: e.target.value })}
                    /></dd>
                    <dt><span>商品の説明</span></dt>
                    <dd><textarea
                        placeholder="Description"
                        onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                    />
                    </dd>
                    <dt>商品の写真</dt>
                    <dd><input
                        type="file"
                        name="image"
                        className="my-4"
                        onChange={onChange}
                    /></dd>
                    {
                        files && (
                            <Image
                                src={files}
                                alt="Picture of the author"
                                className="rounded mt-4"
                                width={180}
                                height={320}
                            />
                        )
                    }
                    <dt>商品の金額</dt>
                    <dd>
                        <input
                            placeholder="Asset Price"
                            className=""
                            type="number"
                            onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
                        /></dd>
                    <dt>商品在庫</dt>
                    <dd>
                        <input
                            placeholder="Quantity"
                            className=""
                            type="number"
                            onChange={e => updateFormInput({ ...formInput, stock_quantity: e.target.value })}
                        /></dd>

                    <dt><span>商品の英語名</span></dt>
                    <dd><input
                        placeholder="English Name"
                        type='text'
                        onChange={e => updateFormInput({ ...formInput, english_label: e.target.value })}
                    /></dd>
                    <button onClick={createProduct} type='submit'>upload</button>
                </dl>
        </>
    )
}
