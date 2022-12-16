import Image from "next/image";
import { react, useState } from "react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import FormData  from 'form-data';
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import storage from '../../components/storage/firebase'
import { ref, uploadBytesResumable } from "firebase/storage"
import { uploadBytes } from "firebase/storage";

export default function Page() {
    const [files, setFiles] = useState();
    const [loading, setLoading] = useState(false);
    const [isUploaded, setUploaded] = useState(false);
    // DB変数の指定
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
        // formData.append('file',file)
        onFileUploadToFirebase(file);

        try {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFiles(e.target.result)
            }
            reader.readAsDataURL(file);
            updateFormInput({ ...formInput, image: file.name });

            } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function onFileUploadToFirebase(file) {
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

    async function createProduct() {
        const response = await fetch('api/insert', {
            method: 'POST',
            body: JSON.stringify({ formInput }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        router.push('/')
    }

    return (
        <>
        {loading ? (<><h2>アップロード中...</h2><h3>{progress} %</h3></>
        ) : (
            <>
            {isUploaded ? (
            <h2>アップロードが完了しました</h2>
            ) : (
                <dl>
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
                </dl>
            )}
            </>

        )
        
        }
        </>
    )
}
