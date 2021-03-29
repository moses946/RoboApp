import React, {Component}from "react"
import CardArray from "../components/CardArray"
import Searchbox from "../components/search"
import "./app.css"
import {Dot} from "react-animated-dots"
import Scroll from "../components/scroll"

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json()).then(
                users =>this.setState({robots:users}))
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const {robots, searchfield} = this.state;
        const filterrobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return(
                <h1 className="tc pa3 ba">Loading
                    <Dot className="hgt">.</Dot>
                    <Dot className="hgt">.</Dot>
                    <Dot className="hgt">.</Dot>
                    <Dot className="hgt">.</Dot>
                </h1>
            
            )
        }
        return(
            <div className="tc">
                <h1 className="f2">ROBO FRIENDS</h1>
                <Searchbox  searchchange={this.onSearchChange}/>
                <Scroll>
                    <CardArray robots={filterrobots} />    
                </Scroll>                      
            </div>
        );
    }
};

export default App;