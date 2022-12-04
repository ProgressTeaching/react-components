import React from 'react'
import { capitalize, kebabCase, lowerCase } from 'lodash'

import { SidebarNav } from 'react-components'
import { SidebarNavItems } from './FakeData'
import { Colours } from 'react-components'

const App = () => {
  const colours = new Colours()
  const allColours = colours.getAllColours()
  const colourKeys = Object.keys(allColours)

  const getColourCard = (key, variant = false) => {
    return (
      <div className={`p-3 mb-2 bg-${kebabCase(key)}${ variant ? `--${variant}` : ''}`} key={`${key}_${variant}`} style={{
        border: "solid",
        borderColor: colours.getHexForColour('grey', 'dark')
      }}>
        <h3>{key} {variant}</h3>
        <ul>
          <li>colours.getHexForColour('{key}'{variant ? `, '${variant}'` : ''})</li>
          <li>.bg-{kebabCase(key)}{variant ? `--${variant}` : ''}</li>
          <li>.text-{kebabCase(key)}{variant ? `--${variant}` : ''}</li>
        </ul>
      </div>
    )
  }

  return (
    <>
      <div className="">
        <SidebarNav items={SidebarNavItems} />
      </div>
      <div className="content-wrapper p-4 h-full">
        <Colours />
        <h1>Colours</h1>

        <code>{`import { Colours } from 'react-components';`}</code><br/>
        <code>{`const colours = new Colours()`}</code>

        { colourKeys.map( key => {
          console.log(Object.keys(allColours[key]))

          return (<div className='mt-4' key={key}>
            <h2>{capitalize(lowerCase(key))}</h2>
            {getColourCard(key)}
            {Object.keys(allColours[key]).map(variant => {
              return getColourCard(key, variant)
            })}
          </div>)
        }) }
      </div>
    </>
  )

}

export default App
