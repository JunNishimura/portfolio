<template>
    <article class="work-article" @click="pageTransit">
        <img :src="imgSrc">
        <div class="overlay" />
        <h5 class="title">{{ title }}</h5>
        <h5 class="tag">{{ tag }}</h5>
    </article>
</template>

<script>
export default {
    props: {
        path: String, 
        title: String, 
        tag: String,
        pageName: String
    },
    computed: {
        imgSrc() {
            return require(`@/assets/images/work/${this.path}`); // @は予め書いておく方が良いみたい。@の部分までpropで渡すとエラーになる。
        }
    },
    methods: {
        pageTransit() {
            this.$router.push({ name: this.pageName })
        }
    }
}
</script>

<style lang="scss">
.work-article {
    max-width: 400px;
    margin: 25px 0;
    cursor: pointer;
    position: relative;

    img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
    }

    .overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 0;
        border-top: 300px solid #fff9;
        border-right: 100px solid transparent;
        opacity: 0;
        transition: .8s;
        line-height: 150px;
    }

    .title {
        position: absolute;
        top: 30px;
        left: 48px; // 30 * 1.6
        font-size: 16px;
    }

    .tag {
        position: absolute;
        bottom: 30px;
        left: 48px; // 30 * 1.6
        color: #333;
    }

    .title, .tag {
        opacity: 0;
        transition: 0.3s ease-out;
        transition-delay: 0.5s;
    }

    &:hover {
        .overlay {
            opacity: 1;
            width: 61.8%;
        }

        .title, .tag {
            opacity: 1;
        }
    }
}
</style>