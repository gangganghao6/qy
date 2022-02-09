import React from "react";
import { Modal, Form, Input } from "antd";

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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match!"));
              },
            }),
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
