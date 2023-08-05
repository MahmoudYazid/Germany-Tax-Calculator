import React from 'react'
import '../SecondPart/SecondPart.css'
import { useSelector, useDispatch } from 'react-redux';

export default function SecondPart() {
  const grossValue = useSelector(state => state.gros);
  const NettoValue = useSelector(state => state.netto)
  const Dispatch=useDispatch()
  return (
      <div className='SecondPart'>
      <div className='HeaderContainer'>
         <p className='Text'>Calculate Your Tax in germany</p>
      </div>
        
        <div className="BarContainer">

        <input type="range" min="1" max="150000" className='Bar' onChange={(e)=>{
          
          Dispatch({ type: 'UPDATE_gros', salary: Number(e.target.value)})
        }}  ></input>
        <div className='TextContainer'>
          
          <p> gross /Y :  {grossValue} </p>
          <p> tax /Y :  {NettoValue} </p>
          <p> netto /m :  {Number((grossValue-NettoValue) / 12)} </p>
        </div>

       
        </div>


      </div>
  )
}
