import React from 'react'
import './aboutUs.css'

function AboutUs() {
    return (
        <div className="aboutUs">
            <div className='title'>
                < h1 className="item1">what</h1>
                <h1 className="item2">this </h1>
                <h1 className="item3">Platform </h1>
                <h1 className="item4">is for</h1>
            </div>
            <div className='descriptions'>
                <div  className="items">
                    <img className="img1" src="https://lh3.googleusercontent.com/proxy/Tsfig932A5F57h6HE55Ev_TQYn1LK9cRvyYir-diHMZB_i_XEABQVReChTqga6-xkQ586w4VrBrYVBATcWpqg-2rAKgOeSgS0VlqROoo5IMx0XEF" alt="img"/>
                    <h5>Titles and perspectives will <span>inspire </span>   you to make your own project idea</h5>
                </div>
                <div  style={{marginLeft:"150px"}} className="items">
                    
                    <h5>We give you the <span>resources</span>, You search for the information </h5>
                    <img  className="img2" src="https://pngimg.com/uploads/book/book_PNG51005.png" alt="img"/>
                </div>
                <div className="items">
                    <img className="img3"  src="https://lh3.googleusercontent.com/proxy/qeNiJWIA9v2CTh2HovWWpMsKFE6dfy1QV6zorWieF8rdwAbK7tSB54vgvqvlrH5C1cXfD99NHKS0owKshUAqkXKbBIJCqglg7fhiJOHwO0ek2FyGgR4fmIcxHEocMt7-Wkfbhg" alt="img"/>
                    <h5>Help you to <span>Get in touch</span> with the projects' realisers</h5>
                </div>
                <div  style={{marginLeft:"150px"}} className="items">
                    
                    <h5>Have the idea, get you resouces? Now time to  <span>do your best</span> </h5>
                    <img className="img4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Yellow_check.svg/600px-Yellow_check.svg.png" alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
