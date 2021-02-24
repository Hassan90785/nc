import React, {Component} from 'react';
import {Carousel} from 'antd';
import slide1 from '../../assets/images/slides/1.jpg';
import slide2 from '../../assets/images/slides/2.jpg';
import slide3 from '../../assets/images/slides/3.jpg';
import slide4 from '../../assets/images/slides/4.jpg';
import slide5 from '../../assets/images/slides/5.jpg';

class Slider extends Component {

    render() {
        return (
            <>
       <Carousel dotPosition="right" >
           {
               slides.map((item) => (
                   <div key={item.id}>
                 <img src={item.img} alt={item.id}/>
            </div>
               ))}
  </Carousel>
                </>
        );
    }

}

const slides = [
    {
        id: '',
        description: '',
        mainHeading: '',
        btnLabel: '',
        img: slide1,
    },
    {
        id: '',
        description: '',
        mainHeading: '',
        btnLabel: '',
        img: slide2,
    },
    {
        id: '',
        description: '',
        mainHeading: '',
        btnLabel: '',
        img: slide3,
    },
    {
        id: '',
        description: '',
        mainHeading: '',
        btnLabel: '',
        img: slide4,
    },
    {
        id: '',
        description: '',
        mainHeading: '',
        btnLabel: '',
        img: slide5,
    }
];
export default Slider;

