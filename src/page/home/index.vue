<!-- home -->
<template>
    <div class="index-container">
        <div class="warpper">
            <h1 class="title">VUE H5开发模板</h1>
            <h2 class="desc">A vue h5 template with Vant UI</h2>
            <button v-on:click="handleNavForm">跳转表单</button>
        </div>
    </div>
</template>

<script>
import Home from "@/api/home";
import Check from "@/common/validate";

export default {
    data() {
        return {};
    },

    computed: {},

    created() {
        Home.list().then(resp => {
            console.log("home resp", resp);
        });
    },
    mounted() {},

    methods: {
        // 跳转表单
        handleNavForm() {
            this.$router.push("/apply");
        }
    }
};
</script>
<style lang="less" scoped>
@color: "#f00";

.container {
    background: @color;

    .warpper {
        padding: 12px;
        background: #fff;

        .title {
            margin: 0 0 6px;
            font-size: 32px;

            .title span {
                display: inline-block;
                vertical-align: middle;
            }

            span {
                margin-left: 16px;
                font-weight: 500;
            }
        }

        .desc {
            margin: 0 0 20px;
            color: rgba(69, 90, 100, 0.6);
            font-size: 14px;
        }
    }
}
</style>
