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


  //allows button to be clicked only once per user

  //update local state of helpfulness count by 1

  return (
    <div>
      <button disabled={disable} onClick={(e) => updateHelpfulness(e)}>Yes ({helpCount})</button>
    </div>
  )
}

export default Helpful;