import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Home() {

  // ここにDBデータ参照からのループ文設計を考える
  let i = 0
  const commerce = new Array();
  const title = '富士山';
  const description = '初冬の日の出時間にのみ訪れる幻想的な富士山の風景。山頂には綺麗な雪化粧。';
  const imgUrl = '/a763fd8f-5604-48cc-942c-c7d3280cd8d4_l.jpg';
  let price = '500';

  for(i=0; i<5; i++){
    commerce[i] = {
      imgUrl,
      title,
      description,
      price,
    }
  }

  return (
    <div className=''>
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
            <Link href='/concept'>
              <div className={styles.buttonWrapper}>
                <div className={styles.buttonBox}>
                  CONCEPT
                </div>
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

              <li>
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
            <Link href='/menu'>
              <div className={styles.buttonWrapper}>
                <div className={styles.buttonBox}>
                  MENU
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* ボタンコンポーネント終わり */}

      </div>


    </div>
  )
}
