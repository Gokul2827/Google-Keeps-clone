import React, { useState } from 'react'
import './Pages.css'
import Navbar from '../components/Navbar'
import Notes from './Notes'
import {v4} from 'uuid';

function Home() {
  const [color,setColor]=useState("white")  
  const [data,setData]=useState({
    id:'',
    title:'',
    note:''
  })
  const [note,setNote]=useState([])
  const[archdata,setArchdata]=useState([])
  const add=(event)=>{
    const {value,name}=event.target
    setData((prev)=>{
      return{
        ...prev,
        id:v4(),
        [name]:value
      }
    })
  }
  const addnote=(event)=>{
    event.preventDefault()
    setNote((prev)=>{
      return[...prev,data]
    })
    setData({
      id:'',
      title:'',
      note:''
    })
    let col=document.getElementById('inpcolor').value
    setColor(col)
     document.getElementById('inp').style.backgroundColor="white"
    
    // document.getElementById('content-color').style.backgroundColor=col
  }
  // console.log(archdata);

  

  const trash=(id)=>{
    setNote((prev)=>{
      return prev.filter((val,index)=>{
         return index!==id
      })
    })

  }
  const layout=()=>{
    document.getElementById('note').classList.toggle('tog') 
  }
  const archive=(id)=>{
    const fildata=note.filter((val,index)=>{
     return index===id
   }
    )
    setArchdata((pre)=>{
      return [...pre,
        ...fildata 
      ]
    })
    setNote((prev)=>{
      return prev.filter((val,index)=>{
         return index!==id
      })
    })
  }
  const selectcolor=()=>{
     let col=document.getElementById('inpcolor').value
     document.getElementById('inp').style.backgroundColor=col
  }
  const editfun=(index)=>{
    // console.log(index);
    document.getElementById('add').style.display="none"
    document.getElementById('update').style.display="block"
    note.forEach((data,ind)=>{
       if(ind===index){
        setData({
          id:data.id,
          title:data.title,
          note:data.note
        })
       }
    })
  }
  const updatenote=(event)=>{
    event.preventDefault()
   const updnot= note.map((val,id)=>{
    console.log(data.id);
    console.log(val.id);
     return data.title===val.title? {...data}:val
   })
  //  console.log(updnot);
   setNote(updnot)
    setData({
      id:'',
      title:'',
      note:''
    })
     document.getElementById('add').style.display="block"
    document.getElementById('update').style.display="none"
    }
    console.log(archdata);
    
  return (
    <>
    <Navbar fun={layout}></Navbar>
    <div className='main'>
       <form className='inp'id='inp'>
        <input type='text' name='title'  placeholder='Title' onChange={add} value={data.title} required></input>
        <input type='text' onChange={add} value={data.note} name='note' placeholder='Take a note...' required></input>
        <div className='inp-2'>
          <div className='icon-col'><box-icon name='palette'></box-icon>
          <input id='inpcolor' type='color'  onChange={selectcolor}></input></div>
        <button onClick={addnote} id='add'>Add</button>
        <button onClick={updatenote} id='update'>Update</button>
        </div>
       </form>
      <Notes get={note} btn={trash} arch={archive} col={color} edit={editfun} ></Notes>
      {/* <Archeive ar={archdata} btn={trash} arch={archive}></Archeive> */}
    </div>
    </>
  )
}

export default Home