import React from 'react'
import Slider from './Slider';
import CardItem from './cats/CardItem';

const Home = (props) => {
  return (
    <div>
      <Slider></Slider>
      <CardItem item={props.item}/>
    </div>
  )
}

export default Home