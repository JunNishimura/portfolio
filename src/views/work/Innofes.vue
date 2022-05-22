<template>
    <div id="innofes">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :credit="pageInfo.credit"
            :links="pageInfo.links"
            :mainVisualImg="pageInfo.mainVisualImg"
        >
            <template #description>
                <p>J-WAVEと筑波大学が主催のテクノロジーと音楽の祭典イノフェス2021におけるトークセッション企画『NFTの「今」から考える新たなクリエイションの行方』にて企画提案、出演者調整、進行台本作成などを行いました。</p>
                <p>自分はプロジェクトリーダーとしてチームをまとめる事に加えて、企画提案、企画書作成、進行台本作成、J-WAVE側との連絡などを担当しました。</p>
                <img src="@/assets/images/work/innofes/イノフェス_talksession_nft_企画書_ページ_1.png">
                <img src="@/assets/images/work/innofes/イノフェス_talksession_nft_企画書_ページ_2.png">
                <img src="@/assets/images/work/innofes/イノフェス_talksession_nft_企画書_ページ_3.png">
                <img src="@/assets/images/work/innofes/イノフェス_talksession_nft_企画書_ページ_4.png">
                <img src="@/assets/images/work/innofes/イノフェス_talksession_nft_企画書_ページ_5.png">
                <p></p>
            </template>
        </work-page-template>
    </div>
</template>

<script>
import WorkPageTemplate from '@/components/work/WorkPageTemplate'
export default {
    components: {
        WorkPageTemplate
    },
    setup() {
        const pageInfo = {
            title: "イノフェス2021 トークセッション",
            date: "2021.10",
            credit: [
                "西村 純",
                "中村 翔音",
                "柞木 太地",
                "池元 優青"
            ],
            links: [
                "https://www.j-wave.co.jp/iwf2021/talk.html"
            ],
            mainVisualImg: ""
        };

        return { pageInfo };
    }
}
</script>