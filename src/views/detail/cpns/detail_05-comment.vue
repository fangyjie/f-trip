<script setup>
  import useDetailStore from '@/stores/modules/detail'
  import DetailSection from '@/components/detail-section/detail-section.vue'

  const detailStore = useDetailStore()
  const comment = detailStore.houseDetail.mainPart.dynamicModule.commentModule
</script>

<template>
  <div class="comment">
    <detail-section
      title="热门评论"
      :more="`查看全部${comment.totalCount}评论`"
    >
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="num">{{ comment.overall }}</span>
              <div class="line"></div>
            </div>
            <div class="info">
              <span class="title">{{ comment.scoreTitle }}</span>
              <span class="count">{{ comment.totalCount }}条评论</span>
              <van-rate
                :model-value="comment.overall"
                readonly
                allow-half
                :size="12"
                color="#ff9854"
              />
            </div>
          </div>
          <div class="right">
            <template v-for="item in comment.subScores" :key="item">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="tag in comment.commentTagVo" :key="tag.text">
            <div
              class="tag"
              :style="{
                color: tag.color,
                backgroundColor: tag.backgroundColor
              }"
            >
              {{ tag.text }}
            </div>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatars">
              <img :src="comment.comment.userAvatars" alt="" />
            </div>
            <div class="profile">
              <span class="name">{{ comment.comment.userName }}</span>
              <span class="time">{{ comment.comment.checkInDate }}</span>
            </div>
          </div>
          <div class="text">
            {{ comment.comment.commentDetail }}
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
  .comment-inner {
    .header {
      display: flex;

      .left {
        display: flex;
        align-items: center;

        .score {
          width: 65px;
          height: 100%;
          color: #333;
          font-weight: 600;
          position: relative;

          .num {
            font-size: 48px;
            position: relative;
            z-index: 3;
          }

          .line {
            width: 66px;
            height: 6px;
            background-image: var(--theme-linear-gradient);
            border-radius: 3px;
            position: absolute;
            bottom: 6px;
            z-index: 2;
          }
        }

        .info {
          margin-left: 19px;
          font-size: 12px;
          color: #333;
          display: flex;
          flex-direction: column;

          .count {
            margin: 3px 0;
            color: #999;
          }
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        .item {
          margin-left: 5px;
          font-size: 12px;
          color: #666;
        }
      }
    }

    .tags {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;

      .tag {
        padding: 3px 5px;
        margin-right: 8px;
        margin-top: 5px;
        border-radius: 8px;
        font-size: 12px;
      }
    }

    .content {
      font-size: 12px;
      padding: 10px;
      border-radius: 6px;
      background-color: #f7f9fb;

      .user {
        display: flex;

        .avatars {
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }

        .profile {
          margin-left: 8px;
          display: flex;
          flex-direction: column;

          .name {
            font-size: 14px;
          }

          .time {
            color: #999;
            margin-top: 3px;
          }
        }
      }

      .text {
        color: #333;
        line-height: 16px;
        margin-top: 16px;
      }
    }
  }
</style>
