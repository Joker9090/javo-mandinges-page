import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react';


export type ItemType = {
  type: "large" | "small" | "banner" | "key-link";
  img?: string;
  text?: string;
  href?: string;
  height?: string;
  title?: string;
  titleColor?: string;
  textAlign?: string;
  description?: string;
  descriptionColor?: string;
  minHeight?: string;
  mobileHeight?: string;
  mobileMinHeight?: string;
}

const config: ItemType[] = [
  
  {
    type: "large",
    img: "/images/1.png",
    minHeight: "400px",
    height: "40vh",
    mobileHeight: "320px",
    mobileMinHeight: "auto",
  },
  {
    type: "key-link",
    href: "campanas",
  },
  {
    type: "small",
    img: "/images/7.png",
    minHeight: "400px",
    height: "40vh",
    title: "Lorem Ipsum",
    titleColor: "white",
    textAlign: "end",
  },
  {
    type: "small",
    img: "/images/8.png",
    minHeight: "400px",
    height: "40vh"

  },
  {
    type: "small",
    img: "/images/2.png",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    img: "/images/3.png",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "key-link",
    href: "identidad",
  },
  {
    type: "banner",
    title: "Lorem Ipsum",
    titleColor: "white",
    description: "Lorem Ipsum is simply dummy text.",
    descriptionColor: "#c0c0c0",
    textAlign: "center",
    height: "50vh",
  },
  {
    type: "large",
    img: "/images/img004.png",
    minHeight: "400px",
    height: "50vh",
    title: "Lorem Ipsum",
    titleColor: "white",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    descriptionColor: "#c0c0c0",
    textAlign: "end",
  },
  {
    type: "key-link",
    href: "espacios",
  },
  {
    type: "small",
    img: "/images/5.png",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    img: "/images/6.png",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    img: "/images/2.png",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    img: "/images/3.png",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "key-link",
    href: "popurri",
  },
  {
    type: "large",
    img: "/images/img006.png",
    minHeight: "400px",
    height: "30vw"
  },
  {
    type: "key-link",
    href: "nosotros",
  },
  {
    type: "large",
    img: "/images/img007.png",
    minHeight: "400px",
    height: "50vw"
  },
]

export default function HomePage() {

  const BuildSectionComponent = (item: ItemType, index: Number) => {

    switch (item.type) {
      case "large":
        // IT's THE SAME
        // return <SectionLarge  height={height} type={type} img={img} text={text} key={`SectionLarge-${index}`} />
        return <SectionLarge {...item} key={`SectionLarge-${index}`} />
      case "small":
        return <SectionSmall {...item} key={`SectionSmall-${index}`} />
      case "banner":
        return <SectionBanner {...item} key={`SectionBanner-${index}`} />
      case "key-link":
          return <SectionKeyLink {...item} key={`SectionKeyLink-${index}`} />
      default:
        return <></>
    }
  }

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
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            {config.map((item, index) => BuildSectionComponent(item, index))}
          </div>
        </div>
      </main>
    </>
  )
}

export const Header = () => {
  const router = useRouter();

  const items = [
    {
      key: "campanas",
      name: "Campañas"
    },
    {
      key: "identidad",
      name: "Identidad"
    },
    {
      key: "espacios",
      name: "Espacios"
    },
    {
      key: "popurri",
      name: "Popurri"
    },
    {
      key: "nosotros",
      name: "Nosotros"
    },
  ]

  const [active, setActive] = React.useState(false);

  return (
    <div className={`Header ${active ? "active" : ""}`}>
      {!active ? (
        <div className='open-icon' onClick={() => setActive(true)}><p>O</p></div>
      ) : (
        <div className='close-icon' onClick={() => setActive(false)}><p>X</p></div>
      )}
      <div className='items'>
        {items.map((item, index) => (
          <div className='item' key={item.key} onClick={() => router.push("#"+item.key)}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
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
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>comunicacion</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}



export const SectionLarge = ({
  text,
  type,
  img,
  height,
  title,
  titleColor,
  textAlign,
  description,
  descriptionColor,
  minHeight,
  mobileHeight,
  mobileMinHeight,
}: ItemType) => {

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
    <div className='Section SectionLarge col-12 p-0'>
      <div className='SectionImage d-none d-md-flex' style={style} />
      <div className='SectionImage d-flex d-md-none' style={styleMobile} />
      {title || description ? (
        <div className='SectionText'>
          <div className='SectionTextHolder' style={textStyle}>
            {title && <p className='f-50 lh-48' style={titleStyle}><b>{title}</b></p>}
            {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
          </div>
        </div>
      ) : <></>}
    </div>
  )
}

export const SectionSmall = ({
  text,
  type,
  img,
  height,
  title,
  titleColor,
  textAlign,
  description,
  descriptionColor,
  minHeight,
  mobileHeight,
  mobileMinHeight,
}: ItemType) => {

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
    <div className='Section SectionSmall col-12 col-md-6 p-0'>
      <div className='SectionImage d-none d-md-flex' style={style} />
      <div className='SectionImage d-flex d-md-none' style={styleMobile} />
      {title || description ? (
        <div className='SectionText'>
          <div className='SectionTextHolder' style={textStyle}>
            {title && <p className='f-50 lh-48' style={titleStyle}><b>{title}</b></p>}
            {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
          </div>
        </div>
      ) : <></>}
    </div>
  )
}

export const SectionBanner = ({
  text,
  type,
  img,
  height,
  title,
  titleColor,
  textAlign,
  description,
  descriptionColor,
  minHeight,
  mobileHeight,
  mobileMinHeight,
}: ItemType) => {

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vh"
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
    <div className='Section SectionBanner col-12' style={style}>
      {title || description ? (
        <div className='SectionText'>
          <div className='SectionTextHolder' style={textStyle}>
            {title && <p className='f-50 lh-48' style={titleStyle}><b>{title}</b></p>}
            {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
          </div>
        </div>
      ) : <></>}
    </div>
  )
}

export const SectionKeyLink = ({
  type,href,
}: ItemType) => {
  return (
    <div className='SectionKeyLink' id={href} />
  )
}