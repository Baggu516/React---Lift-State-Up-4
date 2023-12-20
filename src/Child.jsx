import React from 'react'

const Child = ({arr,HandleRemove}) => {
  return (
    <div className='child'>
        <h1>Children Component</h1>
        {arr&&arr.map((item,i)=>{
          return(
             <div className='listofitems' key={i}>
              <li style={{color:"white"}}>{item.name}</li>
              <button onClick={()=>HandleRemove(i)}>Remove</button>
             </div>
          )
        })} 
        </div>
  )
}

export default Child