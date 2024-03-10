import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <br />
        <br />
        <div className='container2'>
            <h2>Contact  Us!</h2>
            <div className='flex6'>
                <p style={{color:"white", paddingTop:"5px"}}>There are many variations passages of Lorem Ipsum but the mejority have suffered altration</p>
                <input className='input' type="text" name="" id="" placeholder='Email here' />
                <button>send</button>
            </div>
        </div>
        

        <div className='container3'>
                <div>
                    <div className='flex7'>
                        <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_google_adsense_color_2x_web_512dp.original.png" alt="" />
                        <h2 >Learning Exp.</h2>
                    </div>
                    <br />
                  
                    
                        
                        <div className='flex8'>
                           <i className='bx bxl-facebook-circle'></i>
                            <i className='bx bxl-twitter' ></i>
                            <i className='bx bxl-linkedin-square' ></i>
                            <i className='bx bxl-pinterest' ></i>
                        </div>
                </div> 

                
                <div>
                    <h4>Links</h4>
                    <p>Home</p>
                    <p>Pricing</p>
                    <p>Dowload</p>
                    <p>About</p>
                    <p>Service</p>
                </div>
                <div>
                    <h4>Support</h4>
                    <p>FAQ</p>
                    <p>How it</p>
                    <p>Features</p>
                    <p>Contact</p>
                    <p>Reporting</p>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <p>+88012345678</p>
                    <p>youremail@gmail.co</p>
                    <p>Pune City</p>
                </div>

                
        </div>
        <div className='flext11'>
                    <div>Copyright & Design By @ Learning Exp.</div>
                    <div>Terms of use  |  Privacy Policy</div>
                </div>
    </div>
  )
}

export default Footer