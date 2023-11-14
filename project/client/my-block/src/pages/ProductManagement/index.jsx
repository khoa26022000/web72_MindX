import { Breadcrumb, Button, Pagination, Popconfirm, Table } from "antd"
import { Link } from "react-router-dom"
import {AiOutlineEdit} from "react-icons/ai"
import {BsFillTrashFill} from 'react-icons/bs'
import { deleteProduct, getProduct } from "../../services"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const ProductManagement = () => {
    const [pageSize, setPageSize] = useState(3)
    const [pageIndex, setPageIndex] = useState(1)
    const [count, setCount] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [products, setProducts] = useState([])

    // const deleteProductById = async (id) => {
    //     try {
    //         const result = await deleteProduct(id)
    //         setProducts(products.filter(product => product?._id != id))
    //         setCount(count - 1)
    //         toast.success("Xoá sản phẩm thành công")
    //     } catch (error) {
    //         toast.error("Xoá sản phẩm thất bại")
    //         console.log(error)
    //     }
    // }

    const column = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name"
        },
        {
            title: "Người tạo",
            dataIndex: "user",
            key:"user",
            render: (value) =>{
                return  <>
                {value}
                </>
            }
               
            
        },
        {
            title: "Gía",
            dataIndex: "price"
        },
        {
            title: "Số lượng",
            dataIndex: "quantity"
        },
        {
            title: "Action",
            render: (_, record) => {
                return <><Link to={`/add-product/${record?._id}`}><AiOutlineEdit/></Link><Popconfirm title={"Bạn có muốn xoá sản phẩm này"} onConfirm={()=>{}}><BsFillTrashFill/></Popconfirm></>
            }
        }
    ]

    const getData = async () => {
        try {
            const result = await getProduct(pageSize, pageIndex)
            console.log('====================================');
            console.log(result);
            console.log('====================================');
            setProducts(result.data?.product)
            setCount(result.data?.count)
            setTotalPage(result.data?.totalPage)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[pageSize, pageIndex])

    return (
        <div>
            <Breadcrumb items={[{ title: 'Quản lí sản phẩm' }]} />
            <Button type="primary" style={{marginTop: '10px'}}><Link to={'/add-product'}>Thêm Sản Phẩm</Link></Button>
            <Table
             style={{marginTop: '10px'}}
                dataSource={products}
                columns={column}
                pagination={false}
            ></Table>
            <Pagination
                style={{marginTop: '10px'}}
                pageSize={pageSize}
                total={count}
                current={pageIndex}
                onChange={(pageIndex, pageSize) => {
                    setPageIndex(pageIndex)
                    setPageSize(pageSize)
                }}
                showSizeChanger
                showTotal={(total)=><p>{total} sản phẩm</p>}
            />
        </div>
    )
}

export default ProductManagement