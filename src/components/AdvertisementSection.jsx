// src/components/AdvertisementSection.jsx
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

// 表示順 = 配列順（1ページ → 1/2 → 1/4 → 1/8 にしたい場合は並べ替えてください）
const ADS = [
  // ── 1ページ ──
  { file: '61_eyecity.png', name: 'アイシティ', url: 'https://www.eyecity.jp/lp/dgakuwari/' },
  { file: '62_meiwa.png', name: 'アパマンショップ熊本大学前店', url: 'https://www.meiwa.jp/chintai/shop/kumamotodaigakumae/' },

  // ── 1/2ページ ──
  { file: '56_ptp.png', name: 'Pop Town Project', url: 'https://ptp.fun' },
  { file: '56_atsumaru.png', name: 'あつまるホールディングス', url: 'https://atsumaru.jp/area/1' },
  { file: '57_qnet.png', name: 'キューネット', url: 'https://www.qnet-sec.co.jp/' },
  { file: '57_nakagawa.png', name: 'なかがわ整形', url: 'https://www.nakagawaseikei.com/' },
  { file: '58_kenkatsu.png', name: '健活モニター', url: 'https://kenkatsu-monitor.com/register?utm_source=torima_system&utm_medium=torima_system&utm_campaign=ad_kumauni' },
  { file: '58_ja.png', name: 'JAグループ', url: 'https://kokushokokusan.ja-group.jp/' },
  { file: '59_hanabata.png', name: 'カラオ毛 花畑公民館', url: 'https://akr4264485820.owst.jp/' },
  { file: '59_sanyo.png', name: '上熊本三陽自動車学校', url: 'https://sanyo-ds.com/' },

  // ── 1/4ページ ──
  { file: '54_sugishima.png', name: '杉島土地家屋調査士事務所', url: null },
  { file: '54_kumaden.png', name: '熊本電気鉄道', url: 'https://www.kumamotodentetsu.co.jp/' },
  { file: '54_shutaku.png', name: '秀拓', url: 'https://shutaku.jp/' },
  { file: '54_kyusoku.png', name: '九州測量専門学校', url: 'https://oyama54.wixsite.com/qsokusen' },
  { file: '55_seijo.png', name: 'くまもと成城病院', url: 'http://www.k-seijo.or.jp/' },
  { file: '55_kinkei.png', name: '近代経営', url: 'https://www.kinkei-net.com/' },
  { file: '55_kumariku.png', name: 'クマリク／Evoliv', url: null },
  { file: '60_toyopet.png', name: '熊本トヨペット', url: 'https://www.kumamototoyopet.com/' },
  { file: '60_recruit.png', name: 'パンフレット広告協賛募集', url: null },

  // ── 1/8ページ ──
  { file: '53_aikasu.png', name: 'AIKASU', url: 'https://www.instagram.com/aikasu_gakusei_kmt/' },
  { file: '53_ritz.png', name: 'hair mode RITZ', url: null },
  { file: '53_yagiya.png', name: '八木八', url: 'https://www.hotpepper.jp/strJ000578582/' },
  { file: '53_yoshimura.png', name: 'よしむら産婦人科皮ふ科クリニック', url: 'https://yoshimura-gdc.jp/' },
  { file: '53_think-garbage.png', name: 'think garbage', url: 'https://thinkgarbage.com/' },
  { file: '53_sport.png', name: 'スポルト熊本店', url: 'https://www.sport-bowling.co.jp/kumamoto' },
  { file: '53_kds.png', name: 'KDS熊本ドライビングスクール', url: 'https://www.k-ds.net/' },
  { file: '53_shimada.png', name: 'しまだ内科クリニック', url: 'https://www.shimadanaika.jp/' },
  { file: '55_aroma-ezu.png', name: 'スパイスアロマ江津店', url: null },
  { file: '55_aroma-kokai.png', name: 'スパイスアロマ東子飼店', url: 'https://tabelog.com/kumamoto/A4301/A430101/43015938/' },
  { file: '60_hirai.png', name: 'ヒライ', url: 'https://lin.ee/h9WdAZQ' },
  { file: '60_hyakusho.png', name: 'ひゃくしょう茶屋', url: 'https://kagomeya.owst.jp/' },
  { file: '60_lifeplaza.png', name: 'ライブプラザパートナーズ', url: 'https://www.lifeplaza.co.jp/' },
  { file: '60_hakemiya.png', name: '八景水谷クリニック', url: 'http://hakemiya.com' },
]

export default function AdvertisementSection() {
  return (
    <div id="partner-ads">
      {ADS.map(ad => {
        const src = AD_IMAGES[ad.file]
        if (!src) return null // 画像が無い広告は表示しない

        const img = (
          <img
            src={src}
            alt={ad.name}
            className="ad-banner__img"
            loading="lazy"
            decoding="async"
          />
        )

        return (
          <div className="ad-banner" key={ad.file}>
            <span className="ad-banner__label">広告</span>
            {ad.url ? (
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ad-banner__link"
              >
                {img}
              </a>
            ) : (
              img
            )}
          </div>
        )
      })}
    </div>
  )
}