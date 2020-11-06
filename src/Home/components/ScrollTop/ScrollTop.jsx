import Animate from 'rc-animate';
import React from 'react';

class ScrollTop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showTop: false,
    };
    // [
    //   'onScroll',
    // ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    document.querySelector(this.props.el).addEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (document.querySelector(this.props.el).scrollTop > 100 && !this.state.showTop) {
      this.setState({ showTop: true });
    } else if (document.querySelector(this.props.el).scrollTop < 100 && this.state.showTop) {
      this.setState({ showTop: false });
    }
  }

  scrollToTop = () => {
    document.querySelector(this.props.el).scrollTop = 0;
  }

  render() {
    return (
      <Animate
        transitionName="fade"
      >
        {
          this.state.showTop
            ? (
              <div style={{
                width: '60px',
                height: '60px',
                background: '#134f80',
                color: '#fff',
                position: 'fixed',
                bottom: '12%',
                right: '3%',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '10px',
              }}
                onClick={this.scrollToTop}
              >
                返回顶部
              </div>
            ) : null
        }
      </Animate>
    );
  }
}
export default ScrollTop;
