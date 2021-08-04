import React, {useState} from 'react';
import axios from 'axios';

const Helpful = ({id, helpful}) => {

  const [helpCount, setHelpCount] = useState(helpful);
  const [disable, setDisable] = useState(false);


  const updateHelpfulness = (e) => {
    axios({
      method: 'put',
      url: '/answerHelpfulness',
      headers: {
        id: `${id}`
      }
    })
    .then(result => {
      setHelpCount(helpCount+1);
      setDisable(true);
      e.target.style.fontWeight = 'bold';
    })
  };

  return (
    <div>
     <span>Helpful?</span>
     <button disabled={disable} className='helpful-btn'
     onClick={(e) => updateHelpfulness(e)}>Yes</button><span>({helpCount})</span>
    </div>
  )
}

export default Helpful;