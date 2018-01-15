<template>
<div id="_siteFooter">
    <el-footer>
        <div class="container footer">
          <el-row>
            <el-col>
                <span>版权所有 ©2015 长沙帕吉网络科技有限公司</span>
            </el-col>
        </el-row>
        </div>
    </el-footer>
</div>
</template>

<script>
export default {
    name: 'siteFooter',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style>
.footer {
position: fixed;
left: 0;
bottom:0;
width: 100%;
background: #fff;
border-top: 1px solid #dddddd;
padding: 15px 0;
text-align: center;
}
</style>