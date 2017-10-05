import React from 'react';

class CheckAge extends React.Component {
    render() {
        if ( this.props.params.age > 18 ) {
            return <h1> Pełnoletni </h1>
        } else {
            return <h1> Nie nie nie Pełnoletni </h1>
        }
        
    }
}

export {CheckAge}