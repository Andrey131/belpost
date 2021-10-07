import React from "react";
import {connect} from "react-redux";
import StructureItem from "./StructureItem";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const StructureItemContainer = connect(mapStateToProps, {})(StructureItem);

export default StructureItemContainer;