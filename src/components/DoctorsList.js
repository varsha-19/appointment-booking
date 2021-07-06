import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const DoctorsList = () => {
  return (
    <section className='dlist'>
      <h3>Doctors List</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='dlist-1' />
          <h3>PHYSIOTHERAPIST</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
          <button className="btn"><h3 style={{ color:"black", fontFamily: "cursive"}}>Take Appoint</h3></button>
        </div>

        <div>
          <img src={image2} alt='dlist-2' />
          <h3>CARDIOLOGIST</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
          <button className="btn"><h3 style={{ color:"black", fontFamily: "cursive"}}>Take Appoint</h3></button>
        </div>

        <div>
          <img src={image3} alt='dlist-3' />
          <h3>DERMATOLOGIST</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
          <button className="btn"><h3 style={{ color:"black", fontFamily: "cursive"}}>Take Appoint</h3></button>
        </div>
      </div>
    </section>
  )
}

export default DoctorsList