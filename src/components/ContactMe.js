import React, { Component } from 'react';
export default class contactme extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contactme">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span></span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
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
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}