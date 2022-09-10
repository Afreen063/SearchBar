import Data from './Components/mock_data.json'
import './App.css';
import { useState } from 'react';

function App() {
  const [query,setQuery]=useState("");
  return (
    <div className="App">
      <input onChange={(event)=>{setQuery(event.target.value)}} placeholder="Enter Post Title"/>
      {Data.filter((post)=>{
        if(query=='')
        return post;
        else if(post.graduation.toLowerCase().includes(query.toLowerCase()))
        return post;
      }).map((content)=>{
        return (
          <div className='box' key={content.id}>
            <p>{content.colleges}</p>
            <p>{content.graduation}</p>
            </div>
        )
      })}
    </div>
  );
}

export default App;
