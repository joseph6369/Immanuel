import React from 'react'
import "./Booked.css"

function Booked() {
  return (
    <div class="Booked-parent">
<img class="Booked-image" src="Tick.png"/>
<p class="Booked-wish">Thank You</p>
<p class="Booked-para"> Your Tour is Booked</p>
<a href="EndHome"><button class="Booked-btn">Back To Home</button></a>
    </div>
  )
}

export default Booked