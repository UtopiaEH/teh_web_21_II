import React, { useEffect, useState } from 'react'
import {  Layout } from 'antd';
import ContentCustom from './layouts/ContentCustom'
import HeaderCustom from './layouts/HeaderCustom'
import SideMenuCustom from './layouts/SideMenuCustom'
import CardCustom from './components/CardCustom/CardCustom'

const { Footer } = Layout;

const App: React.FC = () => {
    
    
    const [posts, setPosts] = useState<any[]>([])
    
    
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        // .then(setPosts);
        .then((res) => setPosts(res.posts));
    
    }, [])
    
    console.log('>>posts', posts)
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideMenuCustom />
            <Layout className="site-layout">
               <HeaderCustom />
               <ContentCustom>
                   { !posts.length ? <div>No posts</div> : (
                       posts.map((post) => {
                           return  <CardCustom title={post.title} body={post.body} />
                       })
                   )}
                
               </ContentCustom>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;