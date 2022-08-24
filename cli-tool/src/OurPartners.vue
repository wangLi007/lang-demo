<!-- 合作伙伴 -->
<script setup>
import { reactive } from 'vue';
import TitleComp from '../components/TitleComp.vue';

const imgList = reactive([
  // 第一行
  [
    {
      img: require('@img/home/ourPartners/cyberConnect.png'),
      link: 'https://cyberconnect.me',
    },
    {
      img: require('@img/home/ourPartners/polygonStudios.png'),
    },
    {
      img: require('@img/home/ourPartners/polygon.png'),
    },
  ],
  // 第二行
  [
    {
      img: require('@img/home/ourPartners/coin98.png'),
    },
    {
      img: require('@img/home/ourPartners/project-galaxy.png'),
      link: 'https://galaxy.eco/BovineVerse',
    },
    {
      img: require('@img/home/ourPartners/element.png'),
    },
  ],
  // 第三行
  [
    {
      img: require('@img/home/ourPartners/snap-figure-dao.png'),
    },
    {
      img: require('@img/home/ourPartners/bitKeep.png'),
      link: 'https://bitkeep.com',
    },
    {
      img: require('@img/home/ourPartners/tofunft.png'),
      link: 'https://tofunft.com/collection/bovineverse-igo-mystery-box/items',
    },
  ],
  // 第四行
  [
    {
      img: require('@img/home/ourPartners/gateChain.png'),
    },
    {
      img: require('@img/home/ourPartners/spaceId.png'),
    },
    {
      img: require('@img/home/ourPartners/treasure.png'),
    },
  ],
  // 第五行
  [
    {
      img: require('@img/home/ourPartners/clock-capital.png'),
    },
    {
      img: require('@img/home/ourPartners/monday-capital.png'),
    },
    {
      img: require('@img/home/ourPartners/mg-capital.png'),
    },
  ],
  // 第六行
  [
    {
      img: require('@img/home/ourPartners/certik.png'),
      link: 'https://www.certik.com/projects/bovine-verse',
    },
    {
      img: require('@img/home/ourPartners/zero-vc.png'),
    },
    {
      img: require('@img/home/ourPartners/ambire.png'),
    },
  ],
]);

/**
 * 处理跳转链接
 */
function handleLink(link) {
  if (!link) return;
  window.open(link);
}
</script>

<template>
  <div class="our-partners-wrap section mob-ex-section home-wow animate__fadeInUpBig">
    <!-- 标题 -->
    <TitleComp :text="$t('home.27')" />

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

<style lang="scss" scoped>
.our-partners-wrap {
  padding: 0 vw(360);

  @media (max-width: $pad) {
    padding: 1.3rem 0.3rem 0 !important;
  }
  .partner-row {
    @include flexPos(space-between);

    &:not(:first-child) {
      margin-top: vw(57);
    }
  }
  .partner-logo {
    width: vw(366);
    cursor: pointer;

    @media (max-width: $pad) {
      width: 2.09rem;
    }
  }
}
</style>
