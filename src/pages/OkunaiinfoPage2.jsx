import { Link } from 'react-router-dom'
import '../App.css'
import okunaimapImg2_1 from '../assetsokunai2/okunaimap2-1.png'
import okunaimapImg2_2 from '../assetsokunai2/okunaimap2-2.png'
import okunaimapImg2_3 from '../assetsokunai2/okunaimap2-3.png'
import tempokunaiImg2 from '../assetsokunai2/tempokunai2.png'

/* ── 屋内企画出店データ ── */
const TENTS = [
  {
    no: 5,
    name: '集え！MEZA 熊ロワイヤル 〜 RiSing Evolution 〜',
    item: 'ポケモンサークル めざめるパワー熊本',
    desc: 'ポケモンサークル「めざ熊」です！ ゲーム（シングルバトルやダブルバトル）やカード、クイズでポケモン好き同士交流できます！ ポケモンの交換も行います！',
  },
  {
    no: 6,
    name: '和美咲日',
    item: '美術部',
    desc: '美術部です！基本、各々で好きなように描いてます。雰囲気は和気藹々としていて紫熊祭では作品展示やポストカードも販売しています。',
  },
  {
    no: 7,
    name: '一祭限りの映画館',
    item: '熊本大学映画研究部',
    desc: '私たちの作った映画やおすすめ映画の紹介などを行っています！ この期間にしか開かれない映画館へぜひ一度お越しください！',
  },
  {
    no: 8,
    name: 'お笑いライブ',
    item: '熊本大学お笑いサークル',
    desc: '漫才やコントなど、ジャンルを問わずにお笑いに関連したライブを行います。 ぜひいらっしゃってください。',
  },
]

export default function OkunaiInfoPage2() {
  return (
    <div className="site">
      <header className="nav nav--solid">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </Link>
      </header>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div className="section-label">Okunai Booths</div>
          <h2 className="section-title">屋内企画ー全学教育棟ー</h2>

          <div className="circles__map">
            <img
              src={okunaimapImg2_1}
              alt="屋内企画全学教育棟マップ"
              className="circles__map-img"
            />
          </div>
                    <div className="circles__map">
            <img
              src={okunaimapImg2_2}
              alt="屋内企画全学教育棟マップ"
              className="circles__map-img"
            />
          </div>
                    <div className="circles__map">
            <img
              src={okunaimapImg2_3}
              alt="屋内企画全学教育棟マップ"
              className="circles__map-img"
            />
          </div>

          <div className="tent-list">
            {TENTS.map(t => (
              <div className="tent-item" key={t.no}>
                <div className="tent-item__info">
                  <span className="tent-item__no">No.{t.no}</span>
                  <h3 className="tent-item__name">{t.name}</h3>
                  <p className="tent-item__food">{t.item}</p>
                  <p className="tent-item__desc">{t.desc}</p>
                </div>
                <div className="tent-item__photo">
                  <img src={tempokunaiImg2} alt={t.name} />
                </div>
              </div>
            ))}
          </div>

          <div className="circles__cta">
            <Link to="/" className="circles__btn">
              ← トップに戻る
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__sigma">Σ</div>
        <p className="footer__title">第14回 紫熊祭実行委員会</p>
        <p className="footer__copy">© 2025 紫熊祭実行委員会 All rights reserved.</p>
      </footer>
    </div>
  )
}