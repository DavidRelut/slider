import React, { useState } from 'react'
import './Slider.css'
import dataslider from './dataSlider'

function Slider() {

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false
  })



  return (
    <div className='container-slider'>
      {dataslider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            // rendu conditionnel (en ternaire) avec React et sa class 
            className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
          >

            <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
             
            {/* si le projet par en prod, mettre l'URL du site dans une variable d'environnement, pour que les images soit bien indexer. */}
              {/* ``` <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" /> ``` */}

          </div>
        )
      })}
    </div>
  )
}

export default Slider;