import React, {useState} from 'react';
import axios from 'axios';

const Helpful = ({id, helpful}) => {
  console.log(id)
  const [helpCount, setHelpCount] = useState(helpful)
  //send put request updating helpfulness count by 1
  const updateHelpfulness = () => {
    axios({
      method: 'put',
      url: '/answerHelpfulness',
      headers: {
        id: `${id}`
      }
    })
    .then(result => {
      setHelpCount(helpCount+1)
    })

  };


  //allows button to be clicked only once per user

  //update local state of helpfulness count by 1

  return (
    <div>
      <button onClick={() => updateHelpfulness()}>Yes ({helpCount})</button>
    </div>
  )
}

export default Helpful;