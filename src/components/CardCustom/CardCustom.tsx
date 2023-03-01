import { useEffect, useState } from 'react'
import { Card } from 'antd'
import styles from './Style.module.scss'
import { useHistory } from 'react-router-dom'

const CardCustom = ({title, body, id}: {title: string, body: string, id: number}) => {
    
    let history = useHistory()
    

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
        <Card title={title} bordered={false}  className={styles['wrapper']} onClick={() => history.push(`/content/${id}`)} >
            {body}
        </Card>
    )
}

export default CardCustom
