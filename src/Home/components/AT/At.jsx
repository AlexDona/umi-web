import React from 'react';
import { Row, Col } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
// import { Parallax, OverPack } from 'rc-scroll-anim';
// import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import require from 'enquire-js';
// import TweenOne from 'rc-tween-one';
import './less/At.less';
// import Slide from '../Slide/Slide';

class At extends React.Component {
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
      <div className="at">
        <QueueAnim
          className="at-content1"
          key="QueueAnim"
          type={['right', 'left']}
          delay={0}
        >
          <Row className="row-p" justify="center">
            <Col span={15}>
              <h1 className="t-a-c">
                <Texty>
                  AT
                </Texty>
              </h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <p className="t-a-c row-p">
                河图平台内的价值交易流转活动以稳定通证AT作为数字凭证。AT与RMB进行1:1兑换，
                也接受他国法币按照实时汇率兑换。将通过大数据、人工智能等技术进行有效监管，确保人民币不以任何形式外流
              </p>
              <p className="row-text">
                AT独具优势：
              </p>
            </Col>
          </Row>
          <QueueAnim duration={0} key="page" type="bottom">
            <Row className="at-pic-content" justify="center">
              <Col span={15}>
                <Row className="row-p">
                  <Col span={12}>
                    <img className="pic" src={require('../../../img/at1.png')} alt="" />
                  </Col>
                  <Col span={12} className="pic-right">
                    <img className="pic" src={require('../../../img/at2.png')} alt="" />
                  </Col>
                </Row>
                <Row className="row-p">
                  <Col span={12}>
                    <img className="pic" src={require('../../../img/at3.png')} alt="" />
                  </Col>
                  <Col span={12} className="pic-right">
                    <img className="pic" src={require('../../../img/at4.png')} alt="" />
                  </Col>
                </Row>
                <Row className="row-p">
                  <Col span={12}>
                    <img className="pic" src={require('../../../img/at5.png')} alt="" />
                  </Col>
                  <Col span={12} className="pic-right">
                    <img className="pic" src={require('../../../img/at6.png')} alt="" />
                  </Col>
                </Row>
                <Row className="row-p">
                  <Col span={12}>
                    <img className="pic" src={require('../../../img/at7.png')} alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </QueueAnim>
        </QueueAnim>

        <div className="at-content2">
          <Row className="row-p" justify="center">
            <Col span={15}>
              <h1 className="t-a-c">
                <Texty>
                  T-REITs
                </Texty>
              </h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <p className="row-p">
                ADEC于全球首创资产通证化的产融结合模式，利用数字经济的重要底层技术区块链与传统金融的融合创新，
                REITs的通证化，即Tokenized REITs，简称为T-REITs
              </p>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <Row className="at-content2-pic row-p" justify="center">
                <Col span={6} className="t-a-c">
                  <img className="pic" src={require('../../../img/reits1.png')} alt="" />
                </Col>
                <Col span={6} className="t-a-c">
                  <img className="pic" src={require('../../../img/reits2.png')} alt="" />
                </Col>
                <Col span={6} className="t-a-c">
                  <img className="pic" src={require('../../../img/reits3.png')} alt="" />
                </Col>
                <Col span={6} className="t-a-c">
                  <img className="pic" src={require('../../../img/reits4.png')} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <div className="text">执行主体：</div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={16}>
              <Row className="at-content2-pic" justify="center">
                <Col span={4}>
                  <img className="pic2" src={require('../../../img/reits5.png')} alt="" />
                </Col>
                <Col span={4}>
                  <img className="pic2" src={require('../../../img/reits6.png')} alt="" />
                </Col>
                <Col span={4}>
                  <img className="pic2" src={require('../../../img/reits7.png')} alt="" />
                </Col>
                <Col span={4}>
                  <img className="pic2" src={require('../../../img/reits8.png')} alt="" />
                </Col>
                <Col span={4}>
                  <img className="pic2" src={require('../../../img/reits9.png')} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <div className="text">增信措施：</div>
              <Row className="row-p">
                <Col span={2}><img className="icons" src={require('../../../img/erits_icon1.png')} alt="" /></Col>
                <Col span={10} className="align-s-c">
                  <div>流动性支持机构：实力强劲的金融机构提供流动性支持，确保有效增信</div>
                </Col>
              </Row>
              <Row className="row-p">
                <Col span={2}><img className="icons" src={require('../../../img/erits_icon2.png')} alt="" /></Col>
                <Col span={10} className="align-s-c">
                  <div>现金流超额覆盖：在扣除当期税费之后，每年的租金净收入对通证产品的本息兑付的覆盖倍数大于1倍</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="first">
          <Row justify="center">
            <Col span={15}>
              <h1 className="t-a-c">
                <Texty>
                  首发项目
                </Texty>
              </h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <p className="t-a-c row-p">
                ADEC的首个通证化项目“亚洲数字经济自由贸易区——金三角数字经济产业基地”（以下简称“基地”）现已成功启动，
                计划将一带一路政策重镇“金三角数字经济特区”打造成泛亚洲的“新纳斯达克”和“新开曼群岛”
              </p>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col span={15}>
              <Row className="row-p" justify="space-between">
                <Col span={8} className="t-a-c">
                  <img className="first-pic t-a-c" src={require('../../../img/first1.png')} alt="" />
                </Col>
                <Col span={8} className="t-a-c">
                  <img className="first-pic" src={require('../../../img/first2.png')} alt="" />
                </Col>
                <Col span={8} className="t-a-c">
                  <img className="first-pic" src={require('../../../img/first3.png')} alt="" />
                </Col>
              </Row>

              <div className="text">增信措施：</div>
              <div>基地的建设方及原始权益人为金三角数字经济区建设有限公司（GoldenTriangle DigitalEconomicZoneConstructionCo.,Ltd）。</div>
              <div>新加坡矩阵思想有限公司（Matrixing MindCo.,Limited）以数字化信托投资基金的形式持有基地的全部权益，</div>
              <div>共计一百万平方米的建设总面积，并将其分割为一亿枚通证，命名为“基建通”（Sculptor），</div>
              <div>代码:SCT。每1㎡建设面积的权益对应100枚SCT。</div>

              <Row className="row-p" justify="space-between">
                <Col span={8}>
                  <Row className="">
                    <Col span={6} gutter={2}><img className="first-icon" src={require('../../../img/first_icon1.png')} alt="" /></Col>
                    <Col span={18} className="text-align">
                      <div>7*24小时的便捷流转和交易</div>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Row>
                    <Col span={6} gutter={2}><img className="first-icon" src={require('../../../img/first_icon2.png')} alt="" /></Col>
                    <Col span={18} className="text-align">
                      <div>斯莱登基金提供流动性支持</div>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Row>
                    <Col span={6} gutter={2}><img className="first-icon" src={require('../../../img/first_icon3.png')} alt="" /></Col>
                    <Col span={18} className="text-align">
                      <div>权益多样尽享卓越体验</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default At;
