import React from 'react'
const Skills = () => {
    const skills=[
        {dataPercent:80,percent:80,skill:'Qualité des échanges',description:'Nous nous efforçons de fournir à nos clients une communication claire et efficace, qui garantit une compréhension mutuelle et une collaboration fructueuse à tout moment.' },
        {dataPercent:70,percent:70,skill:'Transparence',description:'Nous fournissons une information claire et détaillée sur les coûts, les délais et les processus pour garantir une compréhension mutuelle.' },
        {dataPercent:80,percent:80,skill:'Flexibilité',description:'Nous sommes en mesure de travailler de manière flexible pour répondre aux besoins uniques de chaque client, en nous adaptant aux horaires, aux budgets et aux exigences spécifiques' },
        {dataPercent:70,percent:70,skill:'Disponibilité et réactivité',description:'Notre équipe est disponible 24/7 pour garantir une réponse rapide à tout moment, quel que soit le moment de la journée ou de la nuit.' },
        {dataPercent:65,percent:65,skill:'Expert en logistique',description:'Nous sommes en mesure de fournir une expertise approfondie et une expertise technique pour garantir la réussite de chaque projet' },
    ]
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