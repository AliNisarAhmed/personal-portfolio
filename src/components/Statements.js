import React from 'react';

export default function Statements({ statements }) {
  return (
    <div class="statements">
      {statements.map(statement => (
        <Statement 
          input={statement.input}
          return={statement.return}
        />
      ))}
      <div className="statement">
        <span className="statement__gt">&gt;</span>
        <div className="statement__input">
          <span class="statement__caret animate"></span>
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

