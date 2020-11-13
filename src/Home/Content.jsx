import React from 'react';
// import QueueAnim from 'rc-queue-anim';
import BannerAnim, { Element, Thumb } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './less/banner.less';
import Adec from './components/Adec/Adec.jsx';
import RiverEcology from './components/RiverEcology/RiverEcology';
import At from './components/AT/At';
import ContactUs from './components/ContactUs/ContactUs';

const BgElement = Element.BgElement;

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.selectedItem, 'props');
    this.state = {
      index: 0,
      thumbEnter: false,
    };
    this.animation = [
      // { skewX: '35deg', left: '-40%' },
      // { skewX: '-35deg', left: '40%' },
      // { skewX: 0 },
      // { top: '60px' },
      // { scale: 0.3 },
      // { scale: 1 },
    ];
    [
      'onMouseEnter',
      'onMouseLeave',
      'getCurrentShow',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }


  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= 5) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = 5 - 1;
    }

    return [prevInt, nextInt];
  }

  onMouseEnter() {
    this.setState({
      // thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      // thumbEnter: false,
    });
  }

  getCurrentShow() {
    console.log(this.banner.currentShow);
  }

  getInitShow(type, initShow) { // 根据type判断轮播的index位置
    if (type === 'after') {
      initShow += 1;
    } else {
      initShow -= 1;
      this.setState({
        initShow: initShow
      })
    }
    return this.props.getInitShow(initShow);
  }

  // onScroll = (e) => {
  //   console.log('scroll');
  //   e = e || window.event;
  //   let scrollTime = 0;
  //   const ctx = this;
  //   const clientHeight = document.documentElement.clientHeight; // 可视区域高度
  //   const ScrollTop = document.documentElement.ScrollTop; // 滚动条滚动高度
  //   const scrollHeight = document.documentElement.scrollHeight; // 滚动内容高度
  //   if (ScrollTop > window.innerHeight * 0.25) {
  //     this.banner.next();
  //   }
  //
  //   const t = new Date().getTime();
  //   // 防止鼠标滚动太快
  //   if (t - scrollTime < 1400) {
  //     return !1;
  //   }
  //   scrollTime = t;
  //
  //   // 鼠标滚轮的滚动方向 >0 up;<0 down
  //   if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
  //     if (e.wheelDelta > 0) { // 当滑轮向上滚动时
  //       // 事件
  //       this.banner.prev();
  //     }
  //     if (e.wheelDelta < 0) { // 当滑轮向下滚动时
  //       // 事件
  //       this.banner.next();
  //     }
  //   } else if (e.detail) { // Firefox滑轮事件
  //     if (e.detail > 0) { // 当滑轮向上滚动时
  //       // 事件
  //       this.banner.prev();
  //     }
  //     if (e.detail < 0) { // 当滑轮向下滚动时
  //       // 事件
  //       this.banner.next();
  //     }
  //   }
  // };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const thumbChildren = [];
    for (let i = 0; i < 5; i += 1) {
      thumbChildren.push(
        <div key={i} className="thumb-box">
          <div className="sub-box" />
        </div>
      );
    }
    this.getNextPrevNumber();

    return (
      <BannerAnim prefixCls="banner-user"
        type="gridBar"
        dragPlay={false}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={(c) => { this.banner = c; }}
        arrow={false}
        initShow={0}
        onChange={(_) => { this.getCurrentShow(_); }}
      >
        <Element
          prefixCls="banner-user-elem"
          key="0"
          // followParallax={{
          //   delay: 1000,
          //   data: [
          //     { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
          //     { id: 'title', value: 50, type: 'x' },
          //     { id: 'content', value: -30, type: 'x' },
          //   ],
          // }}
        >
          <div className="home-title">
            <TweenOne
              duration={0}
              animation={this.animation}
              paused={this.props.paused}
              repeat={0} // demo 演示需要，时间轴循环
              yoyo // demo 演示需要，时间轴循环
              style={{ transform: 'scale(1)', height: '100%' }}
            >
              <h1 id="title">数字赋能，世界实体</h1>
              <div id="content" className="title-en">Digitalize A New Asia</div>
            </TweenOne>
          </div>
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: 'transparent', // rgb(12,18,45)
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          {/* <div style={{ */}
          {/*  width: '100%', */}
          {/*  height: '100%', */}
          {/*  position: 'relative', */}
          {/* }} */}
          {/* > */}
          {/*  <Bg /> */}
          {/* </div> */}
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="1"
        >
          <Adec key="adec" />
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: 'transparent', // rgb(12,18,45)
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
          >
            {/* <Bg /> */}
          </div>
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="2"
        >
          <RiverEcology key="ecology" />
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: 'transparent', // rgb(12,18,45)
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          {/* <div style={{ */}
          {/*  width: '100%', */}
          {/*  height: '100%', */}
          {/*  position: 'relative', */}
          {/* }} */}
          {/* > */}
          {/*  <Bg /> */}
          {/* </div> */}
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="3"
        >
          <At key="at" />
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: 'transparent', // rgb(12,18,45)
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          {/* <div style={{ */}
          {/*  width: '100%', */}
          {/*  height: '100%', */}
          {/*  position: 'relative', */}
          {/* }} */}
          {/* > */}
          {/*  <Bg /> */}
          {/* </div> */}
        </Element>
        {/* <Thumb key="thumb" component={TweenOne} */}
        {/*       animation={{ right: this.state.thumbEnter ? 0 : -70 }} */}
        {/* > */}
        {/*  {thumbChildren} */}
        {/* </Thumb> */}
        <Element
          prefixCls="banner-user-elem"
          key="4"
        >
          <ContactUs key="contactUs" />
        </Element>
      </BannerAnim>

    );
  }
}

export default Content;
