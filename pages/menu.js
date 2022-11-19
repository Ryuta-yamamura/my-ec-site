import stylesMenu from '../styles/menu.module.scss'
import DbMenu from '../components/lib/DbMenu'
import Seo from '../components/layout/Seo'



export default function Menu() {
    const commerce = new DbMenu;


  return (
    <div>
      <Seo
        pageTitle={'MENU'}
        fontPath = {'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'}
      />

      <main className='main'>
        <div className={stylesMenu.title}>
          <h1>MENU</h1>
          <p>メニュー</p>
        </div>
        <ul className={stylesMenu.itemList}>
          {/* 商品配列始まり */}
          {
            commerce.map((shohin, i) => (

              <li>
                <img src={`products/${shohin.image}`} alt="No Image"></img>
                <dl>
                  <dt>{shohin.product_name}</dt>
                  <dd>{shohin.description}</dd>
                </dl>
                <p className={stylesMenu.price}>¥{shohin.price}</p>
                <p className={stylesMenu.itemLabel}>{shohin.english_label}</p>
              </li>
            ))
          }
          {/* 商品配列終わり */}
        </ul>
            

      </main>
    </div >

  )


}
