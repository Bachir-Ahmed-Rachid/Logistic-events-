import React from 'react'
import Event1  from '../img/portfolio/event1.jpg'
import Event2  from '../img/portfolio/event2.jpg'
import Event3  from '../img/portfolio/event3.jpg'
import Event4  from '../img/portfolio/event4.jpg'
import Event5  from '../img/portfolio/event5.jpg'
import Event6  from '../img/portfolio/event6.jpg'
import Event7  from '../img/portfolio/event7.jpg'
import Event8  from '../img/portfolio/event8.jpg'
import Event9  from '../img/portfolio/event9.jpg'
const Portfolio = () => {
    const portfolios=[        
        {filtre:'.events',src:Event1,title:"Event1",link:""},
        {filtre:'project',src:Event2,title:"Event2",link:""},
        {filtre:'events',src:Event3,title:"Event3",link:""},
        {filtre:'project',src:Event4,title:"Event4",link:""},
        {filtre:'events',src:Event5,title:"Event5",link:""},
        {filtre:'project',src:Event6,title:"Event6",link:""},
        {filtre:'project',src:Event7,title:"Event7",link:""},
        {filtre:'project',src:Event8,title:"Event8",link:""},
        {filtre:'events',src:Event9,title:"Event9",link:""},
    ]
  return (
    <div id="portfolio" className="section">

    <div className="container">

        <div className="row">

            <div className="heading">
                <h2>PORTFOLIO</h2>
            </div>

            <div className="filter">

                <ul id="filters">

                    <li>
                        <a href="#" data-filter="*" className="current">ALL</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".events">Events</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".project">Projects</a>
                    </li>
                </ul>

            </div>

       
            <div style={{minHeight:"964px"}} className="itemsContainer">

                <ul className="items">

                    {portfolios.map((portfolio)=>(
                             <li className={`${portfolio.filtre} col-xs-6 col-sm-4 col-md-3 col-lg-4`}>


                             <div className="item">
     
                                 <img style={{height: '306px', width:'100%'}} src={portfolio.src}/>
     
     
                                 <div className="icons">
                                     <a href={portfolio.src} title="View image" className="openButton" data-fancybox data-caption={portfolio.title}>
                                         <i className="fa fa-search"></i>
                                     </a>
     
                                     <a href={portfolio.link} target="_blank" className="projectLink">
                                         <i className="fa fa-link"></i>
                                     </a>
                                 </div>
     
                                 <div className="imageOverlay"></div>
     
                             </div>
     
     
                         </li>
                    ))}
                   

                 

                </ul>

            </div>


        </div>

    </div>

</div>
  )
}

export default Portfolio