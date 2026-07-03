import { Link } from 'react-router-dom'
import '../App.css'
import tentmapImg from '../assets/tentmap.png'
import temptentImg from '../assetstent/temptent.png'

/* ── テント出店データ ── */
const TENTS = [
  { no: 1,  name: 'FREX', item: '唐揚げ', desc: '私たちFREXは毎年出店している唐揚げに加えて絶品チキンバーガーを出店します！ぜひご賞味ください！' },
  { no: 2,  name: '法学部行事実行委員会', item: 'ベビーカステラ', desc: '法学部行事実行委員会はベビーカステラを販売します！美味しさ有罪？異議なし！ぜひ食べに来てください！' },
  { no: 3,  name: 'Beginners', item: 'ビギナーズ魂！', desc: '熊本大学硬式テニスサークルBeginnersです！毎週金曜に活動しています！ポテトとドリンク販売します！ぜひ来てくださーい！' },
  { no: 4,  name: '国際交流サークル C3', item: 'おとぎ話のしずく', desc: '文化の橋をかけるC3！！世界がグッと近くなる！本日は世界のおとぎ話をテーマにした美味しいドリンクを販売中！' },
  { no: 5,  name: 'フォークダンス部', item: '焼きマシュマロ', desc: '私たちは屋外ステージでのダンスと焼きマシュマロの販売を行います。ぜひ気軽にお越しください！' },
  { no: 6,  name: '探検部', item: '串焼き', desc: '熊大探検部名物、炭火で焼いた絶品串焼きはいかがですか〜！今年は鶏・鴨・牛タンの3種です！食べにきてくださいね！！' },
  { no: 7,  name: '組織部', item: 'クロッフル', desc: '生協組織部です！普段は行事の企画・運営などを行っています！今回は、クロッフルを5種類販売しますのでぜひ買いに来てください！' },
  { no: 8,  name: '半導体デバイス学科２年', item: 'どどん波チャンオズの揚げチャオズ', desc: '揚げ餃子一本でげんきいっぱい行列ができサイゴがなくなるまで売ります。' },
  { no: 9,  name: 'トライ', item: 'わたがし', desc: 'いろいろな味のわたがしを販売してます！ぜひお越しください！' },
  { no: 10, name: 'D-SEVEN', item: '栗高菜ご飯', desc: 'ボランティアサークルD-SEVENです。農業ボランティアで育てた佐野の栗と米を使った栗高菜ご飯を販売します！ご賞味あれ♪' },
  { no: 11, name: '文芸部セピア', item: '瑠璃亭', desc: '温かい湯汁で、心も体もぽかぽかにしませんか？私たち文芸部セピアは、今年も瑠璃亭で皆さまのお越しをお待ちしています。' },
  { no: 12, name: '柔道部', item: 'ホットサンド', desc: '柔道部はホットサンドを販売します。ガッツリ系から甘い系まで用意しているのでぜひお越しください！！' },
  { no: 13, name: 'smash', item: 'チーズハットグなど', desc: 'ソフトテニスサークルsmashです。チーズハットグ、チュロス、美味しいドリンクを販売します！セットで安くなるかも〜' },
  { no: 14, name: '麻雀部', item: '唐揚げ・ドリンク', desc: '揚げたてのからあげと、今年は冷たいドリンクも登場しました！ぜひ買いに来てくださいね！！' },
  { no: 15, name: '熊本大学手話サークル 手笑顔', item: 'しゅまいるCAFE', desc: 'わらびもちラテと塩パンを販売します！みなさんぜひお越しください！' },
  { no: 16, name: '保健体育科', item: '焼きそば屋', desc: '保体科では毎年焼きそば屋を出店しています！紫熊祭の名物焼きそばをぜひご賞味ください！' },
  { no: 17, name: '少林寺拳法', item: 'チュロスアイス', desc: '私たちはチュロスアイスを販売します。少林寺拳法とは心だけデザインになっております！ぜひお立ち寄りください！' },
  { no: 18, name: '160318029', item: 'アパレル', desc: '学生が経営する服好き学生を増やすためのアパレル。ファッション性の高い服を扱い、ファッションに興味がない人・興味持ち始めた人が新しい趣味として洋服を好きになれるアパレルショップ。' },
  { no: 19, name: '映画研究部', item: 'フランクフルト・焼き鳥', desc: 'フランクフルトや焼き鳥を販売します！ガッツリ食べたい方も小腹を満たしたい方もぜひお越しください！' },
  { no: 20, name: '熊本大学放送部', item: 'はしまき', desc: '堂々復活！放送部のはしまきです。二年前に大好評を博したはしまきを今年もお届け！ぜひ、お召し上がりください♪' },
  { no: 21, name: 'マンドリンクラブ', item: 'フライドポテト', desc: '第14回紫熊祭でフライドポテトを販売します！ぜひ来てください！！' },
  { no: 22, name: 'match', item: '冷やしフルーツ', desc: 'バスケ、バレーサークルのmatchです！今年は冷やしフルーツを出店します！焼きそば、たこ焼き食べたあとのデザートにいかがですか？' },
  { no: 23, name: 'CHAPS', item: '揚げたこ焼き', desc: 'CHAPSのみんなが作った、揚げたこ焼きの熱々サクサクが楽しめます！' },
  { no: 24, name: 'アコースティックギター愛好会', item: '揚げパン', desc: '「アコ愛」は昔懐かしの揚げパンを販売します！揚げたてサクサク、中はふっわふわのアコ愛揚げパンをご賞味あれ！' },
  { no: 25, name: '珈琲研究會', item: 'Coffee serve', desc: '今年も最高のコーヒーを皆様にお届けします。焙煎から抽出まで、こだわり抜いた1杯を是非飲みにきてください。' },
  { no: 26, name: '志法会', item: '焼き鳥志法会', desc: 'リベンジに燃ゆ法学徒達をご照覧あれ。' },
  { no: 27, name: '日韓交流サークル KOGUMA', item: '韓国人が作る韓国屋台', desc: '伝統的な韓国料理を作ります。韓国人留学生が作るので、本場の味を楽しむことができます！ぜひ食べに来てください♪' },
  { no: 28, name: '熊大レジャーサークル', item: 'ポテデッツ！', desc: 'かっさらうしんよ〜' },
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