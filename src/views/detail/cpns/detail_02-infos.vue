<script setup>
  import useDetailStore from '@/stores/modules/detail'

  const detailStore = useDetailStore()
  const top = detailStore.houseDetail.mainPart.topModule
</script>

<template>
  <div class="infos">
    <div class="name">{{ top.houseName }}</div>
    <div class="tags">
      <template v-for="tag in top.houseTags" :key="tag.tagCode">
        <span
          v-if="tag.tagText"
          class="tag"
          :style="{
            color: tag.tagText.color,
            background: tag.tagText.background.color
          }"
        >
          {{ tag.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="overall">{{ top.commentBrief.overall }}</span>
        <span class="score-title">{{ top.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ top.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">
          {{ top.commentBrief.totalCount }}条评论
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="position extra">
      <div class="left">
        <span>{{ top.nearByPosition.address }}</span>
      </div>
      <div class="right">
        <span> 地图·周边 </span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .infos {
    padding: 16px;

    .name {
      font-weight: 700;
      font-size: 20px;
      color: #333;
      text-align: justify;
      line-height: 24px;
      overflow: hidden;
      margin-bottom: 6px;
    }

    .tags {
      margin: 10px 0;
      display: flex;

      .tag {
        font-size: 12px;
        margin: 0 2px;
        padding: 1px 3px;
      }
    }

    .extra {
      font-size: 12px;
      border-radius: 5px;
      background-color: #f5f7fa;
      margin: 12px 0;
      padding: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .right {
        color: var(--primary-color);
      }
    }

    .comment {
      .left {
        color: #333;

        .overall {
          font-size: 18px;
          font-weight: 700;
        }

        .score-title {
          font-weight: 700;
          margin: 0 3px;
        }

        .brief {
          color: #666;
        }
      }
    }

    .position {
      .left {
        color: #333;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
</style>
