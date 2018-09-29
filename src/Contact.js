import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import './ContactForm.css';
import Textarea from './Textarea';
import Correct from './imgs/correct.svg';
import X from './imgs/delete-button.svg';
import contactWood from './imgs/woodFloor3.jpg'



class Contact extends Component {
  state = { userName: '',
            email: '',
            telNo1: '',
            telNo2: '',
            telNo3: '',
            message: '',
            submit: false,
  }

  setUserName = (event)=> this.setState({userName: event.target.value});
  setEmail = ({ target: {value} })=>
    this.setState({
      email: value,
      isEmailValid: value.includes('@' && '.' )
    })
  setTelNo1 = (event)=> this.setState({ telNo1: event.target.value });
  setTelNo2 = (event)=> this.setState({ telNo2: event.target.value });
  setTelNo3 = (event)=> this.setState({ telNo3: event.target.value });
  
  setMessage = (event)=> this.setState({ message: event.target.value  });
  setSubmit = (event)=> this.setState({ submit: event.target.value  });

  render() {
    const { userName, email, telNo1, telNo2, telNo3, message } = this.state;

    return (

      <div>
        <section className=''>

          <div className='page contact-container'>
            <div className="form-container" style={{backgroundImage: `url(${contactWood})`}}>

              <h1 className="form-header">Send us your message</h1>

              <div className='emailInvalid'>
                
              </div>

              <form id="form" class="topBefore">
                <input id="name" type="text" placeholder="NAME" onChange={this.setUserName} value={userName}/>

                <div className='contact-email-div'>
                  <input id="email"
                         type="text"
                         placeholder="E-MAIL"
                         onChange={this.setEmail}
                         value={email}/>
                  {
                    !!this.state.email.length ?
                    
                    !!this.state.isEmailValid ? (
                      <img src={Correct}/> 
                      
                    ) : (
                      <img src={X} /> 
                    ) : null
                  }
                </div>
                

                <div className='contact-message-div'>
                  <Textarea
                    id="message"
                    type="text"
                    onChange={this.setMessage}
                    value={message}/>
                  
                </div>
                <input id="submit"
                       type="submit"
                       value="SUBMIT"
                       onChange={this.setSubmit} />

              </form>

            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
