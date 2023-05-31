import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'


const Slider = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item interval={1000}>
        <img width={100} height={350}
          className="d-block w-100"
          src="./img/34.jpg"
          alt="<First slide>"
        />
        <Carousel.Caption>
        <h3>Большой выбор детских товаров</h3>
          
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img width={'100%'} height={350}
          className="d-block w-100"
          src="./img/35.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Скидки до 50%</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img width={420} height={350}
          className="d-block w-100"
          src="./img/33.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Товары под заказ</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider