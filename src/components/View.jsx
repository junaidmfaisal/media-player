import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './VideoCard'
import { getALLVideoAPI } from '../services/allAPI'
import {updateCategoryAPI} from '../services/allAPI'
import {saveVideoAPI} from '../services/allAPI'
const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
const[deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState("")
const[allVideos,setALLVideos]=useState([])
  useEffect(()=>{
    getALLVideos()
  },[addResponseFromHome, deleteVideoResponseFromVideoCard,deleteResponseFromCategory])

  const getALLVideos = async()=>{
    try{
      const result = await getALLVideoAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setALLVideos(result.data)
      }
    }catch(error){
      console.log(error);
      
    }
  }

  const dragOverView = (e) =>{
    e.preventDefault()
  }

  const categoryVideoDropOverView = async (e) =>{
    console.log("inside categoryVideoDropOverView");
    const {video,categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video.id)
    const updatedCategory = {...categoryDetails,allVideos:updatedCategoryVideoList}
    console.log(updatedCategory);
    

    // updating category by delete video from category using api
    const result = await updateCategoryAPI(updatedCategory)
    // use state lifting to communicate data from view to category
    setDeleteResponseFromView(result)
    // use api to upload videos
    await saveVideoAPI(video)
    // call getAllVideos function
    getALLVideos()
  }

  return (
    <>
    <Row draggable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
      {
      
        allVideos?.length>0?
        allVideos?.map(video=>(
          <Col  className='mb-2' sm={12} md={6} lg={4}>
          <Videocard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
          </Col>
        ))
        :
        <div className='fw-bolder text-danger fs-5'>No videos uploaded yet!!!</div>
      
      
    } 
    </Row>
    </>

  )

}
export default View