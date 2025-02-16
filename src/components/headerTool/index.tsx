import React, { useState } from "react";
import { Button } from "antd";

interface TableToolbarProps {
    onButtonClick: (buttonName: string) => void;
  }
  
  const TableToolbar: React.FC<TableToolbarProps> = ({ onButtonClick }) => {
    const handleButtonClick = (buttonName: string) => {
      onButtonClick(buttonName);
    };
  
    if (window.location.pathname.includes("burtgel")) {
      return (
        <div className="flex items-center mt-6 mb-6">
          <Button type="default" onClick={() => handleButtonClick("Ачаа дөхөлт")} style={{ borderRadius: "8px 0 0 8px" }}>
            Ачаа дөхөлт
          </Button>
          <Button type="default" onClick={() => handleButtonClick("Үлдэгдэл")} style={{ borderRadius: "0 0 0 0" }}>
            Үлдэгдэл
          </Button>
          <Button type="default" onClick={() => handleButtonClick("Талбайд ирсэнээр")} style={{ borderRadius: "0 8px 8px 0" }}>
            Талбайд ирсэнээр
          </Button>
        </div>
      );
    } else if (window.location.pathname.includes("lavlah")) {
      return (
        <div className="flex items-center mt-6 mb-6">
          <Button type="default" onClick={() => handleButtonClick("Харилцагч компани")} style={{ borderRadius: "8px 0 0 8px" }}>
            Харилцагч компани
          </Button>
          <Button type="default" onClick={() => handleButtonClick("Нэмэлт хураамж тохиргоо")} style={{ borderRadius: "0 0 0 0" }}>
            Нэмэлт хураамж тохиргоо
          </Button>
          <Button type="default" onClick={() => handleButtonClick("Харилцагчдын дансны тооцоо")} style={{ borderRadius: "0 0 0 0" }}>
            Харилцагчдын дансны тооцоо
          </Button>
          <Button type="default" onClick={() => handleButtonClick("Э/Х тасалбар хүчингүй болгох")} style={{ borderRadius: "0 8px 8px 0" }}>
            Э/Х тасалбар хүчингүй болгох
          </Button>
        </div>
      );
    } else if (window.location.pathname.includes("tailan")) {
      return (
        <div className="flex items-center mt-6 mb-6">
          <Button type="default" onClick={() => handleButtonClick("Э/Х орлогын тайлан")} style={{ borderRadius: "8px" }}>
            Э/Х орлогын тайлан
          </Button>
        </div>
      );
    }
  
    return null;
  };

export default TableToolbar;
