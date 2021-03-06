import Routable from '../../mixins/routable'

export default {
  name: 'v-breadcrumbs-item',

  mixins: [Routable],

  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'breadcrumbs__item--disabled'
    }
  },

  computed: {
    classes () {
      return {
        'breadcrumbs__item': true,
        [this.activeClass]: this.disabled
      }
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()

    return h('li', [
      h(tag, data, this.$slots.default)
    ])
  }
}
