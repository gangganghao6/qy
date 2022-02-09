import React from "react";
import { Button, Modal, Form, Input } from "antd";
import "./Register.css";

export default function CollectionCreateForm({ visible, onRegister, onCancel, toLogin }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="注册"
      okText="注册"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onRegister(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        scrollToFirstError={true}
        size="middle"
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="account"
          label="账号"
          rules={[
            {
              required: true,
              message: "Please input the account number",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          hasFeedback={true}
          rules={[
            {
              type: "email",
              message: "Not valid email",
            },
            {
              required: true,
              message: "Please input the email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="company"
          label="公司名称"
          rules={[
            {
              required: true,
              message: "Please input the company name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "Please input the password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="passwordConfirm"
          label="确认密码"
          hasFeedback={true}
          rules={[
            {
              required: true,
              message: "Please input the password again",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

      </Form>
      <Button type="link" onClick={toLogin}>
        已经拥有账号？
      </Button>
    </Modal>
  );
}
