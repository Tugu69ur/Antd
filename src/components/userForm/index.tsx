import React from "react";
import { Modal, Form, Input, Select, InputNumber, DatePicker } from "antd";
import dayjs from "dayjs";

const { Option } = Select;

interface UserFormProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  form: any;
}

const UserForm: React.FC<UserFormProps> = ({
  isModalVisible,
  handleOk,
  handleCancel,
  form,
}) => (
  <Modal
    title="Edit User"
    open={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    <Form form={form} layout="vertical" name="user-form">
      <Form.Item name="lastname" label="Овог" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="name" label="Нэр" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="role" label="Үүрэг" rules={[{ required: true }]}>
        <Select>
          <Option value="admin">Admin</Option>
          <Option value="financiar">Financiar</Option>
        </Select>
      </Form.Item>
      <Form.Item name="register" label="Регистр" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Нас"
        rules={[{ type: "number", min: 0, max: 99, required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name="gender" label="Хүйс" rules={[{ required: true }]}>
        <Select>
          <Option value="male">Эр</Option>
          <Option value="female">Эм</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Утасны дугаар"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Имейл"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="createdAt"
        label="Огноо"
        rules={[{ required: true, message: "Огноо оруулна уу!" }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>
    </Form>
  </Modal>
);

export default UserForm;
