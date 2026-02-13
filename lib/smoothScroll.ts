/**
 * Smooth Scroll Utility
 * Provides optimized scroll handling for better performance on mobile and desktop
 */

/**
 * Throttle scroll events using requestAnimationFrame
 * This ensures scroll handlers run at most once per frame (60fps)
 */
export const throttleScroll = (callback: () => void) => {
    let ticking = false;

    return () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                callback();
                ticking = false;
            });
            ticking = true;
        }
    };
};

/**
 * Smooth scroll to element with offset
 * Useful for navbar height compensation
 */
export const smoothScrollToElement = (
    elementId: string,
    offset: number = 0,
    behavior: ScrollBehavior = 'smooth'
) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior,
    });
};

/**
 * Get scroll progress (0 to 1) for an element
 */
export const getScrollProgress = (element: HTMLElement | null): number => {
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Calculate how much of the element has been scrolled through
    const scrolled = viewportHeight - rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / (elementHeight + viewportHeight)));

    return progress;
};

/**
 * Debounce function for scroll events
 */
export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};
