import React from 'react';
import styles from './Slide.less';

class Slide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      dir: this.props.imgArr,
      current: 0,
    };
    this.timer = null;
    // [
    //   'slide',
    //   'handleImage',
    // ].forEach((method) => this[method] = this[method].bind(this));
    this.children = [];
  }

  componentDidMount() {
    clearInterval(this.state.timer);
    this.play();
  }

  pointFunc(index) { // 按钮点击
    const { current } = this.state;
    const dirCopy = this.state.dir;
    if (index < current) { // 鼠标经过左侧的按钮
      this.imgArr('start', index);
    } else if (index > current) { // 鼠标经过右侧的按钮
      this.imgArr('end', index);
    }
    this.setState({ dir: dirCopy }); // 触发react-render重新渲染页面
    this.setState({ current: index }); // 记录当前图片节点
  }

  slide(name, key) { // 图片点击逻辑
    console.log(name, key);
    // 记录当前节点
    this.setState({ current: key });
    // 数组操作方法
    this.imgArr(name, key);
  }

  imgArr(name, key) { // 数组处理
    const dirCopy = this.state.dir;
    if (name === 'start') { // 点击左侧那张
      dirCopy[key + 1 > dirCopy.length - 1 ? key + 1 - dirCopy.length : key + 1].name = 'end'; // 超出数组长度索引归零
      dirCopy[key + 2 > dirCopy.length - 1 ? key + 2 - dirCopy.length : key + 2].name = 'normal';
      dirCopy[key].name = 'middle';
      dirCopy[key - 1 < 0 ? key - 1 + dirCopy.length : key - 1].name = 'start'; // 索引小于0 时从数组末尾获取
    } else if (name === 'end') { // 点击右侧那张
      dirCopy[key - 2 < 0 ? key - 2 + dirCopy.length : key - 2].name = 'normal';
      dirCopy[key - 1 < 0 ? key - 1 + dirCopy.length : key - 1].name = 'start';
      dirCopy[key].name = 'middle';
      dirCopy[key + 1 > dirCopy.length - 1 ? key + 1 - dirCopy.length : key + 1].name = 'end';

      console.log(dirCopy);
    }
    this.setState({ dir: dirCopy }); // 保存重新排列的数组 并触发render
  }

  handleImage(type) {
    const dirCopy = this.state.dir;
    let current = this.state.current;
    if (type === 'end') {
      if (current + 1 > dirCopy.length - 1) {
        current = current + 1 - dirCopy.length;
      } else {
        current += 1;
      }
    }
    if (type === 'start') {
      if (current - 1 < 0) {
        current = current - 1 + dirCopy.length;
      } else {
        current -= 1;
      }
    }
    this.slide(type, current);
  }

  play() {
    this.state.timer = setInterval((_) => {
      this.handleImage('end');
    }, 3000);
  }

  stopPlay() {
    clearInterval(this.state.timer);
  }

  render() {
    const dir = this.state.dir || [];
    if (dir.length) {
      return (
        [
          <div key="container"
            className={styles.Slide}
            onMouseOut={
            () => { this.play(); }
          }
            onMouseOver={
                 () => { this.stopPlay(); }
               }
          >
            {/* 外部容器 */}
            <div className={styles.slideBox}>
              <img style={{
                position: 'absolute',
                top: '45%',
                left: '-10%',
                cursor: 'pointer',
              }}
                onClick={
                  () => { this.handleImage('start'); }
                }
                className="leftArrow"
                src={require('../../../img/leftArrow.png')}
                alt=""
              />
              <img style={{
                position: 'absolute',
                right: '-10%',
                top: '45%',
                cursor: 'pointer',
              }}
                onClick={(e) => {
                  this.handleImage('end');
                }}
                src={require('../../../img/rightArrow.png')}
                alt=""
              />
              {/* 内部循环 */}
              {
                dir.map((item, key) => {
                  return (
                    <div key={`img${key}`} className={`${styles.slide} ${styles[item.name]}`}>
                      <img src={item.src}
                        onClick={(e) => {
                          this.slide(item.name, key);
                        }}
                      />
                    </div>
                  );
                })
              }
              {/* 导航按钮 */}
              {/* <div className={styles.point}>
                {
                  this.state.dir.map((item, key) => { // 根据图片数量进行循环
                    return (
                      <span
                        key={key}
                        className={item.name === 'middle' ? styles.hover : ''} // 给予当前显示的按钮样式变化
                        onMouseEnter={() => this.pointFunc(key)} // 鼠标进入动画
                      >
                      {}
                    </span>
                    );
                  })
                }
              </div> */}
            </div>
          </div>,
        ]
      );
    }
    return '';
  }
}

export default Slide;
