<template>
    <main class="calculator">
        <div class="calculator__color" :style="{'background': color}">
            <div class="calculator__color-input" :class="{error: erorrInput}">
                <input type="text" autofocus v-model="color" placeholder="#FDC420">
            </div>
            <div class="calculator__color-copy" :class="{active: copyBtn}" @click="copyColor">Скопировать</div>
        </div>
        <div class="calculator__percent">
            <div class="calculator__percent-item" :class="{active: percent == this.value}"  @click="this.value = percent" v-for="percent in percentList" :key="percent">{{percent}}</div>
        </div>
        <div class="calculator__input">
            <input class="calculator__input-input" type="number" v-model="value">
            <div class="calculator__input-percent">%</div>
        </div>
        <div class="calculator__range">
            <Slider @update="calculateOpacity(value)" :lazy="false" v-model="value" class="slider-blue" :tooltips="false" />
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
            color: '',
            value: 100,
            percentList: ['10','20','30','40','50','60','70','80','90'],
            erorrInput: false,
            copyBtn: false
        }
    },

    methods: {
        calculateOpacity(percent) {
            if(this.color.length >= 4 && this.color.startsWith("#")) {
                this.erorrInput = false
                this.copyBtn = true

                const alpha = Math.round(percent / 100 * 255)
                const hex = (alpha + 0x10000).toString(16).substr(-2)
                
                if(this.color.length === 4) {
                    console.log(this.color)
                    this.color = this.color.split("").map((item) => {
                        if(item == '#') return item
                        return item + item
                    }).join("")
                }

                if(this.color.length > 7) {
                this.color = this.color.substring(0,7)
                }
                this.color += hex          
            }
            else {
                this.erorrInput = true
                 this.copyBtn = false
            }
        },
		copyColor(event) {
            event.target.previousElementSibling.querySelector('input').select()
            document.execCommand("copy")
		},
        
    }
}
</script>

<style lang="sass">
.calculator
    &__color
        border-radius: 10px
        width: 100%
        height: 120px
        margin: 0 auto 8px
        background: $blue
        +flex(center,center)
        flex-direction: column
        position: relative
        border: 1px solid $silver
        overflow: hidden
        &::before
            content: ''
            position: absolute
            inset: 0
            width: 100%
            height: 100%
            border-radius: 10px
            background: url(@/assets/bg.png)
            z-index: -1
        &-input
            background: $white
            max-width: 150px
            height: 40px
            border-radius: 8px
            border: 1px solid $silver
            position: relative
            &.error
                &::after
                    opacity: 1
            &::after
                content: ''
                opacity: 0
                transition: 0.3s
                position: absolute
                right: 8px
                top: 14px
                width: 15px 
                height: 15px
                background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='14' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 1.417 12.59 0 7 5.616 1.41 0 0 1.417l5.59 5.615L0 12.648l1.41 1.417L7 8.449l5.59 5.616L14 12.648 8.41 7.032 14 1.417Z' fill='%23E31D1C'/%3E%3C/svg%3E") no-repeat 50%

            input
                background: transparent
                border: 0
                width: 150px
                height: 100%
        &-copy
            position: absolute
            bottom: 6px
            background: $yellow
            padding: 3px 10px
            border-radius: 6px
            font-size: 14px
            cursor: pointer
            transition: 0.5s
            transform: translateY(130%)
            &.active
                transform: none

    &__percent 
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
            &:hover, &.active
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