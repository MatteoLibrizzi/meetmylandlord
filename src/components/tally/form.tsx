"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function TallyContactForm() {
  useEffect(() => {
    // Load Tally script if it hasn't been loaded yet
    const loadTallyScript = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
      if (!existingScript) {
        const script = document.createElement("script")
        script.src = "https://tally.so/widgets/embed.js"
        script.onload = initTally
        script.onerror = initTally
        document.body.appendChild(script)
      } else {
        initTally()
      }
    }

    // Initialize Tally embeds
    const initTally = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds()
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          const element = iframe as HTMLIFrameElement
          if (element.dataset.tallySrc) {
            element.src = element.dataset.tallySrc
          }
        })
      }
    }

    loadTallyScript()
  }, [])

  return (
    <div className="w-full">
      <iframe
        data-tally-src="https://tally.so/embed/31N0Bp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact form"
      ></iframe>
    </div>
  )
}

