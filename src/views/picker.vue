<template>
   <div class="picker">
      <div class="picker-warp">
         <div class="picker-box">
            <div class="picker-dt">基础用法</div>
            <div class="picker-dd">
               <div class="item">
                  <div class="title">选城市</div>
                  <div class="val"></div>
               </div>
               <div class="item">
                  <div class="title">选时间</div>
                  <div class="val"></div>
               </div>
               <div class="item" @click="show = true">
                  <div class="title">2级联动</div>
                  <div class="val">
                     <span v-for="(item, index) in twoChooseVal">
                        {{ item }}<em v-if="index < 1">-</em>
                     </span>
                  </div>
               </div>
               <div class="item" @click="address = true">
                  <div class="title">3级联动</div>
                  <div class="val">
                     <span v-for="(item, index) in addressChooseVal">
                        {{ item }}<em v-if="index < 2">-</em>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <yok-picker
         :visible="show"
         @close="show = false"
         :data-list="twolist"
         @choose="towChooseItem"
         @confirm="towConfirm"
      >
      </yok-picker>
      <yok-picker
         :visible="address"
         :default-value="defaultVal"
         :data-list="addressData"
         @close="address = false"
         @close-update="closeUpdate"
         @choose="addressChoose"
         @confirm="addressConfirm"
      >
      </yok-picker>
   </div>
</template>

<script>
import citydata from "./citydata.js";
export default {
   data() {
      return {
         show: false,
         address: false,
         addressData: [],
         defaultVal: [2, 6, 15],
         addressChooseVal: [],
         twolist: [
            [
               {
                  id: 1,
                  name: "北京"
               },
               {
                  id: 2,
                  name: "上海"
               }
            ],
            [
               {
                  id: 1,
                  name: "朝阳区"
               },
               {
                  id: 2,
                  name: "海淀区"
               },
               {
                  id: 2,
                  name: "通州区"
               }
            ]
         ],
         twoChooseVal: []
      };
   },
   mounted() {
      this.addressData = this.flatten(this.defaultVal);
   },
   methods: {
      flatten(defaultVal) {
         let result = [];
         let flattenFn = data => {
            let pre = [];
            data.forEach((item, index) => {
               pre.push(item);
               if (item.child && defaultVal.indexOf(item.id) > -1) {
                  flattenFn(item.child);
               }
            });
            result.unshift(pre);
         };
         flattenFn(citydata);
         return result;
      },
      addressChoose(self, val, index) {
         // 设置第2列
         if (index === 1) {
            let chooseCity = citydata.find(item => {
               return item.id === val.id;
            });
            this.$set(this.addressData, index, chooseCity.child);
         }
         // 设置第3列
         if (index === 2) {
            this.setDist(index, val);
         }
         self.updateChooseval(index);
      },
      setDist(index, parentVal) {
         let distArr = this.addressData[index - 1].find(item => {
            return item.id === parentVal.id;
         });
         this.$set(this.addressData, index, distArr.child);
      },
      addressConfirm(val) {
         this.addressChooseVal = val.map(item => {
            return item.name;
         });
         let chooseVal = val.map(item => {
            return item.id;
         });
         let addressData = this.flatten(chooseVal);
         // 保存选中数据
         this.$set(this.addressData, 1, addressData[1]);
         this.$set(this.addressData, 2, addressData[2]);
         this.defaultVal = chooseVal;
      },
      closeUpdate(chooseVal) {
         let addressData = this.flatten(chooseVal);
         // 复原位置
         this.$set(this.addressData, 1, addressData[1]);
         this.$set(this.addressData, 2, addressData[2]);
      },
      towChooseItem(self, val, index) {
         let data = [
            {
               pid: 1,
               child: [
                  {
                     id: 1,
                     name: "朝阳区"
                  },
                  {
                     id: 2,
                     name: "海淀区"
                  },
                  {
                     id: 2,
                     name: "通州区"
                  }
               ]
            },
            {
               pid: 2,
               child: [
                  {
                     id: 1,
                     name: "浦东新区"
                  },
                  {
                     id: 2,
                     name: "静安区"
                  },
                  {
                     id: 3,
                     name: "普陀区"
                  }
               ]
            }
         ];
         let childArr = data.find(item => {
            return item.pid === val.id;
         });
         this.$set(this.twolist, index, childArr.child);
         self.updateChooseval(index);
      },
      towConfirm(val) {
         this.twoChooseVal = val.map(item => {
            return item.name;
         });
      }
   }
};
</script>

<style lang="less">
.picker {
   background: #f7f8fa;
   padding: 0;
   margin: 0;

   &-warp {
   }

   &-box {
      width: 100%;
   }

   &-dt {
      color: rgba(69, 90, 100, 0.6);
      border-bottom: 1px solid #ccc;
      padding: 10px;
   }

   &-dd {
      background: #fff;
      padding: 0 10px;

      .item {
         padding: 10px 0;
         border-bottom: 1px solid #ccc;
         color: #333;
         display: flex;
         justify-content: space-between;
         .val {
            padding-right: 10px;
         }
      }
   }
   .content {
      padding: 10px;
   }
}
</style>
