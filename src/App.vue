<template>
  <div>
    <el-button type="primary" :icon="Plus">Primary</el-button>


    <div class="flex items-center mb-4">
      <el-radio-group v-model="small" class="mr-4">
        <el-radio-button :value="false">default</el-radio-button>
        <el-radio-button :value="true">small</el-radio-button>
      </el-radio-group>
      <div>
        background:
        <el-switch v-model="background" class="ml-2" />
      </div>
      <div class="ml-4">
        disabled: <el-switch v-model="disabled" class="ml-2" />
      </div>
    </div>

    <hr class="my-4" />

    <div class="demo-pagination-block">
      <div class="demonstration">Total item count</div>
      <el-pagination v-model:current-page="currentPage1" :page-size="100" :small="small" :disabled="disabled"
        :background="background" layout="total, prev, pager, next" :total="1000" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">Change page size</div>
      <el-pagination v-model:current-page="currentPage2" v-model:page-size="pageSize2"
        :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
        layout="sizes, prev, pager, next" :total="1000" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">Jump to</div>
      <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small"
        :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">All combined</div>
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
        layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>

  </div>
</template>
<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>
<style scoped></style>
