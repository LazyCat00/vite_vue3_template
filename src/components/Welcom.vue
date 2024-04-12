<template>
    <nya-container v-if="welcome" class="welcome">
        <h2>欢迎使用MikuTools</h2>
        <p>
            目前共开发了数十款有趣的小功能，数量还在持续增加中。如果觉得某一款不错，不妨安利给他人使用。
        </p>
        <div class="close" title="关闭" @click="close">
            <svg-icon name="close" color="white"></svg-icon>
        </div>
    </nya-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const welcome = ref(true)

const close = () => {
    console.log('关闭')
}
</script>

<style scoped lang="scss">
.welcome {
    margin-bottom: 32px;
    margin-top: 18px;

    h2 {
        font-size: 24px;
    }

    .close {
        cursor: pointer;
        $width: 30px;
        width: $width;
        height: $width;


        border-radius: 50%;
        background-color: $theme;
        box-shadow: 0 8px 10px rgba(36, 159, 253, 0.30196);

        // 这些属性被用于将 .close-btn 元素内部的内容（关闭图标）水平和垂直居中，使得关闭按钮的图标在按钮中央显示。
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -12px;
        right: -12px;
    }
}
</style>
