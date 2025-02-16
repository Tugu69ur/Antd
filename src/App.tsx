import { ConfigProvider } from "antd";
import AuthProvider from "context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import mnIntl from "antd/lib/locale/mn_MN";
import MainRoutes from "routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Inter, sans-serif",
              colorPrimary: "#212e42",
              colorLink: "#1890ff",
            },
            components: {},
          }}
          locale={mnIntl}
        >
          <MainRoutes />
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
