import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deleteVideoAPI, saveHistoryAPI } from '../services/allAPI';



const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow =async ()=>{
    // modal show
    setShow(true);
    const {caption,youTubeLink}=displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
    const timeStamp = sysDateTime.toLocaleString('en-us',{timeZoneName:"short"})
    const historyDetails = {caption,youTubeLink,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(error){
      console.log(error);   
    }
  }

    const removeVideo=async(id)=>{
      try{
       const result= await deleteVideoAPI(id)
       setDeleteVideoResponseFromVideoCard (result)
        
      }catch(error){
        console.log(error);
      }
    }

    const videoCardDragStarted=(e,dragVideoDetails)=>{
      console.log("inside drag",dragVideoDetails?.id);
      // share data using event drag start
      e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    }

  return (
    <div>
       <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '250px' }} >
      <Card.Img onClick={handleShow} variant="top" height={'250px'} src={displayData?.imageUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {
          !insideCategory &&
          <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          }

        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayData?.youTubeLink}?autoplay=1`} title="La La Land (2016 Movie) Official Trailer – &#39;Dreamers&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>

    </div>
  )
}

export default VideoCard