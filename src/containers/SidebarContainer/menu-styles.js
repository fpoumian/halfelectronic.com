const generateMenuStyles = barsColor => {
  return {
    bmBurgerButton: {
      position: "absolute",
      width: "18px",
      height: "18px",
      right: "11%",
      top: "36px",
      zIndex: "2"
    },
    bmBurgerBars: {
      background: "#fff"
    },
    bmCrossButton: {
      height: "24px",
      width: "24px"
    },
    bmCross: {
      background: barsColor
    },
    bmMenu: {
      background: "#fff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em"
    },
    bmMorphShape: {
      fill: "#373a47"
    },
    bmItemList: {
      color: barsColor,
      padding: "0.8em",
      fontSize: "0.9rem",
      fontWeight: "500",
      fontFamily: '"Montserrat", Arial, sans-serif'
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      zIndex: 2
    }
  }
}

export default generateMenuStyles
