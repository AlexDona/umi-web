import React from 'react';
import { Row, Col } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { Parallax } from 'rc-scroll-anim'; // OverPack
// import ScrollParallax  from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import './less/Adec.less';
import Slide from '../Slide/Slide';
import ScrollTop from '../ScrollTop/ScrollTop';

// import { isImg } from './utils';

class Adec extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      el: '.adec',
    };
    this.imgArr = [
      // { name: 'middle', src: `${require('../../../img/hope_1.png')}` },
      // { name: 'end', src: `${require('../../../img/hope_4.png')}` },
      // { name: 'normal', src: `${require('../../../img/hope_2.png')}` },
      // { name: 'normal', src: `${require('../../../img/hope_3.png')}` },
      // { name: 'start', src: `${require('../../../img/hope_5.png')}` },
    ];
    this.timer = null;
    this.animation = [
      { scale: 0.3 },
      { scale: 1 },
    ];
    // [
    // ].forEach((method) => this[method] = this[method].bind(this));
    this.getRotation = 0;

    // const transformProp = Modernizr.prefixed('transform');
  }

  componentDidMount() {
    document.querySelector('.adec').addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <div className="adec">
        <div className="hope">
          <QueueAnim
            key="QueueAnim"
            type={['right', 'left']}
            delay={0}
          >
            <QueueAnim duration={600} className="demo-page" key="page" type="bottom">
              <Row key={1} show="true" className="row-content" justify="center">
                <Col span={10}><h1 className="t-a-c">ADEC</h1></Col>
              </Row>
              <Row key={2} show="true" justify="center">
                <Col span={18}>
                  <p className="row-p">
                    亚洲数字经济合作组织（Asia Digital Economic Cooperation, 简称“ADEC”），是由亚洲财经国际集团有限公司主导发起、
                    多个洲际政府、机构和组织共同参与成立的、以数字经济驱动全球经济一体化的非政府组织
                  </p>
                </Col>
              </Row>
              <div key="box" className="box">
                <QueueAnim duration={600} type="bottom">
                  {}
                </QueueAnim>
              </div>
            </QueueAnim>
          </QueueAnim>
          <Row className="row-content" justify="center">
            <Col span={18}>
              <Row justify="space-between">
                <Col span={6}>
                  <div className="hope-content">
                    <img src={require('../../../img/adec1.png')} alt="" />
                    <div className="hope-text">
                      <div className="t-a-c">泛亚洲地区最重要的</div>
                      <div className="t-a-c">数字经济合作论坛</div>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="hope-content">
                    <img src={require('../../../img/adec2.png')} alt="" />
                    <div className="hope-text">
                      <div className="t-a-c">
                        全球第一个联合国许可的永
                      </div>
                      <div className="t-a-c">
                        久性数字经济合作组织
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="hope-content">
                    <img src={require('../../../img/adec3.png')} alt="" />
                    <div className="hope-text">
                      <div className="t-a-c">
                        大中华区总部位于中国
                      </div>
                      <div className="t-a-c">
                        粤港澳大湾区核心城市深圳
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="hope-content">
                    <img src={require('../../../img/adec4.png')} alt="" />
                    <div className="hope-text">
                      <div className="t-a-c">被誉为“数字WTO”</div>
                      <div className="t-a-c"><br /></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <div className="sliders" style={{ height: '330px' }}> */}
          {/*  <Slide imgArr={this.imgArr} /> */}
          {/* </div> */}
        </div>

        <div className="hope-mission">
          <QueueAnim duration={200} className="demo-page" key="page" type="bottom">
            <Row show="true" className="t-a-c" justify="center">
              <Col><h1>使命&愿景</h1></Col>
            </Row>
          </QueueAnim>
          <Row justify="center">
            <Col span={12} className="list row-p">
              <div className="list-content">
                <img src={require('../../../img/hope1.png')} alt="" />
                <div className="list-text">向全球民众普及：“协同、共建、共享”的“数字经济观”</div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope2.png')} alt="" />
                <div className="list-text">聚合全球数字经济发展的要素资源</div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope3.png')} alt="" />
                <div className="list-text">构建符合商业道德的新数字经济规则</div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope4.png')} alt="" />
                <div className="list-text">打造全球首个去边界的数字经济产融自贸区</div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope5.png')} alt="" />
                <div className="list-text">探索数字经济新时代下社会组织及经济实体强化自我监督、持续驱动创新的有效途径</div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="construct">
          <QueueAnim duration={200} className="demo-page" key="page" type="bottom">
            <Row show="true" className="t-a-c" justify="center">
              <Col span={10}><h1>组织架构</h1></Col>
            </Row>
            <Row justify="center">
              <Col className="pic-content">
                <p className="row-p t-a-l text-indent">
                  亚洲数字经济合作组织所有组织成员均以节点形式呈现并参与协同共建，包括发起节点、联合发起节点、支持型节点等不同实体单位
                </p>
              </Col>
            </Row>
            <Row className="pic-content" justify="space-between">
              <div className="pic-card">
                <img src={require('../../../img/struct1.png')} alt="" />
                <div className="ft18">秘书长单位</div>
                <div className="text ft18">发起节点</div>
              </div>
              <div className="pic-card">
                <img src={require('../../../img/struct2.png')} alt="" />
                <div className="ft18">构成执行委员会</div>
                <div className="text ft18">联合发起节点</div>
              </div>
              <div className="pic-card">
                <img src={require('../../../img/struct3.png')} alt="" />
                <div className="ft18">提供关键要素资源支持</div>
                <div className="text ft18">支持型节点</div>
              </div>
            </Row>
          </QueueAnim>
        </div>

        <div className="teams">
          <Row show="true" className="t-a-c" justify="center">
            <h1>
              <Parallax
                animation={{ x: 0, opacity: 0, playScale: [0.1, 0.3] }}
                style={{ opacity: 1 }}
              >
                <Texty>组织成员</Texty>
              </Parallax>
            </h1>
          </Row>
          <Row show="true" justify="center">
            <Col span={13}>
              <Parallax animation={[{ opacity: 0.1, x: -100, rotate: 0 }, { opacity: 1, x: 100, rotate: '100deg', type: 'from' }]}>
                <QueueAnim key="queueAnim">
                  <p className="team-row-p">
                    截至2020年7月，亚洲数字经济合作组织已有超过40个成员节点。每个成员单位均已质押了1000万AT（1 AT= 1 RMB），由新加坡矩阵世界基金会（Matrix World Foundation LTD）旗下的AT产融基金直接管理。
                  </p>
                  <p className="team-row-p">
                    ADEC的发起节点及秘书长单位是亚洲财经国际集团有限公司。
                  </p>
                  <p className="team-row-p">
                    目前可披露的联合发起节点共同组成执行委员会，分别如下：
                  </p>
                </QueueAnim>
              </Parallax>
            </Col>
          </Row>
          <Row className="row-p team-company" justify="center">
            <Col span={13}>
              <Row justify="space-between">
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team1.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team2.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team3.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team4.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team5.png')} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-p team-company" justify="center">
            <Col span={13}>
              <Row justify="center" className="team-company-content">
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team6.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team7.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team8.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team9.png')} alt="" />
                </Col>
                <Col span={4} className="img-content">
                  <img src={require('../../../img/team10.png')} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="row-p" justify="center">
            <Col span={13}>
              <p className="team-row-p">
                联合国前秘书长潘基文、柬埔寨首相洪森、日本前首相鸠山由纪夫、泰国前总理他信等全球政府组织及各国政要；
              </p>
              <p className="team-row-p">
                中国国防金融研究会等非营利组织；德勤、克拉维斯、斯文和穆尔律师事务所等国际知名会计师事务所
              </p>
              <p className="team-row-p">
                及律师事务所；易来客（辽宁）网络科技有限公司等新金融行业；还包括跨国技术和交易平台、风险投资机构等等。
              </p>
              <p className="team-row-p">
                ADEC未来将继续聚合及筛选更多合作组织作为资源型节点和支持型节点。各节点将共同参与建设、具有共同价值导向、目标协同一
              </p>
              <p className="team-row-p">
                致、共享组织收益
              </p>
            </Col>
          </Row>
        </div>

        <div className="hope-mission basic-skill">
          <QueueAnim duration={200} className="demo-page" key="page" type="bottom">
            <Row show="true" className="t-a-c" justify="center">
              <Col>
                <Parallax
                  animation={{}} // x: '100px'
                  style={{ marginTop: 64, fontSize: '28px' }}
                >
                  <Texty>基本职能</Texty>
                </Parallax>
              </Col>
            </Row>
          </QueueAnim>
          <Row justify="center">
            <Col span={12} className="list row-p basic-pic-content">
              <div className="list-content">
                <img src={require('../../../img/hope1.png')} alt="" />
                <div className="list-text">
                  <div className="list-title">管理职能</div>
                  <div>亚洲数字经济合作组织负责对各成员进行监督和管理，定期评审，以确保其在执行区域的合法性</div>
                </div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope2.png')} alt="" />
                <div className="list-text">
                  <div className="list-title">组织职能</div>
                  <div>亚洲数字经济合作组织有权组织实施其管辖的各项协定，并积极采取各种有效措施推进成员共建</div>
                </div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope3.png')} alt="" />
                <div className="list-text">
                  <div className="list-title">协调职能</div>
                  <div>亚洲数字经济合作组织协调其与各组织成员单位的关系，当成员之间发生争执和冲突时，亚洲数字经济合作组织负责解决，以保障全球伙伴决策的一致和凝聚力</div>
                </div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope4.png')} alt="" />
                <div className="list-text">
                  <div className="list-title">提供智能</div>
                  <div>亚洲数字经济合作组织为其成员提供处理各项协定有关事务的谈判场所，并向成员提供必要的技术服务，金融服务及人才支持</div>
                </div>
              </div>
              <div className="list-content">
                <img src={require('../../../img/hope5.png')} alt="" />
                <div className="list-text">
                  <div className="list-title">论坛职能</div>
                  <div>为加强成员间联系、凝聚共识、深化合作、促进共同发展，ADEC定期组织论坛及峰会，聚集节点共商数字时代发展新蓝图</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <div className="strategy">
          <Row show="true" className="t-a-c" justify="center">
            <h1>
              <Parallax
                animation={{ }}
              >
                <Texty>战略布局</Texty>
              </Parallax>
            </h1>
          </Row>
          <Row className="strategy-pic-content" justify="center">
            <Col span={18}>
              <Row justify="space-between">
                <Col span={8} className="t-a-c strategy-card">
                  <img className="strategy-pic" src={require('../../../img/strategy1.png')} alt="" />
                  <div className="strategy-text">
                    <p className="t-a-c">靶向定位价值洼地</p>
                  </div>
                </Col>
                <Col span={8} className="t-a-c strategy-card">
                  <img className="strategy-pic" src={require('../../../img/strategy2.png')} alt="" />
                  <div className="strategy-text">
                    <p className="t-a-c">挖掘增量蓝海</p>
                  </div>
                </Col>
                <Col span={8} className="t-a-c strategy-card">
                  <img className="strategy-pic" src={require('../../../img/strategy3.png')} alt="" />
                  <div className="strategy-text">
                    <p className="t-a-c">建立产融生态全平台</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row span={18} className="strategy-pic-content" justify="center">
            <Col span={18}>
              <Row justify="space-between">
                <Col span={8} className="t-a-c strategy-card">
                  <img className="strategy-pic" src={require('../../../img/strategy4.png')} alt="" />
                  <div className="strategy-text">
                    <div className="text-content">
                      <div className="t-a-c">弯道超车一步到位建成</div>
                      <div>最新型的智慧城市</div>
                    </div>
                  </div>
                </Col>
                <Col span={8} className="t-a-c strategy-card">
                  <img className="strategy-pic" src={require('../../../img/strategy5.png')} alt="" />
                  <div className="strategy-text">
                    <p className="t-a-c">一带一路的金融科技重镇</p>
                  </div>
                </Col>
                <Col span={8} className="t-a-c strategy-card">
                  <img className="strategy-pic" src={require('../../../img/strategy6.png')} alt="" />
                  <div className="strategy-text">
                    <div className="text-content">
                      <div className="t-a-c">助力泛亚洲区域的价值链接</div>
                      <div className="t-a-c">及一体化发展</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <ScrollTop el={this.state.el} />
      </div>
    );
  }
}
export default Adec;
