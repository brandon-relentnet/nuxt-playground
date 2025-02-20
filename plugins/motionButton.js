import { defineNuxtPlugin } from '#app'
import { animate, hover, press } from 'motion'

/**
 * 1) Creates the Intersection Observer callback
 *    for animating the element scale-in on first view.
 */
function createObserverCallback(el) {
    return (entries, observer) => {
        const [entry] = entries
        if (!entry.isIntersecting) return

        // Animate the element from scale 0 to 1
        setTimeout(() => {
            animate(el, { scale: [0, 1] }, {
                ease: 'circInOut',
                duration: 1,
                onPlay: () => {
                    // Reveal once we start the animation
                    el.style.visibility = 'visible'
                },
            })
        }, 100)

        // Unobserve so it won't trigger again
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
function setupHover(el) {
    return hover(el, (element) => {
        // On hover
        animate(element, { scale: 1.1 }, { type: 'spring' })
        // On unhover
        return () => animate(element, { scale: 1 }, { type: 'spring' })
    })
}

/**
 * 4) Sets up the press effect: scale down on press,
 *    revert when pressing stops. Returns a cleanup function.
 */
function setupPress(el) {
    return press(el, (element) => {
        // On press
        animate(element, { scale: 1 }, { type: 'spring', stiffness: 1000 })
        // On press end
        return () =>
            animate(element, { scale: 1 }, { type: 'spring', stiffness: 500 })
    })
}

/**
 * 5) Sets up the hover effect: scale the element slightly on hover,
 *    and revert on unhover. Returns a cleanup function.
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('motion-button', {
        mounted(el) {
            // Ensure we only run in the browser (avoid SSR errors).
            if (typeof window === 'undefined') return

            // Force the initial style to ensure it's invisible initially
            el.style.tranform = 'scale(0)'
            el.style.visibility = 'hidden'

            // 1. Set up and observe the element for entry animation.
            const observer = setupObserver(el)

            // 2. Set up hover effect and store its cleanup.
            const hoverCleanup = setupHover(el)

            // 3. Set up press effect and store its cleanup.
            const pressCleanup = setupPress(el)

            // Combine everything into a single cleanup method
            el._motionCleanup = () => {
                hoverCleanup()
                pressCleanup()
                observer.unobserve(el)
            }
        },

        unmounted(el) {
            if (typeof window === 'undefined') return
            // Run our cleanup if it exists.
            el._motionCleanup?.()
        },
    })
})
