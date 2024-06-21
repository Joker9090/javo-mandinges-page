import React from "react";

export enum ShownToggledEnum { "INACTIVE", "SHOW", "INSHOW", "HIDE" }

export const Shown = ({ startDirectly, onChange, partiallyVisible = false, toggled = ShownToggledEnum.INACTIVE, delay = 0, children, extraClass = "" }: { startDirectly?: boolean, onChange?: Function, partiallyVisible?: boolean, toggled?: ShownToggledEnum, delay?: number, extraClass?: string, children: JSX.Element | JSX.Element[] }) => {
  const [animationStart, setAnimationStart] = React.useState(false)
  const [animationInShow, setAnimationInShow] = React.useState(false)
  const [detected, setDetected] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const detectComponentInViewPort = () => {
    if (ref.current) {
      if (!detected) {
        const r = ref.current;
        const { top, bottom } = r.getBoundingClientRect();
        const { innerHeight } = window;
        const result = partiallyVisible
          ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight))
          : top >= 0 && bottom <= innerHeight;
        if (result) {
          setDetected(true)
          setTimeout(() => {
            window.removeEventListener("scroll", detectComponentInViewPort);
            setAnimationStart(true)
          }, delay)
        }
      }
    }
  }

  React.useEffect(() => {
    if (toggled == ShownToggledEnum.INACTIVE) {
      if (startDirectly) {
        setAnimationStart(true)
      } else {
        window.addEventListener("scroll", detectComponentInViewPort);
        detectComponentInViewPort()
        return () => {
          window.removeEventListener("scroll", detectComponentInViewPort);
        }
      }
    }
  }, [])

  React.useEffect(() => {
    if (toggled == ShownToggledEnum.HIDE) {
      setAnimationStart(false)
      setAnimationInShow(false)
    }
    if (toggled == ShownToggledEnum.INSHOW) {
      setAnimationStart(false)
      setAnimationInShow(true)
    }
    if (toggled == ShownToggledEnum.SHOW) {
      setAnimationStart(true)
      setAnimationInShow(false)

    }
  }, [toggled])

  React.useEffect(() => {
    onChange && onChange(animationStart)
  }, [animationStart])
  return (
    <div ref={ref} className={`Shown ${extraClass} ${animationInShow ? "inshown-start" : ""} ${animationStart ? "shown-start" : ""} ${toggled != ShownToggledEnum.INACTIVE ? "toggled" : ""}`}>
      {children}
    </div>
  )
}