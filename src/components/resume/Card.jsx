import React from 'react';

const Card = (props) => {
  return (
    <div className='timeline_item'>
    <i className={props.icon}></i>
    <span className='timeline_date'>{props.year}</span>
    <h3 className='titleline_tile'>{props.title}</h3>
    <p className='timeline_text'>{props.desc}</p>
    
    {props.certificate && (
        <a
        href={props.certificate}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        >
        View Certificate
        </a>
    )}

    {props.percentage && (
        <button className="btn percentage-btn" disabled>
        {props.percentage}
        </button>
    )}

    </div>
);
};

export default Card;
