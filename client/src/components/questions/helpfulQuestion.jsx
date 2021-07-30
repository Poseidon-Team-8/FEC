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
      e.target.style.fontWeight = 'bold';
    })
  }

  return (
    <div>
      <p>Helpful?</p>
      <button disabled={disable} onClick={(e) => updateHelpfulness(e)}>Yes ({helpCount})</button>
    </div>
  )
}

export default HelpfulQ;