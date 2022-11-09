import Link from 'next/link'
import styles from '../styles/shop.module.scss'
import DbMenu from '../components/layout/DbMenu'
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
        {/* DBから商品の内容を抽出 */}
        <div className={styles.shopItem}>
          <div className={styles.itemGroup}>
            {/* 商品カテゴリ名 */}
            <h2>GARDENING GOODS</h2>
            <ul className={styles.itemList}>
            {/* 商品配列始まり */}
            {
              commerce.map((shohin, i) => (

                <li>
                  <a href='/shopDetail'>
                    <img src={shohin.imgUrl} alt="No Image"></img>
                    <dl>
                      <dt>{shohin.title}</dt>
                      <dd>{shohin.description}</dd>
                    </dl>
                  </a>
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
            <li>
                <a href='/shopDetail'>ハンドフォーク</a>
              </li>
              <li>
                <a href='/shopDetail'>オニオンホー</a>
              </li>
              <li>
                <a href='/shopDetail'>除草ピック</a>
              </li>
              <li>
                <a href='/shopDetail'>ガーデン捕虫器</a>
              </li>
              <li>
                <a href='/shopDetail'>誘引麻ひも</a>
              </li>
              <li>
                <a href='/shopDetail'>ラバーグローブ</a>
              </li>
              <li>
                <a href='/shopDetail'>種保存袋</a>
              </li>
              <li>
                <a href='/shopDetail'>クロス</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
