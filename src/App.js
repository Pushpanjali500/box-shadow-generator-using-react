import React,{useState} from 'react';
import './App.css';

function App() {
  const [Hori,setHori]=useState(10);
  const [Vert,setVert]=useState(10);
  const [Blur,setBlur]=useState(10);
  const [Col,setCol]=useState("black");
  const [Checkon,setCheckon]=useState(false);
  return (
    <div>
    <h1 className='heading'>BOX SHADOW GENERATOR</h1>
       <div className="App">
      <div className='controls'>
      <label>Horizontal length</label>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
      <label>Verticle length</label>
      <input type="range"  min="-200" max="200" value={Vert} onChange={(e)=>setVert(e.target.value)} />
      <label>Blur </label>
      <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
      <label>Color </label>
      <input type="color" value={Col} onChange={(e)=>setCol(e.target.value)} />
      <div className="switch">
        <label> Outline <input type="checkbox" checked={Checkon} onChange={()=>setCheckon(!Checkon)}/><span className="lever"></span>inset </label>
     </div>
     </div>
      <div className='output'>
        <div className='box' style={{boxShadow:`${Checkon?"inset":"" } ${Hori}px ${Vert}px ${Blur}px ${Col}`}}>
          <p>box shadow: {Hori}px {Vert}px {Blur}px {Col}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
