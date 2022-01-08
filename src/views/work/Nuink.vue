<template>
    <div id="nuink">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :credit="pageInfo.credit"
            :links="pageInfo.links"
            :mainVisualImg="pageInfo.mainVisualImg"
        >
            <template #description>
                <p>所属していた筑波大学学生団体<a href="https://twitter.com/nuinktsukuba">Nu ink.</a>によるイベント「Tsukuba Innovation Gallery（略称：TIG）」に際して、WEBサイトを作りました。webチームリーダーとして、制作管理、トンマナ、テーマ決め、デザイン、web実装全てに携わりました。</p>
                <p>トンマナ・テーマ決めに1カ月、モックアップに1ヶ月、フロント実装には1カ月半で計3カ月半ほどの期間で作りました</p>
                <p>TIGのコンセプトが「New Normal」であったため、WEBのテーマ・コンセプトもそれに合わせる形で「New Normal」にしました。コンセプトをデザインに落とし込む際に、以下の画像のようなマインドマップを作りました。</p>
                <img src="@/assets/images/work/nuink/mind_mapping.jpg">
                <p>上記のマインドマップから「New Normal」とは「まだはっきりと形が定まっていない状態」「正解のない問いに向かう事」「新しい変化を生み出す事」と解釈しました。「まだはっきりと形が定まっていない状態」から、トップに常に形が変動しているオブジェクトを配置しました。「正解のない問いに向かう事」から、全体のイメージは暗くして、カーソルを光に見立てることで、ユーザーが暗闇を模索するような体験作りを意識しました。「新しい変化を生み出す事」から、アニメーションを多くして動きのあるwebサイトにしました。</p>
                <p>モックアップ制作にはAdobe XDを使用しました。</p>
                <img src="@/assets/images/work/nuink/mockup.png">
                <p>フロント実装に関しては、フレームワークとしてVue.jsを使用しました。開発はGit, GitHubを使い進めました。</p>
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
            title: "Nu ink. TIG2021 WEB制作",
            date: "2021.7 - 2021.10",
            credit: [
                "西村 純",
                "中村 翔音"
            ],
            links: [
                "https://nuink.github.io/TIG_2021/",
                "https://github.com/Nuink/TIG_2021"
            ],
            mainVisualImg: "work/nuink/top.png"
        };

        return { pageInfo };
    }
}
</script>

<style scoped lang="scss">
#nuink {
    a {
        text-decoration: underline;
    }
}
</style>