import { request } from 'umi';
import type {BasicGood, BasicProgress, Endpoint} from './data.d';
import {EnventRecord} from "./data.d";
import {AppBean} from "@/pages/list/table-list/data";

export async function queryBasicProfile(): Promise<{
  data: {
    basicProgress: BasicProgress[];
    basicGoods: BasicGood[];
  };
}> {
  return request('/api/profile/basic');
}


export async function queryEventRecord(taskId: string): Promise<{
  data: EnventRecord[];
}> {
  return request('/api/eventList', {
    method: 'POST',
    data: {
      taskId
    }
  });
}

export async function queryEndpointList(appid: string): Promise<{
  data: Endpoint[];
}> {
  return request('/api/endpointList', {
    method: 'POST',
    data: {
      appid
    }
  });
}
