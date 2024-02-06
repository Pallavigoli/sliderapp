import { useState } from 'react'
import './index.css'
function App() {
  const msg=["Message-ONE","Message-TWO","Message-THREE"]
  const [pg, setpg] = useState(1)
    function previous() {
      if((pg-1)<=0)
      {
        setpg(pg)
      }
      else{
     setpg(pg-1)
      }
    }
    function next() {
      if((pg+1)>=4)
      {
        setpg(pg)
      }
      else{
      setpg(pg+1)
      }
    }
  return (
    <div className="page">
    <div className="Numbers">
      <div id='p' className={pg==1?"active1":""}></div>
      <div id='p'className={pg==2?"active2":""}></div>
      <div id='p'className={pg==3?"active3":""}></div>
    </div>

    <div className="message">
      {msg[pg-1]}
    </div>

    <div className="buttons">
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
   </div>
  );
}

export default App;
