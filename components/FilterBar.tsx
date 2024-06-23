import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const FilterBar = ({ activeFilter, setActiveFilter }: { activeFilter?: string, setActiveFilter: Function }) => {
    const router = useRouter();

    const items = [
        {
            key: "Digital",
            name: "Entrevistas",
            text: "Identidad es aquello que distingue.<br/>Requiere implementar adecuadas<br/>decisiones estratégicas.",
            text2: "Identidad es aquello<br/>que distingue.<br/>Requiere implementar adecuadas decisiones<br/>estratégicas."
        },
        {
            key: "Cine",
            name: "Teatro",
            text: "Implementamos la solución visual<br/>de campañas del universo comercial,<br/>público y político que estimulan sentidos<br/>y potencian relatos.",
            text2: "Implementamos la solución visual de campañas<br/>del universo comercial, público y político<br/>que estimulan sentidos<br/>y potencian relatos."

        },
        {
            key: "BTS",
            name: "Documental",
            text: "La comunicación visual de ciudades<br/>requiere diseñar experiencias ciudadanas<br/>útiles y eficientes; es lo que sabemos hacer.",
            text2: "La comunicación visual<br/>de ciudades requiere diseñar experiencias ciudadanas útiles<br/>y eficientes;<br/>es lo que sabemos hacer."
        },
        {
            key: "Compol",
            name: "BTS",
            text: "Diseñamos espacios<br/>expositivos de alto impacto<br/>que expresan y fortalecen<br/>la imagen de marca.",
            text2: "Diseñamos espacios<br/>expositivos de alto impacto<br/>que expresan y fortalecen<br/>la imagen de marca."
        },
        {
            key: "Coberturas",
            name: "Contenidos",
            text: "Cada proyecto a desarrollar<br/>es un nuevo desafío que<br/>nos gusta transitar.",
            text2: "Cada proyecto a desarrollar es un nuevo desafío<br/>que nos gusta transitar."
        },
        {
            key: "Coberturas",
            name: "Videoclips",
            text: "Cada proyecto a desarrollar<br/>es un nuevo desafío que<br/>nos gusta transitar.",
            text2: "Cada proyecto a desarrollar es un nuevo desafío<br/>que nos gusta transitar."
        },
        {
            key: "nosotros",
            name: "Nosotros",
            text: "",
            text2: ""
        },
    ]
    

    const [active, setActive] = React.useState(false);
    const [text, setText] = React.useState("")

    const handleClick = (key: string, _text: string, _text2: string) => {
        if (key == activeFilter) {
            setActiveFilter(undefined)
            setActive(false)
            setText("")
        } else {
            setActiveFilter(key)
            setActive(true)
            setText(_text)
            setTimeout(() =>{
                if(window.innerWidth < 768) {
                    setText(_text2)
                    const ele = document.querySelector("#"+key)
                    if(ele) ele.scrollIntoView({ behavior: "smooth" })
                }
            },100)
        }
    }

    const reset = () => {
        setActiveFilter("")
        setText("")
        setActive(false)
    }

    const getLastPositionActive = () => {
        let index = 0;
        items.map((i, _index) => {
            if (i.key == activeFilter) {
                index = _index
            }
        })
        return index
    }
    const [displayButton, setDisplayButton] = useState<boolean>(false)

    React.useEffect(() => {


        window.addEventListener('scroll', function () {
            let scroll = window.scrollY
            console.log(scroll)
            if (scroll > 1150) { setDisplayButton(true) } else {
                setDisplayButton(false)
            }
        });

    }, [])




    return (
        <>
            <div className="container">


                <div id="filter" className={`Filter ${active ? "active" : ""}`}>
                    <div className='row'>
                        <div className='col-12 pushedCol'>
                            <div className=" items">
                                {items.map((i, index) => {
                                    if (i.key !== "nosotros") {
                                        return (
                                            <div className="itemContainer" id={i.key} key={index}>
                                                <div className={`item col-2 col-md-12  ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key, i.text, i.text2)} key={i.key} ><p>{i.name}</p></div>
                                                {i.key == activeFilter && (
                                                    <div className={`text d-flex d-xl-none ${i.key == activeFilter ? "active" : ""}`}>
                                                        <p dangerouslySetInnerHTML={{ __html: text}} />
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <a href="#nosotros" onClick={() => setActiveFilter("")} key={index}>
                                                <div className="itemContainer">
                                                    <div className={`item col-2 col-md-12  ${i.key == activeFilter ? "active" : ""}`} key={i.key} ><p>{i.name}</p></div>
                                                    {i.key == activeFilter && (
                                                        <div className={`text d-flex d-xl-none ${i.key == activeFilter ? "active" : ""}`}>
                                                            <p dangerouslySetInnerHTML={{ __html: text}} />
                                                        </div>
                                                    )}
                                                </div>
                                            </a>
                                        )
                                    }
                                })}
                            </div>
                            <div className=" items">

                                {[...items].filter((i: any, _index: number) => (_index <= getLastPositionActive())).map((i, index) => {
                                    return (
                                        <div className="itemContainer" key={index}>
                                            <div className={`item col-2 col-md-12 opacity-0 h-0 d-none d-lg-flex ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key, i.text, i.text2)} key={i.key} ><p>{i.name}</p></div>
                                            {i.key == activeFilter && (
                                                <div className={`text d-none d-xl-flex ${i.key == activeFilter ? "active" : ""}`}>
                                                    <p dangerouslySetInnerHTML={{ __html: text}} />
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#filter" className={`${displayButton ? "" : "d-none"}`}>
                    <div onClick={() => reset()} className={`resetButton ${active ? "active" : ""}`}>
                        <img src={` ${active ? "icons/reset.png" : "icons/flecha.png"}`} alt="" />
                    </div>
                </a>
            </div>

        </>
    )
}


{/* <div className='items'> */ }
{/* {items.map((item, index) => ( */ }

// <div className={`item ${item.key == activeFilter ? "active" : ""}`} key={item.key} onClick={() => /*router.push("#" + item.key)*/ doFiltering(item.key)}>
{/* <h3>{item.name}</h3> */ }
{/* </div> */ }
// ))}
{/* </div>  */ }