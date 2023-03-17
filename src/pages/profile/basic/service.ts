import { request } from 'umi';
import type { BasicGood, BasicProgress } from './data.d';
import {EnventRecord} from "./data.d";

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
