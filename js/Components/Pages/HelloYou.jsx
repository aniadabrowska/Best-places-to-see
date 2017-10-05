import React from 'react';

class HelloYou extends React.Component {
    render() {
        return <div>
           Witaj, {this.props.params.name}
        </div>
    }
}

export {HelloYou}