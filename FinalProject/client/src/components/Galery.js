import { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { AppContext } from "../App";

export const Galery = (props) => {
    const {level} = useContext(AppContext);
    // console.log(level.photos[0]);
    // console.log(typeof(level.photos));
    // console.log(JSON.parse(level.photos))
    return (<Carousel>
                {/* {level.photos.map((elt, index) => {
                    return (<div key={index}>
                    <img src={elt}/>
                    </div>)
                })} */}
            </Carousel>)
}