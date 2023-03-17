import { request } from 'umi';
import type { BasicListItemDataType } from './data.d';
import {Task} from "./data.d";

type ParamsType = {
  count?: number;
} & Partial<BasicListItemDataType>;

export async function queryFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('/api/get_list', {
    params,
  });
}

export async function removeFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('/api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('/api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('/api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}

export async function queryTaskList(
  taskId: string
  ): Promise<{ data: Task[] }> {
  return request('/api/taskList', {
    method: 'POST',
    data: {
      taskId
    },
  });
}
