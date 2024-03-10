import React from 'react'
import './info.css'

const Info = () => {
  return (
    <div>
        <div className='container'>
            <h1>We provide various kind of learning modules for you </h1>
            <p>It Is A Long Established Fact That Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</p>
        </div>
        <br />
        

        <div className='grid3'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA0yGYj68Z0vXgYHycsemtL3XJj-hy8M39VzV4ii4betFfw0C" alt="" />
                <h2>Learn Anything</h2>
                <br />
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</p>
            </div>
            <div style={{backgroundColor:"rgb(250,248,228)"}}>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuk6BNBUx13W6swvEk2A557-iJRkGZheWaMY87KghZFw5cG_ba" alt="" />
                <h2>Flexiable Learning</h2>
                <br />
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
            </div>
            <div>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnxhKLncGGPL2-rpmiYZWx7SMwWNhYsWJpYfbWHfdKqt30Wctf" alt="" />
                <h2>Expert Connect</h2>
                <br />
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</p>
            </div>

        </div>
        <br />
        <br />

        <div className='container'>
            <h1>Why Us </h1>
            <p>At Learning Exp. We Are  Commited To Providing You With A Superior Learning Experience That Empowers You To Achive Your Goals. Join Us Today And Embark On A Journey Of Discovery, Groth, And Success.</p>
        </div>

        <div className='grid4'>
            <div>
                <br />
                <video controls muted loop poster='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT37oje2zbZ0BJukBTYORyk_v7FWRYbvrMR0fYLs7sSJSw0-mhk' src="https://d2of6bhnpl91ni.cloudfront.net/cms/marketing-video-template-for-product-explainer-5b430b1b1b.mp4"></video>
            </div>
            <div>
                <h2>Crafting Your Dream Career:{"  "}  Building A PathYou Love With Us</h2>
                <br />
                <p>At Learning Exp. We Are  Commited To Providing You With A Superior Learning Experience That Empowers You To Achive Your Goals. Join Us Today And Embark On A Journey Of Discovery, Groth, And Success.</p>
                <br />
                <p>Our Platform Is Designed To Empower Lerners Like You To Excel In Todays Dynamic World</p>
                <br />
                <button className='btn2'>Get More</button>
            </div>
        </div>


    </div>
  )
}

export default Info