import s from "./StructureModule.module.css"
import icon1 from "../../images/icon1.png"
import StructureItem from "./StructureItem/StructureItem"

const StructureModule = (props) =>{

    
    return (
        <div className={s.structure} style={{backgroundImage: `url(${props.structureData.background})`}}>
            <div className={s.structureHead}>
                    {props.structureData.homeIcon
                    ?<img className={s.homeIcon} onClick={()=>props.switchPage(0)} src={props.structureData.homeIcon}/>
                    :<div className={s.homeIcon}></div>}
                    {props.structureData.title
                    ?<div className={s.title}>{props.structureData.title}</div>
                    :<></>}
                    {props.structureData.backIcon
                    ?<img className={s.backIcon} onClick={()=>props.switchPage(props.structureData.backID)} src={props.structureData.backIcon}/>
                    :<></>}
                </div>
            <div className={s.structureBody}>
                
                {props.structureData.structureItemData
                ?props.structureData.structureItemData.map(item=>
                        <StructureItem switchPage={props.switchPage} id={item.id} 
                                        heading={item.text} icon={item.icon}/>
                        )
                :<div className={s.content}>{props.structureData.content}</div>
                }
            </div>
        </div>
    )
}

export default StructureModule