<template>
    <div class="firefly-bg">
        <span v-for="i in 15" :key="i" class="firefly"></span>
    </div>
</template>

<style lang="sass">
.firefly
    position: fixed
    left: 50%
    top: 50%
    width: 0.4vw
    height: 0.4vw
    margin: -0.2vw 0 0 9.8vw
    animation: ease 200s alternate infinite
    pointer-events: none
    z-index: -1
    &::before,
    &::after
        content: ''
        position: absolute
        width: 100%
        height: 100%
        border-radius: 50%
        transform-origin: -10vw
    &::before
        background: $white
        opacity: 0.7
        animation: drift ease alternate infinite

    &::after
        background: $white
        opacity: 0
        box-shadow: 0 0 0vw 0vw yellow
        animation: drift ease alternate infinite, flash ease infinite
</style>