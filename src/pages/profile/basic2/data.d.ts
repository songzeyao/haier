export type BasicGood = {
  id: string;
  name?: string;
  barcode?: string;
  price?: string;
  num?: string | number;
  amount?: string | number;
};

export type BasicProgress = {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
};

export type EnventRecord = {
  id: string;
  app_id: string;
  task_id: string;
  endpoint_id: string;
  endpoint_name: string;
  receive_data: string;
  output_data: string;
  create_time: string;
  update_time: string;
  create_time_string: string;
  update_time_string: string;
};

export type Endpoint = {
  id: string;
  app_id: string;
  name: string;
  index: number;
  sequence: string;
};
