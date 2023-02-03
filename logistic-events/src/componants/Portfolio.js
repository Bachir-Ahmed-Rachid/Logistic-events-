import React from 'react'
import showroom2  from '../img/portfolio/showroom2.jpg'
import showroom1  from '../img/portfolio/showroom1.jpg'
import seminair1  from '../img/portfolio/seminair1.jpg'
import seminair2  from '../img/portfolio/seminair2.jpg'
import sport1  from '../img/portfolio/sport1.jpg'
import sport2  from '../img/portfolio/sport2.jpg'

import festival1 from '../img/portfolio/festival1.jpg'
import festival2  from '../img/portfolio/festival2.jpg'
import festival3  from '../img/portfolio/festival3.jpg'
import festival4  from '../img/portfolio/festival4.jpg'

const Portfolio = () => {
    const portfolios=[        
        {filtre:'festival',src:festival1,title:"festival1",link:""},
        {filtre:'sport',src:sport1,title:"sport1",link:""},
        {filtre:'seminaire',src:seminair1,title:"seminair1",link:""},
        {filtre:'showroom',src:showroom2,title:"showroom2",link:""},
        {filtre:'showroom',src:showroom1,title:"showroom1",link:""},
        {filtre:'festival',src:festival2,title:"festival2",link:""},
        {filtre:'festival',src:festival3,title:"festival3",link:""},
        {filtre:'festival',src:festival4,title:"festival4",link:""},
        {filtre:'seminaire',src:seminair2,title:"seminair1",link:""},
        {filtre:'sport',src:sport2,title:"sport2",link:""},
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
                        <a href="#" data-filter="*" className="current">Tous</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".festival">Evénement festival</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".sport">Evénement sportif</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".seminaire">Séminaire</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".showroom">Showroom lancement d'un produit</a>
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