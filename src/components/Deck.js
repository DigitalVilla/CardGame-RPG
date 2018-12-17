import React from 'react'
import Card from './Card';

function Deck(props) {
    return (
        <div>
            {
                props.heroes.map((e)=>{
                    return <Card key = {e["name"]}
                        {... e}/>
                })
            }
        </div>
    )
}

export default Deck;