import React from 'react'
import event1 from '../img/event1.jpg'
import event2 from '../img/event2.jpg'
import event3 from '../img/event3.jpg'
import event4 from '../img/event4.jpg'
import event5 from '../img/event5.jpg'
import event6 from '../img/event6.jpg'
import event7 from '../img/event7.jpg'
import event8 from '../img/event8.jpg'
const Slides = () => {
  return (
    <div id="slides">
    <div class="overlay"></div>

    <div class="slides-container">
        <img src={event1} alt=""/>
        <img src={event2} alt=""/>
        <img src={event3} alt=""/>
        <img src={event4} alt=""/>
        <img src={event5} alt=""/>
        <img src={event6} alt=""/>
        <img src={event7} alt=""/>
        <img src={event8} alt=""/>
       


    </div>
    <div class="titleMessage">
        <div class="heading">
            <p class="main">Event Elite Logistics</p>
            <p class="sub typed"></p>
        </div>
    </div>
    <nav class="slides-navigation">
        <a href="#" class="next"></a>
        <a href="#" class="prev"></a>
    </nav>
</div>
  )
}

export default Slides