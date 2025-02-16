import React, { useState, useEffect } from "react";
import ProTable, { ProColumns } from "@ant-design/pro-table";
import { EditOutlined, DeleteOutlined, KeyOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import UserForm from "../userForm";
import dayjs from "dayjs";

const payload = [
  {
      "userId": 1,
      "name": "Alice Smith",
      "email": "alice.smith@example.com",
      "password": "password123",
      "phone": "9876543210",
      "role": "user"
  },
  {
      "userId": 2,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "your_password_here",
      "phone": "1234567890",
      "role": "admin"
  },
  {
      "userId": 3,
      "name": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "password": "securepass456",
      "phone": "5678901234",
      "role": "financiar"
  }
];


type TableListItem = {
  key: number;
  name: string;
  lastname: string;
  role: string;
  register: string;
  age: number;
  gender: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  whoAdded: string;
};

const UserTable: React.FC<{ selectedTable: string | null; searchQuery: string; setTotalUsers: (count: number) => void }> = ({ selectedTable, searchQuery, setTotalUsers }) => {
  useEffect(() => {
    console.log("Selected Table:", selectedTable);
  }, [selectedTable]);
  const [originalData, setOriginalData] = useState<TableListItem[]>([]);
  const [dataSource, setDataSource] = useState<TableListItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<TableListItem | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();

        const users = result.users.map((user: any, index: number) => ({
          key: index,
          name: user.firstName,
          lastname: user.lastName,
          role: user.role || "User",
          register: user.register || "N/A",
          age: user.age,
          gender: user.gender,
          phoneNumber: user.phone,
          email: user.email,
          createdAt: user.birthDate,
          whoAdded: user.company?.name || "N/A",
        }));
        setOriginalData(users);
        setDataSource(users);
        setTotalUsers(users.length);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchData();
  }, [setTotalUsers]);

  useEffect(() => {
    if (!searchQuery) {
      setDataSource(originalData);
      setTotalUsers(originalData.length);
      return;
    }

    const lowerValue = searchQuery.toLowerCase();
    const filteredData = originalData.filter((item) =>
      Object.values(item).some((field) => typeof field === "string" && field.toLowerCase().includes(lowerValue))
    );

    setDataSource(filteredData);
    setTotalUsers(filteredData.length);
  }, [searchQuery, originalData, setTotalUsers]);

  const handleEdit = (record: TableListItem) => {
    setSelectedUser(record);
    form.setFieldsValue({
      ...record,
      createdAt: record.createdAt ? dayjs(record.createdAt) : null,
    });
    setIsModalVisible(true);
  };

  const handleDelete = (record: TableListItem) => {
    console.log("Deleting user:", record);
  };

  const handleKeyAction = (record: TableListItem) => {
    console.log("Key action for user:", record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log("Updated User Data:", values);
      setIsModalVisible(false);
      setSelectedUser(null);
      form.resetFields();
    });
  };

  const columns: ProColumns<TableListItem>[] = [
    { title: "Овог", dataIndex: "name", key: "name" },
    { title: "Нэр", dataIndex: "lastname", key: "lastname" },
    { title: "Үүрэг", dataIndex: "role", key: "role" },
    { title: "Регистрийн дугаар", dataIndex: "register", key: "register" },
    { title: "Нас", dataIndex: "age", key: "age" },
    { title: "Хүйс", dataIndex: "gender", key: "gender" },
    { title: "Утас", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Имейл", dataIndex: "email", key: "email" },
    { title: "Бүртгэсэн огноо", dataIndex: "createdAt", key: "createdAt" },
    { title: "Бүртгэсэн ажилтан", dataIndex: "whoAdded", key: "whoAdded" },
    {
      title: "Үйлдэл",
      key: "action",
      render: (_, record) => (
        <Button.Group>
          <Button type="primary" icon={<EditOutlined />} size="large" style={{ background: '#ffffff' ,color: "#344054", boxShadow: 'none'  }} onClick={() => handleEdit(record)} />
          <Button type="primary" icon={<DeleteOutlined />} size="large" style={{ background: '#ffffff', color: "#344054", boxShadow: 'none'  }} onClick={() => handleDelete(record)} />
          <Button type="primary" icon={<KeyOutlined />} size="large" style={{ background: '#ffffff', color: "#344054", boxShadow: 'none' }} onClick={() => handleKeyAction(record)} />
        </Button.Group>
      ),
    },
  ];

  return (
    <>
      <ProTable<TableListItem>
        columns={columns}
        dataSource={dataSource}
        rowKey="key"
        options={false}
        search={false}
        pagination={{ pageSize: 10 }}
        style={{ marginTop: 20 }}
      />

      <UserForm isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} form={form} />
    </>
  );
};

export default UserTable;
