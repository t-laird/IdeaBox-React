import React from 'react';
import '../Styles/Card.css';

function Card(props) {
  let {title, body, quality, id} = props.info;
  
  function updateTitle(e) {
    props.updateCard(id, e.target.innerHTML, 'title');
  }
  function updateBody(e) {
    props.updateCard(id, e.target.innerHTML, 'body');
  }
  function upvote(){
    let newQual;
    if (quality === 'swill'){
      newQual = 'plausible';
    }  else {
      newQual = 'genius';
    }
    props.updateCard(id, newQual, 'quality');
  }

  function downvote(){
    let newQual;
    console.log(quality);
    if (quality === 'genius'){
      newQual = 'plausible';
    }  else {
      newQual = 'swill';
    }
    props.updateCard(id, newQual, 'quality');    
  }

  function deleteCard() {
    props.deleteIdea(id);
  }
  
  return (
      <div className="Card" id={id}>
        <div className="top-line">
          <h2 className="title-text" contentEditable suppressContentEditableWarning onInput={updateTitle}>{title}</h2>
          <div className="delete" onClick={deleteCard}></div>      
        </div>
        <h3 className="body-text" contentEditable suppressContentEditableWarning onInput={updateBody}>{body}</h3>
        <div className="quality-section">
          <div className="vote-buttons">
            <div className="upvote" onClick={upvote}></div>
            <div className="downvote" onClick={downvote}></div>
          </div>
          <h5>quality: <span className="curr-quality">{quality}</span></h5>
        </div>
          <div className="divider"></div>     
      </div>
    )
}

export default Card;