<template>
    <div id="profile-page">
        <div class="profile"> 
            <div class="profile-image">
                <img src="@/assets/images/profile/profile.jpg">
            </div>
            <div class="self-intro">
                <div class="name">
                    <h2>Jun Nishimura</h2>
                </div>
                <div class="introduction">
                    <p>I'm a college student, living in Japan.</p>
                </div>
                <div class="interest">
                    <p>I'm interested in Natural Language Processing.<br>I use deep learning to generate Japanese poem in my current research.<br>I love design and art as well.</p>
                </div>
                <div class="contacts">
                    <p>I love to make cool things together with friends.<br>Please contact me if you're interested.</p>
                    <div class="sns">
                        <a href="https://www.facebook.com/jun.nishimura.3958"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" :style="{ color: '#4267B2' }" /></a>
                        <a href="https://www.instagram.com/jundayo0303/"><font-awesome-icon class="instagram-icon" :icon="['fab', 'instagram-square']" size="2x"  /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$text-secondary-color: #555;

.profile {
    padding-top: 50px;
    padding-left: 81px; // 50 * 1.618
    display: flex;
    justify-content: flex-start;
    @include respond(tablet) {
        flex-direction: column;
        align-items: center;
        padding-left: 0;
    }

    .profile-image {
        max-width: 240px;
        img {
            width: 100%;
            height: auto;
            border-radius: 2px;
        }
    }

    .self-intro {
        margin-left: 148px; // 240 / 1.618
        text-align: left;
        max-width: 388px; // 240 * 1.618
        @include respond(tablet) {
            margin-top: 58.25px; // 36 * 1.618
            margin-left: 0;
            max-width: 100%;
        }

        p {
            color: $text-secondary-color;
            line-height: 23px;
        }

        .introduction {
            margin-top: 36px;
        }

        .interest {
            margin-top: 22px; // 36 / 1.618
        }

        .contacts {
            margin-top:  22px;

            .sns {
                margin-top: 25px;
                display: flex;
                justify-content: flex-start;

                a {
                    margin-right: 13.6px; // 22 / 1.618
                }

                .instagram-icon {
                    font-size:30px;
                    color: #d6249f;
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent; 
                }
            }
        }
    }
}
</style>