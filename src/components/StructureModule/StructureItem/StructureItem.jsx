import s from "./StructureItem.module.css"



const StructureItem = (props) =>{

    return (
        <div onClick={()=>props.switchPage(props.id)} className={s.structureItem}>
            <a>{props.heading}</a>
            <img src={props.icon}/>
        </div>
    )
}

export default StructureItem