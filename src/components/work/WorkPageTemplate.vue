<template>
    <div class="work-page-template">
        <div class="header">
            <h1 class="title">{{ title }}</h1>
            <div class="info">
                <h5 class="date">{{ date }}</h5>
                <h5 v-if="place && place.length > 0" class="place">{{ place }}</h5>
            </div>
        </div>
        <div class="main-visual">
            <div v-if="mainVisualImg && mainVisualImg.length > 0"> 
                <img :src="imgSrc(mainVisualImg)">
            </div>
            <div v-if="mainVisualVideo && mainVisualVideo.length > 0">
                <iframe :src="mainVisualVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="description">
            <slot name="description"></slot>
        </div>
        <div class="credit" v-if="credit && credit.length > 0">
            <h5 v-for="(name, id) in credit" :key="id">{{name}}</h5>
        </div>
        <div class="references" v-if="links && links.length > 0">
            <div class="ref-item" v-for="(link, id) in links" :key="id">
                <a :href="link">{{link}}</a>
            </div>
        </div>
        <div class="gallery" ref="galleryRef">
            <div class="videos" v-if="isMounted && galleryVideoUrls && galleryVideoUrls.length > 0">
                <iframe v-for="(url, id) in galleryVideoUrls" :key="id"
                    :style="{height: videoHeight}" 
                    :src="url" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>
            <div class="images">
                <slot name="imageGallery"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
export default {
    props: {
        title: {
            type: String,
            require: true,
            default: '',
        },
        date: {
            type: String,
            require: true,
            default: '',
        },
        place: {
            type: String,
            require: false,
            default: '',
        },
        credit: {
            type: Array,
            require: false,
            default: () => {
                return []
            }
        },
        links: {
            type: Array,
            require: false,
            default: () => {
                return [];
            }
        },
        mainVisualImg: {
            type: String,
            require: false,
            default: ''
        },
        mainVisualVideo: {
            type: String,
            require: false,
            default: ''
        },
        galleryVideoUrls: {
            type: Array,
            require: false,
            default: () => {
                return [];
            }
        }
    },
    setup() {
        const galleryRef = ref(null);
        const galleryWidth = ref(0);
        const isMounted = ref(false);

        const videoHeight = computed(() => {
            return isMounted.value ? galleryWidth.value * 0.5625 + 'px' : '400px';
        });

        const imgSrc = (fileName) => {
            return require(`@/assets/images/${fileName}`)
        }

        onMounted(() => {
            galleryWidth.value = galleryRef.value.clientWidth;
            isMounted.value = true;
        });

        return { galleryRef, galleryWidth, isMounted, videoHeight, imgSrc }
    }
}
</script>

<style lang="scss">
.work-page-template {
    padding: 50px 81px; // 50 * 1.618
    @include respond(tablet) {
        padding: 50px 0;
    }

    .header {
        .info {
            display: flex;
            justify-content: flex-start;
            
            h5 {
                font-family: '游明朝', '游明朝体';
            }
        }
    }

    .main-visual {
        margin-top: 31px; // 50 / 1.618
        max-width: 800px;

        img, iframe {
            width: 100%;
        }

        img {
            height: auto;
        }

        iframe {
            height: 450px; // 800 * 0.5625

            @include respond(table) {
                height: 427px; // 760 * 0.5625
            }

            @include respond(phone) {
                height: 252px; // 448 * 0.5625
            }
        }
    }

    .description {
        max-width: 800px; // main-visualに合わせる
        margin-top: 36px; // 50 / 1.618 + α
        p {
            &:not(:last-child) {
                margin-bottom: 22px; // 36 / 1.618
            }
        }

        img {
            width: 100%;
            height: auto;
            vertical-align: bottom;
            margin-bottom: 22px;
        }
    }

    .credit {
        margin-top: 36px; // 50 / 1.618 + α
    }

    .references {
        margin-top: 36px; // 50 / 1.618 + α

        .ref-item {
            display: block;
            a { 
                width: auto;
                display: inline-block;
                font-size: 0.8em;
                color: #555;
                &:hover {
                    border-bottom: 1px solid #000;
                }
            }
        }
    }

    .gallery {
        margin-top: 36px; // 上に合わせる
        width: 100%;

        .videos {
            iframe {
                width: 100%;
                vertical-align: bottom;
            }
        }
    }
}
</style>