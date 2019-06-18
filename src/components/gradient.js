import React, { Component } from 'react';
import tinygradient from 'tinygradient';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Gradient extends Component {
    state = {
        gradientString:null,
        copied:false
    }
    generateGradient = (color1,color2)=> { 
        const gradient = tinygradient([color1,color2]) 
        this.setState({gradientString:gradient.css()})
    }
    componentDidMount = ()=>{
        this.generateGradient(this.props.color1,this.props.color2);
    }
    render() {
        return (
        <div className='gradient-card'>
                <CopyToClipboard text={this.state.gradientString} onCopy={() => this.setState({ copied: !this.state.copied })}>
        <button>
                        <div className='gradient' style={{ background: this.state.gradientString, boxShadow: `1px 4px 50px ${this.props.color1}40`}}>
                            {this.state.copied ? <span>Copied.</span> : <span>Click To Copy</span>}
            </div>
        </button>
        </CopyToClipboard>
        </div>);
    }
}

export default Gradient;