import { defineNuxtPlugin } from '#app'
import { animate } from 'motion'

/**
 * 1) A helper that returns the IntersectionObserver callback function
 *    for animating the element as it enters the viewport.
 */
function createObserverCallback(el, index, delay, startDelay) {
    return (entries, observer) => {
        const [entry] = entries

        // If element is not in view yet, do nothing
        if (!entry.isIntersecting) return

        // Animate from opacity 0 to 1, and move up from 25px to 0
        animate(
            el,
            { opacity: [0, 1], y: [25, 0] },
            {
                duration: 0.5,
                // Delay the entire sequence by startDelay, then apply the per-item delay
                delay: startDelay + index * delay,
                easing: 'ease-in-out',
                onPlay: () => {
                    // Reveal once we start the animation
                    el.style.visibility = 'visible'
                },
            }
        )

        // Unobserve so this animation only triggers once
        observer.unobserve(el)
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('sequential-fade', {
        mounted(el, binding) {
            // Avoid errors during SSR
            if (typeof window === 'undefined') return

            // Force the initial style to ensure it's invisible initially
            el.style.opacity = '0'
            el.style.visibility = 'hidden'

            // Extract the index and delay from the directive binding
            // You can also allow the user to override startDelay if you want
            const { index = 0, delay = 0.15, startDelay = 0.25 } = binding.value || {}

            // 2) Create the IntersectionObserver with our custom callback
            const observerCallback = createObserverCallback(el, index, delay, startDelay)
            const observer = new IntersectionObserver(observerCallback)

            // 3) Start observing the element
            observer.observe(el)

            // 4) Store a cleanup function so we can unobserve on unmount
            el._cleanupObserver = () => observer.unobserve(el)
        },

        unmounted(el) {
            // Ensure browser context
            if (typeof window === 'undefined') return

            // Run cleanup if defined
            el._cleanupObserver?.()
        },
    })
})
