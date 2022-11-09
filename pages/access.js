import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import DbMenu from '../components/layout/DbMenu'
import Seo from '../components/layout/Seo'


export default function Home() {

  const commerce = new DbMenu;

  return (
    <div className=''>
      <Seo
        pageTitle={'ACCESS'}
        fontPath = {'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'}
      />

      <div className={styles.firstView}>
        <div className={styles.firstViewText}>
          <h1>{`Imagination will\ntake you everywhere.`}</h1>
          <p>NFTから新しい世界を創造する。</p>
        </div>
      </div>
      <div className={styles.lead}>
        <p>{`「想像力はあなたをどこにでも連れて行ってくれる」\n注文を待つ間に広げた、一冊の本の中に見つけた言葉。\nゆったり流れる時間の中で、想像を膨らませる楽しさを思い出す。\nそんな時間を過ごすとき、おいしいコーヒーがあると嬉しい。`}
        </p>
        {/* ボタンコンポーネント始まり */}
        <div className={styles.linkButtonArea}>
          <div className={styles.linkButton} >
            <div className={styles.buttonWrapper}></div>
            <Link href='/concept'>
                <div className={styles.buttonBox}>
                  CONCEPT
                </div>
            </Link>
          </div>
        </div>
        {/* ボタンコンポーネント終わり */}
      </div>

      <div className={styles.recommended}>
        <h2>RECOMMEND</h2>
        <ul className={styles.itemList}>
          {/* 商品配列始まり */}
          {
            commerce.map((shohin, i) => (

              <li key={i}>
                <img src={shohin.imgUrl} alt="No Image"></img>
                <dl>
                  <dt>{shohin.title}</dt>
                  <dd>{shohin.description}</dd>
                </dl>
                <p className={styles.price}>¥{shohin.price}</p>
              </li>
            ))
          }
          {/* 商品配列終わり */}
        </ul>
        {/* ボタンコンポーネント始まり */}
        <div className={styles.linkButtonArea}>
          <div className={styles.linkButton} >
            <div className={styles.buttonWrapper}></div>
            <Link href='/menu'>
                <div className={styles.buttonBox}>
                  MENU
                </div>
            </Link>
          </div>
        </div>
        {/* ボタンコンポーネント終わり */}

      </div>


    </div>
  )
}
