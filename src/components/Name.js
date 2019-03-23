import React from 'react';
import classNames from 'classnames';

import timeout from '../helperFunctions/timeout';
import generateRandomBw from '../helperFunctions/generateRandomBw';

class Name extends React.Component {
  state = {
    text: "",
    name: "Ali Nisar Ahmed",
    caretAnimation: true,
    textAnimation: false,
  }

  async componentDidMount () {
    await timeout(2000);
    this.setState({ caretAnimation: false });
    this.enterDigitToName();
  }

  componentDidUpdate () {
    if (this.state.text.length === this.state.name.length && !this.state.caretAnimation) {
      this.setState({ caretAnimation: true, textAnimation: true });
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
    });

    const textClass1 = classNames({
      name__text: true,
      'name__text--1': this.state.textAnimation 
    })

    const textClass2 = classNames({
      name__text: true,
      'name__text--2': this.state.textAnimation 
    })

    const textClass3 = classNames({
      name__text: true,
      'name__text--3': this.state.textAnimation 
    })

    return (
      <div className="name">
        <div className="name__typed">
          <span className="name__gt">&gt;</span>
          <h1 className="name__heading">{text}</h1>
          <span 
            className={cursorClass}
          >
          </span>
        </div>
        <p className={textClass1}>I am an Electrical Engineer, who loves computer programming. I am a self-taught JavaScript developer.</p>
        <p className={textClass2}>I live in Edmonton, AB, Canada.</p>
        <p className={textClass3}>Welcome to my portfolio. Check out my work below</p> 
      </div>
    );
  }
}

export default Name;

