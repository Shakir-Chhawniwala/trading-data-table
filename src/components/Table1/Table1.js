import React, { useRef, useState,  } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  EditableProTable,
  ProCard,
} from "@ant-design/pro-components";
import { Button, Form,  Space } from "antd";
import { columns } from "./column"
import {defaultData } from "./data"
import { Pagination } from "antd";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


const Table1 = (props) => {
  const actionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();

  return (
    <>
      <Space>
        <Button
          type="primary"
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
          key="rest"
          onClick={() => {
            form.resetFields();
          }}
        >
          reset form
        </Button>
      </Space>
      <ProCard>
        <EditableProTable
          rowKey="id"
          // scroll={{
          //   x: 960,
          // }}
          actionRef={actionRef}
          headerTitle="Trading Table"
          // maxLength={5}
          pagination={{
            pageSize: 10,
            locale: true,
          }}
          dateFormatter="string"
          type="table"
          options={{
            search: true,
          }}
          // Turn off the default new button
          recordCreatorProps={false}
          columns={columns}
          request={async () => ({
            data: defaultData,
            total: 3,
            success: true,
          })}
          value={defaultData}
          onChange={setDataSource}
          editable={{
            form,
            editableKeys,
            onSave: async () => {
              await waitTime(2000);
            },
            onChange: setEditableRowKeys,
            actionRender: (row, config, dom) => [dom.save, dom.cancel],
          }}
        />
      </ProCard>
    </>
  );
};

export default Table1;
