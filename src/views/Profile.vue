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
                    <div class="facebook-icon">
                        <a href="https://www.facebook.com/jun.nishimura.3958"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" :style="{ color: '#4267B2' }" /></a>
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
        width: 388px; // 240 * 1.618
        // background-color: blue;

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

            .facebook-icon {
                margin-top: 25px;
            }
        }
    }
}
</style>