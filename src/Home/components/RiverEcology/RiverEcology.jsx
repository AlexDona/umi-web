import React from 'react';
import { Row, Col } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
// import { Parallax, OverPack } from 'rc-scroll-anim';
// import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import './less/RiverEcology.less';
// import Slide from '../Slide/Slide';

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
            <Col span={13}>
              <p className="row-p">
                ADEC将为组织成员提供一个基于“科技创新驱动发展”战略的，融合5G、大数据、物联网、区块链、人工智能、
                工业互联网、智慧城市等属性的数字经贸平台——河图（Habitation）平台
              </p>
            </Col>
          </Row>
          <QueueAnim duration={0} key="page" type="bottom">
            <Row className="ecology-pic" justify="center">
              <Col span={13}>
                <div className="ecology-content">
                  <img className="pic" src={require('../../../img/ecology1.png')} alt="" />
                  <div className="ecology-text">以全球范围内高速发展区域的广义生产资料为基础</div>
                </div>
                <div className="ecology-content">
                  <img className="pic" src={require('../../../img/ecology2.png')} alt="" />
                  <div className="ecology-text">促进成员间（尤指产业和金融业双方）的相互依存及全球不动产产业链的要素整合</div>
                </div>
                <div className="ecology-content">
                  <img className="pic" src={require('../../../img/ecology3.png')} alt="" />
                  <div className="ecology-text">让普通人都可协同、共建、共享全球性数字产融经济自贸区的发展红利</div>
                </div>
                <div className="ecology-content">
                  <img className="pic" src={require('../../../img/ecology4.png')} alt="" />
                  <div className="ecology-text">依托数字经济特有的“去边界”特性加强开放的多边经贸体制、依托不可篡改的信任机制减少区域贸易
                    和投资壁垒</div>
                </div>
                <div className="ecology-content">
                  <img className="pic" src={require('../../../img/ecology5.png')} alt="" />
                  <div className="ecology-text">为组织成员提供包括链改、价值互联网服务、跨境商贸等的一站式的产业赋能</div>
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
