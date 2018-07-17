import React from 'react';
import Clock from './clock';

class Tick extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            date : new Date()
        }
    }

    Tick(){
        this.setState({date:new Date()})
    }

    componentDidMount() {
        this.TimerID = setInterval(()=> this.Tick(),1000);
    }

    componentWillUnmount() {

    }

    render(){
        return(
            <div className="clock">
                <h1>Hello, World</h1>
                <Clock date = {this.state.date.toLocaleTimeString()} />

            </div>

        );
    }
}

export default Tick;