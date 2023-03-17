import { request } from 'umi';
import type { Params, ListItemDataType } from './data';
import {ArrangeParam, ArrangeResponseParam} from "./data";

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list', {
    params,
  });
}

export async function startArrange(
  params: ArrangeParam,
): Promise<{ data: { list: ArrangeResponseParam } }> {
  return request('http://ip:6089/flow-arrange/api', {
    params,
  });
}
