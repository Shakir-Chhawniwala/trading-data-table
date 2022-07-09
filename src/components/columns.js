import { Space, Tag } from "antd";

export const columns = [
  {
    title: "Sort by",
    key: "direction",
    hideInTable: true,
    hideInDescriptions: true,
    dataIndex: "direction",
    filters: true,
    onFilter: true,
    valueType: "select",
    valueEnum: {
      asc: "positive order",
      desc: "reverse order",
    },
  },
  {
    title: "Timestamp created",
    key: "since",
    dataIndex: "created_at",
    valueType: "dateTime",
    width: 200,
  },

  {
    title: "Title",
    dataIndex: "title",
    ellipsis: true,
    search: false,
    editable: true,
    required: true,
    message: "This item is required",
  },

  {
    title: "Description",
    required: true,
    message: "This item is required",
    dataIndex: "decs",
    fieldProps: (from, { rowKey, rowIndex }) => {
      if (from.getFieldValue([rowKey || "", "title"]) === "Not fun") {
        return {
          disabled: true,
        };
      }
      if (rowIndex > 9) {
        return {
          disabled: true,
        };
      }
      return {};
    },
  },
  {
    title: "Update time",
    key: "since2",
    dataIndex: "createdAt",
    valueType: "date",
  },
  {
    title: "label",
    dataIndex: "labels",
    width: 120,
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
    dataIndex: "state",
    initialValue: "all",
    required: true,
    message: "This item is required",
    filters: true,
    onFilter: true,
    valueType: "select",
    valueEnum: {
      all: { text: "all", status: "Default" },
      open: {
        text: "Open",
        status: "Error",
      },
      closed: {
        text: "Working",
        status: "Error",
      },
      open: {
        text: "Done",
        status: "Success",
      },
      closed: {
        text: "Overdue",
        status: "Success",
      },
    },
  },
];
