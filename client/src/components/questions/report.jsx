import React, {useState} from 'react';
import axios from 'axios';

const Report = (props) => {

  const [disable, setDisable] = useState(false);

  return (
    <div>
      <p>report me</p>
    </div>
  )
}

export default Report;

// {disable === false ? <button disabled={false} onClick={() => setDisable(true)}>Report</button> :
//         <button disabled={true}>Reported</button>}