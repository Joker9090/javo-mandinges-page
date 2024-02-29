import { Shown } from '@/components/Shown';
import Head from 'next/head'
import React, { useState } from 'react';
import { FilterBar } from '@/components/FilterBar';
import Video from '@/components/video';
export type ItemType = {
  type: "large" | "small" | "banner" | "key-link";
  img?: string;
  text?: string;
  href?: string;
  height?: string;
  clickeable?: boolean;
  showOnlyOnFilter?: boolean;
  title?: string;
  category?: string;
  titleColor?: string;
  textAlign?: string;
  description?: string;
  descriptionColor?: string;
  minHeight?: string;
  mobileHeight?: string;
  mobileMinHeight?: string;
  fontSize?: number,
  video?: string,
  bkg?: string,
  extraClass?: string,
  secondaryImgs?: { src: string, position: string }[],
  secondaryVideos?: string[],
  details: string
}

const text =
  <>
    Hacemos
    <br />
    comuicación
    <br />
    audiovisual
  </>
const _text = text as unknown
const config: ItemType[] = [

  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    clickeable: true,
    img: "/images/img3.jpg",
    minHeight: "400px",
    height: "40vh",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    category: "campañas",
    secondaryImgs: [
      { src: "/images/img3.jpg", position: "top" },
      { src: "/images/img2.jpg", position: "top" },
      { src: "/images/img3.jpg", position: "top" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img4.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "campañas",
    secondaryImgs: [
      { src: "/images/img4.jpg", position: "top" },
      { src: "/images/img2.jpg", position: "top" },
      { src: "/images/img4.jpg", position: "top" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img5.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "identidad",
    secondaryImgs: [
      { src: "/images/img5.jpg", position: "top" },
      { src: "/images/img2.jpg", position: "top" },
      { src: "/images/img5.jpg", position: "top" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img13.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "identidad",
    secondaryImgs: [
      { src: "/images/img13.jpg", position: "top" },
      { src: "/images/img12.jpg", position: "top" },
      { src: "/images/img13.jpg", position: "top" },
    ],
    secondaryVideos: [
      "/videos/banner.mp4",
    ]
  },


  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    minHeight: "400px",
    height: "70vh",
    mobileHeight: "320px",
    mobileMinHeight: "auto",
    fontSize: 70,
    clickeable: false,
    title: _text as string,
    titleColor: "white",
    descriptionColor: "#FF5500",

    description: "diseñamos y desarrollamos proyectos efectivos que potencian relatos y fortalecen marcas",
    textAlign: "left",
    category: "espacios",
    extraClass: "textModule",

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    minHeight: "500px",
    img: "/images/img8.jpg",
    height: "100vh",
    mobileHeight: "720px",
    mobileMinHeight: "auto",
    category: "espacios",
    clickeable: false,
    secondaryImgs: [
      { src: "/images/img8.jpg", position: "top" },
      { src: "/images/img2.jpg", position: "top" },
      { src: "/images/img8.jpg", position: "top" },
    ]

  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    clickeable: true,
    img: "/images/img14.jpg",
    category: "identidad",
    minHeight: "400px",
    height: "40vh",
    titleColor: "white",
    textAlign: "end",
    secondaryImgs: [
      { src: "/images/img14.jpg", position: "top" },
      { src: "/images/img12.jpg", position: "top" },
      { src: "/images/img14.jpg", position: "top" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img11.jpg",
    minHeight: "400px",
    category: "identidad",
    height: "40vh",
    secondaryImgs: [
      { src: "/images/img11.jpg", position: "top" },
      { src: "/images/img12.jpg", position: "top" },
      { src: "/images/img11.jpg", position: "top" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img6.jpg",
    minHeight: "400px",
    category: "nosotros",
    height: "40vh",
    secondaryImgs: [
      { src: "/images/img6.jpg", position: "top" },
      { src: "/images/img2.jpg", position: "top" },
      { src: "/images/img6.jpg", position: "top" },
    ]

  },
  {
    category: "nosotros",
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img7.jpg",
    minHeight: "400px",
    height: "40vh",
    secondaryImgs: [
      { src: "/images/img7.jpg", position: "top" },
      { src: "/images/img2.jpg", position: "top" },
      { src: "/images/img7.jpg", position: "top" },
    ]

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    minHeight: "300px",
    height: "30vh",
    mobileHeight: "420px",
    mobileMinHeight: "auto",
    img: "/images/img10.jpg",
    clickeable: false,
    // title: "LARGE BUT SHORTER",
    category: "campañas",
    showOnlyOnFilter: false,
  },
  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/img9.jpg",
    titleColor: "white",
    textAlign: "end",
    minHeight: "500px",
    height: "50vw",
    clickeable: false,
    showOnlyOnFilter: false,
    category: "identidad",
    extraClass: "proyects"
  },

]

export default function HomePage() {

  const [modalInfo, setModalInfo] = React.useState<ItemType>();

  const [activeFilter, setActiveFilter] = React.useState();

  const BuildSectionComponent = (item: ItemType, index: Number, setModalInfo: Function) => {

    switch (item.type) {
      case "large":
        // IT's THE SAME
        // return <SectionLarge  height={height} type={type} img={img} text={text} key={`SectionLarge-${index}`} />
        return <SectionLarge {...item} setModalInfo={setModalInfo} key={`SectionLarge-${index}`} />
      case "small":
        return <SectionSmall {...item} setModalInfo={setModalInfo} key={`SectionSmall-${index}`} />
      case "banner":
        return <SectionBanner {...item} setModalInfo={setModalInfo} key={`SectionBanner-${index}`} />
      case "key-link":
        return <SectionKeyLink {...item} setModalInfo={setModalInfo} key={`SectionKeyLink-${index}`} />
      default:
        return <></>
    }
  }
  const checkFilter = (item: ItemType) => {
    if (activeFilter) {
      return (item.category === activeFilter)
    } else {
      return (item.showOnlyOnFilter != true)
    }
  }

  React.useEffect(() => {
    const ele = document.querySelector('html')
    if (ele) {
      if (modalInfo) ele.style.overflow = 'hidden'
      else ele.style.overflow = 'auto'
    }
  }, [modalInfo])
  return (
    <>
      <Head>
        <title>Javo Web App</title>
        <meta name="description" content="Generated by Javo Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`stretch`}>
        <Home />
        <Video />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <div className='container-fluid'>
          <div className='row'>
            {config.filter(checkFilter).map((item, index) => (BuildSectionComponent(item, index, setModalInfo)))}
          </div>
        </div>


        {modalInfo && (<Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />)}
        <Footer />
      </main>
    </>
  )
}
export const Home = () => {
  return (
    <div className='Home stretch'>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          <div className='w-fit-content d-flex'>
            <h1 className='f-150 f-helvetica f-heavy mb-0'>
              <span className='ls-n-7'>ai</span>
              <span className="ls-n-2">re</span>
            </h1>
          </div>
          <div className='w-fit-content d-flex flex-column'>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>diseño</b></p>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>audiovisual</b></p>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>comunicación</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}



export const SectionLarge = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    clickeable,
    title,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo,
    fontSize,
    extraClass,
    video
  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vw",
    minHeight: minHeight ? minHeight : "auto",
    display: "flex",

  }

  const styleMobile = {
    backgroundImage: `url(${img})`,
    height: mobileHeight ? mobileHeight : height ? height : "50vw",
    minHeight: mobileMinHeight ? mobileMinHeight : minHeight ? minHeight : "50vw",
    display: "flex"
  }

  const titleStyle = {
    color: titleColor ? titleColor : "black",
    fontSize: fontSize
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "black"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    textShadow: "0px 0px 7px black",

  }
  if (video) {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          <video src="/videos/banner.mp4" autoPlay={true} loop={true} muted={true} className='bannerVideo' id="myVideo">
          </video>
          {title || description ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description && <p className='f-50 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
              </div>
            </div>
          ) : <></>}
        </Shown>
      </div>
    )
  } else {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          <div className='SectionImage d-none d-md-flex' style={style} />
          <div className='SectionImage mobileImage d-flex d-md-none' style={styleMobile} />
          {title || description ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description && <p className='f-50 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
              </div>
            </div>
          ) : <></>}
        </Shown>
      </div>
    )
  }
}

export const SectionSmall = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    clickeable,
    title,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo,

  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vw",
    minHeight: minHeight ? minHeight : "auto",
    display: "flex"
  }

  const styleMobile = {
    backgroundImage: `url(${img})`,
    height: mobileHeight ? mobileHeight : height ? height : "50vw",
    minHeight: mobileMinHeight ? mobileMinHeight : minHeight ? minHeight : "50vw",
    display: "flex"
  }


  const titleStyle = {
    color: titleColor ? titleColor : "black"
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "black"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    textShadow: "0px 0px 7px black",
  }

  return (
    <div className={`Section SectionSmall col-12 col-md-6 p-0 ${clickeable ? "clickeable" : ""}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        <div className='SectionImage d-none d-md-flex' style={style} />
        <div className='SectionImage mobileImage d-flex d-md-none' style={styleMobile} />
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
            </div>
          </div>
        ) : <></>}
      </Shown>
    </div>
  )
}

export const SectionBanner = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    title,
    clickeable,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo
  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vh"
  }

  const titleStyle = {
    color: titleColor ? titleColor : "white"
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "white"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    textShadow: "0px 0px 7px black",
  }

  return (
    <div className='Section SectionBanner col-12' style={style} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
            </div>
          </div>
        ) : <></>}
      </Shown>
    </div>
  )
}

export const SectionKeyLink = ({
  type, href, setModalInfo
}: ItemType & { setModalInfo: Function }) => {
  return (
    <div className='SectionKeyLink' id={href} />
  )
}

export const Footer = () => {
  const content = [
    {
      title: "campañas",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    },
    {
      title: "ciudades",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    }, {
      title: "espacios",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    }, {
      title: "consultorias",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    },
  ]
  const biographies = [
    {
      name: "Javier Cerruti",
      src: "/images/img1.jpg",
      key: "Javier",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi tempore tenetur ab nemo! Facilis totam debitis eos dolor veritatis iusto sapiente earum accusantium ea eligendi exercitationem aut, ducimus consequatur nobis incidunt omnis fuga? Aperiam esse et odit? Minus provident ipsum nulla inventore veniam adipisci sapiente facilis quibusdam qui natus! rabia",
    },
    {
      name: "Gustavo Wald",
      src: "/images/img12.jpeg",
      key: "gustavo",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi tempore tenetur ab nemo! Facilis totam debitis eos dolor veritatis iusto sapiente earum accusantium ea eligendi exercitationem aut, ducimus consequatur nobis incidunt omnis fuga? Aperiam esse et odit? Minus provident ipsum nulla inventore veniam adipisci sapiente facilis quibusdam qui natus! rabia",

    }
  ]
  const [activeBio, setActiveBio] = useState<string>("")
  const [bioText, setBioText] = useState<string>("")
  const [bioName, setBioName] = useState<string>("")
  const handleHover = (bio: string, text: string, name: string) => {
    setActiveBio(bio)
    setBioText(text)
    setBioName(name)
  }
  return (
    <div  id='nosotros' className="footerContainer">
      <div className="titleWrapper">
        <div className="titleContent">
          <p className='title'>
            buscamos
          </p>
        </div>
        <div className="subtitleContent">
          <p className='subTitle'>resolver cada nueva situación <br /> con potencia, buen diseño <br /> y eficacia.  </p>
        </div>
      </div>

      <div className="textsContainer">

        <div className="textContent">
          <div className="textTitle">campañas</div>
          <div className="text">Encaminamos la solucion visual de campañas comerciales y del universo publico, en la dimensión y escala acorde a cada circunstancia</div>
        </div>
        <div className="textContent">
          <div className="textTitle">ciudades</div>
          <div className="text">Abordamos el universo de comunicación visual que la gestión de ciudades requiere; con criterio global y práctico para la gestión y la comunidad.</div>
        </div> <div className="textContent">
          <div className="textTitle">espacios</div>
          <div className="text">Diseñamos espacios expositivos de alto impacto, combinando poder con sutileza. Experiencias sensoriales, bellas y efectivas que perfeccionan relatos y fortalecen marcas.</div>
        </div> <div className="textContent">
          <div className="textTitle">consultoria</div>
          <div className="text">Sabemos orientar, diseñar y optimizar equipos de diseño y producción audiovisual de organizaciones; en la búsqueda de maximizar sus potencialidades.</div>
        </div>

      </div>

      <div className="biographies">
        {biographies.map((b, i) => {
          return (
            <div className="biographie" key={b.key} onMouseEnter={() => handleHover(b.key, b.text, b.key)} onMouseLeave={() => handleHover("", "", "")} >
              <div className={b.key === activeBio || activeBio === "" ? "biographieImg active" : "biographieImg inactive"} style={{ backgroundImage: `url(${b.src})` }} ></div>
              <div className={b.key === activeBio || activeBio === "" ? "biographieName active" : "biographieName"}><p> {b.name} </p>  </div>
            </div>
          )
        })}
        <div className={activeBio !== "" ? "biographieText" : "d-none"}>
          <p className='name'>
            {bioName}:
          </p>
          <p className='text'>
            {bioText}
          </p>
        </div>
      </div>


      <div className="finalContent">
        <div className="left">
          <div className="brand">
            aire
          </div>
          <div className="phrase">
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>diseño</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>audiovisual</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>comunicación</b></p>
          </div>
          <div className="city">
            <p>
              Buenos Aires
            </p>
          </div>
        </div>
        <div className="right">
          <div className="contact">
            xxxxxxxxx@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export const Modal = ({ setModalInfo, modalInfo }: { setModalInfo: Function, modalInfo: ItemType }) => {
  const [active, setActive] = React.useState<Boolean>(false)
  const checkItems = modalInfo.secondaryImgs ? "Graphic" : "Video"
  const [selection, setSelection] = React.useState<"Video" | "Graphic">(checkItems)
  const lastImageChecker = (_index: number) => {
    _index = _index + 1
    const length = modalInfo.secondaryImgs?.length
    if (_index === length) {
      return true
    } else return false
  }
  return (
    <div className='Modal-Wrapper'>
      <div className="modalBody">
        <div className="closer">
          <div className="imgBg" onClick={() => { setModalInfo(undefined) }}>
            <img src="/icons/cruz.png" alt="" />
          </div>
          {modalInfo.secondaryVideos && (
            <div className={`imgBg tabSelector ${selection == "Video" ? "active" : ""}`} onClick={() => setSelection("Video")}>
              <p className='mb-0 px-2  f-32 lh-32'>audioVisual</p>
            </div>
          )}
          {modalInfo.secondaryImgs && (
            <div className={`imgBg tabSelector ${selection == "Graphic" ? "active" : ""}`} onClick={() => setSelection("Graphic")}>
              <p className='mb-0 px-2  f-32 lh-32'>grafica</p>
            </div>
          )}
        </div>
        {selection === "Graphic" && modalInfo.secondaryImgs && (
          <div className='Graphic'>
            <div className="modalImages">
              {modalInfo.secondaryImgs.map((image: { src: string, position: string }, index: number) => {

                return (
                  <img src={image.src} key={index} style={{ objectPosition: image.position }} className={lastImageChecker(index) ? "lastImg" : ""} alt="" />
                )
              })}
            </div>
          </div>
        )}
        {selection === "Video" && modalInfo.secondaryVideos && (
          <div className='Video'>
            <div className="modalImages">
              {modalInfo.secondaryVideos.map((src, index) => {
                return (
                  <video key={index} className="bannerVideo" autoPlay={true} muted loop src={src} typeof="video/mp4"></video>
                )
              })}
            </div>
            {modalInfo.secondaryVideos.length > 2 && (
              <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(true) }}>
                <img src="/icons/chevronup.png" />
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )

}


{/* <div className="modalTitle">
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque.
</p>
</div>
<div className="modalText">
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Porro, necessitatibus voluptates! Atque, dolorem a similique alias
  quisquam consequatur ut dignissimos enim deserunt corrupti suscipit
  placeat eveniet reiciendis inventore natus aliquam, temporibus ratione
  dolor. Iste iusto quisquam ea consectetur similique ipsa laborum obcaecati
  commodi. Atque earum cupiditate tenetur, quibusdam rerum qui?
</p>
</div> */}


// <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(!active) }}>
// <img src="/icons/chevronup.png" alt="" />
// </div>
// <div className="modalTextContainer">

// <div className="title">
//   Lorem ipsum dolor sit amet.
// </div>

// <div className="text">
//   HOLA MUNDO
// </div>
// </div>


// <div className='footer col-12 p-0'>
//   <div className="footerTextHolder">
//     <div className="footerTitle">
//       buscamos
//     </div>
//     <div className="footerText">
//       <p>
//         resolver cada nueva situación
//       </p>
//       <p>
//         con potencia, buen diseño
//       </p>
//       <p>
//         y eficacia.
//       </p>
//     </div>
//   </div>
//   <div className="blockContainer">
//     {content.map((c, i) => {
//       return (
//         <div key={i} className='block'>
//           <div className="blockTitle">
//             <p>{c.title}</p>
//           </div>
//           <div className="blockText">
//             <p>{c.text}</p>
//           </div>
//         </div>
//       )
//     })}
//   </div>
//   <div className="biographies">
//     {biographies.map((b, i) => {
//       return (
//         <>
//           <div key={i} onMouseEnter={() => handleHover(b.key, b.text)} onMouseLeave={() => handleHover("", "")} className="biographie">
//             <div className={b.key === activeBio || activeBio === "" ? "image active" : "image"} style={{ backgroundImage: `url(${b.src})` }}>
//             </div>
//             <div className={b.key === activeBio || activeBio === "" ? "name active" : "name"}>
//               <p>{b.name}</p>
//             </div>
//           </div>
//         </>
//       )
//     })}
//     <div className={activeBio !== "" ? "text active" : "d-none"}>
//       <p>{bioText}</p>

//     </div>
//   </div>
//   <div className="finalContent">
//     <div className="sectionLeft">
//       <div className="brand">
//         <p>aire</p>

//       </div>
//       <div className="texts">

//         <div className='phrase w-fit-content mb-0 phrase d-flex flex-column'>
//           <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 mb-0 c-gray'><b>diseño</b></p>
//           <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 mb-0 c-gray'><b>audiovisual</b></p>
//           <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 mb-0 c-gray'><b>comunicación</b></p>
//         </div>
//         <div className='city' >
//           <p>
//             Buenos Aires
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="sectionRight">
//       <div className="mail">
//         <p>
//           xxxxxxxxx@gamil.com
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
