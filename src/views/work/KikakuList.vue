<template>
    <div id="kikaku-list">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :credit="pageInfo.credit"
            :links="pageInfo.links"
            :mainVisualImg="pageInfo.mainVisualImg"
        >
            <template #description>
                <p>身の回りのあらゆるものを面白がろうと思い始めた企画です。</p>
                <p>単にアイデアを羅列しているのではなく、ターゲットは誰で、どこに企画としての面白さがあるのかまで書くことを意識しました。</p>
                <iframe  src="/pdf/kikaku.pdf" type="application/pdf">
                    <p><b>表示されない時の表示</b>: <a href="/pdf/kikaku.pdf">PDF をダウンロード</a>.</p>
                </iframe >
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
            title: "企画・アイデア集",
            date: "2022.06",
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

<style scoped lang="scss">
#kikaku-list {
    iframe {
        width: 100%;
        min-height: 600px;
    }
}
</style>