<template>
    <div class="home" >
        <div class="wrapper" :style="{marginTop: calcMarginTop, marginLeft: calcMarginLeft}">
            <div class="home-title" ref="homeTitleRef">
                <h1 class="first-name">JUN<span class="first-name__line"></span></h1>
                <h1 class="last-name">NISHIMURA</h1>
            </div>
            <div class="navigation" :style="{marginTop: calcMarginTop}">
                <nav>
                    <ul>
                        <li class="navLink1"><router-link :to="{name: 'works'}">WORK</router-link></li>
                        <li class="navLink2"><router-link :to="{name: 'profile'}">PROFILE</router-link></li>
                    </ul>
                </nav>
            </div> 
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';

export default {
    setup() {
        const homeTitleRef = ref(null);
        const boxSize = ref({ width: 0, height: 0 });

        const calcMarginLeft = computed(() => {
            return boxSize.value.width * 0.618 + 'px'
        });

        const calcMarginTop = computed(() => {
            return boxSize.value.height * 0.618 + 'px';
        });

        onMounted(() => {
            boxSize.value.width = homeTitleRef.value.clientWidth;
            boxSize.value.height = homeTitleRef.value.clientHeight;
        });

        return { homeTitleRef, boxSize, calcMarginLeft, calcMarginTop };
    },
}
</script>

<style lang="scss">
.home {
    width: 100%;
    height: 100vh;
    position: relative;

    .wrapper {
        position: absolute;

        display: flex;
        flex-direction: column;

        @include respond(tablet) {
            margin: 50px 0 0 80px !important;
        }
    }

    .home-title {
        max-width: 800px;
        font-size: 45px;

        .first-name {
            display: inline-block;
        }

        .last-name {
            transform: translateX(-16px);
        }
    }

    .navigation {
        text-align: left;
        font-size: 30px;
        transform: translateX(-16px); // to align with .last-name

        ul {
            li {
                &:not(:last-child) {
                    margin-bottom: -8px;
                }

                a {
                    display: inline-block;
                    &::after {
                        content: '';
                        display: block;
                        width: 0;
                        height: 1px;
                        background-color: #000;
                        transition: width .3s;
                    }
                    &:hover::after {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>