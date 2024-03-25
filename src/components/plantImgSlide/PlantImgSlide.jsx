
import { useState, useEffect } from "react";
import '../plantImgSlide/plantImageSlide.css'
import arrowBtn from '../../images/arrow-button.png'


function PlantImgSlide({ images }) {
    console.log('images', images);

    const [index, setIndex] = useState(0);
    const delay = 5000 //Delay between slides in milliseconds 
    let intervalId;

    const handlePrevious = () => {
        const newIndex = index - 1;
        //if newIndex is less than 0, it means we're at the beginning of the array, so we want to set the index to the last image in the array. images.length - 1 gives us the index of the last element in the array.
        setIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    };
    // start the autoplay functionality when the component mounts and clean up when the component unmounts
    useEffect(() => {
        // Start autoplay when the component mounts
        intervalId = setInterval(handleNext, delay); //delay

        // Clear the interval when the component unmounts, stop the autoplay
        return () => clearInterval(intervalId);
    }, [index, delay]); // Include index and delay in the dependency array


    return (
        <>
            <div className="carousel-container">

                <button onClick={handlePrevious} className="carousel-button">
                    <img src={arrowBtn} alt="" style={{ width: '30px', height: '30px', transform: 'scaleX(-1)' }} />
                </button>

                <div className="image-slide">
                    {images && images.length > 0 && (
                        <div>
                            <img src={`${images[index].url.m}`} alt="" />
                        </div>
                    )}
                </div>

                <button onClick={handleNext} className="carousel-button">
                    <img src={arrowBtn} alt="" style={{ width: '30px', height: '30px' }} />
                </button>

            </div>
        </>


    )
}

export default PlantImgSlide