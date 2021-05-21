<template>
    <router-view/>
</template>

<style lang="scss">
$bg-color: #ebf6f7;

body {
    background-color: $bg-color;
}   

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

h1 {
    font-family: 'LibreCalson', sans-serif;
    font-weight: bold;
}

h2, h3, h4, h5, p, a {
    font-family: 'LibreCalson', '游明朝', '游明朝体', sans-serif;
    font-weight: normal;
}

a {
    color: #000;
    text-decoration: none;
}

ul li {
    list-style: none;
}
</style>