import React from 'react';

export default function Statements({ statements }) {
  return (
    <div className="statements">
      {statements.map(statement => (
        <Statement 
          input={statement.input}
          return={statement.return}
          key={statement.input}
        />
      ))}
      <div className="statement">
        <span className="statement__gt">&gt;</span>
        <div className="statement__input">
          <span className="statement__caret animate"></span>
        </div>
      </div>
    </div>
  )
}

function Statement(props) {
  return (
    <div className="statement">
      <span className="statement__gt">&gt;</span>
      <div className="statement__input">{props.input}</div>
      <div 
        className="statement__return"
        dangerouslySetInnerHTML={{__html: props.return}}
      ></div>
    </div>
  )
}

