import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/access.module.scss'
import Seo from '../components/layout/Seo'


export default function Home() {


  return (
    <div className={styles.main}>
      <Seo
        pageTitle={'ACCESS'}
        fontPath={'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'}
      />
      <div className={styles.title}>
        <h1>ACCESS</h1>
        <p>アクセス・お問い合わせ</p>
      </div>
      <div className={styles.map}>
        <h2>アクセスマップ</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.478506631269!2d140.8619308508084!3d38.26839929127869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a282df6a37695%3A0x27e87a420fbe219c!2z44CSOTgwLTA4MDEg5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy65pyo55S66YCa77yR5LiB55uu77yS4oiS77yR77yZ!5e0!3m2!1sja!2sjp!4v1667966464562!5m2!1sja!2sjp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className={styles.contact}>
        <h2>お問い合わせフォーム</h2>
        <form action='#'>
          <dl className={styles.formArea}>
            <dt><span className={styles.required}>お名前</span></dt>
            <dd><input className={styles.inputText} type='text' name='name'></input></dd>
            <dt><span className={styles.required}>メールアドレス</span></dt>
            <dd><input className={styles.inputText} type='email' name='email' required></input></dd>
            <dt>お電話番号</dt>
            <dd></dd>
            <dt>お問い合わせ種別</dt>
            <dd>
              <select>
              <option value='about reserve'>ご予約について</option>
              <option value='about menu'>メニューについて</option>
              <option value='about time'>営業時間について</option>
              </select>
            </dd>
            <dt>お客様について</dt>
            <dd>
            <label className={styles.radioButton}><input type='radio' className='userType' value='normal' defaultChecked={true}></input>一般のお客様</label>
            <label className={styles.radioButton}><input type='radio' className='userType' value='company'></input>お取引様</label>
            <label className={styles.radioButton}><input type='radio' className='userType' value='others'></input>その他</label>
            </dd>
            <dt><span className={styles.required}>お問い合わせ内容</span></dt>
            <dd><textarea className={styles.message} name='message' required></textarea></dd>
          </dl>
          <p className={styles.cofirmText}>ご入力内容を確認の上、お間違いなければSubmitボタンを押してください。</p>
          <button className={styles.submitButton} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
