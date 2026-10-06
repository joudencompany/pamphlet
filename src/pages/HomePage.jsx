// src/pages/HomePage.jsx
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import terrabalImg from '../assets/terrabal.jpg'
import terrabalImg2 from '../assets/terrabal2.jpg'
import chuoImg from '../assets/chuo.png'
import seikyou from '../assets/seikyou.png'
import konntakuto from '../assets/konntakuto.png'
import ouesu from '../assets/ouesu.png'
import onetimeforever from '../assets/1time4ever.png'
import kurokamicampus from '../assets/kurokamicampus.png'
import KMB from '../assets/KMB.png'
import kyouseisika from '../assets/kyouseisika.png'
import shuukatusei from '../assets/shuukatusei.png'
import TKU1 from '../assets/TKU1.png'
import TKU2 from '../assets/TKU2.png'
import tentmapImg from '../assetstent/tentmap.png'
import tentmapImg2 from '../assetstent2/tentmap2.png'
import Dokusho from '../assets/dokusho.png'
import Aikasu from '../assets/aikasu.png'
import okunaimapImg from '../assetsokunai/okunaimap.png'
import okunaimapImg2_1 from '../assetsokunai2/okunaimap2-1.png'
import okunaimapImg2_2 from '../assetsokunai2/okunaimap2-2.png'
import okunaimapImg2_3 from '../assetsokunai2/okunaimap2-3.png'
import gokase from '../assets/gokase.png'
import pokeka from '../assets/pokeka.png'
import kumakore from '../assets/kumakore.png'
import kumakore2 from '../assets/kumakore2.png'
import stamp from '../assets/stamp.png'
import kinnniku from '../assets/kinnniku.png'

/* ── データ ── */
const DAYS = [
  { label: '11/1', day: '日', color: '#e03c3c' },
  { label: '11/2', day: '月', color: '#2a8c4a' },
  { label: '11/3', day: '火・祝', color: '#e03c3c' },
]

const TIMETABLE = {
  '11/1': [ // 1日目
    { time: '10:00', endTime: '11:00', name: 'オープニング', stage: 'メインステージ' },
    { time: '11:15', endTime: '12:30', name: '熊大コンテスト', stage: 'メインステージ' },
    { time: '13:00', endTime: '13:15', name: '大学応援団リーダー', stage: 'メインステージ' },
    { time: '13:15', endTime: '13:30', name: '応援団チアリーディング部', stage: 'メインステージ' },
    { time: '13:30', endTime: '13:45', name: '真狗舞～九州がっ', stage: 'メインステージ' }, // TODO: 名称が途切れているため正式名称を要確認
    { time: '14:15', endTime: '15:15', name: '熊本大学医学部軽音楽部MPB', stage: 'メインステージ' },
    { time: '15:45', endTime: '16:45', name: 'アコースティック愛好会', stage: 'メインステージ' },
    { time: '17:00', endTime: '18:00', name: 'DAP', stage: 'メインステージ' },

    { time: '11:00', endTime: '12:00', name: 'イントロドン', stage: 'サブステージ' },
    { time: '12:30', endTime: '13:15', name: 'シグマグランプリ', stage: 'サブステージ' },
    { time: '13:45', endTime: '16:45', name: 'Higo-Pella', stage: 'サブステージ' },

    {
      time: '15:00',
      endTime: '17:40',
      name: '第12回 夜の筋肉祭り',
      stage: 'こども広場＋α',
      place: '武夫原グラウンド',
      comment: 'みせろ 筋肉漢の底力！！',
      imgs: [kinnniku],
    },
  ],

  '11/2': [ // 2日目
    { time: '10:00', endTime: '10:15', name: '邦楽部', stage: 'メインステージ' },
    { time: '10:30', endTime: '11:00', name: '書道部', stage: 'メインステージ' },
    { time: '11:15', endTime: '11:45', name: '熊本大学体育会フォークダンス部', stage: 'メインステージ' },
    { time: '11:45', endTime: '13:00', name: '歌うま', stage: 'メインステージ' },
    { time: '13:30', endTime: '14:30', name: 'ロック研究会', stage: 'メインステージ' },
    { time: '15:00', endTime: '16:00', name: 'Higo-Pella', stage: 'メインステージ' },
    { time: '16:15', endTime: '16:45', name: 'フィル軽音部', stage: 'メインステージ' },
    { time: '16:45', endTime: '18:00', name: '熊大コレクション',
      stage: 'メインステージ',
      place: 'メインステージ',            // 省略するとステージ名が入ります
      comment: 'ここに紹介文',            // 省略すると「詳細は準備中です。」と表示されます
      imgs: [kumakore, kumakore2] },     // 写真があるイベントだけ

    { time: '11:00', endTime: '14:00', name: 'Higo-Pella', stage: 'サブステージ' },
    { time: '15:00', endTime: '18:00', name: 'アコースティック愛好会', stage: 'サブステージ' },

  ],
  '11/3': [ // 3日目
    { time: '10:00', endTime: '11:00', name: 'フォークソング研究会', stage: 'メインステージ' },
    { time: '11:15', endTime: '12:15', name: '熊大コンテスト', stage: 'メインステージ' },
    { time: '12:45', endTime: '13:45', name: 'Cullet', stage: 'メインステージ' },
    { time: '14:15', endTime: '14:45', name: '医学部アンサンブル', stage: 'メインステージ' },
    { time: '15:15', endTime: '16:15', name: '上瀧研究室', stage: 'メインステージ' },
    { time: '16:45', endTime: '17:45', name: 'モダンジャズ研究会', stage: 'メインステージ' },
    { time: '17:45', endTime: '19:30', name: 'フィナーレ', stage: 'メインステージ' },

    { time: '10:00', endTime: '13:00', name: 'Higo-Pella', stage: 'サブステージ' },
    { time: '13:30', endTime: '16:30', name: 'アコースティック愛好会', stage: 'サブステージ' },
    { time: '16:30', endTime: '17:00', name: 'キャンドルナイト準備', stage: 'サブステージ' },
    { time: '17:00', endTime: '18:00', name: 'キャンドルナイト', stage: 'サブステージ' },
  ],
}

/* ── ステージごとの色分け ── */
const STAGE_COLOR = {
  'メインステージ': '#6c3fc7',
  'サブステージ':   '#e07c00',
  'こども広場':     '#2a8c4a',
  'こども広場＋α':  '#2a8c4a',
}

/* ── アンカー広告データ（中央自動車学校のみ） ── */
const ANCHOR_AD = { img: chuoImg, alt: '中央自動車学校', url: 'https://chuo-ds.com/' }






export default function HomePage() {
  const [adVisible, setAdVisible] = useState(false)
  const [adShown, setAdShown] = useState(false)
  const [surveyVisible, setSurveyVisible] = useState(
    () => sessionStorage.getItem('surveyDone') !== 'true'
  )
  const [surveyDone, setSurveyDone] = useState(
    () => sessionStorage.getItem('surveyDone') === 'true'
  )
  const [activeDay, setActiveDay] = useState('11/1')
  const [menuOpen, setMenuOpen] = useState(false)
  const [bubble, setBubble] = useState(null) // タイムテーブルの吹き出し
  const [greetOpen, setGreetOpen] = useState({ chair: false, vice: false }) // 挨拶の折りたたみ

  const heroRef = useRef(null)

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw5g62IiNURRo69ArGdlHFA28ktmEWEixTV5LArZkD_cFcme8yeyxDOumO_qEmNWyio/exec'
const handleSurvey = async (type) => {
  setSurveyVisible(false)
  setSurveyDone(true)
  sessionStorage.setItem('surveyDone', 'true')
  const params = new URLSearchParams({ type })
  try {
    await fetch(`${SHEET_URL}?${params}`, {
      method: 'GET',
      mode: 'no-cors',
    })
  } catch (e) {
    console.error('送信失敗', e)
  }
}

  useEffect(() => {
  document.title = '第15回 紫熊祭 | 熊本大学黒髪北キャンパス'
}, [])

useEffect(() => {
  if (adShown) return

  const sectionIds = ['greeting', 'timetable', 'circles-tent', 'access']
  const AD_TRIGGER = 2 // 何セクション通過したら表示するか

  const observer = new IntersectionObserver(() => {
    const passed = sectionIds.filter(id => {
      const el = document.getElementById(id)
      if (!el) return false
      return el.getBoundingClientRect().top < window.innerHeight * 0.5
    }).length

    if (passed >= AD_TRIGGER) {
      setAdVisible(true)
      setAdShown(true)
    }
  }, { threshold: 0.1 })

  sectionIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [adShown])

  /* タイムテーブル吹き出し：外側クリック・Esc・リサイズ・日付切替で閉じる */
  useEffect(() => { setBubble(null) }, [activeDay])
useEffect(() => {
  if (!bubble) return
  const close = () => setBubble(null)
  const onClick = (e) => {
    if (!e.target.closest('.tt-bubble, .tt-link')) close()
  }
  const onKey = (e) => { if (e.key === 'Escape') close() }
  // スマホはアドレスバーの出入りで高さだけ変わるので、幅が変わった時（回転など）だけ閉じる
  const w = window.innerWidth
  const onResize = () => { if (window.innerWidth !== w) close() }
  document.addEventListener('click', onClick)
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)

  // シート表示中は背面のスクロールを止める
  const prevOverflow = document.body.style.overflow
  if (bubble.mode === 'sheet') document.body.style.overflow = 'hidden'

  return () => {
    document.removeEventListener('click', onClick)
    document.removeEventListener('keydown', onKey)
    window.removeEventListener('resize', onResize)
    document.body.style.overflow = prevOverflow
  }
}, [bubble])

  const openBubble = (e, ev, stage, key) => {
    if (bubble?.key === key) { setBubble(null); return }
    // スマホ幅：画面下から出るシート（位置計算なし・画面外に出ない）
    if (window.matchMedia('(max-width: 768px)').matches) {
      setBubble({ key, ev, stage, mode: 'sheet' })
      return
    }
    const r = e.currentTarget.getBoundingClientRect()
    const width = Math.min(320, window.innerWidth - 24)
    const center = r.left + r.width / 2
    const left = Math.max(12, Math.min(center - width / 2, window.innerWidth - width - 12))
    const arrowX = Math.max(24, Math.min(center - left, width - 24))
    setBubble({
      key, ev, stage, width, arrowX, mode: 'pop',
      left: left + window.scrollX,
      top: r.bottom + window.scrollY + 12,
    })
  }

  const toggleGreet = (key) => {
    const willClose = greetOpen[key]
    setGreetOpen(o => ({ ...o, [key]: !o[key] }))
    // 閉じるときはカードの先頭へ戻す（長文を読んだ後に位置を見失わないように）
    if (willClose) {
      document.getElementById(`greet-card-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site">

        {/* ── 来場者アンケート ── */}
    {surveyVisible && (
      <div className="sp-overlay">
        <div className="sp-overlay__box">
          <h2 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>来場者アンケート</h2>
          <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.2rem' }}>
            あなたはどちらですか？
          </p>
          {[
            { label: ' 熊本大学の学生様', value: '熊大生' },
            { label: ' 他大学の学生様',   value: '他大学生' },
            { label: ' 一般来場者様',     value: '外部来場者' },
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => handleSurvey(value)}
              style={{
                display: 'block', width: '100%', margin: '0.4rem 0',
                padding: '0.7rem', borderRadius: '8px',
                border: '1px solid #444', background: '#1a1a2e',
                color: '#fff', cursor: 'pointer', fontSize: '0.95rem'
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    )}

      {/* ── インタースティシャル広告 ── */}
      {adVisible && (
        <div className="ad-interstitial" onClick={() => { setAdVisible(false); setAdShown(true) }}>
          <div className="ad-interstitial__box" onClick={e => e.stopPropagation()}>
            <button className="ad-interstitial__close" onClick={() => { setAdVisible(false); setAdShown(true) }}>✕</button>
            <a href="https://chuo-ds.com/" target="_blank" rel="noopener noreferrer">
              <img src={chuoImg} alt="中央自動車学校" className="ad-interstitial__img" />
            </a>
          </div>
        </div>
      )}

      {/* ── ナビ ── */}
      <header className="nav">
        <div className="nav__logo" onClick={() => scrollTo('hero')}>
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </div>
        <nav className={`nav__links ${menuOpen ? 'open' : ''}`}>
          {[['挨拶','greeting'],['諸注意','notice'],['タイムテーブル','timetable'],['出店・サークル（テント）','circles-tent'],['出店・サークル（屋内）','circles-okunai'],['スタンプラリー','stamp'],['アクセス','access'],].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </header>

      {/* ── ヒーロー ── */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero__inner">
          <p className="hero__kaicho">第15回</p>
          <h1 className="hero__title">紫熊祭</h1>
          <p className="hero__en">SIGMA FES</p>
          <div className="hero__theme">1TIME 4EVER</div>
          <div className="hero__dates">
            <span>11.1<small>日</small></span>
            <span className="hero__dates-sep">—</span>
            <span>11.3<small>火・祝</small></span>
          </div>
          <p className="hero__place">熊本大学 黒髪北キャンパス</p>
          <button className="hero__cta" onClick={() => scrollTo('timetable')}>
            スケジュールを見る →
          </button>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：テラバル自動車学校
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://terrabal.co.jp" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={terrabalImg} alt="テラバル自動車学校" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：テラバル自動車学校2
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://terrabal.co.jp" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={terrabalImg2} alt="テラバル自動車学校" className="ad-banner__img" />
        </a>
      </div>

      {/* ── 委員長挨拶 ── */}
      <section className="section greeting" id="greeting">
        <div className="container">
          <div className="section-label">Greeting</div>
          <h2 className="section-title">委員長挨拶</h2>
          <div className="greeting__card" id="greet-card-chair">
            <div className="greeting__avatar">委員長</div>
            <div className="greeting__body">
              <p className="greeting__name">委員長 荒巻 遥平</p>
              <p>
                この度は第十五回紫熊祭公式パンフレットをご覧いただき、誠にありがとうございます。紫熊祭は、学生のみならず、地域の皆様にも愛される、熊本大学最大の祭典です。
              </p>
              <div className={`greeting__more ${greetOpen.chair ? 'open' : ''}`} id="greet-chair">
              <div>
              <p>
                昨年に続き、本年も無事に開催の運びとなりましたことを、心より喜ばしく思います。これもひとえに、日頃より本学を支えてくださる教職員や学生の皆様、OB・OGの皆様、そして地域住民や企業の皆様の、温かいご理解とご協力の賜物でございます。紫熊祭実行委員一同、深く感謝申し上げます。
              </p>
              <p>
                第十五回を迎える「紫熊祭」の名には、熊本大学のシンボルカラーである「紫」と「総和」を表す数学記号であるΣの意味が込められています。
              </p>
              <p>
                本年度の紫熊祭のテーマは<strong>「1TIME 4EVER」</strong>です！「1TIME（=One Time）」は、一度きりの特別な瞬間を。「4EVER（=Forever）」は、永遠の思い出となるような体験をそれぞれ意味しています。このテーマを掲げ、第十五回紫熊祭が、皆様の記憶に永遠に刻まれる史上最高の盛り上がりとなることを目指しております。
              </p>
              <p>
                開催に至るまでには多くの困難もございましたが、約400名の実行委員が一丸となって準備に邁進してまいりました。来場者様に一つでも多くの思い出や感動を与えられるよう、私たち実行委員をはじめ各部活動・サークルの企画者様による野外ステージでのハイクオリティなパフォーマンスや、テント・屋内での出店や展示物の数々、そして皆様に参加していただく各種企画といった、数多くの催し物をご用意しております！
              </p>
              <p>
                3日間これらを心ゆくまでお楽しみいただき、皆様と共に、感動あふれる紫熊祭を創り上げられましたら幸いです。皆様の笑顔が、私たちの何よりの喜びです。この3日間が、皆様にとって特別な思い出となることをお約束いたします。
              </p>
              <p>
                最高の紫熊祭を、どうぞお楽しみください！
              </p>
              </div>
              </div>
              <button
                type="button"
                className="greeting__toggle"
                aria-expanded={greetOpen.chair}
                aria-controls="greet-chair"
                onClick={() => toggleGreet('chair')}
              >
                {greetOpen.chair ? '閉じる ▲' : '続きを読む ▼'}
              </button>
            </div>
          </div>

          <div className="greeting__card" id="greet-card-vice">
            <div className="greeting__avatar">副委員長</div>
            <div className="greeting__body">
              <p className="greeting__name">副委員長 福嶋 楓・西田 周平</p>
              <p>
                この度は紫熊祭に足をお運びいただき、誠にありがとうございます。実行委員一同、感謝と、皆様と共に紫熊祭を開催できることに喜びを感じております。
              </p>
              <div className={`greeting__more ${greetOpen.vice ? 'open' : ''}`} id="greet-vice">
              <div>
              <p>
                昨年度の第十四回紫熊祭は、テーマ「13anquet［banquet］」のもと、会場が一丸となって「宴会」のように大いに盛り上がり、お祭りの名にふさわしい紫熊祭となりました。
              </p>
              <p>
                本年度、第十五回紫熊祭のテーマは<strong>「1TIME 4EVER」</strong>です！「一度きりの瞬間が永遠になる」というコンセプトのもとに、紫熊祭での思い出が、今後も皆様の記憶の中に残り続けるような、昨年度以上に熱く盛り上がる紫熊祭を開催いたします！
              </p>
              <p>
                本年度の紫熊祭も、来場者の皆様に楽しんでいただけますよう、様々な企画をご用意しています。テント企画では、各部活動・サークルの方々が試行錯誤して作り上げたグルメやドリンクを販売しています。昨年度と比べ、今年度参加される部活動・サークル団体数も増え、どれも見逃せないものばかりです。
              </p>
              <p>
                野外ステージでは、各部活動・サークルの方々による、バンド演奏やダンス・歌の披露といった素敵なパフォーマンスに加え、紫熊祭実行委員会による、盛り上がること間違いなしの企画の数々を実施してまいります。さらに今年度も、豪華ゲストの方々が、会場をより一層沸かせに紫熊祭に来てくださりました！
              </p>
              <p>
                また全学教育棟や学生会館内でも、ボードゲームやお化け屋敷などの来場者様が実際に参加可能な企画や、文化系サークルの作品の展示など各部活動・サークルの皆さんや実行委員による、様々な企画をご用意しております。ぜひ足をお運びください！
              </p>
              <p>
                最後になりますが、第十五回紫熊祭を開催するにあたってご尽力を賜りました、熊本大学関係者・学生の皆様、OB・OGの皆様、地域住民の皆様、そして企業様、本当にありがとうございました。紫熊祭実行委員会を代表して厚く御礼申し上げます。
              </p>
              <p>
                本日が皆様にとって素敵な日になりますように、実行委員一同心からお祈り申し上げます。
              </p>
              </div>
              </div>
              <button
                type="button"
                className="greeting__toggle"
                aria-expanded={greetOpen.vice}
                aria-controls="greet-vice"
                onClick={() => toggleGreet('vice')}
              >
                {greetOpen.vice ? '閉じる ▲' : '続きを読む ▼'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：生協
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://coop.kyushu-bauc.or.jp/kumamoto-u/index.html" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={seikyou} alt="生協" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：コンタクトアイシティ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.eyecity.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={konntakuto} alt="コンタクトアイシティ" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：オーエス
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.nohara-gr.com/admin-os/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={ouesu} alt="オーエス" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ワンタイムフォーエバー
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <a href="" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={onetimeforever} alt="1TIME 4EVER" className="ad-banner__img" />
        </a>
      </div>

      {/* ── 諸注意 ── */}
      <section className="section notice" id="notice">
        <div className="container">
          <div className="section-label">Notice</div>
          <h2 className="section-title">諸注意</h2>
          <p className="notice__lead">～皆で紫熊祭を楽しむために～</p>

          <ul className="notice__list">
            <li>
              紫熊祭の開催時間は <strong>9:00～19:30</strong> です。時間外の入場はできませんのでご注意ください。
            </li>
            <li>
              会場内には電力や音響などのコード、発電機が設置されています。感電や火災等の事故につながる可能性があるため、近づかないようにしてください。
            </li>
            <li>
              大学構内及びその周辺は、紙タバコ・電子タバコに限らず全域禁煙となっています。ご協力お願いします。
            </li>
            <li>
              会場内の飲酒は禁止です。飲酒や酒類の持ち込みが発覚した際には、警告もしくは退場していただく場合がございます。また、飲酒された状態でのご入場もご遠慮ください。
            </li>
            <li>
              総合案内が赤門の手前にございます。落とし物やその他お困りの際には、お気軽にお越しください。
            </li>
            <li>
              駐車場は付近のコインパーキングにお停めいただくか、<strong>黒髪小学校の臨時駐車場（2日目：11/2のみ解放）</strong>をご利用ください。
              <br />
              <span className="notice__sub">
                （1日目：11/1は、身体障がい者・高齢者の方専用に桜山中学校の臨時駐車場を開放します）
              </span>
            </li>
            <li>
              近隣の店舗や住民の方々の迷惑にならないよう、交通ルールをお守りいただくようお願いいたします。
            </li>
          </ul>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          黒髪キャンパス
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.kumamoto-u.ac.jp/campusjouhou" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={kurokamicampus} alt="黒髪キャンパス" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：KMB
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.kmbiologics.com/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={KMB} alt="KMB" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：熊本駅矯正歯科クリニック
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.kumamoto-ekimae-kc.com/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={kyouseisika} alt="熊本駅矯正歯科クリニック" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：就活生
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.tiktok.com/@kumamoto_recruit" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={shuukatusei} alt="就活生" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：TKU1
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.tku.co.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={TKU1} alt="TKU1" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：TKU2
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.tku.co.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={TKU2} alt="TKU2" className="ad-banner__img" />
        </a>
      </div>

{/* ── タイムテーブル ── */}
<section className="section timetable" id="timetable">
  <div className="container">
    <div className="section-label">Timetable</div>
    <h2 className="section-title">タイムテーブル</h2>
    <div className="day-tabs">
      {DAYS.map(d => (
        <button
          key={d.label}
          className={`day-tab ${activeDay === d.label ? 'active' : ''}`}
          style={{ '--day-c': d.color }}
          onClick={() => setActiveDay(d.label)}
        >
          <span className="day-tab__date">{d.label}</span>
          <span className="day-tab__dow" style={{ color: d.color }}>（{d.day}）</span>
        </button>
      ))}
    </div>

    <div className="tt-columns">
      {Object.entries(
        TIMETABLE[activeDay].reduce((acc, ev) => {
          (acc[ev.stage] ||= []).push(ev)
          return acc
        }, {})
      ).map(([stage, events]) => (
        <div className="tt-column" key={stage}>
          <div
            className="tt-column__header"
            style={{ '--stage-c': STAGE_COLOR[stage] || '#888' }}
          >
            {stage}
          </div>
          <div className="tt-column__list">
            {events.map((ev, i) => (
              <div className="tt-row" key={i}>
                <div className="tt-time">
                  {ev.time}
                  {ev.endTime && <span className="tt-time__end"> – {ev.endTime}</span>}
                </div>
                <div className="tt-dot" style={{ background: STAGE_COLOR[stage] || '#888' }} />
                <div className="tt-content">
                  <button
                    type="button"
                    className={`tt-link ${bubble?.key === `${activeDay}-${stage}-${i}` ? 'is-open' : ''}`}
                    aria-expanded={bubble?.key === `${activeDay}-${stage}-${i}`}
                    onClick={(e) => openBubble(e, ev, stage, `${activeDay}-${stage}-${i}`)}
                  >
                    {ev.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：pokeka
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.pokemon-card.com/ex/svm/index.html" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={pokeka} alt="pokeka" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：五ヶ瀬
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://gokase.icomt.jp/kijiya/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={gokase} alt="五ヶ瀬" className="ad-banner__img" />
        </a>
      </div>

      {/* ── 出店・サークル ── */}
      <section className="section circles" id="circles-tent">
        <div className="container">
          <div className="section-label">Tent Booths</div>
          <h2 className="section-title">出店・サークル</h2
          >
          <p className="circles__subtitle">テント企画A・B</p>
          <div className="circles__map">
            <img
              src={tentmapImg}
              alt="テントマップ A・B"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/tent-info" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>

          <p className="circles__subtitle">テント企画C・D</p>
          <div className="circles__map">
            <img
              src={tentmapImg2}
              alt="テントマップ C・D"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/tent-info2" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：読書
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://archives.kumamoto-u.ac.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={Dokusho} alt="読書" className="ad-banner__img" />
        </a>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：AIKASU
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://aikasu.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={Aikasu} alt="AIKASU" className="ad-banner__img" />
        </a>
      </div>

      {/* ── 出店・サークル ── */}
      <section className="section circles" id="circles-okunai">
        <div className="container">
          <div className="section-label">Okunai Booths</div>
          <h2 className="section-title">出店・サークル</h2
          >
          <p className="circles__subtitle">屋内企画ー学生会館ー</p>
          <div className="circles__map">
            <img
              src={okunaimapImg}
              alt="屋内企画学生会館マップ"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/okunai-info" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>

          <p className="circles__subtitle">屋内企画ー全学教育棟ー</p>
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
          <div className="circles__cta">
            <Link to="/okunai-info2" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          スタンプラリー
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section stamp" id="stamp">
      <div className="ad-banner">
        <a href="" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={stamp} alt="stamp" className="ad-banner__img" />
        </a>
      </div>
      </section>

      {/* ── アクセス ── */}
      <section className="section access" id="access">
        <div className="container">
          <div className="section-label">Access</div>
          <h2 className="section-title">アクセス</h2>
          <div className="access__grid">
            <div className="access__info">
              <div className="access__item">
                <div>
                  <p className="access__label">会場</p>
                  <p className="access__val">熊本大学 黒髪北キャンパス</p>
                  <p className="access__sub">〒860-8555 熊本市中央区黒髪2-39-1</p>
                </div>
              </div>
              <div className="access__item">
                <div>
                  <p className="access__label">バス</p>
                  <p className="access__val">市バス「熊本大学前」下車すぐ</p>
                </div>
              </div>
              <div className="access__item">
                <div>
                  <p className="access__label">電車</p>
                  <p className="access__val">市電「黒髪町」徒歩10分</p>
                </div>
              </div>
              <div className="access__item">
                <div>
                  <p className="access__label">駐車場</p>
                  <p className="access__val">当日は駐車場のご用意がございません</p>
                  <p className="access__sub">公共交通機関をご利用ください</p>
                </div>
              </div>

              <a
                className="map-link"
                href="https://maps.google.com/?q=熊本大学黒髪北キャンパス"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google マップで開く →
              </a>
            </div>
            <div className="access__map">
              <iframe
                title="熊本大学黒髪北キャンパス"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4!2d130.7408!3d32.8115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f4027b1a0001%3A0x1!2z54aK5pys5aSn5a2m6buS6aaZ5YyWOuWMl-aKiw!5e0!3m2!1sja!2sjp!4v1"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="footer">
        <div className="footer__sigma">Σ</div>
        <p className="footer__title">第15回 紫熊祭実行委員会</p>
        <p className="footer__copy">© 2026 紫熊祭実行委員会 All rights reserved.</p>
      </footer>

      {/* ── タイムテーブル吹き出し ── */}
      {bubble && bubble.mode === 'sheet' && (
        <div className="tt-backdrop" onClick={() => setBubble(null)} />
      )}
      {bubble && (
        <div
          className={`tt-bubble ${bubble.mode === 'sheet' ? 'tt-bubble--sheet' : ''}`}
          role="dialog"
          aria-label={bubble.ev.name}
          style={
            bubble.mode === 'sheet'
              ? { '--stage-c': STAGE_COLOR[bubble.stage] || '#888' }
              : {
                  top: bubble.top,
                  left: bubble.left,
                  width: bubble.width,
                  '--arrow-x': `${bubble.arrowX}px`,
                  '--stage-c': STAGE_COLOR[bubble.stage] || '#888',
                }
          }
        >
          <button className="tt-bubble__close" onClick={() => setBubble(null)} aria-label="閉じる">✕</button>
          <h3 className="tt-bubble__title">{bubble.ev.name}</h3>
          <dl className="tt-bubble__list">
            <div>
              <dt>開催時間</dt>
              <dd>{bubble.ev.time}{bubble.ev.endTime && ` – ${bubble.ev.endTime}`}</dd>
            </div>
            <div>
              <dt>場所</dt>
              <dd>{bubble.ev.place || bubble.stage}</dd>
            </div>
          </dl>
          {bubble.ev.imgs && (
            <div className="tt-bubble__photos">
              {bubble.ev.imgs.map((src, idx) => (
                <img key={idx} src={src} alt={bubble.ev.name} />
              ))}
            </div>
          )}
          <p className="tt-bubble__comment">{bubble.ev.comment || '詳細は準備中です。'}</p>
        </div>
      )}

      {/* ── アンカー広告（画面右下固定） ── */}
      <div className="anchor-ad">
        <span className="anchor-ad__label">広告</span>
        <a
          href={ANCHOR_AD.url}
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-ad__link"
        >
          <img src={ANCHOR_AD.img} alt={ANCHOR_AD.alt} className="anchor-ad__img" />
        </a>
      </div>

    </div>
  )
}