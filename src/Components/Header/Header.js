
import React, { useState } from "react";
import { PlusOutlined } from '@ant-design/icons'
import {Form, Input,Radio,Checkbox,Upload,Button} from "antd"
import "../Header/Header.css"

const defaultValues ={
  name:"",
  age:0,
  gender:"",
  checked:false,
    }

const Header = () => {
  const [formValues, setFormValues] = useState(defaultValues)

  const Inputchange =(e)=>{
const {key,value}=e.target;
setFormValues({
...formValues,
[key]:value
});
  };

  const handleSubmit = (event) =>{
event.preventDefault();
console.log(formValues);
  }

  return (
    <div className="container">
      <h1>Form</h1>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 16,
        }} 
   onFinish={handleSubmit} >
        <Form.Item name="name" label="Name"
        rules={[
          {
            required:"true",
            message:"Fill the Field"
          }
        ]}
        >
          <Input placeholder="Enter Your Name" onChange={Inputchange}/>

        </Form.Item>
        <Form.Item label="Age" name="age"
        rules={[
          {
            required:"true",
            message:"select one"
          }
        ]}
        >
          <Radio.Group>
            <Radio value="male" > Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="" name="disabled" valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Checkbox>Terms and conditions</Checkbox>
        </Form.Item>
        {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}
        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
        <Button 
          type="primary" htmlType="submit">
        Submit
      </Button>
        </Form.Item>
       
      </Form>
    
    </div>
  )
}

export default Header
