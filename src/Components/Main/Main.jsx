import React, { useState } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {

  const [input, setInput] = useState('');

  const HandleResponse = async (e) => {
    e.preventDefault();
    console.log("hello", input);

    const api_url = "https://openrouter.ai/api/v1/chat/completions";
    const api_key = "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";

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${api_key}`,
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
          "X-Title": "<YOUR_SITE_NAME>", // Optional
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1-distill-llama-70b:free",
          "messages": [
            {
              "role": "user",
              "content": input  // Using user input instead of a hardcoded value
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Convert response to JSON
      console.log("API Response:", data);
      console.log("QT ", data?.choices[0]?.message?.content)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
                <input type="text" placeholder='Enter a propt here' id="user_input"value={input}
        onChange={(e) => setInput(e.target.value)}/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" onClick={HandleResponse}/>
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
