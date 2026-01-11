import { useEffect, useRef } from 'react'
import { youtubeShorts } from '../../data/youtubeShorts'

const Reels = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const media = window.matchMedia('(max-width: 767px)')
    const centerThirdCard = () => {
      if (!media.matches) return
      const cards = scroller.querySelectorAll<HTMLElement>('[data-reel-card]')
      if (cards.length < 3) return
      const target = cards[2]
      const left = target.offsetLeft - (scroller.clientWidth - target.offsetWidth) / 2
      scroller.scrollTo({ left, behavior: 'auto' })
    }

    const raf = requestAnimationFrame(centerThirdCard)
    if (media.addEventListener) {
      media.addEventListener('change', centerThirdCard)
      return () => {
        cancelAnimationFrame(raf)
        media.removeEventListener('change', centerThirdCard)
      }
    }

    media.addListener(centerThirdCard)
    return () => {
      cancelAnimationFrame(raf)
      media.removeListener(centerThirdCard)
    }
  }, [])

  const getYoutubeId = (url: string) => {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/i)
    if (shortsMatch) return shortsMatch[1]

    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{6,})/)
    if (watchMatch) return watchMatch[1]

    const shortLinkMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/i)
    if (shortLinkMatch) return shortLinkMatch[1]

    return ''
  }

  const scrollByCard = (direction: 'left' | 'right') => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector<HTMLElement>('[data-reel-card]')
    const styles = window.getComputedStyle(scroller)
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
    const shift = card ? card.offsetWidth + gap : scroller.clientWidth * 0.85
    scroller.scrollBy({
      left: direction === 'left' ? -shift : shift,
      behavior: 'smooth',
    })
  }

  return (
    <section className='mt-18 mb-18 md:mt-30 md:mb-30'>
      <div className='rounded-4xl  px-4 py-10 md:px-8 md:py-12'>
        <div className='text-center'>
          <p className='text-primary font-bold text-[14px] mb-1.5 uppercase tracking-widest'>
            Työntekijöiden suosittelemat
          </p>
          <h2 className='text-primary font-bold text-4xl'>Siivousvinkit</h2>
        </div>
        <div className='relative mt-8'>
          <button
            type='button'
            onClick={() => scrollByCard('left')}
            className='absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white sm:h-10 sm:w-10 md:-left-6'
            aria-label='Scroll reels left'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M15 6L9 12L15 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            type='button'
            onClick={() => scrollByCard('right')}
            className='absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white sm:h-10 sm:w-10 md:-right-6'
            aria-label='Scroll reels right'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M9 6L15 12L9 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div
            ref={scrollerRef}
            className='flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 sm:px-8 md:px-10 scroll-px-6 sm:scroll-px-8 md:scroll-px-10 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
          >
            {youtubeShorts.map((reel) => {
              const videoId = getYoutubeId(reel.videoUrl)
              return (
                <div
                  key={reel.id}
                  data-reel-card
                  className='snap-center md:snap-start shrink-0 w-[72vw] max-w-[280px] sm:w-[60vw] sm:max-w-[320px] md:w-auto md:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-32px)/3)] xl:basis-[calc((100%-48px)/4)]'
                >
                  <div className='relative aspect-9/16 overflow-hidden rounded-2xl border border-secondary bg-background'>
                    {videoId ? (
                      <iframe
                        title={reel.title}
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
                        className='absolute inset-0 h-full w-full'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                        loading='lazy'
                      />
                    ) : (
                      <div className='absolute inset-0 flex items-center justify-center bg-secondary text-xs text-light_gray'>
                        Invalid YouTube URL
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reels
