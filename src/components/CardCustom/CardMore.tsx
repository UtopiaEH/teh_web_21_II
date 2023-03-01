import { Card } from 'antd'
import { useEffect, useState } from 'react'
import Meta from 'antd/es/card/Meta'

const CardMore = (props: any) => {
    
    const [post, setPost] = useState<any>(null)
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${props.id}`)
        .then(res => res.json())
            .then((res) => setPost(res));
        
    }, [])
    
    if(!post) return (
        <div>
           no post data
        </div>
    )
    
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={post.title}
                    src={post.thumbnail}
                />
            }
            // actions={[
            //     <SettingOutlined key="setting" />,
            //     <EditOutlined key="edit" />,
            //     <EllipsisOutlined key="ellipsis" />,
            // ]}
        >
            <Meta
                // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                title="Card title"
                description={post.description}
            />
            
        </Card>
    )
}

export default CardMore