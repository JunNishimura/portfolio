<template>
    <div id="info-design2">
        <work-page-template
            :title="pageInfo.title"
            :date="pageInfo.date"
        >
            <template #description>
                <p>筑波大学情報学群情報メディア創成学類開講の情報デザインⅡ（授業コード：GC52801）における制作物です。雑誌の表紙、ポスター、雑誌の見開き広告の3点を制作しました。制作物では実在する雑誌や商品を取り扱いましたが、該当する企業や商品には一切関係がない点をご了承下さい。</p>
                <img src="@/assets/images/work/infodesign2/bookcover.jpg">
                <p>好きな雑誌の表紙をデザインするという課題だったため、個人的に好きでよく読む雑誌としてdancyuを選びました。今回はdancyuの2021年5月号として、自分の好きなタイ料理の特集を想定して制作しました。コロナ禍で海外旅行に行けない中、読者に食を通じて海外の雰囲気を味わってほしいと言う思いを中心にデザインしました。</p>
                <img src="@/assets/images/work/infodesign2/poster.png">
                <p>ポスターデザインとして、自分の所属する大学の大学院入試に関するポスターを制作しました。研究者の卵である大学院生には道なき道を自分の手で切り開いていって欲しいという願いを込めてデザインしました。</p>
                <img src="@/assets/images/work/infodesign2/open-ads.jpg">
                <p>雑誌の見開き広告。自分はジョギングが好きで、ランニングシューズには決まってNikeのシューズを使っています。そのこともあり、Nikeを愛する１人としてNikeのシューズの広告を制作しました。Nikeランニングシューズの軽さ、ダイナミックさ、動きやすさを読者が直感的に感じられるようにメインビジュアルを配置しました。また広告であったため、商品の魅力を伝えることも意識しました。</p>
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
            title: "情報デザインⅡ　授業課題",
            date: "2021.4 - 2021.7",
        };

        return { pageInfo };
    }
}
</script>