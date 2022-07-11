import {   Space, Tag } from "antd";

export const columns = [
  {
    title: "Timestamp created",
    key: "since",
    dataIndex: "created_at",
    valueType: "dateTime",
    editable: false,
    width: "15%",
  },
  {
    title: "Title",
    dataIndex: "title",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "This item is required",
        },
      ],
    },
    width: "15%",
  },
  {
    title: "Description",
    dataIndex: "decs",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "This item is required",
        },
      ],
    },
    width: "15%",
  },
  {
    title: "Due date",
    key: "since",
    dataIndex: "createdAt",
    valueType: "dateTime",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "This item is required",
        },
      ],
    },
    width: "15%",
  },
  {
    title: "Tag",
    dataIndex: "labels",
    width: "15%",
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: "Status",
    key: "state",
    width: "15%",
    dataIndex: "state",
    valueType: "select",
    valueEnum: {
      all: { text: "all", status: "Default" },
      open: {
        text: "open",
        status: "Error",
      },
      working: {
        text: "working",
        status: "working",
      },

      done: {
        text: "resolved",
        status: "Success",
      },
      overdue: {
        text: "working",
        status: "working",
      },
    },
  },

  {
    title: "Operation",
    valueType: "option",
    width: "10%",
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        edit
      </a>,
      //   <EditableProTable.RecordCreator
      //     key="copy"
      //     record={{
      //       ...record,
      //       id: (Math.random() * 1000000).toFixed(0),
      //     }}
      //   >
      //     <a> Copy this line to the end </a>
      //   </EditableProTable.RecordCreator>,
    ],
  },
];
