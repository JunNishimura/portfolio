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
                    <p>I'm interested in AR / VR / CG.<br>My current research is Fireworks Physics Simulation.<br>I love design and art as well.</p>
                </div>
                <div class="contacts">
                    <p>I love to make cool things together with friends.<br>Please contact me if you're interested.</p>
                    <div class="sns">
                        <a href="https://www.facebook.com/jun.nishimura.3958"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" :style="{ color: '#4267B2' }" /></a>
                        <a href="https://www.instagram.com/jundayo0303/"><font-awesome-icon class="instagram-icon" :icon="['fab', 'instagram-square']" size="2x"  /></a>
                    </div>
                </div>
                <div class="work-experience">
                    <div class="work-experience__header">
                        <p>[Work Experience]</p>
                    </div>
                    <div class="work-experience__content">
                        <work-experience-item
                            companyName="note株式会社 エンジニアインターン"
                            duration="2021.9 - Now"
                            detail="I work as a full-stack engineer. I use Nuxt.js and TypeScript for the frontend,  ruby on rails for the backend."
                        />
                        <work-experience-item
                            companyName="奈良先端科学技術大学院大学 研究室インターン"
                            duration="2021.8"
                            detail="I worked at Watanabe lab. I implemented Renga System by using Transformer model."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WorkExperienceItem from "@/components/profile/WorkExperienceItem.vue"
export default {
    components: {
        WorkExperienceItem
    }
}
</script>

<style lang="scss">
$text-secondary-color: #555;

.profile {
    padding: 50px 0;
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

        .work-experience {
            &__header {
                margin: 36px 0 6px;
                p {
                }
            }
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