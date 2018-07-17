import React from 'react';

class Clock extends React.Component {

    render(){
        return(

            <h1>{this.props.date}</h1>

        );
    }


}

export default Clock;