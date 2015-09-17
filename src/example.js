import React from 'react';
import NoVacancy from 'react-novacancy';

var DemoComponent = React.createClass({
  getInitialState() {
    return {
      start: true
    };
  },
  handleClick(e) {
    this.setState({
      start: event.target.checked
    });
  },
  render() {
    return (
      <div>
        <NoVacancy text={'No'}
                   className={'title-1'}
                   fontSize={'75px'}
                   reblinkProbability={0.1}
                   blinkMin={0.2}
                   blinkMax={0.6}
                   loopMin={8}
                   loopMax={10}
                   lightColor={'#fff'}
                   glow={['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']}
                   start={this.state.start} />
        <NoVacancy text={'Vacancy'}
                   className={'title-2'}
                   fontSize={'75px'}
                   blink={1} off={1}
                   lightColor={'#f00'}
                   glow={['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']}
                   start={this.state.start} />

        <div className='checkbox'>
          <label>
            <input type="checkbox"
                   defaultChecked={this.state.start}
                   onChange={this.handleClick} />
            <span style={{fontFamily: 'Arial', color: '#fff', marginLeft: '5px'}}>Blink</span>
          </label>
        </div>
      </div>
    );
  }
});

React.render(<DemoComponent />, document.getElementById('content'));
