import React, {useState} from 'react';
import axios from 'axios';

const Report = ({id}) => {

  const [disable, setDisable] = useState(false);

  const handleReport = () => {
    axios({
      method: 'put',
      url: '/answerReport',
      headers: {
        id: `${id}`
      }
    })
    .then(result => {
      setDisable(true);
    })
  }



  return (
    <div>
      <button disabled={disable} onClick={() => handleReport(true)}>Report</button>
    </div>
  )
}

export default Report;

