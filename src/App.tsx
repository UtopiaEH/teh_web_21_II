import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import ContentCustom from './layouts/ContentCustom'
import HeaderCustom from './layouts/HeaderCustom'
import SideMenuCustom from './layouts/SideMenuCustom'
import CardCustom from './components/CardCustom/CardCustom'
import { Route, Switch } from 'react-router-dom'
import CardMore from './components/CardCustom/CardMore'

const { Footer } = Layout;

const App: React.FC = () => {
    
    
    const [posts, setPosts] = useState<any[]>([])
    
    
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        // .then(setPosts);
        .then((res) => setPosts(res.posts));
    
    }, [])
    
    // console.log('>>posts', posts)
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideMenuCustom />
            <Layout className="site-layout">
               <HeaderCustom />
               <ContentCustom>
    
                   <Switch>
                       <Route exact={true} path={'/'} >
                           <div>
                               main
                           </div>
                       </Route>
                       <Route  exact={true}  path={'/content'} >
                           <div>
                               { !posts.length ? <div>No posts</div> : (
                                   posts.map((post) => {
                                       return  <CardCustom  key={post.id} title={post.title} body={post.body} id={post.id}/>
                                   })
                               )}
                           </div>
                       </Route>
    
                       <Route path={'/content/:id'}  children={(history) => <CardMore id={history.match?.params.id}/>} />
                       
                   </Switch>
                
               </ContentCustom>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
            
           
            
            
            
        </Layout>
    );
};

export default App;