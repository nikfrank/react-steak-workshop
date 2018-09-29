import React, { Component } from 'react';


class Textarea extends Component {

  state ={
    message: '',
  }

  setValue = ({ target: { value } })=> this.setState({ message: value })
  
  
  render() {
    console.log(this.state)  
    return (
      
      <div className="textarea-wrapper">
        <textarea onChange={this.setValue} value={this.state.message} placeholder='MESSAGE' maxlength='200'style={{resize:'none'}}/>
        {
          this.state.message.length < 200 ?
          <span className="textarea-counter">{this.state.message.length}/200</span> :
          <span
            style={{color: '#a93f55'}} className="textarea-counter">{this.state.message.length}/200</span> } 
      </div>
    );
  }
}

export default Textarea;
