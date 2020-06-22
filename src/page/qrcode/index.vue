<!-- home -->
<template>
    <div class="container">
        <div id="qrcode" ref="qrcode"></div>

        <div v-on:click="handleGetQuery">获取url参数</div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2';

export default {
    data() {
        return {
            aMap: null,
        };
    },

    computed: {},

    created() {},
    mounted() {
        this.buildQrcode();
    },

    methods: {
        // 生成二维码
        buildQrcode() {
            const qrcode = new QRCode(this.$refs.qrcode, {
                text:
                    'https://githubzhuangye.github.io/h5-common/dist/index.html#/map?name=zy',
                width: 128,
                height: 128,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H,
            });
        },

        // 获取url参数
        handleGetQuery() {
            const query = this.$route.query;
            console.log('juqey', JSON.stringify(query));
        },
    },
};
</script>
<style lang="less" scoped>
.container {
    background-color: #cdcdcd;
}
</style>
