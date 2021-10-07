import storage from "./storage"


const SWITCH_PAGE = 'SWITCHPAGE';


let initialState = {
    structureData: storage.structureData.structureMainPageData
}

const structureModuleReducer = (state= initialState, action) => {

    switch (action.type){
        case SWITCH_PAGE:{
            switch(action.id){
                case 0:{
                    return {        
                        ...state,
                        structureData: storage.structureData.structureMainPageData
                        }
                }
                case 1:{
                    return {        
                        ...state,
                        structureData: storage.structureData.structureProceduresPageData
                        }
                }
                case 5:{
                    return {        
                        ...state,
                        structureData: storage.structureData.structureProcedurePage1Data
                        }
                }
                default:
                    return state;
            }
        }
        default:
            return state;
    }
}

export const switchPage = (id) => ({type: SWITCH_PAGE, id: id})


export default structureModuleReducer;