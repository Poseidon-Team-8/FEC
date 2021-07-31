import React, { useState, useContext } from 'react';
import CharacteristicEntry from './CharacteristicEntry.jsx';

const ProductBreakdown = ({ characteristics }) => {
   return (
    <div>
      {
        Object.keys(characteristics).map( (characteristic, idx) => {
          return <CharacteristicEntry key={ idx }characteristic={ characteristic } value={ characteristics[characteristic].value } />
        })
      }
    </div>
  )
}

export default ProductBreakdown;