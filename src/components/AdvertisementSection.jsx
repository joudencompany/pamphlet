const imageModules = import.meta.glob(
  '../assets/ads/*/*.png',
  { eager: true, import: 'default' }
)

const AD_IMAGES = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.split('/').pop(),
    url,
  ])
)

const ADS = [
  // ── 1/8ページ ──
  {
    size: '1-8',
    file: '53_aikasu.png',
    name: 'AIKASU',
    url: 'https://www.instagram.com/aikasu_gakusei_kmt/',
  },
  {
    size: '1-8',
    file: '53_ritz.png',
    name: 'hair mode RITZ',
    url: null,
  },
  {
    size: '1-8',
    file: '53_yagiya.png',
    name: '八木八',
    url: 'https://www.hotpepper.jp/strJ000578582/',
  },
  {
    size: '1-8',
    file: '53_yoshimura.png',
    name: 'よしむら産婦人科皮ふ科クリニック',
    url: 'https://yoshimura-gdc.jp/',
  },
  {
    size: '1-8',
    file: '53_think-garbage.png',
    name: 'think garbage',
    url: 'https://thinkgarbage.com/',
  },
  {
    size: '1-8',
    file: '53_sport.png',
    name: 'スポルト熊本店',
    url: 'https://www.sport-bowling.co.jp/kumamoto',
  },
  {
    size: '1-8',
    file: '53_kds.png',
    name: 'KDS熊本ドライビングスクール',
    url: 'https://www.k-ds.net/',
  },
  {
    size: '1-8',
    file: '53_shimada.png',
    name: 'しまだ内科クリニック',
    url: 'https://www.shimadanaika.jp/',
  },
  {
    size: '1-8',
    file: '55_aroma-ezu.png',
    name: 'スパイスアロマ江津店',
    url: null,
  },
  {
    size: '1-8',
    file: '55_aroma-kokai.png',
    name: 'スパイスアロマ東子飼店',
    url: 'https://tabelog.com/kumamoto/A4301/A430101/43015938/',
  },
  {
    size: '1-8',
    file: '60_hirai.png',
    name: 'ヒライ',
    url: 'https://lin.ee/h9WdAZQ',
  },
  {
    size: '1-8',
    file: '60_hyakusho.png',
    name: 'ひゃくしょう茶屋',
    url: 'https://kagomeya.owst.jp/',
  },
  {
    size: '1-8',
    file: '60_lifeplaza.png',
    name: 'ライブプラザパートナーズ',
    url: 'https://www.lifeplaza.co.jp/',
  },
  {
    size: '1-8',
    file: '60_hakemiya.png',
    name: '八景水谷クリニック',
    url: 'http://hakemiya.com',
  },

  // ── 1/4ページ ──
  {
    size: '1-4',
    file: '54_sugishima.png',
    name: '杉島土地家屋調査士事務所',
    url: null,
  },
  {
    size: '1-4',
    file: '54_kumaden.png',
    name: '熊本電気鉄道',
    url: 'https://www.kumamotodentetsu.co.jp/',
  },
  {
    size: '1-4',
    file: '54_shutaku.png',
    name: '秀拓',
    url: 'https://shutaku.jp/',
  },
  {
    size: '1-4',
    file: '54_kyusoku.png',
    name: '九州測量専門学校',
    url: 'https://oyama54.wixsite.com/qsokusen',
  },
  {
    size: '1-4',
    file: '55_seijo.png',
    name: 'くまもと成城病院',
    url: 'http://www.k-seijo.or.jp/',
  },
  {
    size: '1-4',
    file: '55_kinkei.png',
    name: '近代経営',
    url: 'https://www.kinkei-net.com/',
  },
  {
    size: '1-4',
    file: '55_kumariku.png',
    name: 'クマリク／Evoliv',
    url: null,
  },
  {
    size: '1-4',
    file: '60_toyopet.png',
    name: '熊本トヨペット',
    url: 'https://www.kumamototoyopet.com/',
  },
  {
    size: '1-4',
    file: '60_recruit.png',
    name: 'パンフレット広告協賛募集',
    url: null,
  },

  // ── 1/2ページ ──
  {
    size: '1-2',
    file: '56_ptp.png',
    name: 'Pop Town Project',
    url: 'https://ptp.fun',
  },
  {
    size: '1-2',
    file: '56_atsumaru.png',
    name: 'あつまるホールディングス',
    url: 'https://atsumaru.jp/area/1',
  },
  {
    size: '1-2',
    file: '57_qnet.png',
    name: 'キューネット',
    url: 'https://www.qnet-sec.co.jp/',
  },
  {
    size: '1-2',
    file: '57_nakagawa.png',
    name: 'なかがわ整形',
    url: 'https://www.nakagawaseikei.com/',
  },
  {
    size: '1-2',
    file: '58_kenkatsu.png',
    name: '健活モニター',
    url: 'https://kenkatsu-monitor.com/register?utm_source=torima_system&utm_medium=torima_system&utm_campaign=ad_kumauni',
  },
  {
    size: '1-2',
    file: '58_ja.png',
    name: 'JAグループ',
    url: 'https://kokushokokusan.ja-group.jp/',
  },
  {
    size: '1-2',
    file: '59_hanabata.png',
    name: 'カラオ毛 花畑公民館',
    url: 'https://akr4264485820.owst.jp/',
  },
  {
    size: '1-2',
    file: '59_sanyo.png',
    name: '上熊本三陽自動車学校',
    url: 'https://sanyo-ds.com/',
  },

  // ── 1ページ ──
  {
    size: '1',
    file: '61_eyecity.png',
    name: 'アイシティ',
    url: 'https://www.eyecity.jp/lp/dgakuwari/',
  },
  {
    size: '1',
    file: '62_meiwa.png',
    name: 'アパマンショップ熊本大学前店',
    url: 'https://www.meiwa.jp/chintai/shop/kumamotodaigakumae/',
  },
]

const GROUPS = [
  { size: '1', label: 'ご協賛広告', className: 'full' },
  { size: '1-2', label: 'ご協賛広告', className: 'half' },
  { size: '1-4', label: 'ご協賛広告', className: 'quarter' },
  { size: '1-8', label: '地域の皆様からの応援', className: 'eighth' },
]

function AdvertisementCard({ ad }) {
  const image = AD_IMAGES[ad.file]

  const content = (
    <>
      <div className="partner-ad__image">
        {image ? (
          <img
            src={image}
            alt={`${ad.name}の広告`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="partner-ad__placeholder">{ad.name}</div>
        )}
      </div>

      <div className="partner-ad__caption">
        <span>{ad.name}</span>
        {ad.url && <span aria-hidden="true">↗</span>}
      </div>
    </>
  )

  return (
    <article className="partner-ad">
      {ad.url ? (
        <a
          className="partner-ad__link"
          href={ad.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ad.name}のリンクを開く（新しいタブ）`}
        >
          {content}
        </a>
      ) : (
        <div className="partner-ad__content">{content}</div>
      )}
    </article>
  )
}

export default function AdvertisementSection() {
  return (
    <section className="partner-ads" id="partner-ads">
      <div className="partner-ads__container">
        <header className="partner-ads__header">
          <span className="partner-ads__eyebrow">SPONSORS</span>
          <h2>紫熊祭を支える皆様</h2>
          <p>温かいご支援・ご協賛に、心より感謝申し上げます。</p>
          <span className="partner-ads__badge">広告</span>
        </header>

        {GROUPS.map(group => (
          <div
            className={`partner-ads__group partner-ads__group--${group.className}`}
            key={group.size}
          >
            {group.size === '1-8' && (
              <h3 className="partner-ads__group-title">{group.label}</h3>
            )}

            <div className="partner-ads__grid">
              {ADS.filter(ad => ad.size === group.size).map(ad => (
                <AdvertisementCard ad={ad} key={ad.file} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}