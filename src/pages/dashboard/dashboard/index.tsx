import React, { useState } from "react";
import TableToolbar from "../../../components/tableHeaderTool";
import UserTable from "../../../components/Table";
import UserForm from "../../../components/userForm";

interface User {
  id: number;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="w-full h-full bg-white rounded-2xl p-1">
      <TableToolbar
      title="Нийт"
      totalUsers={totalUsers}
      onSearch={setSearchQuery}
      onRefresh={() => setSearchQuery("")}
      />
      <UserTable 
      searchQuery={searchQuery} 
      setTotalUsers={setTotalUsers} 
      onEditUser={setSelectedUser} 
      />
      <UserForm 
      visible={!!selectedUser} 
      onClose={() => setSelectedUser(null)} 
      user={selectedUser} 
      />
    </div>
  );
};

export default Dashboard;
