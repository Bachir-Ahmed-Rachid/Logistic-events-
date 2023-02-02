import React from 'react'
const Skills = () => {
    const skills=[
        {dataPercent:80,percent:80,skill:'Disponibilité,',description:'USED IN' },
        {dataPercent:70,percent:70,skill:'Réactivité et flexibilité',description:'USED IN' },
        {dataPercent:80,percent:80,skill:'Transparence',description:'transparence de tout document lié à votre projet' },
        {dataPercent:70,percent:70,skill:'Expertise',description:'Expert en chaine logistique et gestion de projet' },
        {dataPercent:65,percent:65,skill:'SKILL5',description:'USED IN' },
        {dataPercent:40,percent:40,skill:'SKILL6',description:'USED IN' },
        {dataPercent:50,percent:50,skill:'SKILL7',description:'USED IN'},
        {dataPercent:30,percent:30,skill:'SKILL8',description:'USED IN' },]
  return (
    <div id="skills" className="skillsSection section">

            <div className="container">

                <div className="row">

                    <div className="col-md-12 text-center">
                        <h2>Nos atout</h2>
                        <p>.</p>
                    </div>


                    <div className="owl-carousel owl-theme">

                    {skills.map(skill=>(
                        <div className="skill">
                        <span className="chart" data-percent={`${skill.dataPercent}`}>
                            <span className="percent">{skill.percent}</span>
                            <canvas height="152" width="152"></canvas>
                        </span>
                        <h4>{skill.skill}</h4>
                        <p>{skill.description}</p>
                    </div>
                    ))}
                    


                       


                    </div>


                </div>

            </div>

        </div>
  )
}

export default Skills