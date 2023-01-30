import React from 'react'
import Service1 from '../img/services/service1.jpg'
import Service2 from '../img/services/service2.jpg'
import Service3 from '../img/services/service3.jpg'
import Service4 from '../img/services/service4.jpg'
import Service5 from '../img/services/service5.jpg'
import Service6 from '../img/services/service6.jpg'
const Services = () => {
  return (
<section id="service" className="service section">

<div style={{
  backgroundColor: '#e74c3c',
	color: '#fff',
  minHeight:120,

  }}
  className='d-flex align-items-center justify-content-center pt-4'>


<h1  className="heading">Nos services
  </h1>


</div>


<div className="row">

  <div className="col-md-6 image">
    <img  src={Service2} alt=""/>
  </div>
  <div className="col-md-6 content">
    <h2>Conception de projet</h2>
    <p>etude de faisabilité , cahier de charge,budget prévisionnelle.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
 
</div>


<div className="row">

  <div className="col-md-6 content">
    <h2>Coordination avec prestataires</h2>
    <p>.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="col-md-6 image">
    <img src={Service2} alt=""/>
  </div>
 
</div>

<div className="row">

  
  <div className="col-md-6 image">
    <img src={Service5} alt=""/>
  </div>
  <div className="col-md-6 content">
    <h2>Approvisionnement</h2>
    <p>Produits alimentaires meuble,décoration,autres.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
 
</div>

<div className="row">

  <div className="col-md-6 content">
    <h2>Transporter</h2>
    <p>Invités et produits au lieu de l'événement.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="col-md-6 image">
    <img src={Service3} alt=""/>
  </div>
 
</div>

<div className="row">

  
  <div className="col-md-6 image">
    <img src={Service6} alt=""/>
  </div>
  <div className="col-md-6 content">
    <h2>Implantation et la mise en place</h2>
    <p>.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
 
</div>

<div className="row">

  <div className="col-md-6 content">
    <h2>Programme du déroulement de l'événement</h2>
    <p>.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="col-md-6 image">
    <img src={Service4} alt=""/>
  </div>
 
</div>

</section>
  )
}

export default Services