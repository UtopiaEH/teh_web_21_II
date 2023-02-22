import { useEffect, useState } from 'react'
import { Card } from 'antd'

const CardCustom = () => {

   const [post, setPost] = useState<any>({})
    
    
     useEffect(() => {
         fetch('https://dummyjson.com/posts/1')
         .then(res => res.json())
         .then(res => setPost(res));
     }, [])
    
    
    
    return (
        <Card title={post.title} bordered={false}>
            {post.body}
        </Card>
    )
}

export default CardCustom
