<script setup>
  import useDetailStore from '@/stores/modules/detail'
  import DetailSection from '@/components/detail-section/detail-section.vue'

  const detailStore = useDetailStore()
  const landlord = detailStore.houseDetail.mainPart.dynamicModule.landlordModule
</script>

<template>
  <div class="landlord">
    <detail-section title="房东介绍" more="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord.topScroll" alt="" />
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="" />
            </div>
            <div class="info">
              <div class="name">
                {{ landlord.hotelName }}
              </div>
              <div class="tags">
                <template
                  v-for="(tag, index) in landlord.hotelTags"
                  :key="index"
                >
                  <div class="tag" :style="{ color: tag.tagText.color }">
                    <span class="text">{{ tag.tagText.text }}</span>
                    <span
                      class="divider"
                      v-if="index != landlord.hotelTags.length - 1"
                    >
                      |
                    </span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="item in landlord.hotelSummary" :key="item.title">
            <div class="item">
              <span class="title">{{ item.title }}</span>
              <span class="introduction">{{ item.introduction }}</span>
              <span class="tip">{{ item.tip }}</span>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
  .landlord {
    .intro {
      .top {
        img {
          width: 100%;
        }
      }

      .header {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          align-items: center;

          .avatar {
            img {
              width: 54px;
              height: 54px;
            }
          }

          .info {
            margin-left: 8px;

            .name {
              margin-top: 8px;
              font-size: 16px;
              font-weight: 600;
            }

            .tags {
              margin-top: 5px;
              font-size: 12px;
              display: flex;

              .tag {
                .divider {
                  margin: 0 5px;
                }
              }
            }
          }
        }

        .right {
          margin-left: 5px;

          .contact {
            width: 72px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            border-radius: 5px;
            font-size: 12px;
            color: #fff;
            background-image: var(--theme-linear-gradient);
          }
        }
      }

      .bottom {
        margin: 50px 10px 10px;
        display: flex;
        justify-content: space-between;

        .item {
          font-size: 12px;
          display: flex;
          flex-direction: column;

          .title {
            color: #999;
          }

          .introduction {
            margin: 5px 0;
            font-size: 18px;
            font-weight: 700;
            color: #333;
          }

          .tip {
            color: #666;
          }
        }
      }
    }
  }
</style>
