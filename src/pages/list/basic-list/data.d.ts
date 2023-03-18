export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type BasicListItemDataType = {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};

export type Task = {
  id: string;
  app_id: string;
  app_name: string;
  status: string;
  current_endpoint_name: string;
  process_count: number;
  endpoint_count: number;
  current_data: string;
  current_endpoint_url: string;
  create_time: string;
  update_time: string;
};
