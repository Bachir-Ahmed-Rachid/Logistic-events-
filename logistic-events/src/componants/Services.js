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

<h1 className="heading">our services</h1>

<div className="row">

  <div className="col-md-6 image">
    <img  src={Service2} alt=""/>
  </div>
  <div className="col-md-6 content">
    <h3>website development</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <hr className='mt-5'/>
</div>


<div className="row">

  <div className="col-md-6 content">
    <h3>mobile friendly</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="col-md-6 image">
    <img src={Service2} alt=""/>
  </div>
  <hr className='mt-5'/>
</div>

<div className="row">

  
  <div className="col-md-6 image">
    <img src={Service5} alt=""/>
  </div>
  <div className="col-md-6 content">
    <h3>responsive design</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <hr className='mt-5'/>
</div>

<div className="row">

  <div className="col-md-6 content">
    <h3>web hosting</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="col-md-6 image">
    <img src={Service3} alt=""/>
  </div>
  <hr className='mt-5'/>
</div>

<div className="row">

  
  <div className="col-md-6 image">
    <img src={Service6} alt=""/>
  </div>
  <div className="col-md-6 content">
    <h3>seo friendly</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <hr className='mt-5'/>
</div>

<div className="row">

  <div className="col-md-6 content">
    <h3>graphic design</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="col-md-6 image">
    <img src={Service4} alt=""/>
  </div>
  <hr className='mt-5'/>
</div>

</section>
  )
}

export default Services