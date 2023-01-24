import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container_features-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature