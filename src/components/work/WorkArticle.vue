<template>
    <article class="work-article" @click="pageTransit">
        <img :src="imgSrc">
        <div class="work-title">
            <h5><span class="title">{{ title }}</span> | <span class="tag">{{ tag }}</span></h5>
        </div>
    </article>
</template>

<script>
export default {
    props: ["path", "title", "tag", "pageName"],
    computed: {
        imgSrc() {
            return require(`@/assets/images/${this.path}`); // @は予め書いておく方が良いみたい。@の部分までpropで渡すとエラーになる。
        }
    },
    methods: {
        pageTransit() {
            this.$router.push({ name: this.pageName})
        }
    }
}
</script>

<style lang="scss">
.work-article {
    max-width: 400px;
    margin: 25px 0;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
    }

    .work-title {
        text-align: right;

        .title {
            // font-weight: 600;
            font-size: 14px;
        }

        .tag {
            color: #333;
        }
    }
}
</style>