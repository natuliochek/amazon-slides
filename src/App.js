import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [thing, setThing] = useState(0);
  const {id, name, image, price, description} = data[thing];
  // console.log(data[thing])

  const [showMore, setShowMore] = useState(false);

  const previousThing = ()=> {
    setThing((thing =>{
     thing --;
     if (thing < 0){
      return data.length-1;
     }
     return thing; 
    }))}

  const nextThing = ()=> {
    setThing((thing => {
     thing ++;
     if (thing > data.length -1){
      thing = 0;
     }
    return thing; 
    }))}

  return (
    <div>
      <div className='container'>
        <h1>List of { data.length } MaybeToBuy Things</h1>
      </div>
      <div className='container'>
      <button onClick={ previousThing } className='btn'>Previous</button>
      <button onClick={ nextThing } className='btn'>Next</button>
    </div>
      <div>
        <div className='container'>
          <h3>{ id }</h3>
        </div>
        <div className='container'>
          <h2>{ name }</h2>
        </div>
        <div className='container'>
          <img src={ image } width="300px" alt="item"/>
        </div>
        <div className='container'>
          <p className='describtion'>{showMore ? description : description.substring(0,50) + "..."}
            <button className='btnShow' onClick={()=> setShowMore(!showMore)} >{ showMore ? "Show less" : "Show more" }</button>
          </p>
        </div>
        <div className='container'>
          <p className='price'>{ price }</p>
        </div>
        
    </div>
    
    </div>
    
  );
}

export default App;
