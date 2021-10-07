import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import SliderContainer from "../Slider/SliderContainer"
import StructureModuleContainer from "../StructureModule/StructureModuleContainer"
import s from "./Main.module.css"

const Main = () =>{
    return (
        <div className={s.mainBlock}>
            <Header/>
            <SliderContainer/>
            <StructureModuleContainer/>
            <Footer/>
        </div>
    )
}

export default Main