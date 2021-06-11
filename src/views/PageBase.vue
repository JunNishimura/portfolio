<template>
    <div id="page-base">
        <nav class="page-nav">
            <ul>
                <li><router-link :to="{name: 'works'}">WORK</router-link></li>
                <li><router-link :to="{name: 'profile'}">PROFILE</router-link></li>
            </ul>
        </nav>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
$active-color: #ffffff99;
$hover-color: #ffffffaa;

#page-base {
    height: 100vh;
    width: 80vw;
    margin: 0 auto;

    .page-nav {
        height: 125px;
        display: flex;
        flex-direction: column-reverse;
        border-bottom: 1px solid #fff;

        ul {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            li {
                margin-right: 43px;
                text-align: center;
                width: 100px;
                line-height: 48px;

                a {
                    display: block;
                }
                
                .router-link-active {
                    background-color: $active-color;
                }

                &:hover {
                    background-color: $hover-color;
                }
            }
        }
    }

    .content {
        // background-color: blue;
        height: calc(100% - 125px); // 125pxは上のnavのheightに対応
    }
}
</style>