import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div>
        <header>
            <h1><Fade bottom cascade>Amazing Gradients.</Fade></h1>
            <nav>
                <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="http://chetanverma.com/">Portfolio</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/chetanverma16">Github</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/chetanverma">Behance</a></li>
                        <li><a href="mailto:hello@chetanverma.com"><button>Contact</button></a></li>

                </ul>
            </nav>
        </header>
            <p className='header-title'>
            Handpicked amazing gradient <br/>
                for your real life projects ✌</p>
                
        </div> );
    }
}
 
export default Header;