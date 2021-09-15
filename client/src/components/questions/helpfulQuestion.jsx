import React, {useState} from 'react';
import axios from 'axios';

const HelpfulQ = ( {id, helpful} ) => {

  const [helpCount, setHelpCount] = useState(helpful);
  const [disable, setDisable] = useState(false);

  const updateHelpfulness = (e) => {
    axios({
      method: 'put',
      url: '/questionHelpfulness',
      headers: {
        id: `${id}`
      }
    })
    .then(result => {
      setHelpCount(helpCount + 1);
      setDisable(true);
    })
  }

  return (
    <div className='helpful-question' id='helpful-question'>
      <span>Helpful?</span>
      <button disabled={disable} className='helpful-btn'
      onClick={(e) => updateHelpfulness(e)}>Yes </button><span id='helpful'>({helpCount})</span>
    </div>
  )
}

export default HelpfulQ;
