<template>
    <div id="cometrue">
        <work-page-template
            :pageInfo="pageInfo"
        >
            <template #description>
                <p>筑波大学情報学群情報メディア創成学類開講の情報デザインⅡ（授業コード：GC52801）における制作物です。雑誌の表紙、ポスター、雑誌の見開き広告の3点を制作しました。制作物では実在する雑誌や商品を取り扱いましたが、該当する企業や商品には一切関係がない点をご了承下さい。</p>
                <img src="@/assets/images/work/infodesign2/bookcover.jpg">
                <p>雑誌dancyuが個人的に好きで良く読んでいた。好きな雑誌の表紙をデザインするという課題だったため、今回はdancyuの2021年5月号として、自分の好きなタイ料理の特集を想定して制作した。</p>
                <img src="@/assets/images/work/infodesign2/poster.png">
                <p>ポスターデザインが課題だった。自分の興味あるものとして、自分の所属する大学の大学院入試に関するポスターを制作した。</p>
                <img src="@/assets/images/work/infodesign2/open-ads.jpg">
                <p>自分はジョギングが好きで、ランニングシューズには決まってNikeのシューズを使っている。Nikeを愛する１人として、Nikeのシューズの広告を制作した。</p>
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
                title: "情報デザインⅡ　授業課題",
                date: "2021.4 - 2021.7",
                credit: [],
                mainVisual: {}
            }
        }
    }
}
</script>