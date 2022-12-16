import { useState, useEffect} from "react";
import storage from '../storage/firebase'
import { getDownloadURL, ref } from "firebase/storage"


export default function Test() {

  const [product, setProduct] = useState([]);
  const firebaseStoragePass = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PASS

  useEffect(() => {
      sqlSelect()
  }, []);


  async function sqlSelect() {
      const response = await fetch(`/api/id`);
      const data = await response.json();
      const dataVal = data.queryresult[0];
      for (let i = 0; i < dataVal.length; i++) {
        const gsReference =  ref(storage, `${firebaseStoragePass}${dataVal[i].image}`);
        await getDownloadURL(gsReference)
          .then(url => {
            dataVal[i].image = url 
          })
          .catch(err => console.log(err))
      }
  
      setProduct(dataVal);

  }
  return product;
}