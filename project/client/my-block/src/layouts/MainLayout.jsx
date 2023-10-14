import React from 'react';
import { Layout} from 'antd';
import {  useSelector } from "react-redux"
const MainLayout = () => {
  const user = useSelector((state) => state.user)
  return (
    <Layout style={{minHeight: "100vh"}}>
      <h1>{user.username}</h1>
    </Layout>
  );
};
export default MainLayout;