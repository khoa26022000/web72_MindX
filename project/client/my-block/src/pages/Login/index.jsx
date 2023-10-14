import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { login } from '../../services';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { saveToLocalStorage } from '../../utils';
import {login as loginAction } from "../../redux/action/user";
const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        try {
            const username = form.getFieldValue("username")
            const password = form.getFieldValue("password")

            const result = await login(username, password)

            toast.success("Đăng nhập thành công")
            dispatch(loginAction(result.data?.user))
            saveToLocalStorage("token", JSON.stringify(result.data?.token))
            navigate("/")

        } catch (error) {
            console.log(error)
            toast.error("Đăng nhập thất bại")
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='' style={{ marginTop: '20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Đăng nhập</h1>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
}
export default Login;