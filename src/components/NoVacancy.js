import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';

import '../styles/styles.scss';

class NoVacancy extends Component {
  constructor() {
    super();

    this.state = {
      powerOn: false,
      offChars: [],
      blinking: [],
      blinkArr: []
    };
  }

  static propTypes = {
    className: PropTypes.string,
    reblinkProbability: PropTypes.number,
    blinkMin: PropTypes.number,
    blinkMax: PropTypes.number,
    loopMin: PropTypes.number,
    loopMax: PropTypes.number,
    lightColor: PropTypes.string,
    darkColor: PropTypes.string,
    glow: PropTypes.arrayOf(PropTypes.string),
    off: PropTypes.number,
    blink: PropTypes.number,
    start: PropTypes.bool,
    fontSize: PropTypes.string,
    text: PropTypes.string
  }

  static defaultProps = {
    className: '',
    reblinkProbability: (1 / 3),
    blinkMin: .01,
    blinkMax: .5,
    loopMin: .5,
    loopMax: 2,
    lightColor: '#fff',
    darkColor: '#ffa500',
    glow: ['0 0 80px Orange', '0 0 30px Red', '0 0 6px Yellow'],
    off: 0,
    blink: 0,
    start: true,
    fontSize: '',
    text: ''
  }

  componentDidMount() {
    let blinkArr = this.setBlinkChars();
    blinkArr = blinkArr.concat(this.setOffChars());

    this.setState({
      ...this.state,
      offChars: this.setOffChars(),
      blinkArr: blinkArr
    }, () => {
      if (this.props.start) {
        this.blinkOn();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start !== this.props.start) {
      if (nextProps.start) {
        this.blinkOn();
      } else {
        this.blinkOff();
      }
    }
  }

  _loopTimeout = undefined;

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  removeA(arr) {
    let what,
      a = arguments,
      L = a.length,
      ax;

    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax = arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }

  blink(item) {
    // blink 1 time
    this.setState({
      ...this.state,
      blinking: this.state.blinking.concat([item])
    }, () => {
      setTimeout(() => {
        this.setState({
          ...this.state,
          blinking: this.removeA(this.state.blinking, item)
        }, () => {
          this.reblink(item);
        });
      }, this.rand(this.props.blinkMin * 1000, this.props.blinkMax * 1000));
    });
  }

  reblink(item) {
    setTimeout(() => {
      // continue blink check
      if (this.rand(1, 100) <= this.props.reblinkProbability * 100) {
        this.blink(item);
      }
    }, this.rand(this.props.blinkMin * 1000, this.props.blinkMax * 1000));
  }

  setOffChars() {
    let len = this.props.text.length;
    let randomArray = this.randomArray(len);
    let offArr;
    let off = this.props.off;

    // off make
    off = Math.min(off, len);
    off = Math.max(0, off);

    offArr = randomArray.splice(0, off);

    return offArr.map((value) => {
      return value;
    });
  }

  setBlinkChars() {
    let len = this.props.text.length;
    let randomArray = this.randomArray(len);
    let blinkArr;
    let blink = this.props.blink;
    let off = this.props.off;

    // off make
    off = Math.min(off, len);
    off = Math.max(0, off);

    // blink array make
    blink = (blink === 0) ? len : blink;
    blink = Math.min(blink, len - off);
    blink = Math.max(0, blink);

    blinkArr = randomArray.splice(0, blink);

    return blinkArr;
  }

  randomArray(n) {
    let ary = [];
    let i;
    let r;
    let t;

    for (i = 0; i < n; ++i) {
      ary[i] = i;
    }

    for (i = 0; i < n; ++i) {
      r = parseInt((Math.random() * n), 10);
      t = ary[r];
      ary[r] = ary[i];
      ary[i] = t;
    }

    return ary;
  }

  loop() {
    if (!this.state.powerOn) {
      return;
    }

    if (this.state.blinkArr.length === 0) {
      return;
    }

    let num = this.state.blinkArr[this.rand(0, this.state.blinkArr.length - 1)];

    if (this.state.blinking.indexOf(num) === -1) {
      this.blink(num);
    }

    this._loopTimeout = setTimeout(() => {
      this.loop();
    }, this.rand(this.props.loopMin * 1000, this.props.loopMax * 1000));
  }

  blinkOn() {
    if (!this.state.powerOn) {
      this.setState({
        ...this.state,
        powerOn: true
      }, () => {
        this._loopTimeout = setTimeout(() => {
          this.loop();
        }, this.rand(this.props.loopMin * 1000, this.props.loopMax * 1000));
      });
    }
  }

  blinkOff() {
    if (this.state.powerOn) {
      this.setState({
        ...this.state,
        powerOn: false
      }, () => {
        clearTimeout(this._loopTimeout);
      });
    }
  }

  render() {
    let generalStyle = {
      textShadow: (this.props.glow) ? this.props.glow.toString() : '',
      fontSize: (this.props.fontSize) ? this.props.fontSize : ''
    };

    let onStyle = {
      color: (this.props.lightColor) ? this.props.lightColor : ''
    };

    let offStyle = {
      color: (this.props.darkColor) ? this.props.darkColor : '',
      opacity: '.3'
    };

    let offCharIndex = this.state.offChars;

    let splitChars = this.props.text.split('').map((value, n) => {
      let key = shortid.generate(),
        itemStyle = onStyle;

      if (this.state.blinking.length > 0 && this.state.blinking.indexOf(n) > -1) {
        itemStyle = offStyle;
      } else {
        itemStyle = onStyle;
      }

      if (offCharIndex.length > 0 && offCharIndex.indexOf(n) > -1) {
        itemStyle = offStyle;
      }

      return (
        <span key={key}
              style={itemStyle}
              className='novacancy'>{value}</span>
      );
    });

    return (
      <span ref="wrapper"
            className={this.props.className}
            style={generalStyle}>{splitChars}</span>
    );
  }
}

export default NoVacancy;
