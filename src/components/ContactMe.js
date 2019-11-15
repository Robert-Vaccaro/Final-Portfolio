import React, { Component } from 'react';
export default class contactme extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contactme">
        <section className="text-container">
          <section className="row">
            <section className="two columns header-col">
              <h1><span></span></h1>
            </section>
            <section className="ten columns flex-container">
              <section className="flexslider">
                <ul className="slides">
                  {
                    resumeData.contactme && resumeData.contactme.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p >
                              Contact Me: <br />
                            <a href="mailto:robertvaccaro1@gmail.com" style={{width:"80%"}}>robertvaccaro1@gmail.com</a>  
                            

                            </p>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </section> {/* section.flexslider ends */}
            </section> {/* section.flex-container ends */}
          </section> {/* row ends */}
        </section>  {/* text-container ends */}
      </section>
        );
  }
}