<!-- home -->
<template>
    <div class="container">
        <div id="qrcode" ref="qrcode"></div>

        <div v-on:click="handleGetQuery">获取url参数</div>
        <div v-on:click="handleSaveQrcode">保存二维码</div>
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
        },

        // 保存二维码
        handleSaveQrcode() {
            const myCanvas = document
                .getElementById('qrcode')
                .getElementsByTagName('canvas');

            const elementA = document.createElement('a');
            elementA.href = myCanvas[0].toDataURL('image/png');
            elementA.download = '二维码';
            elementA.click();
        },
    },
};
</script>
<style lang="less" scoped>
.container {
    background-color: #cdcdcd;
}
</style>
