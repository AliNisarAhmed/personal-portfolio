import React from 'react';
import classNames from 'classnames';

import timeout from '../helperFunctions/timeout';
import generateRandomBw from '../helperFunctions/generateRandomBw';

class Name extends React.Component {
  state = {
    text: "",
    name: "Ali Nisar Ahmed",
    caretAnimation: true
  }

  async componentDidMount () {
    await timeout(2000);
    this.setState({ caretAnimation: false });
    this.enterDigitToName();
  }

  componentDidUpdate () {
    if (this.state.text.length === this.state.name.length && !this.state.caretAnimation) {
      this.setState({ caretAnimation: true });
    } else {
      this.enterDigitToName();
    }
  }

  async enterDigitToName () {
    if (this.state.text.length !== this.state.name.length) {
      await timeout(generateRandomBw(5, 35) * 10);
      let nextDigit = this.state.name[this.state.text.length];
      if (nextDigit) {
        this.setState(prev => ({
          text: prev.text + nextDigit
        }));
      }
    }
  }
  
  render () {
    const { caretAnimation, text } = this.state;
    const cursorClass = classNames({
      animate: caretAnimation,
      name__cursor: true
    })

    return (
      <div className="name">
        <span className="name__gt">&gt;</span>
        <h1 className="name__text">{text}</h1>
        <span 
          className={cursorClass}
        >
        </span>
      </div>
    );
  }
}

export default Name;

