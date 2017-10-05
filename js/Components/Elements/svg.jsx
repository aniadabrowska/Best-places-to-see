import React from 'react';

import {paths} from './paths.js';


class SvgMap extends React.Component {
    handleClick(event){
        console.log(event.target.id);
        this.props.getId(event.target.id) // skad to?
    }
    render() {
        // console.log(paths);
        //mapowanie paths,zeby uzyskac 'id', 'className' i 'd'
        const countries = paths.map((elem) => {
            return <path id={elem.id}
                className = {elem.myClass}
                d = {elem.d}
                onClick = {e => this.handleClick(e)}
                />

        })
        
        return <div className="left">

            <svg
               id="svg3157"
               height="600"
               width="880"
               viewBox="60 10 600 500"
               version="1.1">


               <title id="title4">Countries of Europe</title>

               <g id="layer1" transform="matrix(1.0020524,0,0,1.0020524,0.25102907,-0.17691186)">

                 <rect
                 className="cls-2"
                    id="ocean"
                    y="-0.64661241"
                    x="-122.31598"
                    height="519.34296"
                    width="810.51758" />

                {countries}



                  </g>
             </svg>

         </div>

 }
 }

 export {SvgMap}
