<template>
    <div id="work">
        <div class="gallery">
            <work-article
                :path="'nuink/top.png'"
                :title="'Nu ink. TIG2021'"
                :tag="'web'"
                :pageName="'nuink'"
            />
            <work-article
                :path="'ar-creator/top.jpg'"
                :title="'ARクリエイター特区'"
                :tag="'企画'"
                :pageName="'ar-creator'"
            />
            <work-article
                :path="'hotoke-to-watashi/top.jpg'"
                :title="'仏と私、時々通知。'"
                :tag="'art'"
                :pageName="'hotoke-to-watashi'"
            />
            <work-article
                :path="'jitan/top.png'"
                :title="'時短'"
                :tag="'art'"
                :pageName="'jitan'"
            />
            <work-article
                :path="'word-is-mine/P2051574.jpg'"
                :title="'WORD IS MINE'"
                :tag="'art'"
                :pageName="'word-is-mine'"
            />
            <work-article
                :path="'cometrue/home.png'"
                :title="'カムトル'"
                :tag="'web'"
                :pageName="'cometrue'"
            />
            <work-article
                :path="'infodesign2/open-ads.jpg'"
                :title="'情報デザインⅡ 課題'"
                :tag="'design'"
                :pageName="'infodesign2'"
            />
        </div>
    </div>
</template>

<script>
import WorkArticle from '@/components/work/WorkArticle.vue';

export default {
    components: {
        WorkArticle
    }
}
</script>

<style lang="scss">
#work {
    .gallery {
        padding-top: 25px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: space-between;

        &::after {
            content: "";
            display: block;
            width: 400px;
            height: 0;
            margin: 25px 0;
        }
    }
}
</style>