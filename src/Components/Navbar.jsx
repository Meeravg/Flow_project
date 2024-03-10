import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import OurGoal from '../pages/OurGoal';
import ServicesUs from '../pages/ServicesUs';
import WhyUs from '../pages/WhyUs';
import AllRoutes from './AllRoutes';



const Navbar = () => {
  return (
    <>  <div className='bg_img'>
        <div className='grid_nav'>
            <div className='navbox'>
                <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_google_adsense_color_2x_web_512dp.original.png" alt="" />
                <h2 style={{color:"white", }}>Learning Exp.</h2>

            </div>
            
            <div className='navbar'>
                <Link className='links' to={'/Home'} >Home</Link>
                <Link className='links' to={'/ServicesUs'}>Services Us</Link>
                <Link className='links' to={'/WhyUs'}>Why Us</Link>
                <Link className='links' to={'/OurGoals'}>Our Goal</Link>
                <Link className='links' to={'/ContactUs'}><button className='btn'>Contact Us</button></Link>

            </div>
            <AllRoutes/>
        </div>

            <div className='grid2'>
                <div>
                    <h1>We Create Learning Experience with Excellent Technology</h1>
                    <br /><br />
                    <p>Unlimited Access To 100+ World-Class Courses, Hands-On</p>
                    <p>Projects, And Jon-Ready Certificate Programs-</p>
                    <p>All included In Your Subscription</p>
                    <br />
                    <br />
                
                    <div className='flex2'>
                        <button className='btn2'>Book Demo Class</button>
                        <p>Explore More - </p>
                    </div>
                </div>
                <div className='secondbox'> 
                    <video controls loop muted poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgoutPO5oQTaUve9MP2NIMsQgxL7I3cHn2HM98cOVCm5EqGSz" src="https://d2of6bhnpl91ni.cloudfront.net/cms/marketing-video-template-for-product-demo-78da02f0b8.mp4"></video>
                </div>
            </div>

        </div>
        <br />
        <br />

    </>
  )
}

export default Navbar;