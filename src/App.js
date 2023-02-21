import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userText,setUserText] = useState('')
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  const playSound = () => {
    new Audio("dog1.mp3").play();
  };

  const renderUsertext = () =>{
    const chatInput = document.getElementById('chat-content')
    chatInput.innerHTML += `<div class="chat-content__user"><img src="cheems.jpg"/>${userText}</div>`
    setUserText('')
    chatInput.innerHTML += `<div class="chat-content__ai"><img src="user.png"/> </div>`
    const lastChatAI = document.querySelectorAll('.chat-content__ai')[document.querySelectorAll('.chat-content__ai').length - 1]
    chatInput.scrollTop = chatInput.scrollHeight;
    let count = 0
    let random = getRndInteger(5,10)
    const animation = setTimeout(()=>{
      const animation1 = setInterval(()=>{
        count += 1
        playSound()
        lastChatAI.innerHTML += 'Gâu '
        if(count > random){
          clearInterval(animation1)
        }
    },500*getRndInteger(1,2))
    },2000
    )
  }
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>DogGPT</h1>
          <p>What if ChatGPT is a dog?</p>
        </div>
        <div className="chat-content" id="chat-content"></div>
        <div className="chat-input" id="chat-input">
          <input type="text" placeholder="Text here..." value={userText} onChange={(e)=>{
            setUserText(e.target.value)
          }}/>
          <button onClick={()=>renderUsertext()}>
            <svg
              data-v-24e50695=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{
                width: '20px'
              }}
            >
              <path
                data-v-24e50695=""
                fill="currentColor"
                d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="info">
          This site was created by <a href="https://www.facebook.com/thediep094">Nguyen Diep</a>
        </div>
      </div>
    </div>
  );
}

export default App;
