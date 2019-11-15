import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <section className="row">

            <section className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </section>

            <section className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <section className="row">

                  <section className="columns contact-details">
                  </section>
               </section>
            </section>
         </section>
      </section>
    );
  }
}