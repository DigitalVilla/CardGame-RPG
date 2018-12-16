import React, { Component } from 'react'
import Deck from "../js/Deck";
import SearchBox from "./SearchBox"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes : Deck,
            search : 's '
        }
    }

    render() {
        return (
            <div>
                <h1>RPG Game</h1>
                <SearchBox />
                <Deck />         
            </div>
        )
    }
}
