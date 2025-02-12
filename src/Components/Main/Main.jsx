import React from 'react'
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Ai-QT </p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, User</span></p>
            <p>How Can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggect beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: healthy life</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code </p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a propt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Ai-cutie displays inaccurate info ,including about pople, so double check
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
