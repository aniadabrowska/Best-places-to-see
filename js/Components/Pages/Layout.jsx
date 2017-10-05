import React from 'react';
import {  IndexLink } from 'react-router';

class Layout extends React.Component {
    render() {

        const activeStyle = { 
            fontWeight:'600'
        };
        return <div>
            <h2> Hello </h2>
             <ul>
                <li> <IndexLink to="/" activeStyle={activeStyle}> Home </IndexLink> </li>
                <li> <IndexLink to="/hello/Jan" activeStyle={activeStyle}> Jan </IndexLink> </li>
                <li> <IndexLink to="/checkage/50" activeStyle={activeStyle}> 50 </IndexLink> </li>
                <li> <IndexLink to="/checkage/13" activeStyle={activeStyle}> 13 </IndexLink> </li>
           </ul>
            {this.props.children}
        </div>
    }
}

export {Layout}