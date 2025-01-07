import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getALLHistoryAPI } from '../services/allAPI'



const History = () => {
  const[allVideoHistory,setAllVideoHistory]=useState([])

  useEffect(()=>{
    getALLHistory()
  },[])
  console.log(allVideoHistory);

  const getALLHistory = async()=>{
    try{
      const result = await getALLHistoryAPI()
      if(result.status>=200 && result.status<300){
        setAllVideoHistory(result.data)
      }else{
        console.log(result);
        
      }
    }catch(error){
      console.log(error);
      
    }
  }

  const removeHistory=async(id)=>{
    try{
      await deleteHistoryAPI(id)
      getALLHistory()
    }catch(error){
      console.log(error);
    }
  }
  
  

  return (
    <div style={{paddingTop:'100px'}}>
      <div className='container d-flex justify-content-between'>
        <h1>Watch History</h1>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='container table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
        {
          allVideoHistory?.length>0?
          allVideoHistory?.map((videoDetails,index)=>(
            <tr key={videoDetails?.id}>
            <td>{index+1}</td>
            <td>{videoDetails?.caption}</td>
            <td><a href={videoDetails?.youTubeLink}>{videoDetails?.youTubeLink}</a></td>
            <td>{videoDetails?.timeStamp}</td>
            <td><button className='btn' onClick={()=>removeHistory(videoDetails?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
          ))
          :
          <div className='fw-bolder text-danger'>You did'nt watch any video..!!</div>
        }
        </tbody>
      </table>
    </div>
  )
}

export default History