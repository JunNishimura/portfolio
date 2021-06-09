<template>
    <div id="word-is-mine">
        <work-page-template
            :pageInfo="pageInfo"
        >
            <template #description>
                <p>これは鑑賞者の選択により再構成された言葉が知らない第三者の発声を通じて公に伝えられるという状況を作りだすことで言葉の所有を問う作品である。</p>
                <p>鑑賞者は動詞、形容詞、名詞それぞれに対して与えられた単語の中から選択と言う行為を通じて文章を作る。</p>
                <img src="@/assets/images/work/word-is-mine/P2051606.jpg">
                <p>鑑賞者が存在する展示空間にはディスプレイが設置されている。そこに流されているのは、鑑賞者が作った文章を声に出して読み上げる第三者の映像が流されているディスプレイをさらに撮影した中継映像である。発声されている空間に鑑賞者は直接存在しないが、そこで話されている言葉は鑑賞者自身が与えられた単語から再構成したものであり、第三者を通じて外界との接点をもち、そして影響を及ぼしている。</p>
                <img src="@/assets/images/work/word-is-mine/P2051596.jpg">
                <p>文章を読み上げる第三者の映像が流れているディスプレイは人の行き交いが激しい公共空間の代名詞的な場所に設置する必要があった。そのため渋谷の交差点のような場所に設置する事が理想であったが様々な理由から実現しなかった。その代わりに今回は筑波大学6A棟の出入り口となる場所に設置した。</p>
                <img src="@/assets/images/work/word-is-mine/P2051571.jpg">
                <p>また文章が鑑賞者によって作られる度にツイッター上で自動ツイートされる。</p>
                <img src="@/assets/images/work/word-is-mine/twitter.png">
                <p>本作は「ハイブリッドアート演習」という授業の一環として制作した。学群横断科目ということもあり芸術学群2人、情報学群2人の計4人で制作した。自分は主にシステムの実装を担当した。入力インターフェースから映像出力まで全てweb上に実装した。アプリケーションはHeroku上にデプロイして公開した。ユーザー入力に応じた映像出力の切り替えに関しては入力が変化する度に対応する動画を探して切り替えている。本作品ではユーザーの入力と映像切り替えにリアルタイム性が求められたため、WebSocketを簡単に扱う事のできるライブラリsocket.ioを活用した。また自動ツイートに関してはライブラリnode-twitterを利用した。</p>
            </template>
            <template #imageGallery>
                <image-gallery-template
                    :imagePaths1="imagePaths.imagePaths1"
                    :imagePaths2="imagePaths.imagePaths2"
                />    
            </template>
        </work-page-template>
    </div>
</template>

<script>
import WorkPageTemplate from '@/components/work/WorkPageTemplate.vue'
import ImageGalleryTemplate from '@/components/work/ImageGalleryTemplate.vue'

export default {
    components: {
        WorkPageTemplate,
        ImageGalleryTemplate
    },
    data() {
        return {
            pageInfo: {
                title: "WORD IS MINE",
                date: "2020.12 - 2021.1",
                place: "@筑波大学6A棟",
                descriptions: [
                ],
                credit: [
                    "岡本 太玖斗",
                    "胡 越",
                    "近藤 聡一朗",
                    "西村 純",
                ],
                links: [
                    "https://github.com/JunNishimura/word-is-mine",
                    "https://twitter.com/WORD_IS_MINE_"
                ],
                mainVisual: {
                    video: "https://www.youtube.com/embed/tlescleq12k"
                },
                galleryVideoUrls: [
                    "https://www.youtube.com/embed/FtAwzgAHOc4",
                    "https://www.youtube.com/embed/G5qZR6r-LDk",
                    "https://www.youtube.com/embed/svFS7zr6jAA"
                ]
            },
            imagePaths: {
                imagePaths1: {
                    imageA: "work/word-is-mine/P2051593.jpg",
                    imageB: "work/word-is-mine/P2051604.jpg",
                    imageC: "work/word-is-mine/P2051618.jpg",
                },
                imagePaths2: {
                    imageA: "work/word-is-mine/P2051585.jpg",
                    imageB: "work/word-is-mine/P2051583.jpg",
                    imageC: "work/word-is-mine/P2051592.jpg"
                }
            }
        }
    },
}
</script>