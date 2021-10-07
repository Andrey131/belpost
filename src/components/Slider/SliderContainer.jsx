
import {connect} from "react-redux";
import Slider from "./Slider";
import {nextSlide, previousSlide} from "../../store/sliderReduser";

let mapStateToProps = (state) => {
    return {
        sliderData: state.sliderModule
    }
}

const SliderContainer = connect(mapStateToProps, {nextSlide, previousSlide})(Slider);

export default SliderContainer;