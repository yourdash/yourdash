import * as React from "react"
import RightClickMenuContext from "./RightClickMenuContext"
import styles from "./RightClickMenuRootContainer.module.scss"
import RightClickMenuItem from "./RightClickMenuItem"

const RightClickMenuRootContainer: React.FC = ({ children }) => {
  const [ position, setPosition ] = React.useState({
    x: 0, y: 0
  })
  const [ visible, setVisible ] = React.useState(false)
  const [ items, setItems ] = React.useState([] as RightClickMenuItem[])

  return (
    <RightClickMenuContext.Provider value={ (x, y, width, height, visible, items) => {
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight

        let resultX = x
        let resultY = y

        if ((x + width) > screenWidth) {
          resultX = screenWidth - width
        }

        if ((y + height) > screenHeight) {
          resultY = screenHeight - height
        }

        setPosition({
          x: resultX,
          y: resultY
        });

        setVisible(visible);
        setItems(items)
      } }
    >
      <div
        style={ {
              display: visible ? "flex" : "none",
              left: position.x,
              top: position.y,
            } }
        className={ styles.component }
      >
        {
            items.map((item, ind) => {
              return <button type="button" onClick={ item.onClick } key={ item.name }> {item.name}</button>
            })
          }
      </div>
      {children}
    </RightClickMenuContext.Provider>
  )
}

export default RightClickMenuRootContainer