import { defineNuxtPlugin } from '#app'
import { animate, stagger } from 'motion'

/**
 * 1) A helper that returns the IntersectionObserver callback function
 *    for animating the element as it enters the viewport.
 */
function createObserverCallback(el) {
    return (entries, observer) => {
        const [entry] = entries

        // If element is not in view yet, do nothing
        if (!entry.isIntersecting) return

        // Animate from opacity 0 to 1, and move up from 50px to 0
        setTimeout(() => {
            animate([...el.children], { opacity: [0, 1], y: [50, 0] }, {
                delay: stagger(.15),
                onPlay: () => {
                    // Reveal once we start the animation
                    el.style.visibility = 'visible'
                },
            })
        }, 500)
       

        // Unobserve so this animation only triggers once
        observer.unobserve(el)
    }
}

/**
 * 2) Sets up the Intersection Observer and begins observing the element.
 *    Returns the observer so we can unobserve later.
 */
function setupObserver(el) {
    const observerCallback = createObserverCallback(el)
    const observer = new IntersectionObserver(observerCallback)
    observer.observe(el)
    return observer
}

/**
 * 3) Sets up the hover effect: scale the element slightly on hover,
 *    and revert on unhover. Returns a cleanup function.
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('stagger-fade', {
        mounted(el) {
            // Avoid errors during SSR
            if (typeof window === 'undefined') return

            el.style.visibility = 'hidden'

            // 1. Set up and observe the element for entry animation.
            const observer = setupObserver(el)

            // 2) Store a cleanup function so we can unobserve on unmount
            el._cleanupObserver = () => observer.unobserve(el)
        },

        unmounted(el) {
            // Ensure browser context
            if (typeof window === 'undefined') return

            // Run cleanup
            el._cleanupObserver?.()
        },
    })
})
