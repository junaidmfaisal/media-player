import React, { useState } from 'react'
import { Button, Modal,FloatingLabel,Form } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'




const Add = ({setAddResponseHome}) => {
  const[invalidYoutubeLink,setInvalidYoutubeLink]=useState(false)
  const[videoDetails,setVideoDetails]=useState({
    caption:"",imageUrl:"",youTubeLink:""
  })
  console.log(videoDetails);
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
    // step for creating embed link
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));

      const videoId=userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYoutubeLink(false)
      setVideoDetails({...videoDetails,youTubeLink:`https://www.youtube.com/embed/${videoId}`})
      
    }else{
       setInvalidYoutubeLink(true)
       setVideoDetails({...videoDetails,youTubeLink:""})
    }
  }

  const handleUploadVideo= async()=>{
    // destructuring
    const{caption,imageUrl,youTubeLink}=videoDetails
    if(caption && imageUrl && youTubeLink){
      try{
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("video uploaded succesfully")
          handleClose()
          // pass the result to view component
          setAddResponseHome(result)
          

        }else{
          console.log(result);
        }
            }catch(error){
              console.log(error);
            }
      
    }else{
      alert("Please fill the form!!")
    }
  }
  

  return (
    <div>
    <div className='d-flex align-items-center'>
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
   


     <Modal
     show={show}
     onHide={handleClose}
     backdrop="static"
     keyboard={false}
   >
     <Modal.Header closeButton>
       <Modal.Title>Uploading Video details</Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <div className='border rounded p-3'>
       <FloatingLabel controlId="floatingCaption" label="Video Caption">
          <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel className='mt-2' controlId="floatingurl" label="Video Image Url">
          <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Video Image Url" />
        </FloatingLabel>
        <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
          <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
        </FloatingLabel>
     </div>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
        Cancel
       </Button>
       <Button onClick={handleUploadVideo} variant="primary">Add</Button>
     </Modal.Footer>
   </Modal>
  
   </div>
  )
}

export default Add