<script setup>
  import useDetailStore from '@/stores/modules/detail'
  import DetailSection from '@/components/detail-section/detail-section.vue'

  const detailStore = useDetailStore()
  const houseFacility =
    detailStore.houseDetail.mainPart.dynamicModule.facilityModule.houseFacility
  const res = []
  for (let i = 0; i < houseFacility.houseFacilitys.length; i++) {
    if (houseFacility.facilitySort.includes(i))
      res.push(houseFacility.houseFacilitys[i])
  }
  const houseFacilitys = res
</script>

<template>
  <div class="facility">
    <detail-section title="房屋设施" more="查看全部设施">
      <div class="facility-inner">
        <template v-for="item in houseFacilitys" :key="item.groupId">
          <div class="item">
            <div class="header">
              <img :src="item.icon" alt="" />
              <span class="name">
                {{ item.groupName }}
              </span>
            </div>
            <div class="list">
              <template
                v-for="facility in item.facilitys.slice(0, 4)"
                :key="facility.orderTndex"
              >
                <div class="iten">
                  <img src="@/assets/img/detail/icon_check.png" alt="" />
                  <span class="name">
                    {{ facility.name }}
                  </span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
  .facility {
    .facility-inner {
      padding: 5px 0;
      border-radius: 6px;
      font-size: 12px;
      background-color: #f5f7fa;

      .item {
        margin: 25px 0;
        display: flex;
        align-items: center;

        .header {
          width: 90px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
          }

          .name {
            margin-top: 5px;
          }
        }

        .list {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          align-content: center;

          .iten {
            box-sizing: border-box;
            width: 50%;
            margin: 4px 0;
            display: flex;
            align-items: center;

            img {
              width: 12px;
              height: 12px;
              margin: 0 6px;
            }
          }
        }
      }
    }
  }
</style>
