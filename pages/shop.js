import Link from 'next/link'
import styles from '../styles/shop.module.scss'
import DbMenu from '../components/lib/DbMenu'
import Seo from '../components/layout/Seo'


export default function Home() {

  const commerce = new DbMenu;

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
        <div className={styles.shopItem}>
          <div className={styles.itemGroup}>
            {/* 商品カテゴリ名 */}
            <h2>SHOP LIST</h2>
            <ul className={styles.itemList}>
              {/* 商品配列始まり */}
              {
                commerce.map((shohin, i) => (

                  <li key={i}>
                    <Link href={`/shopDetail/?id=${shohin.product_id}`}>
                    <a>
                      <img src={`products/${shohin.image}`} alt="No Image"></img>
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
              {/* 商品配列始まり */}
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
