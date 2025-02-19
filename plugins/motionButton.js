import { defineNuxtPlugin } from '#app'
import { animate, hover, press } from 'motion'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('motion-button', {
        mounted(el) {
            if (typeof window === 'undefined') return

            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0]
                if (entry.isIntersecting) {
                    animate(el, { scale: [0, 1] }, { ease: 'circInOut', duration: 1 })

                    observer.unobserve(el)
                }
            })

            observer.observe(el)

            const hoverCleanup = hover(el, (element) => {
                animate(element, { scale: 1.1 }, { type: 'spring' })
                return () => animate(element, { scale: 1 }, { type: 'spring' })
            })

            const pressCleanup = press(el, (element) => {
                animate(element, { scale: 1 }, { type: 'spring', stiffness: 1000 })
                return () =>
                    animate(element, { scale: 1 }, { type: 'spring', stiffness: 500 })
            })

            el._motionCleanup = () => {
                hoverCleanup()
                pressCleanup()
                observer.unobserve(el)
            }
        },

        unmounted(el) {
            if (typeof window === 'undefined') return
            el._motionCleanup?.()
        },
    })
})
