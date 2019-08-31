<template>
    <div class="contentBox">
        <el-card shadow="always">
            <el-row >
                <el-col :span='5'>
                    <h3 class='tit' >Gdemate需求面板</h3>
                </el-col>

                <!--<el-col :span='10' align='center'>
                     <el-input placeholder="请输入标题搜索"  class="input-with-select">
                        <el-select style="width:120px;" v-model.trim="storage.sortKeyString" slot="prepend" placeholder="请选择排序方式">
                            <el-option label="标题" value="name"></el-option>
                            <el-option label="businessNo" value="businessNo"></el-option>
                        </el-select>
                    </el-input>
                </el-col>-->

                <el-col :span='18' align='right'>

                    <el-input placeholder="请输入标题搜索"  @change="handleFilter"   v-model.trim="searchKey" class="input-with-select">
                        <!--@keyup.enter.native="handleFilter"-->
                        <el-select style="width:150px;"  slot="prepend" placeholder="按标题搜索">
                            <el-option label="按标题搜索" value="按标题搜索"></el-option>

                           </el-select>
                        <!--<el-select style="width:180px;" v-model.trim="storage.sortKeyString" slot="prepend" placeholder="请选择排序方式">
                            <el-option label="请选择排序方式" value=""></el-option>
                            <el-option label="标题" value="name"></el-option>
                            <el-option label="默认Id" value="gdemateDemandId"></el-option>
                            <el-option label="编号" value="businessNo"></el-option>
                            <el-option label="创建时间" value="createDate"></el-option>
                            <el-option label="pmsId" value="pmsId"></el-option>
                           </el-select>-->
                        <el-button slot="append" icon="el-icon-search" @click="handleFilter"></el-button>
                    </el-input>
                </el-col>
            </el-row>
            <!--<el-row>
                <el-col :span='5'>
                <el-input size="small" maxlength="30" type="text" v-model="searchData" placeholder="请输入模糊标题关键字并Enter" @change="searchTableDataComputed">
                </el-input>
                </el-col>
            </el-row>-->
            <!--header-row-class-name="headercss"-->
            <!--max-height="720"-->
            <el-table
                tooltip-effect="dark"
                ref="filterTable"
                :data='tableData | pagination(storage.pageNo, storage.pageSize,searchKey,isFilterMode)'
                border
                stripe
                class="tb-edit"
                min-row-height="32"
                max-height="730"
                highlight-current-row
                @sort-change='getDataFromBack'
                style="width: 100%;margin:20px 0 0 0;"
                @filter-change='handleFilterChange'>
                <el-table-column
                    fixed
                    type="index"
                    width="50"
                    align="center">
                </el-table-column>

                 <!--:filters="headFilters['name']"-->
                <!--:filter-method="handleHeadFilters"-->
                <el-table-column
                    fixed
                    sortable="custom"
                    show-overflow-tooltip
                    prop="name"
                    label="标题"
                    min-width="180"
                    align="left"
                    column-key="name"
                    >
                    <!--:filters="headFilters['name']"
                    :filter-method="filterHandlerFromBackEnd"-->
                    <!--filterHandlerFromBackEnd
                    :filter-method="handleHeadFilters"-->
                 <template slot-scope="scope">
                 <a :href="`http://plm-pms.huawei.com/Windchill/rawreq/rawReqFlow/flowByNumber.do?number=`+scope.row.pmsId" target='_blank'>{{scope.row.name}}</a>
                 </template>

         <!--<template slot-scope="scope">
             <!--<el-input v-model="search" style="display: inline-block;width: 1300px"  placeholder="请输入搜索内容">-->
            <!--<a>{{scope.row.name}}</a>-->
               <!--</el-input>-->
        <!--</template>-->
                </el-table-column>
                <el-table-column
                    fixed
                    sortable="custom"
                    show-overflow-tooltip
                    prop="businessNo"
                    label="businessNo"
                    min-width="140"
                    align="center"
                    >
                 </el-table-column>
                <el-table-column
                    fixed
                    sortable
                    prop="subType"
                    label="subType"
                    min-width="140"
                    align="center"
                    column-key="subType"
                :filters="headFilters['subType']"
                :filter-method="filterHandlerFromBackEnd">
                </el-table-column>
                <el-table-column
                    sortable
                    prop="groupName"
                    label="团队名称"
                    min-width="140"
                    align="center"
                    column-key="groupName"
                :filters="headFilters['groupName']"
                :filter-method="filterHandlerFromBackEnd">
                </el-table-column>
                <!--<el-table-column
                    sortable
                    prop="businessNo"
                    label="businessNo"
                    min-width="120"
                    align="center"
                    >
                    <template slot-scope='scope'>
                        <el-button type='text' @click='handleMRDetail(scope.column,scope.row)'>{{scope.row.businessNo}}</el-button>
                    </template>
                </el-table-column>-->

<!--从这里开始按照次序显示52条返回数据-->
                 <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="completedDate"
                    label="completedDate"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="completed_analysis_time"
                    label="completed_analysis_time"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable="custom"
                    show-overflow-tooltip
                    prop="createDate"
                    label="createDate"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="creator"
                    label="creator"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="customProps_name"
                    label="customProps_name"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="customProps_value"
                    label="customProps_value"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="de"
                    label="de"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="delivererOwner"
                    label="delivererOwner"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="description"
                    label="description"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="completedDate"
                    label="completedDate"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="domain"
                    label="domain"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="domainName"
                    label="domainName"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="domainWorkloadManday"
                    label="domainWorkloadManday"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="estimatedWorkloadManday"
                    label="estimatedWorkloadManday"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="expectedImplementationDate"
                    label="expectedImplementationDate"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="fromSource"
                    label="fromSource"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="groupName"
                    label="groupName"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="health_degree"
                    label="health_degree"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="id"
                    label="id"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <!--<el-table-column
                    sortable
                    prop="isCollaborateWriteback"
                    label="isCollaborateWriteback"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <!--<el-table-column
                    sortable
                    prop="isCollaborated"
                    label="isCollaborated"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
               <el-table-column
                    sortable
                    prop="isDecompose"
                    label="是否分解"
                    min-width="150"
                    align="center"
                    column-key="isDecompose"
                    :filters="headFilters['isDecompose']"
                    :filter-method="filterHandlerFromBackEnd">
                </el-table-column>
                <!--<el-table-column
                    sortable
                    prop="isNotSyncMks"
                    label="isNotSyncMks"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <!--<el-table-column
                    sortable
                    prop="isParent"
                    label="isParent"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <el-table-column
                    sortable
                    prop="mksId"
                    label="mksId"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="modifiedBy"
                    label="modifiedBy"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="offeringToImplementDate"
                    label="offeringToImplementDate"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
                <!--<el-table-column
                    sortable
                    prop="orreringPeriodsAfterBIDContractSigned"
                    label="orreringPeriodsAfterBIDContractSigned"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <!--<el-table-column
                    sortable
                    prop="parentId"
                    label="parentId"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <el-table-column
                    sortable
                    prop="pi"
                    label="pi"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="piName"
                    label="piName"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="pmsId"
                    label="pmsId"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="pmsOwner"
                    label="pmsOwner"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="priorityLevel"
                    label="priorityLevel"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <!--<el-table-column
                    sortable
                    prop="process"
                    label="process"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <!--<el-table-column
                    sortable
                    prop="rrids"
                    label="rrids"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>-->
                <el-table-column
                    sortable
                    prop="seId"
                    label="seId"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="serviceId"
                    label="serviceId"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="serviceName"
                    label="serviceName"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="sourceProject"
                    label="sourceProject"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="submitter"
                    label="submitter"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    prop="sumWorkloadManday"
                    label="sumWorkloadManday"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="targetCustomer"
                    label="targetCustomer"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="completedDate"
                    label="completedDate"
                    min-width="130"
                    align="center"
                    >
                </el-table-column>

<!--从这里结束按照次序显示52条返回数据-->
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="turn_analysis_time"
                    label="turn_analysis_time"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    sortable
                    show-overflow-tooltip
                    prop="turn_test_time"
                    label="turn_test_time"
                    min-width="180"
                    align="center"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="process"
                    label="process"
                    min-width="150"
                    align="center"
                    column-key="process"
                    :filters="headFilters['process']"
                    :filter-method="filterHandlerFromBackEnd">
                </el-table-column>
                 <el-table-column
                    sortable
                    prop="type"
                    label="type"
                    min-width="150"
                    align="center"
                    >
                </el-table-column>
            </el-table>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="storage.pageNo"
                :page-size="storage.pageSize"
                :page-sizes="[20, 50, 100]"
                layout="total, prev, pager, next, sizes, jumper"
                :total="totalSize"
                class="marT20">
                <!--:total="tableData.length"-->

            </el-pagination>
        </el-card>

        <!--工作量表统计页面测试-->
         <!-- 工作量合计表格 -->
  <!--<el-card shadow="always" style="margin:10px 0 0 0;">
    <el-table show-summary :max-height="400" border sum-text="工作量合计"
      :summary-method="getSummaries"
      :data='tableData | pagination(storage.pageNo, storage.pageSize)'
      border
      stripe
      style="width:100%; margin:10px 0 0 0;">
      <el-table-column
        prop="groupName"
        sortable
        label="团队名称"
        show-overflow-tooltip
        :filters="headFilters['groupName']"
        :filter-method="handleHeadFilters">
        <template slot-scope="scope">
          <span>{{scope.row.groupName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="seId"
        sortable
        prop="seId"
        :filters="headFilters['seId']"
        :filter-method="handleHeadFilters"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.seId}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="submitter"
        sortable
        :filters="headFilters['submitter']"
        :filter-method="handleHeadFilters"
        label="submitter"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.submitter}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="piName"
        label="交付版本"
        sortable
        :filters="headFilters['piName']"
        :filter-method="handleHeadFilters"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.piName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="sumWorkloadManday"
        label="工作量（KL）"
        sortable
        :filters="headFilters['sumWorkloadManday']"
        :filter-method="handleHeadFilters"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.sumWorkloadManday}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="storage.pageNo"
        :page-size="storage.pageSize"
        :page-sizes="[20, 50, 100]"
        layout="total, prev, pager, next, sizes, jumper"
        :total="tableData.length"
        class="marT20">
     </el-pagination>
  </el-card>-->
  <!-- 字段隐藏配置对话框 -->
    </div>

</template>

<script>
import { mapState} from 'vuex'
    export default {
        data(){
            return {
                headFilters:{},
                headFiltersFullData:{},
                storage:{
                    uuid:"gdemateDemand",
                    selectedDate:[],
                    timepickval:"",
                    pageNo:1,
                    pageSize:50,
                    sortKeyString:"gdemateDemandId",
                    // headFiltersFullData:{},
                },
                totalSize:0,
                searchKey:'',
                searchData: "",
                isFilterMode:false,
                tableDataBackup:[],
                tableDataSearched:[],
                tableData:[],
                startDate:"",
                endDate:"",
                originData:[],
                weeknum:0,
                options:[
                    {
                        value:"周",
                        label:"周"
                    },
                    {
                        value:'月',
                        label:"月"
                    },
                ],
            }
        },
        computed:{
            //     getFilterHeaderFromBack(){
            //     let _this = this;
            //     this.$axios.get(this.$envProd+'/rest/v1/getGdemateFullOverview')
            //         .then(res=>{
            //         _this.tableDataBackup = res.data.overviews;
            //         // _this.tableData = res.data.overviews;在更新header时候不能修改原表格数据
            //         // _this.originData = _this.tableData.slice();
            //         if(_this.tableDataBackup.length>50){
            //             // debugger
            //         [ 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
            //             _this.headFilters[column] = _this.extractHeadFilters(_this.tableDataBackup, column)
            //         });
            //      _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
            //         }
            //         else{
            //         [ "name",'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
            //             _this.headFilters[column] = _this.extractHeadFilters(_this.tableDataBackup, column)
            //         });
            //         }
            //   debugger
            //         // return _this.headFilters

            //     }).catch(()=>{
            //         _this.$message.error('您请求Filter错误！')
            //     })
            // },



      searchTableDataComputed() {
               var _this = this;
               var tableDataTemp = [];
                // if(_this.searchData==""){
                //      tableDataTemp= _this.tableDataBackup;
                //      _this.tableData = tableDataTemp;
                //       ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                //         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                //     });
                //  _this.headFilters['name'] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                //    }
               _this.tableDataBackup.map(function(item) {
                  if (
                    //   item.groupName.search(_this.searchData) != -1 ||
                      item.name.search(_this.searchData) != -1
                     ) {
                          tableDataTemp.push(item);
                    }
                 });
              if(tableDataTemp.length!=0&&tableDataTemp.length<=500){

                     _this.tableData = tableDataTemp;
                     this.storage.pageNo = 1;
                    //  debugger
                      ['name', 'groupName', 'subType','isDecompose', 'process', "piName"].forEach((column) => {
                        _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                    });
                }
              else{
                     tableDataTemp= _this.tableDataBackup;
                     _this.tableData = tableDataTemp;
                     this.storage.pageNo = 1;

                      ['groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
                        _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                    });
                 _this.headFilters['name'] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                   }
            //  return _this.tableData,_this.headFilters;
              },


    // searchTableData() {
    //   var _this = this;
    //   var tableDataTemp = [];
    //   _this.tableData.map(function(item) {
    //     if (
    //     //   item.name.search(_this.searchData) != -1 ||
    //       item.name.search(_this.searchData) != -1
    //     ) {
    //       tableDataTemp.push(item);
    //     }
    //   });
    //     _this.tableData = tableDataTemp;
    //   return _this.tableData;
    // },

            getMonthStartAndEnd(){
                return function(monthcount){
                    let startEnd = new Array();
                    let currentDate = new Date();
                    let month=currentDate.getMonth()+monthcount;
                    if(month<0){
                        let n = parseInt((-month)/12);
                        month += n*12;
                        currentDate.setFullYear(currentDate.getFullYear()-n);
                    }
                    currentDate = new Date(currentDate.setMonth(month));
                    let currentMonth = currentDate.getMonth();
                    let currentYear = currentDate.getFullYear();
                    let currentMonthFirstDay = new Date(currentYear, currentMonth,1);
                    let currentMonthLastDay = new Date(currentYear, currentMonth+1, 0);
                    startEnd.push(this.getDateStr(currentMonthFirstDay));
                    startEnd.push(this.getDateStr(currentMonthLastDay));
                    return startEnd;
                }
            },
            getDateStr(){
               return function(date){
                    let year = "";
                    let month = "";
                    let day = "";
                    let now = date;
                    year = ""+now.getFullYear();
                    if((now.getMonth()+1)<10){
                        month = "0"+(now.getMonth()+1);
                    }else{
                        month = ""+(now.getMonth()+1);
                    }
                    if((now.getDate())<10){
                        day = "0"+(now.getDate());
                    }else{
                        day = ""+(now.getDate());
                    }
                    return year+"-"+month+"-"+day;
                }
            },
           getTime(){
              return function (n){
                let now=new Date();
                let year=new Date().getFullYear();
                let month=new Date().getMonth()+1;
                let date=new Date().getDate();
                let day=new Date().getDay();
                if(day!==0){
                    n=n+(day-1);
                }else{
                    n=n+day;
                }
                if(day){
                    //这个判断是为了解决跨年的问题
                    if(month>1){
                        month=month;
                    }
                    //这个判断是为了解决跨年的问题,月份是从0开始的
                    else{
                        year=year-1;
                        month=12;
                    }
                }
                now.setDate(now.getDate()-n);
                year=now.getFullYear();
                month=now.getMonth()+1;
                date=now.getDate();
                let weekarr=year+"-"+(month<10?('0'+month):month)+"-"+(date<10?('0'+date):date);
                return weekarr;
            }
           }
        },

        methods:{

clearFilter() {
        this.$refs.filterTable.clearFilter();
      },

filterHandlerFromBackEnd(value, row, column) {
        let _this = this;
        // _this.tableData=_this.tableDataBackup;
        const property = column['property'];
        // debugger
        return row[property] === value;
      },
            //custom sortable by Guobinqaun
getDataFromBack(column,prop,order){
        // 执行了2次
      	console.log(1)
        console.log(column)
        console.log(prop)
        console.log(order)
        let _this = this;

        // debugger
        if(this.searchKey.length>0 || this.isFilterMode==true){
             _this.storage.sortKeyString=column.prop;
            _this.tableData = _this.tableData.sort(function (a, b) {
                if(column.order=="ascending"){
            // return (a[column.prop] - b[column.prop]);

            return a[column.prop].localeCompare(b[column.prop]) ;
        }
            // else {return (b[column.prop] - a[column.prop]);}
            else {return b[column.prop].localeCompare(a[column.prop]);}
});
            // debugger
        }
        else{
            let _this = this;
            _this.storage.sortKeyString=column.prop;
                this.$axios.post(this.$envProd+'/rest/v1/getGdemateFullOverviewPagableSortble',{
                    pageNo: _this.storage.pageNo,
                    pageSize: _this.storage.pageSize,
                    isAscend: (column.order=="ascending"),
                    sortKeyString:_this.storage.sortKeyString,
                })
                    .then(res=>{
                    _this.totalSize = res.data.totalSize;
                    // _this.tableDataBackup = res.data.overviews;
                    _this.tableData = res.data.overviews;
                    _this.originData = _this.tableData.slice();

                    // debugger
                    //搜索后fiLter不需要执行
                //     if(_this.tableData.length>50){
                //     [ 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                //         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                //     });
                //  _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                //     }
                //     else{
                //     [ "name",'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                //         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                //     });
                // }
                //  _this.headFilters.push();//强制刷新
                //  debugger

                }).catch(()=>{
                    _this.$message.error('您翻页码时候的请求错误！')
                })

        }
      	// this.tableData = [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }]
      },
            //custom sortable by Guobinquan


  handleFilter(){
                // let thisSelect = this.selectItem;
                let thisSelect = "name";
                let _this = this;
                if(this.searchKey.length>0){//big-if
                        this.clearFilter();
                        this.isFilterMode=false;
                        // this.$message.('启用搜索模式！');
                        this.$message({
                             message: '您已进入搜索模式.',
                             type: 'success'
                             });
                        _this.storage.pageNo=1;
                        this.$axios.post(this.$envProd+'/rest/v1/getGdemateFullOverviewLikeName',{
                            pageNo: _this.storage.pageNo,
                            pageSize: _this.storage.pageSize,
                            isAscend: true,
                            sortKey: _this.storage.sortKeyString,
                            sortKeyString:_this.storage.sortKeyString,
                            searchKeyString:_this.searchKey
                        })
                            .then(res=>{
                            _this.totalSize = res.data.totalSize;
                            // _this.tableDataBackup = res.data.overviews;
                            _this.tableData = res.data.overviews;
                            _this.tableDataSearched=_this.tableData;
                            _this.originData = _this.tableData.slice();

                            //################实验替换Filter的方法
                             debugger
                                 ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                                _this.headFiltersFullData[column] = _this.extractHeadFilters(_this.tableData, column);
                                });
                           debugger
                        //     [ 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                        //         _this.headFiltersFullData[column] = _this.extractHeadFilters(_this.tableDataBackup, column) });
                        //    _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                            _this.headFilters= _this.headFiltersFullData;


                            //###############实验仅仅修改这上面的

                            // _this.tableDataBackup = _this.tableData;
                            //############################################################################
                            // if(_this.tableData.length>50){
                                // [ 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                                //     _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                                // });
                                // _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                            // }
                            // else{
                            //     [ "name",'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                            //         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                            //     });
                            // }
                            //####################################################################################
                        //  debugger
                    //    _this.headFilters.push();//强制刷新
                        }).catch(()=>{
                            _this.$message.error('您请求错误！')
                        })
                        // debugger
                        this.tableData = this.tableData.filter((A,B) => {
                            return A[thisSelect] && A[thisSelect].toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0;
                        });
                        // _this.tableDataSearched=_this.tableData;
                        this.storage.pageNo = 1;
                                // if(_this.tableData.length<50){
                                // // this.headFilters={};//重新初始化头部字段
                                // ['name', 'groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
                                // //  this.headFilters[column]={};
                                // debugger
                                // delete _this.headFilters[column];
                                // _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column);

                                //     });
                                // }
                                // else{
                                // // this.headFilters={};//重新初始化头部字段
                                // ['groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
                                // // _this.headFilters.remove(column);
                                // delete _this.headFilters[column];
                                // _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column);
                                //     });
                                // }
                }//big-if
                else{//big-if
                    this.$message({
                             message: '您已退出搜索模式.',
                             type: 'success'
                             });
                         this.storage.pageNo = 1;
                         this.clearFilter();
                         this.isFilterMode=false;
                         this.getGroupReviewData();
                        //  this.headFilters={};//重新初始化头部字段
                        //   ['name', 'groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
                        //   this.headFilters[column] = this.headFiltersFullData[column];
                        //   }
                }//big-if
                // debugger
            },

            getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if ('groupName' === column.property) {
            sums[index] = '工作量合计(Kl)';
            return;
          }
          if ('sumWorkloadManday' !== column.property) {
            sums[index] = '';
            return;
          }

          // 计算工作量汇总值
          const values = data.map(item => {
            return Number(item[column.property])
          });
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + value;
              } else {
                return prev;
              }
            }, 0);
            sums[index] = Number(sums[index]).toFixed(2) + ' (Kl)';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },

            searchTableData() {
               var _this = this;
               var tableDataTemp = [];
               _this.tableDataBackup.map(function(item) {
                  if (
                    //   item.name.search(_this.searchData) != -1 ||
                      item.name.search(searchData) != -1
                     ) {
                          tableDataTemp.push(item);
                    }
                 });
              if(tableDataTemp.length!=0){

                     _this.tableData = tableDataTemp;
                    //  debugger
                      ['name', 'groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
                        _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                    });
           //  _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];

                }
              else{
                     tableDataTemp= _this.tableDataBackup;
                     _this.tableData = tableDataTemp;
                      ['groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
                        _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
                    });
                 _this.headFilters['name'] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                   }
            //  return _this.tableData,_this.headFilters;
              },


            handleChange(val){
                this.storage.pageNo = 1;
                this.getGroupReviewData()
            },
            handleDownload(){
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['工号', '姓名', '团队名称', 'MR总数', '合入MR数量', '驳回MR数量','MR驳回率','MR平均代码量','审核代码量(增加)','审核代码量(删除)','评论数量','Issue评论数','Issue数量','平均意见&issue数量(个/KLoc)','MR平均打分数','评论数/MR数量']
                    const filterVal = ['userName', 'committer', 'groupName', 'mrCount', 'mergedCount', 'closedCount', 'rejectRate', 'avgMrCode','addCodeSize','deleteCodeSize','reviewCount','issueNoteCount','issueCount','avgIssueCode','avgVote','noteRate']
                    const tableData = this.tableData
                    const data = this.formatJson(filterVal, tableData)
                    excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: "Committer统计",
                    autoWidth: true
                    })
                })
            },

            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => {
                    return v[j];
                }))
            },

//g50003810重写过滤事件功能
            handleFilterChange(filters){
                let keys = Object.keys(filters);
                let newArr = [];
                keys.forEach(key=>{
                    newArr = filters[key]
                });
                if(newArr.length > 0 && this.tableData.length>0){
                    // debugger

                    if(this.searchKey.length>0 ){//如果是搜索模式下，默认选择在搜索数据下选取
                        // this.clearFilter();
                         this.tableData = this.tableDataSearched.filter(item => {//修改tableDataBackup为tableData
                        // debugger
                        return newArr.indexOf(item[keys[0]]) !== -1;
                    });
                }//搜索模式数据更新完毕
                   else if(this.searchKey.length==0){// && this.isFilterMode如果不在搜索状态下，则在全量数据中过滤
                        //  this.clearFilter();
                        if(this.isFilterMode){
                             this.tableData = this.tableData.filter(item => {//修改tableDataBackup为tableData
                                    return newArr.indexOf(item[keys[0]]) !== -1;
                                   });
                        }
                        else{
                            this.tableData = this.tableDataBackup.filter(item => {//修改tableDataBackup为tableData
                                    return newArr.indexOf(item[keys[0]]) !== -1;
                                   });
                        }
                    // if(this.tableData.length==0){
                    //     this.tableData = this.tableDataBackup.filter(item => {
                    //     return newArr.indexOf(item[keys[0]]) !== -1;
                    //     console.log("由连续筛选状态切换为全局重新多项勾选")
                    // });
                    // }
                }//非搜索模式数据更新完毕
                    // debugger
                    //  this.clearFilter();
                    this.isFilterMode = true;
                    this.storage.pageNo = 1;
                    this.totalSize = this.tableData.length;
                }else{

                    // this.$message.error('Filter条件被重置，请重新筛选！');
                     this.$message({
                             message: 'Filter条件已自动重置，请重新筛选...',
                             type: 'success'
                             });
                    // debugger
                        if(this.searchKey.length>0 ){//如果是搜索模式下，默认选择在搜索数据下选取//
                            this.clearFilter();
                            this.isFilterMode = false;//退选情况监测不到filter的值，即不允许该操作，必须重新选择
                            debugger
                            this.tableData = this.tableDataSearched
                            this.totalSize = this.tableDataSearched.length;
                            this.storage.pageNo = 1;
                        // this.isFilterMode = false;

                    }//搜索模式数据更新完毕

                        else{
                            // debugger
                            // this.tableData = this.originData;
                            this.clearFilter();
                            this.isFilterMode=false;
                            this.totalSize = this.tableDataBackup.length;
                            this.storage.pageNo = 1;
                            this.isFilterMode = false;
                            this.getGroupReviewData();
                         }
                }
            },
//g50003810重写过滤事件功能
//下方为旧版有问题的过滤（筛选功能）
            handleFilterChange_bug_old(filters){
                let keys = Object.keys(filters);
                let newArr = [];
                keys.forEach(key=>{
                    newArr = filters[key]
                });
                if(newArr.length > 0 && this.tableData.length>0){
                    // debugger

                    if(this.searchKey.length>0 ){//如果是搜索模式下，默认选择在搜索数据下选取
                        this.clearFilter();
                         this.tableData = this.tableData.filter(item => {//修改tableDataBackup为tableData
                        return newArr.indexOf(item[keys[0]]) !== -1;
                    });
                }
                else if(this.searchKey.length==0 && this.isFilterMode){//如果不在搜索状态下，且在过滤模式下，则在全量数据中过滤
                         this.clearFilter();
                         this.tableData = this.tableDataBackup.filter(item => {//修改tableDataBackup为tableData
                        return newArr.indexOf(item[keys[0]]) !== -1;
                    });
                    // if(this.tableData.length==0){
                    //     this.tableData = this.tableDataBackup.filter(item => {
                    //     return newArr.indexOf(item[keys[0]]) !== -1;
                    //     console.log("由连续筛选状态切换为全局重新多项勾选")
                    // });
                    // }
                }
                 else if(this.searchKey.length==0){
                    this.tableData = this.tableDataBackup.filter(item => {
                        return newArr.indexOf(item[keys[0]]) !== -1;
                    });
                 }
                    // debugger
                    //  this.clearFilter();
                    this.isFilterMode = true;
                    this.storage.pageNo = 1;
                    this.totalSize = this.tableData.length;
                }else{
                    // this.tableData = this.originData;
                    this.clearFilter();
                    this.isFilterMode=false;
                    this.totalSize = this.tableDataBackup.length;
                    this.storage.pageNo = 1;
                    this.isFilterMode = false;
                    this.getGroupReviewData();
                }
            },
            handlePrevDate(){
                if(this.storage.timepickval == "月"){
                    this.storage.selectedDate = [];
                    this.storage.selectedDate.push(this.getMonthStartAndEnd(this.weeknum-=1)[0]);
                    this.storage.selectedDate.push(this.getMonthStartAndEnd(this.weeknum)[1]);
                }else{
                    this.storage.selectedDate = [];
                    this.storage.selectedDate.push(this.getTime(this.weeknum+=7));
                    this.storage.selectedDate.push(this.getTime(this.weeknum-6));
                }
                this.storage.pageNo = 1;
                this.getGroupReviewData();
            },
            handleNextDate(){
                if(this.storage.timepickval == "月"){
                    this.storage.selectedDate = [];
                    this.storage.selectedDate.push(this.getMonthStartAndEnd(this.weeknum+=1)[0]);
                    this.storage.selectedDate.push(this.getMonthStartAndEnd(this.weeknum)[1]);
                }else{
                    this.storage.selectedDate = [];
                    this.storage.selectedDate.push(this.getTime(this.weeknum-=7));
                    this.storage.selectedDate.push(this.getTime(this.weeknum-6));
                }
                this.storage.pageNo = 1;
                this.getGroupReviewData();
            },
            changeDate(value){
                this.storage.selectedDate = [];
                if(value == "周"){
                     this.storage.selectedDate.push(this.getTime(0));
                     this.storage.selectedDate.push(this.getTime(-6));
                }else if(value == "月"){
                    this.storage.selectedDate = this.getMonthStartAndEnd(0)
                }else{
                    this.weeknum = 0
                }
                this.storage.pageNo = 1;
                this.getGroupReviewData();
            },
            handleSizeChange(val) {
                this.storage.pageSize=val;
                if(this.searchKey.length>0){
                    console.log("in searching mode!");
                }
                else{this.getGroupReviewData(this);}
            },
            handleCurrentChange(val) {
                this.storage.pageNo = val;
                if(this.searchKey.length>0 || this.isFilterMode){
                    // debugger
                    // this.storage.pageNo=1;
                    this.totalSize=this.tableData.length;
                    console.log("in searching mode!");
                }
                else{this.getGroupReviewData(this);}
            },

//自定义后台请求请求filter方法
getFilterHeaderFromBack(){
                let _this = this;
                this.$axios.get(this.$envProd+'/rest/v1/getGdemateFullOverview')
                    .then(res=>{
                    // _this.totalSize = res.data.totalSize;
                    _this.tableDataBackup = res.data.overviews.slice();

                    debugger
                    ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                        _this.headFiltersFullData[column] = _this.extractHeadFilters(_this.tableDataBackup, column);
                    });
                    debugger
                //     [ 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                //         _this.headFiltersFullData[column] = _this.extractHeadFilters(_this.tableDataBackup, column) });
                //    _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                   _this.headFilters= _this.headFiltersFullData;
                }).catch(()=>{
                    _this.$message.error('您请求Filter错误！')
                });
                // _this.getGroupReviewData();
            },

//自定义后台请求请求filter方法

            getGroupReviewData(){
                let _this = this;
                this.$axios.post(this.$envProd+'/rest/v1/getGdemateFullOverviewPagableSortble',{
                    pageNo: _this.storage.pageNo,
                    pageSize: _this.storage.pageSize,
                    isAscend: true,
                    sortKeyString:_this.storage.sortKeyString,
                })
                    .then(res=>{
                    _this.totalSize = res.data.totalSize;
                    // _this.tableDataBackup = res.data.overviews;
                    _this.tableData = res.data.overviews;
                    _this.originData = _this.tableData.slice();
                    debugger
                    // ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                    //     _this.headFilters[column] = _this.extractHeadFilters(_this.tableDataBackup, column);});
                    debugger
                }).catch(()=>{
                    _this.$message.error('您请求错误！')
                })
            },
//自定义后台请求请求filter方法
getFilterHeaderFromBack_old_backposition(){
                let _this = this;
                this.$axios.get(this.$envProd+'/rest/v1/getGdemateFullOverview')
                    .then(res=>{
                    // _this.totalSize = res.data.totalSize;
                    _this.tableDataBackup = res.data.overviews.slice();
                    // debugger
                    // _this.tableData = res.data.overviews;在更新header时候不能修改原表格数据
                    // _this.originData = _this.tableData.slice();
                    // if(_this.tableDataBackup.length>50){
                    debugger
                    ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                        _this.headFiltersFullData[column] = _this.extractHeadFilters(_this.tableDataBackup, column);
                    });
                    debugger
                //  _this.headFiltersFullData["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                //     }
                //     else{
                //     [ 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
                //         _this.headFiltersFullData[column] = _this.extractHeadFilters(_this.tableDataBackup, column)
                //     });
                // //  _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
                //     }
                //    _this.headFilters= _this.headFiltersFullData;
                // _this.headFilters = Object.create(_this.headFiltersFullData);
                // _this.headFiltersFullData
                //   return  _this.headFilters;

                //  _this.headFilters.push();//强制刷新
                }).catch(()=>{
                    _this.$message.error('您请求Filter错误！')
                })
            },

//自定义后台请求请求filter方法



            handleMRDetail(column,row)
            {
                this.$router.push({
                    name: this.$route.meta.mrDetail,
                    query:{
                        userName: row.userName,
                        nickName: row.committer,
                        routerName: 'committer',
                        startTime: this.storage.selectedDate[0],
                        endTime: this.storage.selectedDate[1]
                    }
                })
            }
        },
        // watch:{
        //     searchData:function(newValue, oldValue){

        //        var _this = this;
        //        var tableDataTemp = [];
        //        _this.tableDataBackup.map(function(item) {
        //           if (
        //             //   item.name.search(_this.searchData) != -1 ||
        //               item.name.search(newValue) != -1
        //              ) {
        //                   tableDataTemp.push(item);
        //             }
        //          });
        //       if(tableDataTemp.length!=0){

        //              _this.tableData = tableDataTemp;
        //              debugger
        //               ['name', 'groupName', 'subType','isDecompose', 'process'].forEach((column) => {
        //                 _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
        //             });
        //    //  _this.headFilters["name"] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];

        //         }
        //       else{
        //              tableDataTemp= _this.tableDataBackup;
        //              _this.tableData = tableDataTemp;
        //               ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
        //                 _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
        //             });
        //          _this.headFilters['name'] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
        //            }
        //     //  return _this.tableData,_this.headFilters;
        //     }
        // },
        created() {
           this.storage = this.getStorageItem(this.storage);

            // this.getFilterHeaderFromBack();

        //    this.getGroupReviewData();
        //    this.getFilterHeaderFromBack();
        },
        mounted() {
            if(this.storage.timepickval == ""){
                 this.storage.timepickval = "月";
                 this.storage.selectedDate = this.getMonthStartAndEnd(0);
            }

            this.storage.pageNo =1;
            // this.headFilters =
            this.getFilterHeaderFromBack();


            console.log("Before-getFilter=====",this.headFilters);
            // this.getFilterHeaderFromBack();

            this.getGroupReviewData();
            console.log("After-getFilter=====",this.headFilters);

        //    this.getGroupReviewData();
            // this.$nextTick(function(){
            // this.getFilterHeaderFromBack()
            // });
            console.log(this.tableData);
        },




//         computed: {
//       searchTableDataComputed() {
//                var _this = this;
//                var tableDataTemp = [];
//                 // if(_this.searchData==""){
//                 //      tableDataTemp= _this.tableDataBackup;
//                 //      _this.tableData = tableDataTemp;
//                 //       ['groupName', 'subType','isDecompose', 'process'].forEach((column) => {
//                 //         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
//                 //     });
//                 //  _this.headFilters['name'] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
//                 //    }
//                _this.tableDataBackup.map(function(item) {
//                   if (
//                     //   item.groupName.search(_this.searchData) != -1 ||
//                       item.name.search(_this.searchData) != -1
//                      ) {
//                           tableDataTemp.push(item);
//                     }
//                  });
//               if(tableDataTemp.length!=0&&tableDataTemp.length<=500){

//                      _this.tableData = tableDataTemp;
//                     //  debugger
//                       ['name', 'groupName', 'subType','isDecompose', 'process', "piName"].forEach((column) => {
//                         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
//                     });
//                 }
//               else{
//                      tableDataTemp= _this.tableDataBackup;
//                      _this.tableData = tableDataTemp;
//                       ['groupName', 'subType','isDecompose', 'process',"piName"].forEach((column) => {
//                         _this.headFilters[column] = _this.extractHeadFilters(_this.tableData, column)
//                     });
//                  _this.headFilters['name'] =[{text: "条目数量巨多请先搜索", value: "条目数量巨多请先搜索"}];
//                    }
//             //  return _this.tableData,_this.headFilters;
//               },

//   },
        beforeDestroy() {
            this.setStorageItem(this.storage);
        },
        filters:{
            pagination(array, pageNo, pageSize,searchKey,isFilterMode){
                let offset = (pageNo - 1) * pageSize;
                let data=[];
                // debugger
                // let _this = this;
                if(searchKey.length>0 || isFilterMode){
                // debugger
                data= (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
            }
                else{
                data= array;
            }
                return data
            }
        }
    }
</script>

<style scoped>
</style>
