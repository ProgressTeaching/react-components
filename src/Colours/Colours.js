import * as React from 'react'
import { kebabCase } from 'lodash';
import { ColourList } from './ColoursList'

class Colours extends React.Component {
  getAllColours() {
    return ColourList
  }

  getHexForColour(colour, variant = "default") {
    return ColourList[colour][variant] ?? ColourList[colour]["default"]
  }

  render() {
    const colours = this.getAllColours()
    let styles = []

    Object.keys(colours).forEach( key => {
      styles.push(`.bg-${ kebabCase(key) } { background-color: ${colours[key].default} !important; }`)
      styles.push(`.text-${ kebabCase(key) } { color: ${colours[key].default} !important; }`)

      Object.keys(colours[key]).forEach(variant => {
        styles.push(`.bg-${ kebabCase(key) }--${variant} { background-color: ${colours[key][variant]} !important; }`)
        styles.push(`.text-${ kebabCase(key) }--${variant} { color: ${colours[key][variant]} !important; }`)
      })
    })

    return (
      <style>{styles.join(' ')}</style>
    )
  }
}

export default Colours
