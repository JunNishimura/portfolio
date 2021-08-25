<template>
    <!-- image gallery template which display 6 images -->
    <div class="image-gallery-template1">
        <div class="area-a"><img :src=imgSrc(imagePaths1.imageA)></div>
        <div class="area-b"><img :src=imgSrc(imagePaths1.imageB)></div>
        <div class="area-c"><img :src=imgSrc(imagePaths1.imageC)></div>
    </div>
    <div class="image-gallery-template2">
        <div class="area-a"><img :src=imgSrc(imagePaths2.imageA)></div>
        <div class="area-b"><img :src=imgSrc(imagePaths2.imageB)></div>
        <div class="area-c"><img :src=imgSrc(imagePaths2.imageC)></div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: {
        imagePaths1: {
            imageA: String,
            imageB: String,
            imageC: String, 
        },
        imagePaths2: {
            imageA: String,
            imageB: String,
            imageC: String,
        }
    },
    setup() {
        const imgSrc = computed((fileName) => {
            return require(`@/assets/images/${fileName}`)
        });
        
        return { imgSrc };
    }
}
</script>

<style lang="scss" scoped>
.image-gallery-template1, .image-gallery-template2 {
    width: 100%;
    display: grid;
    grid-template-rows: 3fr 3fr;

    img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
    }
}

.image-gallery-template1 {
    grid-template-columns: 9fr 8fr;

    .area-a {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }

    .area-b {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .area-c {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
}

.image-gallery-template2 {
    grid-template-columns: 8fr 9fr;

    .area-a {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .area-b {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .area-c {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
    }
}
</style>