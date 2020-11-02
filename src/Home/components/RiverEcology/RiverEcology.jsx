import React from 'react';
import { Row, Col } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { Parallax, OverPack } from 'rc-scroll-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import './less/RiverEcology.less';
import Slide from '../Slide/Slide';
// import { isImg } from './utils';

class RiverEcology extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.timer = null;
    this.animation = [
      { scale: 0.3 },
      { scale: 1 },
    ];
    // [
    //   'mouseOver',
    //   'mouseOut',
    // ].forEach((method) => this[method] = this[method].bind(this));
    this.getRotation = 0;

    // const transformProp = Modernizr.prefixed('transform');
  }

  render() {
    return (
      <div className="river-ecology">
        <QueueAnim
          className="ecology"
          key="QueueAnim"
          type={['right', 'left']}
          delay={0}
        >
          <Row key={1} show="true" className="row-content" justify="center">
            <Col span={10}>
              <h1 className="t-a-c">
                <Texty>
                  河图生态
                </Texty>
              </h1>
            </Col>
          </Row>
          <Row key={2} show="true" justify="center">
            <Col span={10}>
              <p className="t-a-c row-p">
                ADEC将为组织成员提供一个基于“科技创新驱动发展”战略的，融合5G、大数据、物联网、区块链、人工智能、
                工业互联网、智慧城市等属性的数字经贸平台——河图（Habitation）平台
              </p>
            </Col>
          </Row>
          <QueueAnim duration={0} key="page" type="bottom">
            <Row className="ecology-pic" justify="center">
              <Col span={10}>
                <div className="">
                  <img className="pic" src={require('../../../img/ecology1.png')} alt="" />
                </div>
                <div>
                  <img className="pic" src={require('../../../img/ecology2.png')} alt="" />
                </div>
                <div>
                  <img className="pic" src={require('../../../img/ecology3.png')} alt="" />
                </div>
                <div>
                  <img className="pic" src={require('../../../img/ecology4.png')} alt="" />
                </div>
                <div>
                  <img className="pic" src={require('../../../img/ecology5.png')} alt="" />
                </div>
              </Col>
            </Row>
          </QueueAnim>
        </QueueAnim>
      </div>
    );
  }
}
export default RiverEcology;
