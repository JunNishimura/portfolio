<template>
    <div id="hotoke-to-watashi">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
            :links="pageInfo.links"
            :mainVisualImg="pageInfo.mainVisualImg"
        >
            <template #description>
                <p>筑波大学情報学群情報メディア創成学類開講のディジタルコンテンツ表現実習における制作物です。</p>
                <p>情報過多で注意が散漫し、物事に集中できない現代人の様を風刺的に、ちょっと小馬鹿にした感じで表現したいと思い作りました。</p>
                <p>----- 以下コンセプト文 -----<br>誰しもがインターネットに否応なく接続されてしまうこの世界。そこに生きる我々現代人は、情報過多が原因で注意が散漫とし、物事に集中する事ができない。そんな現代人に日々の雑音から逃れ、仏からの有難い言葉に向き合う事ができる場を用意した。</p>
                <p>作品サイトへは以下のURLよりアクセスしてください。（推奨ブラウザはChromeで、通知をONにしてご鑑賞下さい）</p>
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
            title: "仏と私、時々通知。",
            date: "2021.11 - 2021.12",
            links: [
                "https://hotoke-to-watashi.netlify.app/"
            ],
            mainVisualImg: "work/hotoke-to-watashi/top.jpg"
        };

        return { pageInfo };
    }
}
</script>