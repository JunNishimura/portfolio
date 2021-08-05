<template>
    <div id="cometrue">
        <work-page-template
            :pageInfo="pageInfo"
        >
            <template #description>
                <p>カムトルはアイデアを持っているけど必要なスキルを持った人材と出会えないために行動に移せない人と、スキルを持っているけどそれを活かす場所がない人が出会える場所を提供する事を目指して作ったwebサービスです。英語で実現するを意味するcome trueからカムトルという名前にしました。</p>
                <p>カムトルは東大人工知能開発学生団体が運営するHAIT Labの実践的なプロダクト開発を目的としたAdvancedコースの一環として作りました。開発メンバーは、所属大学や専攻が全員異なり、多様なバックグラウンドを持ったメンバーで構成されています。コロナ禍であったため開発はフルリモートで、約3カ月間かけて構想から実装までを行いました。</p>
                <p>フロントエンドにはVue.jsを、バックエンドでのAPI構築にはDjango REST frameworkを使用しました。自分はチームリーダーとしてサービス全体の統括とフロントエンドを担当しました。</p>
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
    data() {
        return {
            pageInfo: {
                title: "カムトル",
                date: "2020.9 - 2020.12",
                credit: [
                    "西村 純",
                    "高山 尚哉",
                    "神野 亮太"
                ],
                links: [
                    "https://cometrue-6fd0b.web.app/",
                    "https://github.com/JunNishimura/cometoru"
                ],
                mainVisual: {
                    img: "work/cometrue/home.png"
                }
            }
        }
    }
}
</script>