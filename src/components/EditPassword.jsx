import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

export default function CollectionCreateForm({ visible, onEdit, onCancel }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="修改密码"
      okText="修改"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onEdit(values);
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
          name="oldPassword"
          label="原密码"
          rules={[
            {
              required: true,
              message: "Please input the old password",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="新密码"
          rules={[
            {
              required: true,
              message: "Please input the new password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="newPasswordConfirm"
          label="确认新密码"
          rules={[
            {
              required: true,
              message: "Please confirm the new password",
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
    </Modal>
  );
}
