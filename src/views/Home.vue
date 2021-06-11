<template>
    <div class="home" >
        <div class="wrapper" :style="{marginTop: calcMarginTop, marginLeft: calcMarginLeft}">
            <div class="home-title" ref="homeTitle">
                <h1 class="first-name">JUN<span class="first-name__line"></span></h1>
                <h1 class="last-name">NISHIMURA</h1>
            </div>
            <div class="navigation" :style="{marginTop: calcMarginTop}">
                <nav>
                    <ul>
                        <li><router-link :to="{name: 'works'}">WORK</router-link></li>
                        <li><router-link :to="{name: 'profile'}">PROFILE</router-link></li>
                    </ul>
                </nav>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boxSize: {
                width: 0,
                height: 0,
            }
        }
    },
    mounted() {
        this.boxSize.width = this.$refs.homeTitle.clientWidth;
        this.boxSize.height = this.$refs.homeTitle.clientHeight;
    },
    computed: {
        calcMarginLeft() {
            return this.boxSize.width * 0.618 + 'px';
        },
        calcMarginTop() {
            return this.boxSize.height * 0.618 + 'px';
        }
    }
}
</script>

<style lang="scss">
.home {
    width: 100%;
    height: 100vh;
    position: relative;
    // background-color: yellow;

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

        ul {
            li {
                &:not(:last-child) {
                    margin-bottom: -13px;
                }
                // a {
                //     color: white;
                //     font-size: 2.618rem;
                // }
            }
        }
    }
}
</style>