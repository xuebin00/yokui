< nut - cell: show - icon = "true"
title = "请选择城市": desc = "cityCustmer"
@click.native = "openSwitch('isVisible2')" >
   <
   /nut-cell> <
   nut - picker: is - visible = "isVisible2": default -value - data = "defaultValueData": list - data = "custmerCityData"
@close = "closeSwitch('isVisible2')"
@confirm = "setChooseValueCustmer"
@choose = "updateChooseValueCustmer"
@close - update = "closeUpdateChooseValueCustmer" >
   < /nut-picker>


const APIData = [{
      label: 1,
      array: [{
            label: 1,
            value: '朝阳区'
         },
         {
            label: 2,
            value: '海淀区'
         },
         {
            label: 3,
            value: '大兴区'
         },
         {
            label: 4,
            value: '东城区'
         },
         {
            label: 5,
            value: '西城区'
         },
         {
            label: 6,
            value: '丰台区'
         }
      ]
   },
   {
      label: 2,
      array: [{
            label: 1,
            value: '黄浦区'
         },
         {
            label: 2,
            value: '长宁区'
         },
         {
            label: 3,
            value: '普陀区'
         },
         {
            label: 4,
            value: '杨浦区'
         },
         {
            label: 5,
            value: '浦东新区'
         }
      ]
   }
];
export default {
   data() {
      return {
         option: '请选择',
         isVisible: false,
         listData: [
            [{
                  label: 1,
                  value: '南京市',
               },
               {
                  label: 2,
                  value: '无锡市',
               },
               {
                  label: 3,
                  value: '海北藏族自治区',
               },
               {
                  label: 4,
                  value: '北京市',
               },
               {
                  label: 5,
                  value: '连云港市',
               },
               {
                  label: 6,
                  value: '浙江市',
               },
               {
                  label: 7,
                  value: '江苏市',
               },
               {
                  label: 8,
                  value: '大庆市',
               },
               {
                  label: 9,
                  value: '绥化市',
               },
               {
                  label: 10,
                  value: '潍坊市',
               },
               {
                  label: 11,
                  value: '请按市',
               },
               {
                  label: 12,
                  value: '乌鲁木齐市',
               },
            ],
         ]
         defaultValueData: null,
         option1: '请选择',
         isVisible1: false,
         listData1: [
            ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            ['上午', '下午', '晚上']
         ],
         defaultValueData1: null,
         option3: '请选择',
         isVisible3: false,
         cityCustmer: '请选择',
         isVisible2: false,
         custmerCityData: [
            [{
                  label: 1,
                  value: '北京'
               },
               {
                  label: 2,
                  value: '上海'
               }
            ]
         ]
      };
   },
   mounted() {
      this.defaultValueData = [this.listData[0][3]];
      this.defaultValueData1 = ['周四', '下午'];
   },
   methods: {
      openSwitch(param) {
         this[`${param}`] = true;
      },

      closeSwitch(param) {
         this[`${param}`] = false;
      },

      setChooseValueCustmer(chooseData) {
         var str = chooseData.map(item => item.value).join('-');
         this.cityCustmer = str;
      },

      closeUpdateChooseValueCustmer(self, chooseData) {
         //此处模拟查询API，如果数据缓存了不需要再重新请求
         setTimeout(() => {
            let {
               label,
               value
            } = chooseData[0];
            var resItems = APIData.find(item => item.label == label);
            if (resItems && resItems.array.length) {
               this.$set(this.custmerCityData, 1, resItems.array);

               // 复原位置
               self.updateChooseValue(self, 0, chooseData[0]);
               self.updateChooseValue(self, 1, chooseData[1]);
            }
         }, 100);
      },

      updateChooseValueCustmer(self, index, resValue, cacheValueData) {
         // 本demo为二级联动，所以限制只有首列变动的时候触发事件
         if (index === 0) {
            //此处模拟查询API，如果数据缓存了不需要再重新请求
            let {
               label,
               value
            } = resValue;
            setTimeout(() => {
               var resItems = APIData.find(item => item.label == label);
               if (resItems && resItems.array.length) {
                  this.$set(this.custmerCityData, 1, resItems.array);
                  // 更新第二列位置
                  self.updateChooseValue(self, index + 1, this.custmerCityData[1][0]);
               }
            }, 100);
         }
      }
   }
};