<template>
  <PageWrapper>
    <template #headerContent>
      <PortraitHeader />
    </template>
    <div class="lg:flex">
      <div class="lg:w-7/10 w-full !mr-4 enter-y">
        <ProjectCard :loading="loading" class="enter-y" />
        <DynamicInfo :loading="loading" class="!my-4 enter-y" />
      </div>
      <div class="lg:w-3/10 w-full enter-y">
        <QuickNav :loading="loading" class="enter-y" />

        <Card class="!my-4 enter-y" :loading="loading">
          <img class="xl:h-50 h-30 mx-auto" src="../../../assets/svg/illustration.svg" />
        </Card>

        <SaleRadar :loading="loading" class="enter-y" />
      </div>
    </div>
  </PageWrapper>


</template>
<script lang="ts" setup>

import PageWrapper from "@/components/Page/src/PageWrapper.vue";
import PortraitHeader from "@/views/nl_personnel_capability_portrait/component/PortraitHeader.vue";
import SaleRadar from "@/views/dashboard/workbench/components/SaleRadar.vue";
import DynamicInfo from "@/views/dashboard/workbench/components/DynamicInfo.vue";
import { Card } from "ant-design-vue";
import QuickNav from "@/views/dashboard/workbench/components/QuickNav.vue";
import ProjectCard from "@/views/dashboard/workbench/components/ProjectCard.vue";
import { ref } from "vue";


const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 500);

</script>
