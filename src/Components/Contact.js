import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if(this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }
    return (
      <section id="contact">
         <div className="row">
            <div className="contact">
               <h1><span>Get In Touch.</span></h1>
            </div>
         </div>
         <div className="row">
            <div className="address-holder">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}<br/>
                {street} <br/>
                {city}, {state} {zip} US <br/>
                <span>{phone}</span><br/>
                <span>{email}</span>
              </p>
            </div>
          </div>
      </section>
    );
  }
}

export default Contact;