import React from "react";
import {Card, Form, Input, Select} from "antd";
import {Flow, withPropsAPI} from "gg-editor";
import styles from "@/pages/editor/flow/index.less";
import {Endpoint} from "@/pages/profile/basic2/data";


type FlowApiProps = {
  type: string;
  propsAPI?: any;

  content: Endpoint[]
};
class FlowApi extends React.Component<FlowApiProps> {
  get item() {
    const { propsAPI } = this.props;
    return propsAPI.getSelected()[0];
  }

  pic = () => {
    const { propsAPI } = this.props;
    console.log(propsAPI)
    let json = '{}';
    let jsonIndex = 0;

    let isOA = false
    let isBillType = false

    for (let i = 0; i < this.props.content.length; i++) {
      const item = this.props.content.at(i)
      if (item.id == 'oa') {
        isOA = true
      }

      if (item.sequence?.includes('billType')) {
        isBillType = true
      }
    }

    if (this.props.content != null) {
      if (!isOA && !isBillType) {
        json = '{"nodes":[{"type":"node","size":"72*72","shape":"flow-circle","color":"#FA8C16","label":"Start","x":105.5,"y":169.5,"id":"ab059044","index":0},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"财务","x":569.84375,"y":169,"id":"59f3d0f2","index":1},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"报销系统","x":243.34375,"y":169.5,"id":"04f7e418","index":2},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"打印系统","x":414.84375,"y":169.5,"id":"7c979551","index":3}],"edges":[{"source":"ab059044","sourceAnchor":1,"target":"04f7e418","targetAnchor":3,"id":"f968d571","index":4},{"source":"04f7e418","sourceAnchor":1,"target":"7c979551","targetAnchor":3,"id":"19dbb1b3","index":5},{"source":"7c979551","sourceAnchor":1,"target":"59f3d0f2","targetAnchor":3,"id":"e0a9f8cc","index":6}]}'
      } else if (!isOA && isBillType) {
        json = '{"nodes":[{"type":"node","size":"72*72","shape":"flow-circle","color":"#FA8C16","label":"Start","x":105.5,"y":169.5,"id":"ab059044","index":0},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"财务","x":569.84375,"y":169,"id":"59f3d0f2","index":1},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"报销系统","x":243.34375,"y":169.5,"id":"04f7e418","index":2},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"打印系统","x":414.84375,"y":169.5,"id":"7c979551","index":3},{"type":"node","size":"80*72","shape":"flow-rhombus","color":"#13C2C2","label":"billType == 1","x":243.84375,"y":272,"id":"9aabdee3","index":7}],"edges":[{"source":"ab059044","sourceAnchor":1,"target":"04f7e418","targetAnchor":3,"id":"f968d571","index":4},{"source":"04f7e418","sourceAnchor":1,"target":"7c979551","targetAnchor":3,"id":"19dbb1b3","index":5},{"source":"7c979551","sourceAnchor":1,"target":"59f3d0f2","targetAnchor":3,"id":"e0a9f8cc","index":6},{"source":"04f7e418","sourceAnchor":2,"target":"9aabdee3","targetAnchor":0,"id":"b21dbafb","index":8},{"source":"9aabdee3","sourceAnchor":1,"target":"59f3d0f2","targetAnchor":2,"id":"1fa76132","shape":"flow-polyline-round","index":9}]}'
      } else if (isOA && isBillType) {
        json = '{"nodes":[{"type":"node","size":"72*72","shape":"flow-circle","color":"#FA8C16","label":"Start","x":105.5,"y":169.5,"id":"ab059044","index":0},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"财务","x":569.84375,"y":169,"id":"59f3d0f2","index":1},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"报销系统","x":243.34375,"y":169.5,"id":"04f7e418","index":2},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"打印系统","x":414.84375,"y":169.5,"id":"7c979551","index":3},{"type":"node","size":"80*72","shape":"flow-rhombus","color":"#13C2C2","label":"reason == \'出差\'","x":243.84375,"y":312,"id":"06f1b4f7","index":9},{"type":"node","size":"80*72","shape":"flow-rhombus","color":"#13C2C2","label":"billType == 1","x":244.34375,"y":428.5,"id":"9aabdee3","index":11},{"type":"node","size":"80*48","shape":"flow-rect","color":"#1890FF","label":"OA系统","x":386.84375,"y":312,"id":"1fb7d8f7","index":12}],"edges":[{"source":"ab059044","sourceAnchor":1,"target":"04f7e418","targetAnchor":3,"id":"f968d571","index":4},{"source":"04f7e418","sourceAnchor":1,"target":"7c979551","targetAnchor":3,"id":"19dbb1b3","index":5},{"source":"7c979551","sourceAnchor":1,"target":"59f3d0f2","targetAnchor":3,"id":"e0a9f8cc","index":6},{"source":"04f7e418","sourceAnchor":2,"target":"06f1b4f7","targetAnchor":0,"id":"b21dbafb","index":7},{"source":"9aabdee3","sourceAnchor":1,"target":"59f3d0f2","targetAnchor":2,"id":"1fa76132","shape":"flow-polyline-round","index":8},{"source":"06f1b4f7","sourceAnchor":2,"target":"9aabdee3","targetAnchor":0,"id":"b6ddcec0","index":10},{"source":"06f1b4f7","sourceAnchor":1,"target":"1fb7d8f7","targetAnchor":3,"id":"b16fda33","index":13},{"source":"1fb7d8f7","sourceAnchor":2,"target":"9aabdee3","targetAnchor":0,"id":"8c8d23bf","shape":"flow-polyline-round","index":14}]}'
      }
    }
    return propsAPI.read(JSON.parse(json))
  };

  componentDidUpdate(prevProps: Readonly<FlowApiProps>, prevState: Readonly<{}>, snapshot?: any) {
    this.pic()
  }


  render() {
    return (
      <Flow className={styles.flow} />
    );
  }
}

export default withPropsAPI(FlowApi as any);
