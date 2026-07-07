import { Link } from 'react-router-dom'
import '../App.css'
import okunaimapImg from '../assetsokunai/okunaimap.png'
import tempokunaiImg from '../assetsokunai/tempokunai.png'

/* ── 屋内企画出店データ ── */
const TENTS = [
  {
    no: 1,
    name: 'ROCK in 黒髪',
    item: 'ロック研究会',
    desc: '激音炸裂！！！',
  },
  {
    no: 2,
    name: 'モダンジャズ研究会',
    item: 'モダンジャズ研究会',
    desc: 'こんにちは！モダンジャズ研究会です！ 当サークルは、Jazzを演奏する活動をしています。 紫熊祭でも活動しておりますので、ぜひ聴きに来てください！',
  },
  {
    no: 3,
    name: 'あつまれ！ピアノの森',
    item: '熊本大学ピアノの会',
    desc: 'こんにちは、熊本大学ピアノの会です！ 私たちはピアノ演奏を行います。 ぜひ聴きに来てください！',
    note: '※1日目：11/2(日) 11:10〜12:30 のみの企画です',
  },
  {
    no: 4,
    name: '【F研】屋内ライブ 🎸⚡',
    item: 'フォークソング研究会',
    desc: 'フォークソング研究会(F研)の屋内ライブ！！ 3日間ぶっ通しでライブやるよ！！見に来てね！！ ぶち上がろうぜ⤴⤴⤴',
  },
]

export default function OkunaiInfoPage() {
  return (
    <div className="site">
      <header className="nav nav--solid">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </Link>
      </header>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div className="section-label">Tent Booths</div>
          <h2 className="section-title">屋内企画学生会館</h2>

          <div className="circles__map">
            <img
              src={okunaimapImg}
              alt="屋内企画学生会館マップ"
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
                  <img src={tempokunaiImg} alt={t.name} />
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