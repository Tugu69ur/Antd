import React, { useState } from "react";
import { DatePicker, Input, Button } from "antd";
import { RedoOutlined, PlusOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { Dayjs } from "dayjs";
import UserForm from "../userForm";

const { RangePicker } = DatePicker;
const { Search } = Input;

interface TableToolbarProps {
  title: string;
  totalUsers: number;
  onSearch: (value: string) => void;
  onDateChange: (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => void;
}

const TableToolbar: React.FC<TableToolbarProps> = ({ title, totalUsers, onSearch, onDateChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalVisible(true);
  const reloadTable = () => window.location.reload();
  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log("Submitted:", values);
      setIsModalVisible(false);
    }).catch((error) => {
      console.log("Validation Failed:", error);
    });
  };
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <div className="flex items-center justify-between mt-6 ml-6 mb-3">
        <h1 className="font-bold text-xl mt-1">
          {title} ({totalUsers})
          <RangePicker format="YYYY/MM/DD" onChange={onDateChange} style={{ width: 260, marginLeft: 10, height: 40 }} />
        </h1>
        <div className="flex items-center space-x-3 bg-white">
          <Search placeholder="Хайх" onChange={(e) => onSearch(e.target.value)} style={{ width: 320, marginRight: 5 }} size="large" />
          <Button
            type="primary"
            icon={<RedoOutlined style={{ color: "#344054" }} />}
            size="large"
            onClick={reloadTable}
            style={{ marginRight: 5, width: 40, height: 40, backgroundColor: "#fff", border: "1px solid #d9d9d9", boxShadow: "none" }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined style={{ color: "#344054" }} />}
            size="large"
            onClick={showModal}
            style={{ marginRight: 5, backgroundColor: "#fff", border: "1px solid #d9d9d9", boxShadow: "none", color: "#344054", fontWeight: "bold", height: 40 }}
          >
            Үүсгэх
          </Button>
        </div>
      </div>
      <UserForm isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} form={form} />
    </>
  );
};

export default TableToolbar;
