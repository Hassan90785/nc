import React from 'react';
import Steps from './steps';
import Carousel from 'react-multi-carousel';

const Gradient = (props) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <>
<div className="gradientBg">
<div className="container">
 <Carousel responsive={responsive}>

{
    props.item.map((feature)=>(

      <Steps item={feature} />

      ))
}
</Carousel>

 </div>
</div>


        <style jsx>
            {`
            .gradientBg {
                background: rgb(255,255,255);
                background: linear-gradient(90deg, rgba(255,255,255,1) 0%, #f6f6f6 0%, #f6f6f6 61%);
                padding:100px 0 100px 0
            }

            `}
        </style>

        </>
    );
};

export default Gradient;