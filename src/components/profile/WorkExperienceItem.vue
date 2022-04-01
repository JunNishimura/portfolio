<template>
    <div class="work-experience__item">
        <div class="work-experience__item-company">
            <p>- {{ companyName }}</p>
        </div>
        <div class="work-experience__item-duration">
            <p>{{ duration }}</p>
        </div>
        <div class="work-experience__item-detail">
            <p>{{ detail }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        companyName: String,
        duration: String,
        detail: String
    }
}
</script>

<style scoped lang="scss">
.work-experience__item {
    &+& {
        margin-top: 22px;
    }
    &-company {
        font-weight: bold;
    }
    &-duration, &-detail {
        font-size: 0.8em;
    }
}
</style>