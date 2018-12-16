import React from 'react';




const Card = (props) => {
    let fill = (Math.pow(2, props.lvl) * 100 / 2);
    fill =  (props.exp - fill)/fill*100;
    let color = props.attrib || "strength";
    
    let image = sessionStorage.getItem((props.race+"DB"));
    image =  JSON.parse(image)[props.clase][1];
    let img = require('../img/'+image);
    
    return (
        <div className="card">
            <img className="card__img" src={img} alt="warrior" />
            <span className={"card__lvl " + color}><span className="card__lvl--no">{props.lvl || 0}</span></span>
            <div className="card__proBar">
                <div className={"card__proBar--fill " + color} style={{ width: fill + "%" }}>&nbsp;</div>
            </div>
            <h3>{props.name || "Cato"}<span>{" the " + props.clase || "Warrior"}</span></h3>
            <div className="card__table">

                <div className={"card__table--head " + color}>
                    <span>Dmg</span>
                    <span>Critic</span>
                    <span>Magic</span>
                </div>
                <div className="card__table--body">
                    <span>{props.damage}</span>
                    <span>{props.critic}</span>
                    <span>{props.magic}</span>
                </div>
                <div className={"card__table--head gray"}>
                    <span>HP</span>
                    <span>Armor</span>
                    <span>Mana</span>
                </div>
                <div className="card__table--body">
                    <span>{props.health}</span>
                    <span>{props.armor}</span>
                    <span>{props.mana}</span>
                </div>

                <div className={"card__table--head gray"}>
                    <span>Pow</span>
                    <span>Agility</span>
                    <span>Intel</span>
                </div>
                <div className="card__table--body">
                    <span>{props.strength}</span>
                    <span>{props.agility}</span>
                    <span>{props.intelligence}</span>
                </div>
            </div>


        </div>
    )
}
export default Card;