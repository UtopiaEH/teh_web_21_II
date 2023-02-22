import React from 'react';
import {  Layout } from 'antd';
import ContentCustom from './layouts/ContentCustom'
import HeaderCustom from './layouts/HeaderCustom'
import SideMenuCustom from './layouts/SideMenuCustom'
import CardCustom from './components/CardCustom/CardCustom'

const { Footer } = Layout;

const App: React.FC = () => {
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideMenuCustom />
            <Layout className="site-layout">
               <HeaderCustom />
               <ContentCustom>
                   <CardCustom />
               </ContentCustom>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;