<!-- 合作伙伴 -->
<script setup>

</script>

<template>
  <div class="our-partners-wrap section mob-ex-section home-wow animate__fadeInUpBig">
    <!-- 标题 -->
    <TitleComp :text="$t('标题')" />
    $t('确定1')
    $t('home.1')
    $t('取消')
    $t('弹窗')
    $t('匹配')
    $t('地方')
    <div v-for="(row, inx) in imgList" :key="inx" class="partner-row">
      <img
        @click="handleLink(item.link)"
        :src="item.img"
        alt=""
        v-for="(item, i) in row"
        :key="i"
        class="partner-logo"
      />
    </div>
  </div>
</template>