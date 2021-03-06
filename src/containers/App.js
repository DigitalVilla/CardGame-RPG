import React, { Component } from 'react'
import Deck from "../components/Deck";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import Hero from "../js/Hero"
import util from "../js/utils"
import fetch from "../js/fetch"
import ErrorBoundry from '../components/ErrorBoundry';
let loader = require('../img/icons/load.gif');

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: [],
            filters : [],
            search : '',
            sort : ''
        }
    }
    
    componentDidMount (){
        // faking a DB fetch
        setTimeout (() => {
            fetch.API("/data/heroDB.json", "GET")
            .then((json)=>  {
                const heroes = [];
                json.forEach(e => {
                    heroes.push(new Hero(e[0], e[1], e[2], e[3]));
                });
                this.setState({heroes: util.sortBy(heroes,"attrib", false),})
            })
        },1e3)
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

    selection  = () => {
        const {heroes, filters, sort } = this.state;
        let sorted = [];

        if (heroes.length) {
            sorted = heroes.filter(h => {
                return h["name"].toLowerCase().includes(this.state.search);
            })
            
            if (filters.length > 0) {
                let params = ["clase","race"];
                for (let i = 0; i < params.length; i++) {
                    if (filters[i] === "0") continue;
                    sorted = sorted.filter(h => {
                        return h[params[i]] === filters[i];
                    })
                }
            }
            
            if (sort !== "0") {
                util.sortBy(sorted, sort, false);
            }
        }
        return sorted;
    }

    render() {
        if (this.state.heroes.length) 
            return (
                <div>
                    <SearchBox search={this.searchBy} filter={this.filterBy} sort={this.sortBy}/>
                    <Scroll >
                        <ErrorBoundry>
                        <Deck heroes={this.selection()}/>         
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
       
        return (
            <div>
                <h1>LOADING...</h1>
                <img id="loading" src={loader} alt = "loading"/>       
            </div>
        )
    }
}
