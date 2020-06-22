<!-- home -->
<template>
    <div class="container">
        <div id="amap" class="map-box"></div>
    </div>
</template>

<script>
import { loadAmap } from '@/common/utils.js';
import C from '@/common/constants.js';

export default {
    data() {
        return {
            aMap: null,
        };
    },

    computed: {},

    async created() {
        // 已载入高德地图API，则直接初始化地图
        if (this.aMap) {
            console.log(1);

            this.initMap();
        } else {
            console.log(2);

            // 未载入高德地图API，则先载入API再初始化
            await loadAmap(`${C.AMAP.API_URL}&key=${C.AMAP.KEY}`);
            this.initMap();
        }
    },
    mounted() {},

    methods: {
        // 跳转表单
        initMap() {
            this.aMap = new AMap.Map('amap', {
                center: [117.0009, 36.6758],
                zoom: 12,
            });
            console.log('this.amap', this.aMap);
        },
    },
};
</script>
<style lang="less" scoped>
.container {
    background-color: #cdcdcd;

    .map-box {
        width: 100%;
        height: 100vh;
    }
}
</style>
