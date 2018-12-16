import React from 'react'

export default function searchBox() {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Hero Name" maxLength="6"/>
      
      <select name="" id="">
        <option value="0">Wizard</option>
        <option value="1">Cleric</option>
        <option value="2">Warrior</option>
        <option value="3">Paladin</option>
        <option value="4">Hunter</option>
        <option value="5">Thief</option>
      </select>
        
      <select name="" id="">
          <option value="0">Male</option>
          <option value="0">Female</option>
      </select>

      <button onClick={(e)=>{console.log(e.target)}}> Create </button>
      
    </div>
  )
}
