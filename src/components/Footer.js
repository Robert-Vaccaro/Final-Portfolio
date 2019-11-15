import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <section className="row">
        <section className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url} target="_blank">
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </section>
        <section id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></section>
      </section>
    </footer>
    );
  }
}