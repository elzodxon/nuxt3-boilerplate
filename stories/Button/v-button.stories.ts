import VButton from '../../components/Button/VButton.vue'

export default {
  title: 'Buttons/VButton',
  component: VButton,
  argTypes: {},
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<v-button v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'test Title',
  icon: 'test',
}
