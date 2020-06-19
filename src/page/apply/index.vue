<!-- home -->
<template>
    <div class="container">
        <van-form @submit="handleSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Form, Field, Button, Dialog } from 'vant';
import Check from '@/common/validate';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
    },

    computed: {},

    created() {},
    methods: {
        handleSubmit(values) {
            Dialog.alert({
                title: '标题',
                message: JSON.stringify(values),
            });
        },
    },
};
</script>
<style lang="less" scoped>
.container {
    background-color: #dedede;
}
</style>
