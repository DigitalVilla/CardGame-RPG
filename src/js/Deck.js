import React from 'react'
import Hero from '../js/Hero';
import Card from '../components/Card';

const male = {
    wizard: ["m_wiz1.png", "m_wiz2.png"],
    cleric: ["m_cle1.png", "m_cle2.png"],
    warrior: ["m_war1.png", "m_war2.png"],
    paladin: ["m_pal1.png", "m_pal2.png"],
    hunter: ["m_hun1.png", "m_hun2.png"],
    thief: ["m_thi1.png", "m_thi2.png"]
}

const female = {
    wizard: ["f_wiz1.png", "f_wiz2.png"],
    cleric: ["f_cle1.png", "f_cle2.png"],
    warrior: ["f_war1.png", "f_war2.png"],
    paladin: ["f_pal1.png", "f_pal2.png"],
    hunter: ["f_hun1.png", "f_hun2.png"],
    thief: ["f_thi1.png", "f_thi2.png"]
}

sessionStorage.setItem("maleDB", JSON.stringify(male));
sessionStorage.setItem("femaleDB", JSON.stringify(female));

let demo = [
    ["Master", 1, 0],
    ["Miss", 0, 0],
    ["Bato", 1, 1],
    ["Bety", 0, 1],
    ["Zorro", 1, 2],
    ["Zara", 0, 2],
    ["Neto", 1, 3],
    ["Neta", 0, 3],
    ["Maia", 0, 4],
    ["Marco", 1, 4],
    ["Blanca", 0, 5],
    ["Buffer", 1, 5]
]
function Deck() {

    return (
        <div>
            {
                demo.map((e)=>{
                return <Card key = {e[0]}
                    {...new Hero(e[0],e[1],e[2])}/>
                })
            }
        </div>
    )
}

export default Deck;