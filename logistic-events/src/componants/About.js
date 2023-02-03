import React from 'react'
import about from '../img/About.jpg'
const About = () => {
  return (
    <div id="about" className="section">

    <div className="container">

        <div className="row">

            <div className="col-md-6">
                <img style={{height:'100%'}} className="aboutImage" src={about}/>
            </div>

            <div className="col-md-6">


                <h3>Qui sommes- nous?</h3>
                <p> Avez vous un projet ?</p>
		        <p> Vous ne pouvez pas le realiser?,ni le gérer ?</p>
                <p> Vous n'avez pas trouvé de lieu ?</p>
                <p> Event Elite Logistics est la pour vous accompagner et réaliser la gestion votre projet"</p>
                    <p>Nous sommes une entreprise a responsabilité limitee , spécialisée dans la gestion de
                    la logistique d'un événement ou d'un projet.
                    </p>
                    
                    <p>
                    Event Elite Logistics fournit tous les services nécessaires à
                        l'organisation de votre projet 
                    </p>
                    <p>
                        Conception programme de l'évènement, gestion d'approvisionnement et transport.
                    </p>
                    <p>
                        Coordination,design, gestions des inscriptions, location d'un endroit
                        équipé.
                    <p>
                    Mise en place d'une plateforme de l'événement.
                    </p>
                        
                    <p/>
                        Event Elite Logistics réalisera votre projet en bonne qualité
                        en bon moment et à moindre coût.
                    </p>
               </div>

        </div>

    </div>

</div>
  )
}

export default About