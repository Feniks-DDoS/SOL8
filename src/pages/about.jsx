import SectionsHeader from "@/components/SectionsHeader"
import About from "@/sections/About"


export const metadata = {
  title: 'About',
}

export default () => {

  const infoSection = (
    <>
      名古屋を拠点に活動する、国際認定セラピスト。<br/>
      世界30ヶ所以上のスパを巡り、各国の美と癒しの哲学を探求。<br/>
      IHTA国際ホリスティックセラピー協会認定<br/>
      「 <span className="about__description-span">Relaxation Therapist</span>  1級」「 <span className="about__description-span">Kogao Designer</span>」資格保持。<br/>
      さらに、フランス高級スキンケアブランド <span className="about__description-span">Biologique Recherche </span> の<br/>
      正規パートナーとしてフェイシャル技術を修得。<br/>
      肌・心・身体の調和を重視し、<br/>
      持続する小顔と深いリラクゼーションを叶える<br/>
      独自のタッチメソッドを提供しています。
    </>
  )

  return (
    <>
    <SectionsHeader title="About" />
    <About titleAbout='About Liliya Sato' info={infoSection}/>
    </>
  )
}


