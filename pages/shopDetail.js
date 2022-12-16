import Link from 'next/link'
import styles from '../styles/shop.module.scss'
import DbMenu from '../components/lib/DbMenu'
import Seo from '../components/layout/Seo'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getDownloadURL, ref } from "firebase/storage"
import {storage} from '../components/storage/firebase'


export default function Home() {
  const [loadingState, setLoadingState] = useState('not-loaded');
  const [product, setProduct] = useState([]);
  const firebaseStoragePass = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PASS


  const commerce = new DbMenu;

  const router = useRouter();
  const query = router.query;
  useEffect(() => {
    if (router.isReady) {
      selectProduct();
    };

  }, [query, router]);



  async function selectProduct() {

    const response = await fetch(`/api/id?id=${query.id}`);
    const data = await response.json();
    const dataVal = data.queryresult[0]
    const gsReference =  ref(storage, `${firebaseStoragePass}${dataVal[0].image}`);
    await getDownloadURL(gsReference)
    .then(url => {
      dataVal[0].image = url 
    })
    .catch(err => console.log(err))

    setProduct(data.queryresult[0]);
    setLoadingState('loaded');

  }
  // const initCommerce =commerce;
  // console.log(initCommerce);
  if (loadingState === 'not-loaded' && !product.length) return (
    <h1 className="px-20 py-10 text-3xl">now loading</h1>
  )


  return (
    <div className=''>
      <Seo
        pageTitle={'ONLINE SHOP'}
        fontPath={'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'}
      />
      <div className={styles.title}>
        <h1>ONLINE SHOP</h1>
        <p>オンラインショップ</p>
      </div>

      <div className={styles.shopContents}>
        {/* DBから商品の内容を抽出 */}
        <div className={styles.shopItem}>
          <h2>{product[0].product_name}</h2>
          <div className={styles.itemArea}>
            <img src={product[0].image} alt='no image'></img>
            <div className={styles.aboutItem}>
              <p className={styles.itemText}>
                木の枝やガーデンにつるして、害虫を捕獲します。底に果実などを入れて無視を誘い込みます。
                農薬や殺虫剤を使わず、安全に虫対策ができることからオーガニック菜園におすすめです。
              </p>
              <p className={styles.itemPrice}>¥{product[0].price}</p>
              <a>BUY NOW</a>
            </div>
          </div>
          <div className={`${styles.itemGroup} ${styles.recommended}`}>
            {/* 商品カテゴリ名 */}
            <h2>RECOMMENDED</h2>
            <ul className={styles.itemList}>
              {/* 商品配列始まり */}
              {
                commerce.map((shohin) => (
                  <li key={shohin.product_id}>
                    <Link href={`/shopDetail/?id=${shohin.product_id}`}>
                      <a>
                        <img src={shohin.image} alt="No Image"></img>
                        <dl>
                          <dt>{shohin.product_name}</dt>
                          <dd>{shohin.description}</dd>
                        </dl>
                      </a>
                    </Link>
                  </li>


                ))
              }
              {/* 商品配列終わり */}
            </ul>

          </div>
        </div>
        <aside className={styles.shopMenu}>
          <div className={styles.shopMenuInner}>
            <h2>ITEM LIST</h2>
            <ul>
              {
                commerce.map((shohin) => (
                  <li key={shohin.product_id}>
                    <Link href={`/shopDetail/?id=${shohin.product_id}`}>
                      <a>
                        {shohin.product_name}
                      </a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
