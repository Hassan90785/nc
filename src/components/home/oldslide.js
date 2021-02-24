import React from 'react';
import classNames from 'classnames';
import globalstyle from '../../style.module.css';
import slide1 from '../../assets/images/slides/1.jpg';
import slide2 from '../../assets/images/slides/2.jpg';
import slide3 from '../../assets/images/slides/3.jpg';
{/* <link rel="stylesheet" href="../styles/style.css"></link> */}

class Slider extends React.Component {
    constructor(props) {
      super(props);
      
      this.IMAGE_PARTS = 4;
      
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 6000;
      
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
    
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
    
    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
    
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
    
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
    
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
          <>
        <div className={classNames('slider', { 's--ready': sliderReady })}>
          {/* <p className="slider__top-heading">Travelers</p> */}
          <div className="slider__slides">
            {slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={slide.description}
                >
                <div className={globalstyle.container}>
                    <div className="caption">

  
 

                  <h3 className="slider__slide-subheading">{slide.mainHeading || slide.description}</h3>
                  <h2 className="slider__slide-heading">   
                    {slide.description.split('').map(l => <span>{l}</span>)}
                  </h2>
                  <div className="mainBtn">Start Now {slide.description}</div>

                </div>
                </div>




                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
        </div>
        <style jsx>{`


.caption {
  padding: 25px;
  // background-color:rgba(255, 255, 255, 0.7);
  color: #fff;
  border-radius:5px;
  margin-top:85px;
  margin-bottom:15px;
   transition: top ease 0.8s;
  top: 0;
  position: absolute;
  z-index:9999;
 

}
.caption > ul > li {
  list-style: none;
  font-size:14px;
   padding:5px;
 }
.caption :hover {
   top: -4px;
}

  .slider {
    overflow: hidden;
    position: relative;
    height: 500px;
    background: #fff;
    // margin-top: -100px;
    display:absolute
  }
  .slider__top-heading {
    z-index: 12;
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    -webkit-transition: all 0.5s 1s;
    transition: all 0.5s 1s;
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
    opacity: 0;
  }
  .slider.s--ready .slider__top-heading {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  .slider__slides {
    position: relative;
    height: 100%;
  }
  .slider__slide {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .slider__slide.s--active {
    pointer-events: auto;
  }
 
  .slider__slide-subheading {
    margin-bottom: 20px;
    font-size: 24px;
    letter-spacing: 2px;
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .slider__slide.s--active .slider__slide-subheading {
    -webkit-transition-delay: 0.65s;
            transition-delay: 0.65s;
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  .slider__slide-heading {
    display: -webkit-box;
    display: flex;
    margin-bottom: 20px;
    font-size: 60px;
    letter-spacing: 12px;
  }
  .slider__slide-heading span {
    display: block;
    opacity: 0;
    -webkit-transform: translateY(-60px);
            transform: translateY(-60px);
    -webkit-transition: all 0.3333333333s;
    transition: all 0.3333333333s;
  }
  .slider__slide.s--prev .slider__slide-heading span {
    -webkit-transform: translateY(60px);
            transform: translateY(60px);
  }
  .slider__slide.s--active .slider__slide-heading span {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  .slider__slide-heading span:nth-child(1) {
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(1) {
    -webkit-transition-delay: 0.3333333333s;
            transition-delay: 0.3333333333s;
  }
  .slider__slide-heading span:nth-child(2) {
    -webkit-transition-delay: 0.1s;
            transition-delay: 0.1s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(2) {
    -webkit-transition-delay: 0.4333333333s;
            transition-delay: 0.4333333333s;
  }
  .slider__slide-heading span:nth-child(3) {
    -webkit-transition-delay: 0.2s;
            transition-delay: 0.2s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(3) {
    -webkit-transition-delay: 0.5333333333s;
            transition-delay: 0.5333333333s;
  }
  .slider__slide-heading span:nth-child(4) {
    -webkit-transition-delay: 0.3s;
            transition-delay: 0.3s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(4) {
    -webkit-transition-delay: 0.6333333333s;
            transition-delay: 0.6333333333s;
  }
  .slider__slide-heading span:nth-child(5) {
    -webkit-transition-delay: 0.4s;
            transition-delay: 0.4s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(5) {
    -webkit-transition-delay: 0.7333333333s;
            transition-delay: 0.7333333333s;
  }
  .slider__slide-heading span:nth-child(6) {
    -webkit-transition-delay: 0.5s;
            transition-delay: 0.5s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(6) {
    -webkit-transition-delay: 0.8333333333s;
            transition-delay: 0.8333333333s;
  }
  .slider__slide-heading span:nth-child(n + 7) {
    -webkit-transition-delay: 0.6s;
            transition-delay: 0.6s;
  }
  .slider__slide.s--active .slider__slide-heading span:nth-child(n + 7) {
    -webkit-transition-delay: 0.9333333333s;
            transition-delay: 0.9333333333s;
  }
  .slider__slide-readmore {
    position: relative;
    font-size: 14px;
    text-transform: lowercase;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    cursor: pointer;
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .slider__slide.s--active .slider__slide-readmore {
    -webkit-transition-delay: 0.65s;
            transition-delay: 0.65s;
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  .slider__slide-readmore:before {
    content: "";
    position: absolute;
    left: -2px;
    top: -3px;
    width: calc(100% + 4px);
    height: calc(100% + 6px);
    background: rgba(255, 255, 255, 0.4);
    -webkit-transform: scaleX(0.3);
            transform: scaleX(0.3);
    -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
  }
  .slider__slide-readmore:hover:before {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  .slider__slide-parts {
    position: absolute;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: flex;
    width: 100%;
    height: 100%;
  }
  .slider__slide-parts:after {
    content: "";
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  }
  .slider__slide-part {
    position: relative;
    width: 25%;
    height: 100%;
  }
  .slider__slide-part-inner {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 0 0;
    background-repeat: no-repeat;
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    transition: -webkit-transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
  }
  .slider__slide-part-inner:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    background-image: inherit;
    background-size: cover;
    background-position: center center;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
    opacity: 0;
  }
  .slider__slide-part:nth-child(1) .slider__slide-part-inner {
    z-index: 3;
    -webkit-transition-delay: 0.24s;
            transition-delay: 0.24s;
    -webkit-transform: translateX(-32.5%);
            transform: translateX(-32.5%);
  }
  .slider__slide.s--active .slider__slide-part:nth-child(1) .slider__slide-part-inner {
    -webkit-transition-delay: 0.28s;
            transition-delay: 0.28s;
  }
  .slider__slide-part:nth-child(1) .slider__slide-part-inner:before {
    left: 0vw;
    -webkit-transition-delay: 0.365s;
            transition-delay: 0.365s;
  }
  .slider__slide.s--active .slider__slide-part:nth-child(1) .slider__slide-part-inner:before {
    -webkit-transition-delay: 0.28s;
            transition-delay: 0.28s;
  }
  .slider__slide-part:nth-child(2) .slider__slide-part-inner {
    z-index: 2;
    -webkit-transition-delay: 0.16s;
            transition-delay: 0.16s;
    -webkit-transform: translateX(-65%);
            transform: translateX(-65%);
  }
  .slider__slide.s--active .slider__slide-part:nth-child(2) .slider__slide-part-inner {
    -webkit-transition-delay: 0.36s;
            transition-delay: 0.36s;
  }
  .slider__slide-part:nth-child(2) .slider__slide-part-inner:before {
    left: -25vw;
    -webkit-transition-delay: 0.285s;
            transition-delay: 0.285s;
  }
  .slider__slide.s--active .slider__slide-part:nth-child(2) .slider__slide-part-inner:before {
    -webkit-transition-delay: 0.36s;
            transition-delay: 0.36s;
  }
  .slider__slide-part:nth-child(3) .slider__slide-part-inner {
    z-index: 1;
    -webkit-transition-delay: 0.08s;
            transition-delay: 0.08s;
    -webkit-transform: translateX(-97.5%);
            transform: translateX(-97.5%);
  }
  .slider__slide.s--active .slider__slide-part:nth-child(3) .slider__slide-part-inner {
    -webkit-transition-delay: 0.44s;
            transition-delay: 0.44s;
  }
  .slider__slide-part:nth-child(3) .slider__slide-part-inner:before {
    left: -50vw;
    -webkit-transition-delay: 0.205s;
            transition-delay: 0.205s;
  }
  .slider__slide.s--active .slider__slide-part:nth-child(3) .slider__slide-part-inner:before {
    -webkit-transition-delay: 0.44s;
            transition-delay: 0.44s;
  }
  .slider__slide-part:nth-child(4) .slider__slide-part-inner {
    z-index: 0;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transform: translateX(-130%);
            transform: translateX(-130%);
  }
  .slider__slide.s--active .slider__slide-part:nth-child(4) .slider__slide-part-inner {
    -webkit-transition-delay: 0.52s;
            transition-delay: 0.52s;
  }
  .slider__slide-part:nth-child(4) .slider__slide-part-inner:before {
    left: -75vw;
    -webkit-transition-delay: 0.125s;
            transition-delay: 0.125s;
  }
  .slider__slide.s--active .slider__slide-part:nth-child(4) .slider__slide-part-inner:before {
    -webkit-transition-delay: 0.52s;
            transition-delay: 0.52s;
  }
  .slider__slide.s--active .slider__slide-part-inner {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-transition-timing-function: ease;
            transition-timing-function: ease;
  }
  .slider__slide.s--active .slider__slide-part-inner:before {
    opacity: 1;
  }
  .slider__control {
    z-index: 100;
    position: absolute;
    left: 50px;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
    -webkit-transition: all 0.5s 1s;
    transition: all 0.5s 1s;
    cursor: pointer;
  }
  .slider__control:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    border: 2px solid #000;
    border-bottom: none;
    border-right: none;
    -webkit-transform: translateX(5px) rotate(-45deg);
            transform: translateX(5px) rotate(-45deg);
  }
  .slider__control--right {
    left: auto;
    right: 50px;
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
  }
  .slider__control--right:before {
    -webkit-transform: translateX(-5px) rotate(135deg);
            transform: translateX(-5px) rotate(135deg);
  }
  .slider.s--ready .slider__control {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  
  .icon-link {
    z-index: 100;
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: 32px;
  }
  .icon-link img {
    width: 100%;
    vertical-align: top;
  }
  .icon-link--twitter {
    left: auto;
    right: 5px;
  }



`}</style>


        </>
      );
    }
  }
  
  const slides = [
    {
      description: 'Paris',
      mainHeading: 'The Ultimate Trading Experience',
      img: slide1,
    },
    {
      description: 'The Ultimate Trading Experience',
      mainHeading: 'The Ultimate Trading Experience',
      img: slide2,
    },
    {
      description: 'Prague',
      mainHeading: 'The Ultimate Trading Experience',
      img: slide3,
    }
  ];
    
export default Slider;