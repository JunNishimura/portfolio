<template>
    <div id="jitan">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :links="pageInfo.links"
            :mainVisualImg="pageInfo.mainVisualImg"
        >
            <template #description>
                <p>筑波大学情報学群情報メディア創成学類3年生の有志で開催したディジコン展覧会で発表した作品です。</p>
                <p>コンテンツ消費速度が加速する現代社会を動画の再生速度を使って風刺的に表現しました。</p>
                <p>----- 以下コンセプト文 -----<br>加速するコンテンツ消費速度。時間軸と空間軸。消費者は見るというプロセス以上に見たという履歴に快感を覚える。</p>
                <p>作品サイトへは以下のURLよりアクセスしてください。</p>
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
            title: "時短",
            date: "2022.2",
            links: [
                "https://junnishimura.github.io/jitan/"
            ],
            mainVisualImg: "work/jitan/top.png"
        };

        return { pageInfo };
    }
}
</script>