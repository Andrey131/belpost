import storage from "./storage"

const NEXT_SLIDE = 'NEXTSLIDE';
const PREVIOUS_SLIDE = 'PREVIOUSSLIDE';

let initialState = {
        sliderImages: storage.sliderData.sliderImages,
        currentSlide: 1,
        currentSlideImage: storage.sliderData.sliderImages[0]
    }

const sliderReduser = (state= initialState, action) => {

    switch (action.type){
        case NEXT_SLIDE:{
            if(state.currentSlide===state.sliderImages[state.sliderImages.length-1].id){
            return {
                ...state,
                currentSlide: 1,
                currentSlideImage: state.sliderImages[0]
                }
            }
            else {
            return {
                ...state,
                currentSlide: state.currentSlide+1,
                currentSlideImage: state.sliderImages[state.currentSlide]
                }
            }
        }

        case PREVIOUS_SLIDE:{
            if(state.currentSlide===state.sliderImages[0].id){
            return {
                ...state,
                currentSlide: state.sliderImages[state.sliderImages.length-1].id,
                currentSlideImage: state.sliderImages[state.sliderImages.length-1]
                }
            }
            else {
            return {
                ...state,
                currentSlide: state.currentSlide-1,
                currentSlideImage: state.sliderImages[state.currentSlide-2]
                }
            }
        }


        default:
            return state;
    }
}

export const nextSlide = () => ({type: NEXT_SLIDE})
export const previousSlide = () => ({type: PREVIOUS_SLIDE})


export default sliderReduser;