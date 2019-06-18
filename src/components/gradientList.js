import React, { Component } from 'react';
import Gradient from './gradient';
import data from '../data'
import Fade from 'react-reveal/Fade';


class GradientList extends Component {
    state = {
        data:data
    }
    render() {
        return (<div className='gradient-grid'>
        {
            this.state.data.map((gradient) => (
            <Fade bottom>
                <Gradient color1={gradient.color1} color2={gradient.color2}></Gradient>
           </Fade>
            ))
        }
            <span className='footer'>Made With ❤ by <a href="http://chetanverma.com/">Chetan Verma</a></span>
        </div>);
    }
}

export default GradientList;