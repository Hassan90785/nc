import React, {Component} from 'react';
import slide1 from '../../assets/images/slides/1.jpg';
import slide2 from '../../assets/images/slides/2.jpg';
import slide3 from '../../assets/images/slides/3.jpg';
import slide4 from '../../assets/images/slides/4.jpg';
import slide5 from '../../assets/images/slides/5.jpg';
import './slider.css'
class Slider extends Component {

    render() {
        return (
            <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner">
          {
              slides.map((item, index) => (
                  <div className={"carousel-item position-relative " + (index === 0 ? 'active' : ' ')}>
          <img className="d-block w-100" src={item.img} alt={item.id}/>
          <div className="carousel-caption d-none d-md-block">
        <h5>{item.mainHeading}</h5>
        <p>{item.description}</p>
              <button class="btn btn-primary px-3">{item.btnLabel}</button>
             </div>
        </div>
              ))}
      </div>
</div>

                </>
        );
    }

}

const slides = [
    {
        id: '0',
        description: 'We make investments foster - Bringing you the most innovative and robust solutions for all your financial needs',
        mainHeading: 'Evaluate Your Wealth With Noor Capital',
        btnLabel: 'Learn More',
        img: slide1,
    },
    {
        id: '1',
        description: 'Description',
        mainHeading: 'Item 2',
        btnLabel: 'Learn More',
        img: slide2,
    },
    {
        id: '2',
        description: 'Description',
        mainHeading: 'Item 3',
        btnLabel: 'Learn More',
        img: slide3,
    },
    {
        id: '3',
        description: 'Description',
        mainHeading: 'Item 4',
        btnLabel: 'Learn More',
        img: slide4,
    },
    {
        id: '4',
        description: 'Description',
        mainHeading: 'Item 5',
        btnLabel: 'Learn More',
        img: slide5,
    }
];
export default Slider;

