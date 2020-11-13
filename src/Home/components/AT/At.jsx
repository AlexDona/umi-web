import React from 'react';
import { Row, Col } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
// import { Parallax, OverPack } from 'rc-scroll-anim';
// import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import './less/At.less';
import ScrollTop from '../ScrollTop/ScrollTop';
// import Slide from '../Slide/Slide';

class At extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el: '.at',
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
              <p className="row-p">
                河图平台内的价值交易流转活动以稳定通证AT作为数字凭证。AT与RMB进行1:1兑换，
                也接受他国法币按照实时汇率兑换。将通过大数据、人工智能等技术进行有效监管，确保人民币不以任何形式外流
              </p>
            </Col>
          </Row>
          <QueueAnim duration={0} key="page" type="bottom">
            <Row justify="center">
              <Col span={15} className="at-pic-content">
                <div>AT独具优势：</div>
                <Row className="row-p">
                  <Col span={12}>
                    <div className="at-list">
                      <img className="pic" src={require('../../../img/at1.png')} alt="" />
                      <div className="at-list-text">AT存在于自有AT区块链（公链）上</div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="at-list fr">
                      <img className="pic" src={require('../../../img/at2.png')} alt="" />
                      <div className="at-list-text">AT继承了全层协议的特性</div>
                    </div>
                  </Col>
                </Row>
                <Row className="row-p">
                  <Col span={12}>
                    <div className="at-list">
                      <img className="pic" src={require('../../../img/at3.png')} alt="" />
                      <div className="at-list-text">在p2p、伪匿名、分散、加密安全的环境中使用</div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="at-list fr">
                      <img className="pic" src={require('../../../img/at4.png')} alt="" />
                      <div className="at-list-text">采用简单但有效的方法进行准备金证明</div>
                    </div>
                  </Col>
                </Row>
                <Row className="row-p">
                  <Col span={12}>
                    <div className="at-list">
                      <img className="pic" src={require('../../../img/at5.png')} alt="" />
                      <div className="at-list-text">可在商家交易、交易所及钱包等多场景中集成</div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="at-list fr">
                      <img className="pic" src={require('../../../img/at6.png')} alt="" />
                      <div className="at-list-text">AT发行或赎回不会面临任何定价或流动性限制</div>
                    </div>
                  </Col>
                </Row>
                <Row className="row-p">
                  <Col span={12}>
                    <div className="at-list">
                      <img className="pic" src={require('../../../img/at7.png')} alt="" />
                      <div className="at-list-text">一对一法币支持更容易让非技术用户理解</div>
                    </div>
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
            <Col span={15} className="card1">
              <p className="row-p">
                ADEC于全球首创资产通证化的产融结合模式，利用数字经济的重要底层技术区块链与传统金融的融合创新，
                REITs的通证化，即Tokenized REITs，简称为T-REITs
              </p>
              <div className="card1-icons">
                <div className="card1-icons-list">
                  <img src={require('../../../img/reits_icon1.png')} alt="" />
                  <div className="text">门槛低</div>
                </div>
                <div className="card1-icons-list">
                  <img src={require('../../../img/reits_icon2.png')} alt="" />
                  <div className="text">便捷度更高</div>
                </div>
                <div className="card1-icons-list">
                  <img src={require('../../../img/reits_icon3.png')} alt="" />
                  <div className="text">安全性更高</div>
                </div>
                <div className="card1-icons-list">
                  <img src={require('../../../img/reits_icon4.png')} alt="" />
                  <div className="text">流动性更高</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15} className="card2-reits">
              <div className="text">执行主体：</div>
              <Row className="at-content2-pic row-p" justify="space-between">
                <Col className="t-a-c">
                  <div className="card2-reits-card">
                    <img className="pic" src={require('../../../img/reits1.png')} alt="" />
                    <div className="card-text">
                      资产原始权益人：将其
                      合法拥有的基础资产
                      转让给数字化信托基金
                      以获得资金的主体
                    </div>
                  </div>
                </Col>
                <Col className="t-a-c">
                  <div className="card2-reits-card">
                    <img className="pic" src={require('../../../img/reits2.png')} alt="" />
                    <div className="card-text">
                      信托投资基金：数字化
                      私募基金
                      或信托计划的发起人
                    </div>
                  </div>
                </Col>
                <Col className="t-a-c">
                  <div className="card2-reits-card">
                    <img className="pic" src={require('../../../img/reits3.png')} alt="" />
                    <div className="card-text">
                      运营管理机构：负责基础
                      设施招商运营、客户服务
                      物业维护维修的相关机构
                    </div>
                  </div>
                </Col>
                <Col className="t-a-c">
                  <div className="card2-reits-card">
                    <img className="pic" src={require('../../../img/reits4.png')} alt="" />
                    <div className="card-text">
                      项目监管银行：由监管
                      银行对项目公司的监管
                      账户进行监管
                    </div>
                  </div>
                </Col>
                <Col className="t-a-c">
                  <div className="card2-reits-card">
                    <img className="pic" src={require('../../../img/reits5.png')} alt="" />
                    <div className="card-text">
                      数字交易平台：数据
                      透明、价值流转高效的
                      数字化交易平台
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15} className="card3">
              <div>增信措施：</div>
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
                  基地介绍
                </Texty>
              </h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={15}>
              <p className="row-p">
                ADEC的首个通证化项目“亚洲数字经济自由贸易区——金三角数字经济产业基地”（以下简称“基地”）现已成功启动，
                计划将一带一路政策重镇“金三角数字经济特区”打造成泛亚洲的“新纳斯达克”和“新开曼群岛”
              </p>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col span={15}>
              <Row className="row-p" justify="space-between">
                <Col>
                  <div className="first-card-list">
                    <img className="first-pic" src={require('../../../img/first1.png')} alt="" />
                    <div className="first-card-text">
                      <div>产业园及创客中心</div>
                      <div>致力发展成老挝乃</div>
                      <div>至东南亚地区的产业孵化中心</div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="first-card-list">
                    <img className="first-pic" src={require('../../../img/first2.png')} alt="" />
                    <div className="first-card-text">
                      <div>会展综合体</div>
                      <div>力争成为泛亚洲地区</div>
                      <div>空间结构、推动</div>
                      <div>当地经济转型的重要载体</div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="first-card-list">
                    <img className="first-pic" src={require('../../../img/first3.png')} alt="" />
                    <div className="first-card-text">
                      <div>集休闲、娱乐、康养为</div>
                      <div>一体的商业娱乐综合体</div>
                      <div>打造东南亚的商业新地标，</div>
                      <div>并完成ADEC组织在物理化</div>
                      <div>空间的落地</div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="measure-card">
                <div>增信措施：</div>
                <div className="row-p">基地的建设方及原始权益人为金三角数字经济区建设有限公司（GoldenTriangle DigitalEconomicZoneConstructionCo.,Ltd）。</div>
                <div>新加坡矩阵思想有限公司（Matrixing MindCo.,Limited）以数字化信托投资基金的形式持有基地的全部权益，</div>
                <div>共计一百万平方米的建设总面积，并将其分割为一亿枚通证，命名为“基建通”（Sculptor），</div>
                <div>代码:SCT。每1㎡建设面积的权益对应100枚SCT。</div>

                <Row className="measure-icons" justify="space-between">
                  <Col flex="0 0 231px" className="t-a-c">
                    <img className="first-icon" src={require('../../../img/first_icon1.png')} alt="" />
                    <div className="measure-card-text">7*24小时的便捷流转和交易</div>
                  </Col>
                  <Col flex="0 0 231px" className="t-a-c">
                    <img className="first-icon" src={require('../../../img/first_icon2.png')} alt="" />
                    <div className="measure-card-text">斯莱登基金提供流动性支持</div>
                  </Col>
                  <Col flex="0 0 231px" className="t-a-c">
                    <img className="first-icon" src={require('../../../img/first_icon3.png')} alt="" />
                    <div className="measure-card-text">权益多样尽享卓越体验</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <ScrollTop el={this.state.el} />
      </div>
    );
  }
}
export default At;
