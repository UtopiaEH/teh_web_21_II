import { Breadcrumb, theme } from 'antd'
import React from 'react'
import { Content } from 'antd/es/layout/layout'

const ContentCustom = () => {
    
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                Bill is a cat.
            </div>
        </Content>
    )
}

export default ContentCustom