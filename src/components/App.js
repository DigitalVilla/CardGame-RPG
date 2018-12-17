import React, { Component } from 'react'
import Deck from "./Deck";
import SearchBox from "./SearchBox"
import heroes from "../js/heroDB"
import util from "../js/utils"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: util.sortBy(heroes,"name", false),
            filters : [],
            search : '',
            sort : ''
        }
    }
    
    searchBy = (event) => {
        this.setState({search: event.target.value.toLowerCase()})
    }
    
    sortBy = (event) => {
        this.setState({sort: event.target.value})
    }

    filterBy = (event) => {
        let filters = event.target.parentNode.children;
        this.setState({filters: [filters[1].value,filters[2].value]})
    }

    render() {


        const searched  = () => {
            let filters = this.state.filters;
            let sorted = this.state.heroes.filter(h => {
                return h["name"].toLowerCase().includes(this.state.search);
            })

            console.log(filters);
            
            if (filters.length > 0) {
               let params = ["clase","race"];
               for (let i = 0; i < params.length; i++) {
                   if (filters[i] === "0") continue;
                    sorted = sorted.filter(h => {
                        return h[params[i]] === filters[i];
                    })
               }
            }

            if (this.state.sort !== "0") {
                util.sortBy(sorted,this.state.sort, false);
            }
            
            return sorted;
        }


       
        return (
            <div>
                {/* <h1>RPG Game</h1> */}
                <SearchBox search={this.searchBy} filter={this.filterBy} sort={this.sortBy}/>
                <Deck heroes={searched()}/>         
            </div>
        )
    }
}
