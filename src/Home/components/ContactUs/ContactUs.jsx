import React from 'react';
import { Row, Col, Space, Popover } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
// import { Parallax, OverPack } from 'rc-scroll-anim';
// import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import './less/ContactUs.less';
import Slide from '../Slide/Slide';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.timer = null;
    this.animation = [
      { scale: 0.3 },
      { scale: 1 },
    ];
    this.imgArr = [ // 必须middle放第一个这种格式排列，否则不触发
      { name: 'middle', src: `${require('../../../img/contact1.jpg')}` },
      { name: 'end', src: `${require('../../../img/contact2.jpg')}` },
      { name: 'normal', src: `${require('../../../img/contact3.jpg')}` },
      { name: 'normal', src: `${require('../../../img/contact4.jpg')}` },
      { name: 'normal', src: `${require('../../../img/contact5.jpg')}` },
      { name: 'normal', src: `${require('../../../img/contact6.jpg')}` },
      { name: 'normal', src: `${require('../../../img/contact7.jpg')}` },
      { name: 'start', src: `${require('../../../img/contact8.jpg')}` },
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
      <div className="contactUs">
        <QueueAnim
          className="contactUs-content1"
          key="QueueAnim"
          type={['right', 'left']}
          delay={0}
        >
          <Row className="row-p" justify="center">
            <Col span={15}>
              <h1 className="t-a-c">
                <Texty style={{fontSize: '28px'}}>
                  联系我们
                </Texty>
              </h1>
            </Col>
          </Row>
        </QueueAnim>
        <div className="slider row-p">
          <Slide imgArr={this.imgArr} />
        </div>
        <div className="address">
          <Row justify="center">
            <Col span={12}>
              <h5>
                总部地址：中国·深圳 南山区深南大道9018号华侨城大厦25层
              </h5>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <h5>
                电话：86）0755-888-888
              </h5>
            </Col>
          </Row>
          <Row justify="center" className="email">
            <Col span={12}>
              <h5>
                邮箱：info@dgt.asia
              </h5>
            </Col>
          </Row>
        </div>

        <Row justify="center" className="link-content">
          <Col span={15} className="row-p">
            <Row>
              <Col span={18}>
                <div className="link-title">支持机构</div>
                <div className="links">
                  <Space size="middle">
                    <a href="http://www.affta.cn" target="_blank">亚洲财经</a>
                    <a href="https://www.boc.cn/" target="_blank"> 中国银行</a>
                    <a href="#" target="_blank"> 关注我们</a>
                    <a href="http://www.xinhuanet.com" target="_blank"> 新华网</a>
                    <a href="http://www.people.com.cn" target="_blank">人民网</a>
                    <a href="https://www.huanqiu.com" target="_blank">环球网</a>
                    <a href="http://www.icbc.com.cn/icbc/" target="_blank">工商银行</a>
                  </Space>
                </div>
                <div className="links">
                  <Space size="middle">
                    <a href="https://www.cmbchina.com" target="_blank"> 招商银行</a>
                    <a href="https://www.pingan.com" target="_blank"> 中国平安</a>
                    <a href="https://finance.ifeng.com" target="_blank"> 凤凰网财经</a>
                    <a href="https://money.163.com" target="_blank"> 网易财经</a>
                    <a href="http://jjsb.cet.com.cn" target="_blank"> 中国经济时报</a>
                  </Space>
                </div>
              </Col>
              <Col span={6}>
                <div className="link-title">关注我们</div>
                <div className="links row-p">
                  <Space size="middle">
                    <a href="https://twitter.com/home?lang=en" target="_blank"><img className="link-icons" src={require('../../../img/icons/twiter.png')} alt="" /></a>
                    <a href="https://www.instagram.com/adec_info/" target="_blank"><img className="link-icons" src={require('../../../img/icons/instagram.png')} alt="" /></a>
                    <a href="https://weibo.com/7508227359/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" target="_blank"><img className="link-icons" src={require('../../../img/icons/weibo.png')} alt="" /></a>
                    <a href="https://www.zhihu.com/org/ya-zhou-shu-zi-jing-ji-he-zuo-zu-zhi" target="_blank"><img className="link-icons" src={require('../../../img/icons/zhihu.png')} alt="" /></a>
                    <a href="https://www.quora.com/profile/ADEC-A" target="_blank"><img className="link-icons" src={require('../../../img/icons/Quora.png')} alt="" /></a>
                    <Popover content={(<div className="link-qrcode" style={{ backgroundImage: `url(${require('../../../img/icons/link_qr.png')})` }} />)} trigger="hover">
                      <img className="link-icons" src={require('../../../img/icons/weixin.png')} alt="" />
                    </Popover>
                  </Space>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ContactUs;
