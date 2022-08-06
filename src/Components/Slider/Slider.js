import React, { useState } from 'react'
import './Slider.css'
import dataslider from './dataSlider'
import BtnSlider from './BtnSlider'

function Slider() {

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false // pour prévenir le spam click
  })

  const nextSlide = () => {
    if(slideAnim.index !== dataslider.length && !slideAnim.inProgress){
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true })
      
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false })
      }, 400)
    }
    else if (slideAnim.index === dataslider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  }

  const prevSlide = () => {
    if(slideAnim.index !== 1 && !slideAnim.inProgress){
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 400);
    }
    else if(slideAnim.index === 1 && !slideAnim.inProgress){
      setSlideAnim({ index: 5, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: 5, inProgress: false });
      }, 400);
    }
  }

  const moveDot = index => {
    setSlideAnim({ index: index, inProgress: false });
  }

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
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

      <div className="container-dots">
        {Array.from({length: 5}).map((item, index) => {
          return <div className={slideAnim.index === index + 1 ? "dot active" : "dot" } onClick={() => moveDot(index + 1)} ></div>
        })}
      </div>

    </div>
  )
}

export default Slider;