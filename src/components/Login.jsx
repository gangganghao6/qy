import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

export default function CollectionCreateForm({ visible, onLogin, onCancel, toRegister }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="登录"
      okText="登录"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onLogin(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
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
        {/*<Form.Item name="modifier" className="collection-create-form_last-form-item">*/}
        {/*    <Radio.Group>*/}
        {/*        <Radio value="public">Public</Radio>*/}
        {/*        <Radio value="private">Private</Radio>*/}
        {/*    </Radio.Group>*/}
        {/*</Form.Item>*/}
      </Form>
      <Button type="link" onClick={toRegister}>
        还没有账号？
      </Button>
    </Modal>
  );
}

// .collection-create-form_last-form-item {
//     margin-bottom: 0;
// }
