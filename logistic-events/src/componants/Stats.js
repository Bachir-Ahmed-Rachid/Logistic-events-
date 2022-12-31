import React from 'react'

const Stats = () => {
    const stats=[
        {icon:"fa fa-clock",name:'Years Experience',number:2},
        {icon:"fa fa-user",name:'Clients',number:3},
        {icon:"fa fa-bolt",name:"Events",number:6},
        {icon:"fa fa-code",name:"Projects",number:5}
    ]
  return (
    <div id="stats" className="statsSection section">

    <div className="container">

        <div className="row">
            {stats.map((stat,index)=>(
                <div className="col-md-3 col-sm-6">
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