import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import icon5 from "../images/icon5.png"
import backIcon from "../images/backIcon.png"
import homeIcon from "../images/homeIcon.png"
import sliderImage1 from "../images/sliderImage_1.png"
import sliderImage2 from "../images/sliderImage_2.png"
import sliderImage3 from "../images/sliderImage_3.png"
import sliderBack from "../images/sliderBack.png"
import sliderForward from "../images/sliderForward.png"
import background1 from "../images/background1.png"
import background2 from "../images/background2.png"


let storage = {
    sliderData: {
        sliderImages: [
            {id:1, image: sliderImage1},
            {id:2, image: sliderImage2},
            {id:3, image: sliderImage3}
        ],
        sliderBackIcon: sliderBack,
        sliderForwardIcon: sliderForward
    },
    structureData: {
        structureMainPageData: {
            title: null,
            structureItemData: [
                {id: 1, text: "АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ", icon: icon1},
                {id: 2, text: "РУКОВОДСТВО", icon: icon2},
                {id: 3, text: "ГРАФИК ПРИЁМА", icon: icon3},
                {id: 4, text: "СТРУКТУРА", icon: icon4}
            ],
            homeIcon: null,
            backIcon: null,
            backID: null,
            background: background1
        },
        structureProceduresPageData: {
            title: "Административные процедуры",
            structureItemData: [
                {id: 5, text: "СТРАНИЦА 1", icon: icon5},
                {id: 6, text: "ПРОЦЕДУРА 2", icon: icon5},
                {id: 7, text: "ПРОЦЕДУРА 3", icon: icon5},
                {id: 8, text: "ПРОЦЕДУРА 4", icon: icon5}
            ],
            homeIcon: null,
            backIcon: backIcon,
            backID: 0,
            background: background2
        },
        structureProcedurePage1Data: {
            title: "СТРАНИЦА 1",
            content: "Учитывая ключевые сценарии поведения, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации вывода текущих активов. Но тщательные исследования конкурентов могут быть разоблачены. Современные технологии достигли такого уровня, что граница обучения кадров позволяет оценить значение новых предложений. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: выбранный нами инновационный путь влечет за собой процесс внедрения и модернизации форм воздействия. Есть над чем задуматься: непосредственные участники технического прогресса и по сей день остаются уделом либералов, которые жаждут быть разоблачены. Значимость этих проблем настолько очевидна, что базовый вектор развития однозначно фиксирует необходимость кластеризации усилий. В своём стремлении повысить качество жизни, они забывают, что убеждённость некоторых оппонентов, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для укрепления моральных ценностей. Не следует, однако, забывать, что базовый вектор развития является качественно новой ступенью существующих финансовых и административных условий. Вот вам яркий пример современных тенденций - сложившаяся структура организации предопределяет высокую востребованность инновационных методов управления процессами. Господа, перспективное планирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса существующих финансовых и административных условий. Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Следует отметить, что выбранный нами инновационный путь создаёт предпосылки для инновационных методов управления процессами.",
            homeIcon: homeIcon,
            backIcon: backIcon,
            backID: 1,
            background: background2
        }
    }
}

export default storage
