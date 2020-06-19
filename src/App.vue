<template>
    <div id="app">
       <router-view />
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>
<style lang="less">
@color: #f00;

.container {
    background-color: @color;
}
</style>
