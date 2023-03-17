import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Badge, Card, Descriptions, Divider } from 'antd';
import type { FC } from 'react';
import React, {useState} from 'react';
import {useLocation, useRequest} from 'umi';
import type { BasicGood, BasicProgress } from './data.d';
import {queryBasicProfile, queryEventRecord} from './service';
import styles from './style.less';
import {queryTaskList} from "@/pages/list/basic-list/service";
import {EnventRecord} from "./data.d";

const progressColumns: ProColumns<EnventRecord>[] = [
  {
    title: '节点编号',
    dataIndex: 'endpoint_id',
    key: 'endpoint_id',
  },
  {
    title: '节点名称',
    dataIndex: 'endpoint_name',
    key: 'endpoint_name',
  },
  {
    title: '触发时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   key: 'status',
  //   render: (text: React.ReactNode) => {
  //     if (text === 'success') {
  //       return <Badge status="success" text="完成" />;
  //     }
  //     return <Badge status="processing" text="进行中" />;
  //   },
  // },

  {
    title: '操作员ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '耗时',
    dataIndex: 'cost',
    key: 'cost',
  },
];

const Basic: FC = () => {

  const location = useLocation();
  console.log(location.query)
  const { taskId } = location.query


  const {
    data: listData,
    loading: listLoading,
    mutate,
  } = useRequest(() => {
    return queryTaskList(taskId);
  });

  const list = listData || [];

  const { data, loading } = useRequest(() => {
    console.log(list)
    console.log(listData)
    return queryEventRecord(taskId);
  });



  const enventRecordList = data || [];

  const renderContent = (value: any, _: any, index: any) => {
    const obj: {
      children: any;
      props: { colSpan?: number };
    } = {
      children: value,
      props: {},
    };
    if (index === basicGoods.length) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const goodsColumns: ProColumns<BasicGood>[] = [
    {
      title: '商品编号',
      dataIndex: 'id',
      key: 'id',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < basicGoods.length) {
          return <span>{text}</span>;
        }
        return {
          children: <span style={{ fontWeight: 600 }}>总计</span>,
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    },
    {
      title: '商品条码',
      dataIndex: 'barcode',
      key: 'barcode',
      render: renderContent,
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      align: 'right' as 'left' | 'right' | 'center',
      render: renderContent,
    },
    {
      title: '数量（件）',
      dataIndex: 'num',
      key: 'num',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < basicGoods.length) {
          return text;
        }
        return <span style={{ fontWeight: 600 }}>{text}</span>;
      },
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < basicGoods.length) {
          return text;
        }
        return <span style={{ fontWeight: 600 }}>{text}</span>;
      },
    },
  ];

  return (
    <PageContainer>
      <Card bordered={false}>
        <Descriptions title="任务详情" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="任务编号">{list.at(0)?.id}</Descriptions.Item>
          <Descriptions.Item label="应用编号">{list.at(0)?.app_id}</Descriptions.Item>
          <Descriptions.Item label="应用名称">{list.at(0)?.app_name}</Descriptions.Item>
          <Descriptions.Item label="当前步骤">{list.at(0)?.current_endpoint_name}</Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        {/*<Descriptions title="用户信息" style={{ marginBottom: 32 }}>*/}
        {/*  <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="常用快递">菜鸟仓储</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="备注">无</Descriptions.Item>*/}
        {/*</Descriptions>*/}
        {/*<Divider style={{ marginBottom: 32 }} />*/}
        {/*<div className={styles.title}>退货商品</div>*/}
        {/*<ProTable*/}
        {/*  style={{ marginBottom: 24 }}*/}
        {/*  pagination={false}*/}
        {/*  search={false}*/}
        {/*  loading={loading}*/}
        {/*  options={false}*/}
        {/*  toolBarRender={false}*/}
        {/*  dataSource={goodsData}*/}
        {/*  columns={goodsColumns}*/}
        {/*  rowKey="id"*/}
        {/*/>*/}
        <div className={styles.title}>任务流转</div>
        <ProTable
          style={{ marginBottom: 16 }}
          pagination={false}
          loading={loading}
          search={false}
          options={false}
          toolBarRender={false}
          dataSource={enventRecordList}
          columns={progressColumns}
        />
      </Card>
    </PageContainer>
  );
};

export default Basic;
