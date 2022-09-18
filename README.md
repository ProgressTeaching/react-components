# react-components

> React components for creating ProgressTeaching frontend apps

[![NPM](https://img.shields.io/npm/v/@progressteaching/react-components.svg)](https://www.npmjs.com/package/@progressteaching/react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @progressteaching/react-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { SidebarNav } from '@progressteaching/react-components'
import '@progressteaching/react-components/dist/index.css'

class Example extends Component {
  render() {
    return <SidebarNav />
  }
}
```

## Local development

Create two terminals.

On one run:
```
$ npm start;
```

On the other:
```
$ cd example && npm start;
```

## License

MIT © [ProgressTeaching](https://github.com/ProgressTeaching)
