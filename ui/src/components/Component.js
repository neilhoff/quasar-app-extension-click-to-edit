import { QBadge } from 'quasar'

export default {
  name: 'ClickToEdit',

  render (h) {
    return h(QBadge, {
      staticClass: 'ClickToEdit',
      props: {
        label: 'ClickToEdit'
      }
    })
  }
}
