import { useEffect, useState, useRef } from 'react'
import './App.css'

import terrabalImg from './assets/terrabal.jpg'
import terrabalImg2 from './assets/terrabal2.jpg'
import chuoImg from './assets/chuo.png'
import linemoImg from './assets/linemo.png'
import seikyou from './assets/seikyou.png'
import konntakuto from './assets/konntakuto.png'
import ouesu from './assets/ouesu.png'
import onetimeforever from './assets/1time4ever.png'


/* ── データ ── */
const DAYS = [
  { label: '11/2', day: '日', color: '#e03c3c' },
  { label: '11/3', day: '月', color: '#e03c3c' },
  { label: '11/4', day: '火', color: '#2a8c4a' },
]

const TIMETABLE = {
  '11/2': [
    { time: '10:00', name: '開会式・委員長挨拶', stage: 'メインステージ', type: 'special' },
    { time: '11:00', name: 'バンド演奏①', stage: '野外ステージ', type: 'music' },
    { time: '13:00', name: 'ダンスパフォーマンス', stage: 'メインステージ', type: 'dance' },
    { time: '15:00', name: 'お笑いライブ', stage: '屋内ステージ', type: 'comedy' },
    { time: '17:00', name: 'ゲストアーティスト登場', stage: 'メインステージ', type: 'special' },
  ],
  '11/3': [
    { time: '10:00', name: 'サークル発表', stage: '屋内ステージ', type: 'circle' },
    { time: '12:00', name: 'バンド演奏②', stage: '野外ステージ', type: 'music' },
    { time: '14:00', name: 'ミスコン・ミスターコン', stage: 'メインステージ', type: 'special' },
    { time: '16:00', name: 'ダンスバトル', stage: 'メインステージ', type: 'dance' },
    { time: '18:00', name: 'ナイトライブ', stage: '野外ステージ', type: 'music' },
  ],
  '11/4': [
    { time: '10:00', name: '文化系サークル展示', stage: '学生会館', type: 'circle' },
    { time: '11:30', name: 'バンド演奏③', stage: '野外ステージ', type: 'music' },
    { time: '13:30', name: 'ボードゲーム大会', stage: '屋内ステージ', type: 'comedy' },
    { time: '15:30', name: 'クロージングセレモニー', stage: 'メインステージ', type: 'special' },
    { time: '16:30', name: '閉会式', stage: 'メインステージ', type: 'special' },
  ],
}

const CIRCLES = [
  { name: '軽音楽部', genre: '音楽', desc: '学生バンドによる迫力のライブパフォーマンス！' },
  { name: 'ダンス部', genre: 'ダンス', desc: 'ヒップホップからK-POPまで多彩なジャンルで魅せる' },
  { name: '写真部', genre: '文化', desc: '日頃の活動で撮り溜めた作品を一挙展示' },
  { name: '演劇サークル', genre: '演劇', desc: '脚本から舞台まで全て手作りの本格公演' },
  { name: 'フードサークル', genre: 'グルメ', desc: '試行錯誤を重ねた自慢の一品を販売中！' },
  { name: 'ボードゲーム部', genre: 'ゲーム', desc: '参加型企画で来場者と一緒に楽しめます' },
]

const TYPE_COLOR = {
  special: '#6c3fc7',
  music:   '#e03c3c',
  dance:   '#e07c00',
  comedy:  '#2a8c4a',
  circle:  '#1a6ab5',
}

/* ── アンカー広告データ ── */
const ADS = [
  { img: chuoImg,   alt: '中央自動車学校', url: 'https://chuo-ds.com/' },
  { img: linemoImg, alt: 'LINEMO',         url: 'https://linemo.jp' },
]

export default function App() {
  const [adVisible, setAdVisible] = useState(false)
  const [adShown, setAdShown] = useState(false)
  const [surveyVisible, setSurveyVisible] = useState(true)
  const [surveyDone, setSurveyDone] = useState(false)
  const [activeDay, setActiveDay] = useState('11/2')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* アンカー広告 */
  const [adIndex, setAdIndex] = useState(0)
  const [adFade, setAdFade]   = useState(true)

  const heroRef = useRef(null)

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw5g62IiNURRo69ArGdlHFA28ktmEWEixTV5LArZkD_cFcme8yeyxDOumO_qEmNWyio/exec'
const handleSurvey = async (type) => {
  setSurveyVisible(false)
  setSurveyDone(true)
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
  document.title = '第14回 紫熊祭 | 熊本大学黒髪北キャンパス'
  const onScroll = () => setScrolled(window.scrollY > 60)
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])

useEffect(() => {
  if (adShown) return

  const sectionIds = ['greeting', 'timetable', 'circles', 'access']
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

  /* アンカー広告：5秒ごとにフェードイン切り替え */
  useEffect(() => {
    const timer = setInterval(() => {
      setAdFade(false)
      setTimeout(() => {
        setAdIndex(i => (i + 1) % ADS.length)
        setAdFade(true)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
            { label: '🎓 熊本大学の学生様', value: '熊大生' },
            { label: '🏫 他大学の学生様',   value: '他大学生' },
            { label: '👥 一般来場者様',     value: '外部来場者' },
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
            <a href="https://chuo-ds.jp" target="_blank" rel="noopener noreferrer">
              <img src={chuoImg} alt="中央自動車学校" className="ad-interstitial__img" />
            </a>
          </div>
        </div>
      )}

      {/* ── ナビ ── */}
      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="nav__logo" onClick={() => scrollTo('hero')}>
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </div>
        <nav className={`nav__links ${menuOpen ? 'open' : ''}`}>
          {[['挨拶','greeting'],['タイムテーブル','timetable'],['出店・サークル','circles'],['アクセス','access'],['諸注意','notice']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </header>

      {/* ── ヒーロー ── */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero__clocks">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`clock clock--${i}`}>
              <div className="clock__hand clock__hand--hour" style={{ '--r': `${30 + i * 47}deg` }} />
              <div className="clock__hand clock__hand--min"  style={{ '--r': `${80 + i * 73}deg` }} />
            </div>
          ))}
        </div>
        <div className="hero__inner">
          <p className="hero__kaicho">第14回</p>
          <h1 className="hero__title">紫熊祭</h1>
          <p className="hero__en">SIGMA FES</p>
          <div className="hero__theme">1TIME 4EVER</div>
          <div className="hero__dates">
            <span>11.2<small>日</small></span>
            <span className="hero__dates-sep">—</span>
            <span>11.4<small>火</small></span>
          </div>
          <p className="hero__place">熊本大学 黒髪北キャンパス</p>
          <button className="hero__cta" onClick={() => scrollTo('timetable')}>
            スケジュールを見る →
          </button>
        </div>
        <div className="hero__bear">🐻</div>
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
          <div className="greeting__card">
            <div className="greeting__avatar">委員長</div>
            <div className="greeting__body">
              <p className="greeting__name">委員長　荒巻 遥平</p>
              <p>
                この度は第十四回紫熊祭公式サイトをご覧いただき、誠にありがとうございます。
                紫熊祭は、学生のみならず、地域の皆様にも愛される、熊本大学最大の祭典です。
              </p>
              <p>
                本年度のテーマは<strong>「1TIME 4EVER」</strong>です。一度きりの特別な瞬間が、永遠の思い出となるような体験を目指しております。約400名の実行委員が一丸となって準備を進めてまいりました。
              </p>
              <p>
                皆様の笑顔が、私たちの何よりの喜びです。最高の紫熊祭を、どうぞお楽しみください！
              </p>
            </div>
          </div>
          <div className="greeting__sub-grid">
            {[['副委員長', '福嶋 楓'], ['副委員長', '西田 周平']].map(([role, name]) => (
              <div className="greeting__sub-card" key={name}>
                <div className="greeting__sub-avatar">{role[0]}</div>
                <div>
                  <p className="greeting__sub-role">{role}</p>
                  <p className="greeting__sub-name">{name}</p>
                </div>
              </div>
            ))}
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
          広告：ワンタイムフォーエバー
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <a href="https://terrabal.co.jp" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
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
              駐車場は付近のコインパーキングにお停めいただくか、<strong>黒髪小学校の臨時駐車場（2日目：11/3のみ解放）</strong>をご利用ください。
              <br />
              <span className="notice__sub">
                （1日目：11/2は、身体障がい者・高齢者の方専用に桜山中学校の臨時駐車場を開放します）
              </span>
            </li>
            <li>
              近隣の店舗や住民の方々の迷惑にならないよう、交通ルールをお守りいただくようお願いいたします。
            </li>
          </ul>
        </div>
      </section>

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
          <div className="tt-list">
            {TIMETABLE[activeDay].map((ev, i) => (
              <div className="tt-row" key={i}>
                <div className="tt-time">{ev.time}</div>
                <div className="tt-dot" style={{ background: TYPE_COLOR[ev.type] }} />
                <div className="tt-content">
                  <span className="tt-name">{ev.name}</span>
                  <span className="tt-stage">{ev.stage}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="tt-legend">
            {Object.entries(TYPE_COLOR).map(([k, c]) => (
              <span key={k} className="legend-item">
                <span className="legend-dot" style={{ background: c }} />
                {{ special:'特別企画', music:'音楽', dance:'ダンス', comedy:'お笑い', circle:'サークル' }[k]}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 出店・サークル ── */}
      <section className="section circles" id="circles">
        <div className="container">
          <div className="section-label">Circles & Stalls</div>
          <h2 className="section-title">出店・サークル紹介</h2>
          <div className="circles__grid">
            {CIRCLES.map((c, i) => (
              <div className="circle-card" key={i}>
                <div className="circle-card__genre">{c.genre}</div>
                <h3 className="circle-card__name">{c.name}</h3>
                <p className="circle-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
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
                <span className="access__icon">📍</span>
                <div>
                  <p className="access__label">会場</p>
                  <p className="access__val">熊本大学 黒髪北キャンパス</p>
                  <p className="access__sub">〒860-8555 熊本市中央区黒髪2-39-1</p>
                </div>
              </div>
              <div className="access__item">
                <span className="access__icon">🚌</span>
                <div>
                  <p className="access__label">バス</p>
                  <p className="access__val">市バス「熊本大学前」下車すぐ</p>
                </div>
              </div>
              <div className="access__item">
                <span className="access__icon">🚃</span>
                <div>
                  <p className="access__label">電車</p>
                  <p className="access__val">市電「黒髪町」徒歩10分</p>
                </div>
              </div>
              <div className="access__item">
                <span className="access__icon">🅿️</span>
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
        <p className="footer__title">第14回 紫熊祭実行委員会</p>
        <p className="footer__copy">© 2025 紫熊祭実行委員会 All rights reserved.</p>
      </footer>

      {/* ── アンカー広告（画面下部固定・フェードイン切り替え） ── */}
      <div className="anchor-ad">
        <span className="anchor-ad__label">広告</span>
        <a
          href={ADS[adIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-ad__link"
          style={{ opacity: adFade ? 1 : 0 }}
        >
          <img src={ADS[adIndex].img} alt={ADS[adIndex].alt} className="anchor-ad__img" />
        </a>
      </div>

    </div>
  )
}