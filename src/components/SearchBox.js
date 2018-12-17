import React from 'react'

export default function searchBox(props) {
  return (
    <div className="searchBox">
      <input onChange={props.search} type="text" placeholder="Filter by Name" maxLength="6"/>

      <select onChange={props.filter} name="clase" id="">
        <option value="0">Class</option>
        <option value="wizard">Wizard</option>
        <option value="cleric">Cleric</option>
        <option value="warrior">Warrior</option>
        <option value="paladin">Paladin</option>
        <option value="hunter">Hunter</option>
        <option value="thief">Thief</option>
      </select>

      <select onChange={props.filter} name="sex" id="">
          <option value="0">Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
      </select>
      
      <select onChange={props.sort} name="stats" id="">
        <option value="0">Sort by</option>
        <option value="armor">Armor</option>
        <option value="critic">Critic</option>
        <option value="damage">Damage</option>
        <option value="health">Health</option>
        <option value="magic">Magic</option>
        <option value="mana">Mana</option>
      </select>
     
      {/* <button onClick={props.filter}> Filter </button> */}
      
    </div>
  )
}
