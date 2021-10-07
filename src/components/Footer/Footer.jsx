import s from "./Footer.module.css"
import footerMailLigo from "../../images/footerMailLigo.png"
import footerTehnoSkyLogo from "../../images/footerTehnoSkyLogo.png"

const Footer = () =>{
    return (
        <div className={s.footer}>
            <section>
                <a style={{textAlign: "right"}}>Национальный оператор почтовой<br/> связи Республики Беларусь</a>
                <img src={footerMailLigo} width={150} height={53}/>
                <a style={{textAlign: "left"}}>Покупайте белорусские товары<br/> на shop.belpost.by</a>
            </section>
            <section>
                <a>Разработано компанией</a>
                <img src={footerTehnoSkyLogo} width={75} height={17}/>
                <a>High-tech.by</a>
            </section>
            
        </div>
    )
}

export default Footer