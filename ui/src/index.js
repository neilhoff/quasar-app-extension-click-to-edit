import { version } from '../package.json'

// import Component from './components/Component'
import ClickToEdit from './components/ClickToEdit'


export {
  version,
  ClickToEdit
  // Component

}

export default {
  version,

  ClickToEdit,


  install (Vue) {
    Vue.component(ClickToEdit.name, ClickToEdit)

  }
}
