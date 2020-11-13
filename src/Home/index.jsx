/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Content from './Content';
// import Teams1 from './Teams1';

import { Nav00DataSource } from './data.source';
import './less/antMotionStyle.less';
import Bg from './components/bg/Bg';
// import {Element} from "rc-banner-anim";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.dom = '';
    this.initShow = null;
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
    [
      'getNode',
      'getSelectedItem',
      'getInitShow',
    ].forEach(method => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  getNode() {
    // TODO: do something
    return this.ref;
  }

  getSelectedItem(selectedItem) {
    this.initShow = selectedItem;
    // this.state.selectedKey = selectedItem;
  }

  getInitShow(initShow) {
    console.log('9j9', initShow);
    return initShow;
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
        context={this.getNode}
        getSelectedItem={this.getSelectedItem}
      />,
      <Content
        key="Content"
        ref={ref => this.ref = ref}
        getInitShow={this.getInitShow}
      />,
      <Bg key="bg" context={this.getNode} />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
