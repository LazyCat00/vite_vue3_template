<template>
  <div class="toolbox-container">
    <h1>在线工具箱</h1>
    <Welcome></Welcome>
    <div class="toolbox-grid">
      <!-- 文本处理 -->
      <div class="toolbox-item">
        <div class="toolbox-icon">
          <i class="fas fa-font"></i>
        </div>
        <h3>文本处理</h3>
      </div>
      <!-- 图像处理 -->
      <div class="toolbox-item">
        <div class="toolbox-icon">
          <i class="fas fa-image"></i>
        </div>
        <h3>图像处理</h3>
      </div>
      <!-- 编码解码 -->
      <div class="toolbox-item">
        <div class="toolbox-icon">
          <i class="fas fa-code"></i>
        </div>
        <h3>编码解码</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Welcome from '@/components/Welcom.vue'

const props = defineProps({
  // 可以根据需要传入一些参数
})
</script>

<style scoped lang="scss">
.toolbox-container {
  text-align: center;
  padding: 20px;
}

.toolbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.toolbox-item {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.toolbox-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.toolbox-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.toolbox-icon i {
  color: #007bff;
}
</style>
