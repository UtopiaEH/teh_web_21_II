import { useEffect, useState } from 'react'
import { Card } from 'antd'
import styles from './Style.module.scss'

const CardCustom = ({title, body}: {title: string, body: string}) => {

   // const [post, setPost] = useState<any>({})
   //
   //
   //   useEffect(() => {
   //       fetch('https://dummyjson.com/posts/1')
   //       .then(res => res.json())
   //       .then(res => setPost(res));
   //   }, [])
   //
   //
    
    return (
        <Card title={title} bordered={false}  className={styles['wrapper']}>
            {body}
        </Card>
    )
}

export default CardCustom
