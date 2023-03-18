import type { Request, Response } from 'express';
import type { ListItemDataType } from './data.d';

const titles = [
  '员工报销',
  '员工出差',
  '办公用品采购',
  '供应商付款',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '开始一个报销的流程',
  '出差前在这里进行审批',
  '办公用品采购请在此进行',
  '供应商付款请再次进行',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

function fakeList(count: number): ListItemDataType[] {
  const list = [];

  list.push({
    id: "fake-list-1",
    title: "员工报销",
    cover: covers[0],
    subDescription: desc[0],
      content: "cat1"

    },
    {
      id: "fake-list-2",
      title: "员工出差",
      cover: covers[1],
      subDescription: desc[1],
      content: "cat1"
    },
    {
      id: "fake-list-3",
      title: "办公用品采购",
      cover: covers[2],
      subDescription: desc[2],
      content: "cat2"
    },
    {
      id: "fake-list-4",
      title: "供应商付款",
      cover: covers[3],
      subDescription: desc[3],
      content: "cat2"
    },
  )


  // for (let i = 0; i < count; i += 1) {
  //   list.push({
  //     id: `fake-list-${i}`,
  //     owner: user[i % 10],
  //     title: titles[i % 8],
  //     avatar: avatars[i % 8],
  //     cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
  //     status: ['active', 'exception', 'normal'][i % 3] as
  //       | 'normal'
  //       | 'exception'
  //       | 'active'
  //       | 'success',
  //     percent: Math.ceil(Math.random() * 50) + 50,
  //     logo: avatars[i % 8],
  //     href: 'https://ant.design',
  //     updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
  //     createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
  //     subDescription: desc[i % 5],
  //     description:
  //       '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
  //     activeUser: Math.ceil(Math.random() * 100000) + 100000,
  //     newUser: Math.ceil(Math.random() * 1000) + 1000,
  //     star: Math.ceil(Math.random() * 100) + 100,
  //     like: Math.ceil(Math.random() * 100) + 100,
  //     message: Math.ceil(Math.random() * 10) + 10,
  //     content:
  //       '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
  //     members: [
  //       {
  //         avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
  //         name: '曲丽丽',
  //         id: 'member1',
  //       },
  //       {
  //         avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
  //         name: '王昭君',
  //         id: 'member2',
  //       },
  //       {
  //         avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
  //         name: '董娜娜',
  //         id: 'member3',
  //       },
  //     ],
  //   });
  // }
  return list;
}

function getFakeList(req: Request, res: Response) {
  const params: any = req.query;

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  return res.json({
    data: {
      list: result,
    },
  });
}

export default {
  'GET  /api/fake_list': getFakeList,
};
