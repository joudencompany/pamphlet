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
  {
    no: 9,
    name: '子宮頸がんやワクチンの啓発',
    item: 'from K',
    desc: '子宮頸がん検診やワクチンの啓発活動を行うとともに、楽しい企画もご用意しています！',
  },
  {
    no: 10,
    name: '熊大ウイルス研究者の会',
    item: '熊大ウイルス研究者の会',
    desc: '熊本大学内で行われているウイルス学／免疫学の研究を現役の研究者が紹介します、実験体験とラボツアー情報も！',
  },
  {
    no: 11,
    name: 'ボードゲーム・謎解きゲーム体験',
    item: '熊大ボードゲーム・TRPGサークル LION',
    desc: '様々なボードゲームや、サークル員たちによる謎解きゲームを体験できます！お一人でも大人数でも、ぜひ遊びに来てください！',
  },
  {
    no: 12,
    name: '早押しクイズ in 紫熊祭 2025',
    item: 'クイズ研究会',
    desc: 'クイズ研究会です！早押しボタンを使ってクイズをしてみませんか？楽しい様々な企画があるので是非来てください！',
  },
  {
    no: 13,
    name: 'こんぺいとう展示会',
    item: 'こんぺいとう',
    desc: '缶バッジやアクリルキーホルダーの販売や作品の展示を行います。ぜひ足を運んでください！！',
  },
  {
    no: 14,
    name: '屋内企画',
    item: '書道部',
    desc: '熊大書道部です！私たちは作品の展示と書道体験を実施しています！実際に見て、体験して書道を楽しんでみてください！',
  },
  {
    no: 15,
    name: 'レイちゃんの怨霊 〜消エタ生徒ト廃校ノ噂〜',
    item: '紫熊企画',
    desc: '転校生レイちゃんが姿を消した日から彼女をいじめた生徒たちが次々と消えていった。廃校となった今もレイちゃんは宝物を探し続けている―― レイちゃんの宝物を見つけ出して、彼女を成仏させろ！',
  },
  {
    no: 16,
    name: 'フォトスポット',
    item: '紫熊企画',
    desc: '全学教育棟のC204教室で、3日間フォトスポットを展示します。友達や家族、恋人や好きな人…などなど、一緒に思い出を残したい人と、ここでしか撮れないSNS映え写真を撮りに来てみませんか？！ご来場お待ちしております！',
  },
  {
    no: 18,
    name: 'エイズについて知ろう！',
    item: 'くまぴあ',
    desc: 'みなさんこんにちは！くまぴあです🐻 私たちと一緒に HIV/AIDSや性感染症について楽しく学びましょう✨🎗️',
  },
  {
    no: 19,
    name: '熊大写真部写真展',
    item: '熊大写真部',
    desc: '写真部ではテーマに沿った作品展示を行うほか、部員が撮影した写真のポストカードなども販売します。是非お立ち寄りください。',
  },
  {
    no: 20,
    name: 'マジックショー',
    item: 'シュレディンガーの猫',
    desc: '私たちシュレディンガーの猫です！楽しいマジックをお届けします！',
  },
  {
    no: 21,
    name: 'プラネタリウム',
    item: '天文部',
    desc: '熊大天文部はグッズ販売とプラネタリウムをします。部員たちが春夏秋冬の夜空を紹介するので、ぜひ遊びに来てください！',
  },
  {
    no: 22,
    name: '東方熊霊殿 例大祭',
    item: '東方熊霊殿',
    desc: '', // メッセージ未着 → 届き次第追記
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