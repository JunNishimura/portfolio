<template>
    <div id="work">
        <div class="gallery">
            <work-article
                :path="'word-is-mine/P2051574.jpg'"
                :title="'WORD IS MINE'"
                :tag="'art'"
                :pageName="'word-is-mine'"
            />
            <work-article
                :path="'cometrue/home.png'"
                :title="'カムトル'"
                :tag="'web app'"
                :pageName="'cometrue'"
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
        justify-content: space-around;
    }
}
</style>