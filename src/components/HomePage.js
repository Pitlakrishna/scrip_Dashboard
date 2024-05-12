import React, { useEffect, useState } from 'react'
import Layout from './layout/Layout'
import { FaHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import axios from 'axios'
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const HomePage = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const list = await axios.get("https://fakestoreapi.com/products")
            const data = list.data
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            {/* <p>{data.length}</p> */}
            <ul className='products' >
                {data.map(item =>
                    <li key={item.id} className='p-1' style={{ backgroundColor: '#ffffe6' }} >
                        <Card
                            style={{
                                width: 250,
                                padding: 5
                            }}
                            cover={
                                <img
                                    alt="photo"
                                    src={item.image}
                                    height={270}
                                />
                            }
                            actions={[
                                `$${item.price}`,
                                <FaHeart size={25} key="edit" />,
                                <CiShoppingCart size={25} key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src={item.image} />}
                                title={item.title}
                                description={item.description.split(" ").slice(0, 10).join(" ") + "...."}
                            />
                        </Card>
                    </li>
                )}
            </ul>
        </Layout >
    )
}

export default HomePage