import React from 'react';
import axios from 'axios';

const Helpful = ({id}) => {

  //send put request updating helpfulness count by 1
  axios({
    method: 'PUT',
    url: '/answerHelpfulness',
    headers: {
      id: `${id}`
    }
  })


  //allows button to be clicked only once per user

  //update local state of helpfulness count by 1

  return (
    <div>
      <p>something ${id}</p>
    </div>
  )
}

export default Helpful;