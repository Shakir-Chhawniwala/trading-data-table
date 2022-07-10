import { PlusOutlined } from "@ant-design/icons";
import {
  ProCard,
  ProDescriptions,
  EditableProTable,
} from "@ant-design/pro-components";
import { Button,  Space, Form } from "antd";
import { useState, useEffect, useRef} from "react";
import { columns } from "./columns"




const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Table = () => {
  const [type] = useState("table");
  const [data, setData] = useState([]);
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const actionRef = useRef()
  const [form] = Form.useForm();
  
  
  useEffect(() => {
    fetch("https://proapi.azurewebsites.net/github/issues")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

   const handleInputChange = (e) => {    
    setInputValue(e.target.value) ;
  };

  return (
    <>
      <Space>
        <Button
          type=" primary "
          onClick={() => {
            actionRef.current?.addEditRecord?.({
              id: (Math.random() * 1000000).toFixed(0),
              title: "new line",
            });
          }}
          icon={<PlusOutlined />}
        >
          new line
        </Button>
        <Button
          key=" rest "
          onClick={() => {
            form.resetFields();
          }}
        >
          reset form
        </Button>
      </Space>
      <ProCard>
        <EditableProTable
          columns={columns}
          type={type}
          value={data.data}
          pagination={{
            pageSize: 5,
            locale: true,
          }}
          recordCreatorProps={false}
          rowKey="id"
          dateFormatter="string"
          headerTitle="Query Table"
          toolBarRender={() => [
            <Button key="3" type="primary">
              <PlusOutlined />
              new
            </Button>,
          ]}
          editable={{
            Form,
            editableKeys,
            onSave: async () => {
              await waitTime(2000);
            },
            onChange: setEditableRowKeys,
            actionRender: (row, config, dom) => [dom.save, dom.cancel],
          }}
        />

        {type === "descriptions" && (
          <ProDescriptions
            style={{
              background: "#fff",
            }}
            columns={columns}
            // request={async (params) => {
            //   const msg = await request<{
            //     data: GithubIssueItem[];
            //   }>('https://proapi.azurewebsites.net/github/issues',{
            //     params,
            //   });
            //   return{
            //     ...msg,
            //     data: msg?.data[0],
            //   };
            // }}
          />
        )}
      </ProCard>
    </>
  );
};

export default Table;
