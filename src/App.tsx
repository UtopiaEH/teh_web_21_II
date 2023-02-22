import React from 'react';
import {  Layout } from 'antd';
import ContentCustom from './components/layouts/ContentCustom'
import HeaderCustom from './components/layouts/HeaderCustom'
import SideMenuCustom from './components/layouts/SideMenuCustom'

const { Footer } = Layout;

const App: React.FC = () => {

    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideMenuCustom />
            <Layout className="site-layout">
               <HeaderCustom />
               <ContentCustom/>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;