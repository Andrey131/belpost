import {connect} from "react-redux";
import StructureModule from "./StructureModule";
import {switchPage} from "../../store/structureModuleReduser";

let mapStateToProps = (state) => {
    return {
        structureData: state.structureModule.structureData
    }
}

const StructureModuleContainer = connect(mapStateToProps, {switchPage})(StructureModule);

export default StructureModuleContainer;