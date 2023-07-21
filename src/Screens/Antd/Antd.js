import React from 'react'
import { useState } from 'react'
import { Button, Table,Modal, Input, Form ,Select ,Radio} from 'antd'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons'
import "../Antd/Antd.css"


function Antd() {
    const[id,setId]=useState(0);
    const[Name,setName]=useState('');
    const[gender,setGender]=useState('');
    const[degree,setDegree]=useState('');
    const[interest,setInterest]=useState(false);
    const [isVisible,setIsVisible]=useState(false);
    const[Data,setData]=useState([
        {
            id:0,
            name:"",
            gender:'',
            degree:'',
            interest:false

        }
    ])
//     const [inputvalues,setinputvalues]=useState(
// {
//     id:0, Name:""
// }
//     );
    const[Edit,setEdit]=useState(null);
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
        },{
            key:"6",
            title:"Actions",
            render:(record)=>{
                return(
                    <>
                    <EditOutlined onClick={()=>{
                        onEdit(record)
                    }}/>
                    &nbsp;&nbsp;&nbsp;
                    <DeleteOutlined onClick={()=>{
                        onDelete(record)
                    }} style={{color:"red"}}/>
                    </>
                )
            }
        }

    ]
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
    ]);
   const showModal =()=>{
  setIsVisible(true);
   }

   const onchange=(e)=>{
// const {name,value}=e.target;
// setinputvalues({...inputvalues,[name]:value});
setId(e.target.value);
setName(e.target.value);
   }

 const Radiochange =(e)=>{
setGender(e.target.value)
 }
 const selectChange=(e,value)=>{
    setDegree(e.value)
 }

const onFinish=(e)=>{
e.preventDefault();
if(id==undefined){
    let a=id, b=Name,c=gender,d=degree;
    dataSource.push({id:a,name:b,gender:c,degree:d});
    setData(dataSource)
}
else{
    var index=dataSource.map(function(e){
return e.id
    }).indexOf(id);
    let a = dataSource[index];
    a.id=id;
    a.name=Name;
    a.gender=gender;
    a.degree=degree;
    setData(dataSource)
}

console.log(Data);
setIsVisible(false);

}
const onDelete = (record)=>{
    Modal.confirm({
        title:"You want to Delete this Data?",
        okText:"Yes",
        okType:"danger",

        onOk:()=>{
            setDataSource(pre=>{
                return pre.filter((data)=>data.id !== record.id);
            });
        }
    })

}
const onEdit =(record)=>{

setIsVisible(true);
setEdit({...record});

}

  return (
    <div className='container'>
        <Button type='primary' onClick={showModal}>Create</Button>
      <Table
      columns={columns}
      dataSource={dataSource}>
      </Table>
      <Modal
      title="Edit"
      open={isVisible}
      okText="Save"
      destroyOnClose={true}
      onCancel={()=>{
        setIsVisible(false);
      }}
      onOk={onFinish}>
        <Form onFinish={onFinish}>
            <Form.Item
            label="Id" name="id" 
            rules={[
                {
                    required:true,
                    message:"Fill The Fields"
                }
            ]}
            >
            <Input value={id} placeholder='Enter Your Id' onChange={onchange}>
            </Input>
            </Form.Item>
            <Form.Item
            label="Name" name="name" 
            rules={[
                {
                    required:true,
                    message:"Fill The Fields"
                }
            ]}
            >
            <Input value={Name} placeholder='Enter Your Name'  onChange={onchange}>

            </Input>
            </Form.Item>
            <Form.Item
            label="Gender" name="gender" 
            rules={[
                {
                    required:true,
                    message:"Click Anyone"
                }
            ]}
            >   
<Radio.Group onChange={Radiochange} value={gender}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item
            label="Degree" name="degree" 
            rules={[
                {
                    required:true,
                    message:"Select anyone"
                }
            ]}
            >
                  <Select
                   status="warning"
      placeholder="Select"
      style={{
        width: 120,
      }}
      allowClear
      options={[
        {
          value: 'BSC',
          label: 'BSC',
        },
        {
            value: 'MSC',
            label: 'MSC',
          }
      ]}
      value={degree}
      onChange={selectChange}
    />
              </Form.Item>
                
            </Form>

      </Modal>
    </div>
  )
}

export default Antd
