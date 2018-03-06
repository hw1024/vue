<style rel="stylesheet/scss" lang="scss">
    .ivu-date-picker{display: inline-block;}
    .ivu-form-item{display: inline-block;}
    .ivu-checkbox-wrapper{margin-right: 0;}
    .home-container{
        width: 100%;background-color: #fff;
        &:after {
            content: "";display: block;width: 1px;
            background: #eee;position: absolute;
            top: 0;bottom: 0;left: -1px;
        }
        .home-top{
            width: 100%;padding:18.5px 20px;
            border-bottom: 1px solid #eee;
            .btn-group{
                margin-bottom: 15px;
                a{
                    margin-right: 15px;font-size: 14px;
                }
            } 
        }
        .home-lower{
            .filter-btn{
                padding:15px 0;border-bottom:1px solid #eee;
                .ivu-btn-primary{
                    margin-right:15px;
                }
            }
            .filter-list{
                padding:20px;
            }
            .pagination-container{
                margin-top:20px;text-align:center;
                .ivu-page-item-jump-next, .ivu-page-item-jump-prev, .ivu-page-next, .ivu-page-prev{
                    float:none;
                }
                .ivu-page-item{
                    display:inline-block;float:none;
                }
            }
        }
    }
</style>
<template>
    <div class="home-container">
        <div class="home-top">
            <div class="btn-group">
                <router-link class="" to="/uddd/index">新增任务式随笔</router-link>
                <router-link class="" to="#">新增流水式随笔</router-link>
                <router-link class="" to="#">任务式随笔管理</router-link>
                <router-link class="" to="#">流水式随管理笔</router-link>
                <router-link class="" to="#">分类管理</router-link>
            </div>
            <div class="screen">
                <template>
                    <Select v-model="listQuery.select_type" placeholder="主题类型" style="width:100px">
                        <Option v-for="item in typeList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                    <Date-picker type="date" placeholder="选择日期" v-model="listQuery.time_start" style="width: 200px"></Date-picker>
                    至
                    <Date-picker type="date" placeholder="选择日期" v-model="listQuery.time_end" style="width: 200px"></Date-picker>
                    <Input v-model="listQuery.place" placeholder="创建地点" style="width: 100px"></Input>
                    <Select v-model="listQuery.select_classify" placeholder="主题分类" style="width:100px">
                        <Option v-for="item in classifyList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                    <Button type="primary" @click="handleFilter">提交</Button>
                </template>
            </div>
        </div>
        <div class="home-lower">
            <div class="filter-btn alg-c">
                <Button type="primary">下载当前选中随笔</Button>
                <Button type="primary" @click="delAll">删除当前选中随笔</Button>
                <Button type="primary">加入出版夹</Button>
            </div>
            <div class="filter-list">
                <template>
                    <Table :columns="columns" :data="list" border @on-selection-change="selectCheck"></Table>
                </template>
                <div v-show="!listLoading" class="pagination-container">
                    <template>
                        <Page :total="total" @on-change="handleSizeChange" :page-size="listQuery.limit" :current="listQuery.page"></Page>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { fetchList } from 'api/article_table';
    export default {
        name: 'home',  
        data () {
            return {
                listQuery: {
                    page: 1,
                    limit: 10,
                    select_type: '',
                    select_classify: '',
                    time_start: '',
                    time_end: '',
                    place: ''
                },
                selectArr:[],
                typeList: [
                    {
                        value: 'stream',
                        label: '流水式随笔'
                    },
                    {
                        value: 'task',
                        label: '任务式随笔'
                    }
                ],
                classifyList: [
                    {
                        value: 'family',
                        label: '家庭'
                    },
                    {
                        value: 'life',
                        label: '生活'
                    },
                    {
                        value: 'work',
                        label: '工作'
                    },
                    {
                        value: 'study',
                        label: '学习'
                    },
                    {
                        value: 'fun',
                        label: '乐趣'
                    }
                ],
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '姓名',
                        key: 'auditor',
                        align: 'center',
                    },
                    {
                        title: '年龄',
                        key: 'author',
                        align: 'center',
                    },
                    {
                        title: '地址',
                        key: 'id',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                model: '',
                list:  [
                    {
                        auditor: '',
                        author: '',
                        id: '',
                    }
                ],
                total: null,
                listLoading: true        
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.listLoading = true;
                fetchList(this.listQuery).then(response => {
                    this.list = response.data.items;
                    this.total = response.data.total;
                    this.listLoading = false;
                })
            },
            handleFilter() {
                this.getList();
            },
            handleSizeChange(val) {
                this.listQuery.page = val;
                this.getList();
            },
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.list[index].auditor}<br>年龄：${this.list[index].author}<br>地址：${this.list[index].id}`
                })
            },
            remove (index) {
                console.log(index)
                this.$Message.success('成功删除选中随笔');
                this.list.splice(index, 1);
            },
            selectCheck (selection) {
                this.selectArr  = selection;
                // for(var i = this.selectArr.length-1;i>=0;i--){
                //     this.selectArr[i].value = true;
                // }         
                console.log(this.selectArr)
            },
            delAll () {
                console.log(this.selectArr);
                this.list.$remove(this.selectArr)
                // this.list = this.list.filter(t => t.value === true)     
                
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
        }
    }
</script>