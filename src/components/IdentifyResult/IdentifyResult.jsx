import React from 'react'
import IdentifyResultCard from '../identityResultCard/IdentifyResultCard'

function IdentifyResult({results}) {
  console.log('upload Search result:',results);
  return (
    <div className='result-conatiner'>
        {results.slice(0,5).map((matchPlant,index)=>(
            <IdentifyResultCard key={index} plant={matchPlant}/>
        ))}
    </div>
  )
}

export default IdentifyResult