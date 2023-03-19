import React from 'react';
import {Card, Input, Select, Form, Button} from 'antd';
import { withPropsAPI } from 'gg-editor';
import {PlusOutlined} from "@ant-design/icons";

const upperFirst = (str: string) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (l: string) => l.toUpperCase());

const { Item, List } = Form;
const { Option } = Select;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

type DetailFormProps = {
  type: string;
  propsAPI?: any;
};

class DetailForm extends React.Component<DetailFormProps> {

  get item() {
    const { propsAPI } = this.props;
    return propsAPI.getSelected()[0];
  }

  handleFieldChange = (values: any) => {
    const { propsAPI } = this.props;
    const { getSelected, executeCommand, update } = propsAPI;

    setTimeout(() => {
      const item = getSelected()[0];
      if (!item) {
        return;
      }
      executeCommand(() => {
        update(item, {
          ...values,
        });
      });
    }, 0);
  };

  handleInputBlur = (type: string) => (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.handleFieldChange({
      [type]: e.currentTarget.value,
    });
  };

  handleValue = (type: string, value: any) => {
    this.handleFieldChange({
      [type]: value,
    });
}

  handleLabel2 = (type: string) => (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.handleFieldChange({
      [type]: e.currentTarget.value,
    });
    // const { propsAPI } = this.props;
    // console.log(propsAPI.read(J));

  };

  renderNodeDetail = () => {
    const model = this.item.getModel();

    return (
      <Form initialValues={{ model }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
        <List name="names">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Item
                {...inlineFormItemLayout}
                label={model.aaaa}
                required={false}
                key={field.key}
              >
                <Item
                  {...field}
                  noStyle
                >
                  <Input placeholder="passenger name" style={{ width: '60%' }} />
                </Item>
              </Item>
            ))}
            <Item label="属性名">
              <Input placeholder="xxname" />
              <Button
                type="dashed"
                // onClick={() => add()}
                onClick={() => {
                  const { propsAPI } = this.props;
                  console.log(JSON.stringify(propsAPI.save()));
                }}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                增加
              </Button>
              <Form.ErrorList errors={errors} />
            </Item>
          </>
        )}
        </List>
      </Form>
    );
  };

  renderEdgeDetail = () => {
    const { label = '', shape = 'flow-smooth' } = this.item.getModel();

    return (
      <Form initialValues={{ label, shape }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
        <Item label="Shape" name="shape" {...inlineFormItemLayout}>
          <Select onChange={(value) => this.handleFieldChange({ shape: value })}>
            <Option value="flow-smooth">Smooth</Option>
            <Option value="flow-polyline">Polyline</Option>
            <Option value="flow-polyline-round">Polyline Round</Option>
          </Select>
        </Item>
      </Form>
    );
  };

  renderGroupDetail = () => {
    const { label = '新建分组' } = this.item.getModel();

    return (
      <Form initialValues={{ label }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
      </Form>
    );
  };

  render() {
    const { type } = this.props;
    if (!this.item) {
      return null;
    }

    return (
      <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'group' && this.renderGroupDetail()}
      </Card>
    );
  }
}

export default withPropsAPI(DetailForm as any);
