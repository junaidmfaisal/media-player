import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/MusicBeat.gif'
import feature1 from '../assets/img1.gif'
import feature2 from '../assets/img2.gif'
import feature3 from '../assets/img3.gif'
import { Button, Card } from 'react-bootstrap'



const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>

    <div className='row align-items-center'>
      <div className='col-lg-5'>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Media player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by darg and drop . User cam also have the provision to manage their watch history as well. What are you waiting for , let sarts exploring our site!!!  </p>
      <Link to={'/home'} className='btn btn-info'>Get Started</Link>
       
      </div>
      <div className='col'></div>
      <div className='col-lg-6'>
        <img  src={LandingImg} className='img-fluid ms-5' alt="" />
      </div>
    </div>
    {/* features part */}
    <div className='my-5'>
      <h3 className='text-center'>Features</h3>
      <div className='row mt-5'>
        <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
          <Card.Img height={'200px'} variant="top" src={feature1} />
          <Card.Body>
          <Card.Title>Managing videos</Card.Title>
          <Card.Text>
            Users can upload .View and remove the videos
          </Card.Text>
          </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
          <Card.Img height={'200px'} variant="top" src={feature2} />
          <Card.Body>
          <Card.Title>Categorise Videos</Card.Title>
          <Card.Text>
            users can categorise the videos by drag and drop features
          </Card.Text>
          </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
          <Card.Img height={'200px'} variant="top" src={feature3} />
          <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Users can upload,view and remove the videos
          </Card.Text>
          </Card.Body>
          </Card>
        </div>
      </div>
    </div>

    {/* last section  */}
    <div className='my-5 row align-item-center border rounded p-5'>
      <div className='col-lg-5'>
        <h3 className='text-warning'>Simple, Fast and Powerful</h3>
        <p><span style={{textAlign:'justify'}} className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor sapiente accusantium inventore cupiditate assumenda! Quo maiores ut, pariatur nesciunt eius, iste dolorum tenetur aspernatur dolor consequatur fugit ad ipsam!</p>
        <p><span style={{textAlign:'justify'}} className='fs-5 fw-bolder'>Categorise Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor sapiente accusantium inventore cupiditate assumenda! Quo maiores ut, pariatur nesciunt eius, iste dolorum tenetur aspernatur dolor consequatur fugit ad ipsam!</p>
        <p><span style={{textAlign:'justify'}} className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor sapiente accusantium inventore cupiditate assumenda! Quo maiores ut, pariatur nesciunt eius, iste dolorum tenetur aspernatur dolor consequatur fugit ad ipsam!</p>
      </div>
      <div className='col'></div>
      <div className='col-lg-5'>
      <iframe className='rounded' width="100%" height="445" src="https://www.youtube.com/embed/mcQJ_XmYsM8" title="THE BEST UPCOMING MOVIES 2025 (Trailers) |Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  )
}

export default Landing