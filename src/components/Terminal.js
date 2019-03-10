import React from 'react';
import Statements from './Statements';

export default function Terminal({ statements }) {
  return (
    <div className="terminal" id="about">
      <div className="terminal__header">
        <div className="terminal__btn terminal__btn--red"></div>
        <div className="terminal__btn terminal__btn--yellow"></div>
        <div className="terminal__btn terminal__btn--green"></div>
      </div>
      <div className="terminal__window">
        <Statements statements={statements} />
      </div>
    </div>
  )
}
