import React from 'react'

const Stats = () => {
    const stats=[
        {icon:"fa fa-clock",name:"Années d'expérience",number:2},
        {icon:"fa fa-user",name:'Clients',number:5},
        {icon:"fa fa-bolt",name:"Seminaires",number:2},
        {icon:"fa-solid fa-diagram-project",name:"Projects",number:4},
        {icon:"fa-solid fa-shop",name:"Showrooms",number:2},
        {icon:"fa-solid fa-calendar-check",name:"Evénements",number:2}
    ]
  return (
    <div id="stats" className="statsSection section">

    <div className="container">

        <div className="row">
            {stats.map((stat,index)=>(
                <div className="col-md-4 col-sm-6">
                    <div className="squareItem">
                        <div className="squareInnerContainer">
                            <div className="squareIcon">
                                <i className={stat.icon}></i>
                            </div>
                            <div className="squareContent">
                                <h2 className="counter">{stat.number}</h2>
                                <h3>{stat.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          
        </div>

    </div>

</div>
  )
}

export default Stats