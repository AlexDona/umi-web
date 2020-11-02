import React, { ReactDOM } from 'react';
import { Row, Col } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { Parallax, OverPack  } from 'rc-scroll-anim';
import ScrollParallax  from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import './less/Adec.less';
import Slide from '../Slide/Slide';
// import { isImg } from './utils';

class Adec extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.imgArr = [
      { name: 'middle', src: `${require('../../../img/hope_1.png')}` },
      { name: 'end', src: `${require('../../../img/hope_4.png')}` },
      { name: 'normal', src: `${require('../../../img/hope_2.png')}` },
      { name: 'normal', src: `${require('../../../img/hope_3.png')}` },
      { name: 'start', src: `${require('../../../img/hope_5.png')}` },
    ];
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
      <div className="adec">
        <QueueAnim
          key="QueueAnim"
          type={['right', 'left']}
          delay={0}
        >
          <QueueAnim duration={600} className="demo-page" key="page" type="bottom">
            <Row key={1} show="true" className="row-content" justify="center">
              <Col span={10}><h1 className="t-a-c ">ADEC</h1></Col>
            </Row>
            <Row key={2} show="true" justify="center">
              <Col span={10}>
                <p className="t-a-c row-p">
                  亚洲数字经济合作组织（Asia Digital Economic Cooperation, 简称“ADEC”），是由亚洲财经国际集团有限公司主导发起、
                  多个洲际政府、机构和组织共同参与成立的、以数字经济驱动全球经济一体化的非政府组织
                </p>
              </Col>
            </Row>
            <div key="box" className="box">
              <QueueAnim duration={600} type="bottom">
                {/*{children}*/}
              </QueueAnim>
            </div>
          </QueueAnim>
        </QueueAnim>
        <div className="hope">
          <Row className="row-content" justify="center">
            <Col span={10}>
              <Parallax
                duration={200}
                animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
                style={{ opacity: 0 }}
              >
                <h1 className="t-a-c ">使命&愿景</h1>
              </Parallax>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={10}>
              <p className="t-a-c row-p">
                向全球民众普及：“协同、共建、共享”的“数字经济观”
              </p>
            </Col>
          </Row>
          <div className="sliders" style={{ height: '330px' }}>
            <Slide imgArr={this.imgArr} />
          </div>
        </div>

        <div className="construct">
          <QueueAnim duration={200} className="demo-page" key="page" type="bottom">
            <Row key={1} show="true" className="row-content t-a-c" justify="center">
              <Col span={10}><h1>组织架构</h1></Col>
            </Row>
            <Row key={2} show="true" justify="center">
              <Col span={10}>
                <p className="t-a-c row-p">
                  亚洲数字经济合作组织所有组织成员均以节点形式呈现并参与协同共建，包括发起节点、联合发起节点、支持型节点等不同实体单位
                </p>
              </Col>
            </Row>
            <Row className="pic-content" justify="center">
              <Col span={8}>
                <img src={require('../../../img/construct1.png')} alt="" />
              </Col>
              <Col span={8}>
                <img src={require('../../../img/construct2.png')} alt="" />
              </Col>
              <Col span={8}>
                <img src={require('../../../img/construct3.png')} alt="" />
              </Col>
            </Row>
          </QueueAnim>
        </div>

        <div className="teams">
          <Row show="true" className="row-content t-a-c" justify="center">
            <h1>
              <Parallax
                animation={{ x: '100px' }}
                style={{ marginTop: 64 }}
              >
                <Texty>组织成员</Texty>
              </Parallax>
            </h1>
          </Row>
          <Row show="true" justify="center">
            <Col span={16}>
              <Parallax animation={[{opacity: 0.1, x: -100, rotate: 0}, {opacity: 1, x: 100, rotate: '100deg', type: 'from'}]}>
                <QueueAnim key="queueAnim">
                  <p className="t-a-c team-row-p">
                    截至2020年7月，亚洲数字经济合作组织已有超过40个成员节点。每个成员单位均已质押了1000万AT（1 AT= 1 RMB），由新加坡矩阵世界基金会（Matrix World
                  </p>
                  <p className="t-a-c team-row-p">
                    Foundation LTD）旗下的AT产融基金直接管理。
                  </p>
                  <p className="t-a-c team-row-p">
                    ADEC的发起节点及秘书长单位是亚洲财经国际集团有限公司。
                  </p>
                  <p className="t-a-c team-row-p">
                    目前可披露的联合发起节点共同组成执行委员会，分别如下：
                  </p>
                </QueueAnim>
              </Parallax >
            </Col>
          </Row>
          <Row className="row-p team-company" justify="center">
            <Col span={13}>
              <Row justify="center">
                <Col span={4}>
                  <img src={require('../../../img/team1.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team2.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team3.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team4.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team5.png')} alt=""/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-p team-company" justify="center">
            <Col span={13}>
              <Row justify="center" className="team-company-content">
                <Col span={4}>
                  <img src={require('../../../img/team6.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team7.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team8.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team9.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img src={require('../../../img/team10.png')} alt=""/>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="row-p" justify="center">
            <Col span={16}>
              <p className="t-a-c team-row-p">
                联合国前秘书长潘基文、柬埔寨首相洪森、日本前首相鸠山由纪夫、泰国前总理他信等全球政府组织及各国政要；
              </p>
              <p className="t-a-c team-row-p">
                中国国防金融研究会等非营利组织；德勤、克拉维斯、斯文和穆尔律师事务所等国际知名会计师事务所
              </p>
              <p className="t-a-c team-row-p">
                及律师事务所；易来客（辽宁）网络科技有限公司等新金融行业；还包括跨国技术和交易平台、风险投资机构等等。
              </p>
              <p className="t-a-c team-row-p">
                ADEC未来将继续聚合及筛选更多合作组织作为资源型节点和支持型节点。各节点将共同参与建设、具有共同价值导向、目标协同一致、共享组织收益
              </p>
            </Col>
          </Row>
        </div>

        <div className="basic-skill">
          <Row show="true" className="row-content t-a-c" justify="center">
            <h1>
              <Parallax
                animation={{  }} // x: '100px'
                style={{ marginTop: 64 }}
              >
                <Texty>基本职能</Texty>
              </Parallax>
            </h1>
          </Row>
          <Row className="basic-pic-content" justify="center">
            <Col span={17}>
              <Row justify="space-between">
                <Col span={4}>
                  <img className="basic-pic" src={require('../../../img/basic1.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img className="basic-pic" src={require('../../../img/basic2.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img className="basic-pic" src={require('../../../img/basic3.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img className="basic-pic" src={require('../../../img/basic4.png')} alt=""/>
                </Col>
                <Col span={4}>
                  <img className="basic-pic" src={require('../../../img/basic5.png')} alt=""/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="strategy">
          <Row show="true" className="row-content t-a-c" justify="center">
            <h1>
              <Parallax
                animation={{ }}
                style={{ marginTop: 64 }}
              >
                <Texty>战略布局</Texty>
              </Parallax>
            </h1>
          </Row>
          <Row className="strategy-pic-content" justify="center">
            <Col span={18}>
              <Row justify="space-between">
                <Col span={8}>
                  <img className="strategy-pic" src={require('../../../img/strategy1.png')} alt=""/>
                </Col>
                <Col span={8}>
                  <img className="strategy-pic" src={require('../../../img/strategy2.png')} alt=""/>
                </Col>
                <Col span={8}>
                  <img className="strategy-pic" src={require('../../../img/strategy3.png')} alt=""/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row span={18} className="strategy-pic-content" justify="center">
            <Col span={18}>
              <Row justify="space-between">
                <Col span={8}>
                  <img className="strategy-pic" src={require('../../../img/strategy4.png')} alt=""/>
                </Col>
                <Col span={8}>
                  <img className="strategy-pic" src={require('../../../img/strategy5.png')} alt=""/>
                </Col>
                <Col span={8}>
                  <img className="strategy-pic" src={require('../../../img/strategy6.png')} alt=""/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Adec;
