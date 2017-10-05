import React from 'react';

import {Slider} from "../Elements/Slider.jsx"
import {SvgMap} from "../Elements/svg.jsx"
import {BoxInfo} from "../Elements/BoxInfo.jsx"
import {Header} from "../Elements/Header.jsx"

//Strona główna
class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualId: ""
        }
    }
    getId = (idFromSVG) => {
        console.log("funkcja start", idFromSVG)
        this.setState({
            actualId:idFromSVG
        })
    }
    render() {
        return <div>
            <Header />
        <section className="main-content">
                <div className="container">
                    <div className="row">
                        <SvgMap getId={this.getId}/> //przekazywanie funkcji w propsach dla dziecka- SvgMap
                        <BoxInfo id={this.state.actualId}/> //to jest przekazywanie funkcji w propsach dla dziecka BoxInfo
                    </div>
              </div>
          </section>
      </div>

    }
}

export {Start}
