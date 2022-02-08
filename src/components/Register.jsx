import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
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
          rules={[
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
          name="passwordconfirm"
          label="确认密码"
          rules={[
            {
              required: true,
              message: "Please input the password again",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/*<Form.Item name="modifier" className="collection-create-form_last-form-item">*/}
        {/*    <Radio.Group>*/}
        {/*        <Radio value="public">Public</Radio>*/}
        {/*        <Radio value="private">Private</Radio>*/}
        {/*    </Radio.Group>*/}
        {/*</Form.Item>*/}
      </Form>
      <Button type="link" onClick={toLogin}>
        已经拥有账号？
      </Button>
    </Modal>
  );
}
