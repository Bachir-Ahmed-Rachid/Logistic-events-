import React from 'react'
import about from '../img/About.jpg'
const About = () => {
  return (
    <div id="about" className="section">

    <div className="container">

        <div className="row">

            <div className="col-md-6">
                <img className="aboutImage" src={about}/>
            </div>

            <div className="col-md-6">


                <h3>Qui sommes- nous?</h3>
                    <p>Nous sommes une entreprise a responsabilité limitee , spécialisée dans la gestion de
                    la logistique d'un événement ou d'un projet.
                    </p>
                    <p>
                        (nom de l'entreprise ) fournit tous les services nécessaires à
                        l'organisation de votre projet : 
                    </p>
                    <p>
                        Conception programme de l'évènement, gestion d’approvisionnement et transport.
                    </p>
                    <p>
                        Coordination,design, gestions des inscriptions, location d'un endroit
                        équipé.
                        Mise en place d'une plateforme de l'événement.
                    <p/>
                         (nom de l'entreprise ) réalisera votre projet en bonne qualité
                        en bon moment et à moindre coût.
                    </p>
               </div>

        </div>

    </div>

</div>
  )
}

export default About