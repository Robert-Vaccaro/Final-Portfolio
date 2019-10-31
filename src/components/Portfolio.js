import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" >
      <div className="row">
        <div className="twelve columns collapsed" >
          <h1 style={{fontSize:"32px"}}>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" >
          <br />
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div style={{textAlign:"center"}}>
                  
                  <h5 style={{textAlign:"center",fontSize:"32px"}}>{item.name}</h5>
                  <br />
                    <img src={`${item.imgurl}`} style={{width:"90%"}}/>
                    <br />
                    <img src={`${item.imgurl2}`} style={{width:"90%"}}/>
                    <p >{item.summary}</p>
                    <h5>Technologies: </h5>
                    <p>{item.technologies}</p>
                    <a href={item.linkToLiveApps} target="_blank">
                    <button className="live-button" style={{verticalAlign:"middle"}}><span>Live Demo</span></button>
                    </a>
                    <br />
                    <a href={item.linkToRepo} target="_blank">
                    <button className="live-button" style={{verticalAlign:"middle"}}><span>Source Code</span></button>
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}