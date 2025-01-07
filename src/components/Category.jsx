import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoryAPI, deleteVideoAPI, getALLCategoryAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



const Category = ({ setDeleteResponseFromCategory,deleteResponseFromView }) => {

  const [allCategories, setAllCategories] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getALLCategories()
  }, [deleteResponseFromView])


  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categoryDetails)
        if (result.status >= 200 && result.status < 300) {
          alert("Category Created")
          getALLCategories()
          handleClose()
        }
      } catch (error) {
        console.log(Error);

      }
    } else {
      alert("please provide a category name!!!")
    }
  }

  const getALLCategories = async () => {
    try {
      const result = await getALLCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data)
      }
    } catch (error) {
      console.log(error);

    }
  }
  console.log();

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id)
      getALLCategories()
    } catch (error) {
      console.log(error);
    }
  }

  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'))
    console.log(videoDetails);
    // update category by adding video to allvideos
    categoryDetails.allVideos.push(videoDetails)
    console.log(categoryDetails);
    // api call to make update the category
    await updateCategoryAPI(categoryDetails)
    getALLCategories()
    const result = await deleteVideoAPI(videoDetails?.id)
    setDeleteResponseFromCategory(result)
  }


  const categoryVideoDragStarted = (e,dragVideoDetails,categoryDetails)=>{
    console.log("inside categoryVideoDragStarted");
    let dragData = {video:dragVideoDetails,categoryDetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
  }


  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* Display all categories */}
      <div className='container-fluid p-3 m-3'>
        {/* single category view */}

        {
          allCategories?.length > 0 ?
            allCategories?.map(categoryDetails => (
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e => videoCardDropOverCategory(e, categoryDetails)} key={categoryDetails?.id} className='border rounded mb-3'>
                <div className='d-flex justify-content-between'>
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={() => removeCategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                </div>
                {/* Display category video */}
                <div className='row mt-2'>
                  {
                    categoryDetails?.allVideos?.length > 0 && categoryDetails?.allVideos?.map(video => (
                      <div draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)} key={video?.id} className='col-lg-4'>
                        {/* video card */}
                        <VideoCard insideCategory={true} displayData={video} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))

            :
            <div className='fw-bolder fs-5 text-danger'>No categories added yet</div>
        }

      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCaptionName" label="Category Name">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary" className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category