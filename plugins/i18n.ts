import { createI18n } from 'vue-i18n'
import uz from '@/i18n/uz.json'

const messages = {
  uz,
}
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'uz',
    messages,
  })

  vueApp.use(i18n)
})
