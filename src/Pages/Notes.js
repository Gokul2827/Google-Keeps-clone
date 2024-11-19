import React from 'react'

function Notes(props) {

   const color=props.col

   
    
  return (
    <section className='note' id='note'>
    {props.get.map((da,index)=>{
      return(
        <div className='content' key={index} style={{backgroundColor:color==="#000000"?"white":color}}>
          <p className='ti'>{da.title}</p>
        <p className='p'>{da.note}</p>
        <div className='ico'>
         <div className='ico2'>
         <box-icon name='edit-alt' onClick={()=>{props.edit(index)}}></box-icon>
        <box-icon name='archive-in' onClick={()=>{props.arch(index)}}></box-icon>
          </div> 
         <div>
         <box-icon name='trash' onClick={()=>{props.btn(index)}}></box-icon>
          </div> 
        </div>  
        </div>
      )
    })}

   </section>
  )
}

export default Notes