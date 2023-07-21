import React from 'react'
import { Table } from 'antd'
import { useState } from 'react'
function Crud() {
    const [dataSource, setDataSource]=useState([
        {
            id:1,
            name:"danny",
            gender:"male",
            degree:"msc",
            interest:"yes"
        },
        {
            id:2,
            name:"john",
            gender:"male",
            degree:"msc",
            interest:"no"
        },
        {
            id:3,
            name:"Priya",
            gender:"female",
            degree:"bsc",
            interest:"yes"
        },
    ])
    const columns=[
        {
            key:"1",
            title:"ID",
            dataIndex:"id"
        },
        {
            key:"2",
            title:"Name",
            dataIndex:"name"
        },
        {
            key:"3",
            title:"Gender",
            dataIndex:"gender"
        },
        {
            key:"4",
            title:"Degree",
            dataIndex:"degree"
        },
        {
            key:"5",
            title:"Interest",
            dataIndex:"interest"
        }
    ]
  return (
    <div>
      <Table
      columns={columns}
      dataSource={dataSource}>

      </Table>
    </div>
  )
}

export default Crud
