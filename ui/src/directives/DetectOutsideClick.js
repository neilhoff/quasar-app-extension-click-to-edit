let event = []

const DetectOutsideClick = {
  bind (el, binding) {
    let time = 0
    const handler = binding.value
    // An array of events is required since more than one element on a page can attach this directive
    // This ensures that when you click between elements that have this directive, the correct event listener will be removed in the unbind stage
    event.push({
      el: el,
      click: (e) => {
        if (binding.arg === 'delay') { // Delay is required when v-for is used with the component
          time++
          if (time > 1) {
            if (!(el.contains(e.target) || el === e.target)) {
              handler()
            }
          }
        } else {
          if (!(el.contains(e.target) || el === e.target)) {
            handler()
          }
        }
      }
    })
    document.addEventListener('click', event[event.length - 1].click)
  },
  unbind (el) {
    // Unbind the correct element's (el) event listener
    event = event.filter(item => {
      if (item && item.el === el) {
        document.removeEventListener('click', item.click)
      } else if (item !== undefined) {
        return item
      }
    })
  }
}
export default DetectOutsideClick
