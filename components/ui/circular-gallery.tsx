import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

// Define the type for a single gallery item
export interface GalleryItem {
  id: string | number;
  title: string;
  category: string;
  image?: string;
  video?: string;
  description: string;
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
  /** Multiplier for scroll rotation sensitivity */
  scrollSensitivity?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.03, scrollSensitivity = 4, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [responsiveRadius, setResponsiveRadius] = useState(radius);
    const [isMobile, setIsMobile] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Handle responsive radius and mobile state
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        const mobile = width < 768;
        setIsMobile(mobile);

        if (width < 640) {
          // Mobile: Smaller radius to keep items dense but readable
          setResponsiveRadius(300);
        } else if (width < 1024) {
          setResponsiveRadius(450); // Tablet
        } else {
          setResponsiveRadius(radius); // Desktop
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [radius]);


    // Effect to handle scroll-based rotation
    useEffect(() => {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setIsScrolling(true);
            if (scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
            }

            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
            // Multiply by sensitivity to make it rotate more times over the page length
            const scrollRotation = scrollProgress * 360 * scrollSensitivity;
            setRotation(scrollRotation);

            scrollTimeoutRef.current = setTimeout(() => {
              setIsScrolling(false);
            }, 150);

            ticking = false;
          });

          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [scrollSensitivity]);

    // Effect for auto-rotation when not scrolling
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    // Derived dimensions based on state to avoid hydration mismatch
    // Mobile: 180px width (approx 30% smaller than 260px)
    // Desktop: 320px width
    const cardWidth = isMobile ? 180 : 320;
    const cardHeight = isMobile ? 260 : 450;
    const marginLeft = -cardWidth / 2;
    const marginTop = -cardHeight / 2;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center overflow-visible perspective-container", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full preserve-3d"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: isScrolling ? 'transform 0.1s ease-out' : 'transform 0s linear'
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            // Calculate opacity based on visibility (front-facing items are more opaque)
            // Normalize rotation to 0-360
            const currentRotation = rotation % 360;
            // Calculate where this item is relative to the "front" (0 degrees)
            // Note: Since the container rotates Y, we need to check the net angle
            const netAngle = (itemAngle + currentRotation) % 360;
            // Map 0 -> 1, 180 -> 0.3 opacity
            // Adjusting angle logic for smoother fade:
            // Distance from 0 or 360
            const distFromFront = Math.min(
              Math.abs(netAngle),
              Math.abs(netAngle - 360),
              Math.abs(netAngle + 360)
            );

            const isFront = distFromFront < 90;
            const opacity = Math.max(0.3, 1 - (distFromFront / 180));

            return (
              <div
                key={item.id}
                role="group"
                aria-label={item.title}
                // Using Tailwind for responsive width/height fallback, but style prop overrides for precision
                className="absolute"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `rotateY(${itemAngle}deg) translateZ(${responsiveRadius}px)`,
                  left: '50%',
                  top: '58%', // Visually centered
                  marginLeft: `${marginLeft}px`,
                  marginTop: `${marginTop}px`,
                  opacity: opacity,
                  transition: 'opacity 0.3s ease-out, width 0.3s ease, height 0.3s ease',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border border-white/10 bg-black/40 backdrop-blur-xl">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white">
                    <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary/20 border border-primary/30 rounded-full backdrop-blur-md text-white">
                      {item.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display uppercase leading-[0.85] mb-2 tracking-tighter italic">{item.title}</h2>
                    <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest opacity-40 line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };