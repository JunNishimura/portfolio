<template>
    <div class="home">
        <div class="title">
            <h1 class="first-name">JUN<span class="first-name__line"></span></h1>
            <h1 class="last-name">NISHIMURA</h1>
        </div>
        <div class="navigation">
            <nav>
                <ul>
                    <li><a href="#">WORK</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
$bg-color: #ebf6f7;

.home {
    width: 100vw;
    height: 100vh;
    background-color: $bg-color;
    position: relative;
}

.title {
    position: absolute;
    top: 38.2%;
    left: 38.2%;
    font-size: 45px;
    transform: translate(-50%, -50%);

    .first-name {
        display: inline-block;
    }

    .last-name {
        transform: translateX(-16px);
    }
}

/* .title .first-name__line {
    width: 105%;
    display: block;
    transform: translateX(-15px);
    border-bottom: 3px solid #000;
} */

.navigation {
    position: absolute;
    bottom: 5%;
    right: 10%;
    /* transform: translate(-50%, -50%); */
    text-align: right;
    font-size: 30px;

    ul li {
        list-style: none;

        &:not(:last-child) {
            margin-bottom: -13px;
        }

        a {
            color: #000;
            text-decoration: none;
        }
    }
}
</style>