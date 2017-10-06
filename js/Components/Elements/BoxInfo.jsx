import React from 'react';
import Radium from 'radium';
import {BoxTitle} from './BoxTitle.jsx';
// import {Slider} from './Slider.jsx';

class BoxInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataInfo: [],
            img : "",
            activeImg: ""
        }
    }

    componentDidMount() {
        const url = 'https://test1-a9cb2.firebaseio.com/places.json';
        fetch(url).then( resp => resp.json() ).then(response => {
            console.log(response);
            this.setState({
                dataInfo: response,
            })
        })
    }
    //dodalam te metode i ustawilam onClick
    handleStartClick = (event) => {

        let index = event.target.id;
        console.log("img",this.state.dataInfo[index])
        const actualCountry = this.state.dataInfo.filter( (elem, i ) => {
            return elem.id === this.props.id
        })

        this.setState({
            activeImg:  actualCountry[0].images[index]//pobrac obrazek z tablicy
        })
    }

    render() {
        let listitems = [];
        let list = "";
        if(this.state.dataInfo.length > 0 ) {
            const actualCountry = this.state.dataInfo.filter( (elem, i ) => {
                return elem.id === this.props.id
            })
            if(actualCountry.length > 0 ) {// brak klika
                console.log("ggfhfh",actualCountry[0].countryName) //tu trzeba stworzyc mape, zeby dostac sie do tavlicy obiektow
                list = <h1>{actualCountry[0].countryName}</h1>
            }
            //warunek do wyswietlania listy zabytkow

            if(actualCountry.length > 0 ) {
                 //tu trzeba stworzyc mape, zeby dostac sie do tablicy obiektow
                 console.log(actualCountry[0].mustsee)
                 console.log(actualCountry[0].images)
                    listitems = actualCountry[0].mustsee.map((elem,i)=>{
                     console.log(elem);
                     return <li id={i} key ={i} style={{cursor:'pointer',':hover': { color: 'white',transition: 'all 900ms ease-in'}}}
                         onClick = {this.handleStartClick}>{elem}</li> // tu trzeba ustawic onclick
                 })
            }

        }
        const imgStyle = {
            // border: '1px solid grey',
            borderRadius: '5px',
            marginBottom: '20px',
            ':hover': {
                backgroundColor: 'red',
                scale: 1.2
            }
        }
        return <div className="right">
                    <BoxTitle />
                    <div className="main-text">
                        <p style = {{color: '#AAABD3', textTransform: 'uppercase'}}>
                            {list}
                        </p>
                        <br />

                        <ul>
                        {listitems}
                        </ul>
                    </div>

                    <img className="ImageUploaded" src={this.state.activeImg} style = {imgStyle}/>
        </div>
    }
}
BoxInfo = Radium(BoxInfo);
export {BoxInfo}
