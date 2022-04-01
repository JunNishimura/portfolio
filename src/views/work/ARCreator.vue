<template>
    <div id="ar-creator">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :credit="pageInfo.credit"
            :links="pageInfo.links"
            :mainVisualImg="pageInfo.mainVisualImg"
        >
            <template #description>
                <p>三井不動産の未来特区プロジェクトの一環として2022年初頭に行われた「クリエイター特区プロジェクト」（https://www.miraitokku.com/creator）ではアイデアの一般公募がありました。残念ながら採用はされなかったのですが、応募したのでその企画書を以下に掲載しておきます。</p>
                <p>募集内容は「こんなことが日本橋という街にARで実現したら面白い！ワクワクする！」というアイデア（AR技術不要・企画書のみ！）です。</p>
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_01.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_02.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_03.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_04.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_05.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_06.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_07.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_08.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_09.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_10.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_11.jpg">
                <img src="@/assets/images/work/ar-creator/JunNishimura_企画書_ページ_12.jpg">
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
            title: "ARクリエイター特区企画書",
            date: "2022.01",
            credit: [
                "西村 純"
            ],
            links: [],
            mainVisualImg: ""
        };

        return { pageInfo };
    }
}
</script>