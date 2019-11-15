import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <section className="row education">

            <section className="three columns header-col">
               <h1><span>Education</span></h1>
            </section>

            <section className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <section className="row item" >
                       <section className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </section>
                    </section>
                  )
                })
              }
            </section>
         </section>
        <section className="row work">
            <section className="three columns header-col">
               <h1><span>Work</span></h1>
            </section>

            <section className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <section className="row item">
                       <section className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthStarting} {item.YearStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </section>

                    </section>

                  )
                })
              }
            </section> 
         </section>


         <section className="row skill">

            <section className="three columns header-col">
               <h1><span>Skills</span></h1>
            </section>

            <section className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<section className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</section>

   			</section>

         </section>

      </section>
    );
  }
}