import s from "./Slider.module.css"
import sliderBack from "../../images/sliderBack.png"
import sliderForward from "../../images/sliderForward.png"

const Slider = (props) =>{
    return (
        <div className={s.sliderBody}>
            <img className={s.sliderBack} onClick={()=>props.previousSlide()} src={sliderBack}/>
            <div className={s.sliderImage}><img src={props.sliderData.currentSlideImage.image}/></div>
            <img className={s.sliderForward} onClick={()=>props.nextSlide()} src={sliderForward}/>
        </div>
    )
}

export default Slider