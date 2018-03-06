<template>
<div id="wrap">
    <label>
        点我上传图片
        <input type='file' @change="change" ref="input">
    </label>
    <img :src="src" ref="img">
</div>
</template>
<script>
    export default {
        name: 'home',  
        data () {
            return {
               src:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 
                elInput: null
            }
        },
        methods: {
            change(e){
                // ...
            }
        }
    }
</script>

