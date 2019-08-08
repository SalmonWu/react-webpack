import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Index from '../index/index'
window.$ = $
window.jQuery = $
global.$ = $;

ReactDOM.render(<Index />, document.getElementById('root'))