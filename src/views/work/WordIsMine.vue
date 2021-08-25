<template>
    <div id="word-is-mine">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :place="pageInfo.place"
            :credit="pageInfo.credit"
            :links="pageInfo.links"
            :mainVisualVideo="pageInfo.mainVisualVideo"
            :galleryVideoUrls="pageInfo.galleryVideoUrls"
        >
            <template #description>
                <p>これは鑑賞者の選択により再構成された言葉が知らない第三者の発声を通じて公に伝えられるという状況を作りだすことで言葉の所有を問う作品です。</p>
                <p>鑑賞者は動詞、形容詞、名詞それぞれに対して与えられた単語の中から「選ぶ」と言う行為を通じて文章を作ります。</p>
                <img src="@/assets/images/work/word-is-mine/P2051606.jpg">
                <p>鑑賞者が存在する展示空間にはディスプレイが設置されています。そこに流されているのは、鑑賞者が作った文章を声に出して読み上げる第三者の映像が流されているディスプレイをさらに撮影した中継映像です。発声されている空間に鑑賞者は直接存在しないけれど、そこで話されている言葉は鑑賞者自身が作ったものであり、第三者を通じて外界に影響を及ぼしていている状況をディスプレイ越しに知ることができます。</p>
                <img src="@/assets/images/work/word-is-mine/P2051596.jpg">
                <p>文章を読み上げる第三者の映像が流れているディスプレイは人の行き交いが激しい公共空間の代名詞的な場所に設置する必要がありました。渋谷の交差点のような場所に設置する事が理想だったのですが、様々な理由から実現しませんでした。その代わりに今回は筑波大学6A棟の出入り口となる場所に設置しました。</p>
                <img src="@/assets/images/work/word-is-mine/P2051571.jpg">
                <p>また文章が鑑賞者によって作られる度にツイッター上で自動的にツイートされるようになっています。</p>
                <img src="@/assets/images/work/word-is-mine/twitter.png">
                <p>本作は「ハイブリッドアート演習」という授業の一環として制作しました。学群横断科目ということもあり芸術学群2人、情報学群2人の計4人で制作しました。自分は主にシステムの実装を担当しました。入力インターフェースから映像出力まで全てweb上に実装し、アプリケーションはHeroku上にデプロイして公開しました。ユーザー入力に応じた映像出力の切り替えに関しては入力が変化する度に対応する動画を探して切り替えています。本作品ではユーザーの入力と映像切り替えにリアルタイム性が求められたため、WebSocketを簡単に扱う事のできるライブラリsocket.ioを活用しました。自動ツイートに関してはライブラリnode-twitterを利用しました。</p>
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
    setup() {
        const pageInfo = {
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
            mainVisualVideo: "https://www.youtube.com/embed/tlescleq12k",
            galleryVideoUrls: [
                "https://www.youtube.com/embed/FtAwzgAHOc4",
                "https://www.youtube.com/embed/G5qZR6r-LDk",
                "https://www.youtube.com/embed/svFS7zr6jAA"
            ]
        };

        const imagePaths = {
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
        };

        return { pageInfo, imagePaths };
    }
}
</script>