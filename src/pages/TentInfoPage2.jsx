import { Link } from 'react-router-dom'
import '../App.css'
import tentmapImg from '../assetstent2/tentmap2.png'
import temptentImg from '../assetstent2/temptent2.png'

/* ── テント出店データ ── */
const TENTS = [
  { no: 29, name: 'La.goal', item: '唐揚げ屋', desc: 'La.goalです。紫熊祭では美味しい唐揚げを販売します！！ぜひ足を運んでください。' },
  { no: 30, name: 'バレーボール愛好会', item: 'たこ焼き・パフェ', desc: 'バレーボール愛好会です！漱石像の前でたこ焼きとパフェを販売します！待ってるぴょん！！' },
  { no: 31, name: '半田研究室', item: '軽食', desc: 'いつもは教育について真面目に学んでいますが、今日は笑顔全開！みんなで仲良く出店しています！ぜひお立ち寄りくださいね！' },
  { no: 32, name: '熊本大学・熊本県立大学 ダイビング部', item: 'たこ焼き屋', desc: '私たちダイビング部は代々受け継がれてきた絶品たこ焼きを販売します！生地の調合からこだわったたこ焼きをぜひご賞味ください！' },
  { no: 33, name: '医学部ソフトテニス部', item: 'ポテト', desc: '医学部ソフトテニス部です！揚げたてのトルネードポテトとドリンクを提供します。4種の味が楽しめるのでぜひお越しください！' },
  { no: 34, name: '焼き芋愛好会', item: '焼き芋', desc: '焼き芋愛好会です。おいしい焼き芋をご用意してお待ちしています。売り上げの一部を熊本大学の研究活動支援のため寄付します。' },
  { no: 35, name: '吹奏楽部', item: '熊吹クレープ', desc: 'デザートにもおかずにもぴったりなクレープをフルーツやチョコなど5種類販売しています！' },
  { no: 36, name: 'wellness', item: 'ウェルカレー', desc: 'こんにちは wellnessです！好評につき今年もウェルカレーを販売して紫熊祭を盛り上げます！ぜひ食べに来てね！💪🔥' },
  { no: 37, name: '卓球部', item: 'クレープ屋', desc: '今年の卓球部はクレープとドリンクを販売します。最高のスイーツを提供しますので、たくさんのご来店お待ちしております！！' },
  { no: 38, name: '邦楽部', item: '団子・わらび餅', desc: '邦楽部では箏・三絃・尺八を演奏しています。今年の紫熊祭ではお団子とわらび餅を販売します。ぜひお越し下さい！' },
  { no: 39, name: '夢プロジェクト', item: 'はしまき・フランクフルト・ポップコーン（塩orキャラメル）', desc: '片手でも持ちやすい！！味は濃いめ！！場所は五高記念館前あたり！！是非是非お待ちしております！！' },
  { no: 40, name: '保健学科バドミントンサークル', item: 'ワッフル＆クロッフル', desc: '私たちは見た目も味も大満足のワッフル＆クロッフルを販売します！1枚1枚部員が心を込めて焼き立てをご提供します♡お待ちしています！' },
  { no: 41, name: 'MatchPoint', item: '中華料理屋', desc: '中華鍋パフォーマンスで魅せる本格炒飯！おかずにはサクッとジューシー唐揚げ、デザートにはあまーいゴマ団子もご用意してます！' },
  { no: 42, name: '幹事会', item: '揚げパン', desc: '今年の幹事会は揚げパン屋さんに変身♡甘くてふわふわ、なつかしの味で心ほぐれるひとときを♪' },
  { no: 43, name: '蘇逢会', item: '焼きそば・ポテト', desc: '' },
  { no: 44, name: '準硬式野球部', item: '焼き鳥・ワッフル', desc: '準硬式野球部が焼き鳥とワッフルを販売中！！待ってます！！！！' },
  { no: 45, name: '書道部', item: 'ホットサンド', desc: '書道部です！美味しいホットサンドを売ります！！是非皆さん食べにきてください！' },
  { no: 46, name: 'Cut in', item: 'あみじゃが・トルネードポテト', desc: '' },
]

export default function TentInfoPage() {
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
          <h2 className="section-title">テント企画</h2>

          <div className="circles__map">
            <img
              src={tentmapImg}
              alt="テントマップ A・B"
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
                  <img src={temptentImg} alt={t.name} />
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