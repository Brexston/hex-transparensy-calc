<template>
    <main class="calculator">
        <div class="calculator__color">
            <div class="calculator__color-input">
                <input type="text" placeholder="#FDC420">
            </div>
        </div>
        <div class="calculator__percent">
            <div class="calculator__percent-item" @click="this.value = percent" v-for="percent in percentList" :key="percent">{{percent}}</div>
        </div>
        <div class="calculator__input">
            <input class="calculator__input-input" type="number" v-model="value">
            <div class="calculator__input-percent">%</div>
        </div>
        <div class="calculator__range">
            <Slider :lazy="false" v-model="value" class="slider-blue" :tooltips="false" />
        </div>
    </main>
</template>

<script>
import Slider from '@vueform/slider'

export default {
    
    components: {
        Slider
    },
    data() {
        return {
            value: 50,
            percentList: ['10','20','30','40','50','60','70','80','90','100',]
        }
    }
}
</script>

<style lang="sass">
.calculator
    &__color
        border-radius: 10px
        max-width: 500px
        width: 100%
        height: 120px
        margin: 0 auto 8px
        background: $blue
        +flex(center,center)
        position: relative
        &-input
            background: $white
            max-width: 150px
            height: 40px
            border-radius: 8px
            border: 1px solid $silver

            input
                background: transparent
                border: 0
                width: 150px
                height: 100%
        &::before
            content: ''
            position: absolute
            inset: 0
            width: 100%
            height: 100%
            border-radius: 8px
            background: url(@/assets/bg.png)
            z-index: -1
    &__percent 
        max-width: 500px
        width: 100%
        margin: 0 auto 24px
        display: flex
        justify-content: space-between
        &-item
            +text-style(12px)
            border: 1px solid $blue
            border-radius: 5px
            padding: 0 5px
            transition: 0.3s
            cursor: pointer
            font-weight: 400
            &::after
                content: '%'
            &:hover
                background: $yellow
    &__input
        display: flex
        justify-content: center
        margin-bottom: 24px
        &-input
            width: 45px
            height: 40px
            padding: 0
            font-weight: 500
            text-align: right
            border-width: 0 0 3px 0
            border-bottom: 3px solid $blue
            font-size: 25px
            -webkit-appearance: none
            margin: 0
        &-percent
            font-size: 25px
            padding-top: 1px
            padding-right: 8px
            border-bottom: 3px solid $blue
    &__range
        max-width: 300px
        margin: 0 auto
        .slider-blue
            --slider-connect-bg: #FDC420
            --slider-handle-ring-color: #eee


</style>