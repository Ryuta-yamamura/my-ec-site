import Link from 'next/link'
import Image from 'next/image'
import stylesConcept from '../styles/concept.module.scss'
import Seo from '../components/layout/Seo'


export default function Concept() {

  return (
    <div className='container'>
      <Seo
        pageTitle={'CONCEPT'}
        fontPath = {'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'}
      />

      <main className='main'>
        <div className={stylesConcept.title}>
          <h1>CONCEPT</h1>
          <p>私たちについて</p>
        </div>

        <div className={stylesConcept.feature}>
          <div className={stylesConcept.featureText}>
            <h2>コーヒーに落とし込まれた日本の喫茶文化</h2>
            <p>「喫茶」とは、おともと鎌倉時代に中国から伝わった、茶を嗜む習慣や作法を指す言葉だったと言います。
              後に発展した茶道では客人をもてなす心が何よりも大切にされ、茶室で過ごすひとときは他にない特別な時間を演出します。
              私たちKISSAは、茶と向き合ってきた日本の文化をコーヒーというカルチャーに落とし込み、訪れるお客様に特別なひとときを提供したいと考えています。
            </p>
          </div>
          <img src='/a6129470d0b0e7c0fceb0daebc691488.jpg' alt='No image'></img>
        </div>

        <div className={`${stylesConcept.feature} ${stylesConcept.reverse}`}>
          <div className={stylesConcept.featureText}>
            <h2>見出し2</h2>
            <p>「喫茶」とは、おともと鎌倉時代に中国から伝わった、茶を嗜む習慣や作法を指す言葉だったと言います。
              後に発展した茶道では客人をもてなす心が何よりも大切にされ、茶室で過ごすひとときは他にない特別な時間を演出します。
              私たちKISSAは、茶と向き合ってきた日本の文化をコーヒーというカルチャーに落とし込み、訪れるお客様に特別なひとときを提供したいと考えています。
            </p>
          </div>
          <img src='/B61D7A3B-913A-4DFF-B7C1-9DE9533D5114.webp' alt='No image'></img>
        </div>

        <div className={stylesConcept.movie}>
          <h2>CONCEPT MOVIE</h2>
          <iframe src="https://www.youtube.com/embed/RhJ7_dcwDpM?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>家具工場の跡地を改装したインダストリアルな空間に、季節の草花と優しい言葉、そしておいしいコーヒーがお客様をお待ちしています。</p>
        </div>
      </main>
    </div >

  )


}
