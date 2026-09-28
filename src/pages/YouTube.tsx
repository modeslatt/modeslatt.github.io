import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { videos } from '@/data/videos'
import { SectionHeading } from '@/components/ui/SectionHeading'

function getEmbedUrl(url: string): string {
  const videoId = new URL(url).searchParams.get('v')
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function YouTube() {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null)

  return (
    <div>
      <SectionHeading command="ls ./youtube --sort=date" comment={`${videos.length} videos`} />

      <div className="grid gap-4 sm:grid-cols-2">
        {videos.map((video) => {
          const isOpen = openVideoId === video.id

          return (
            <div key={video.id} className="border border-term-border bg-term-bg-alt/40">
              <div className="relative aspect-video bg-term-bg-alt">
                {isOpen ? (
                  <>
                    <iframe
                      src={getEmbedUrl(video.url)}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                    <button
                      onClick={() => setOpenVideoId(null)}
                      aria-label="Close video"
                      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center bg-term-bg text-term-white"
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setOpenVideoId(video.id)}
                    aria-label={`Play ${video.title}`}
                    className="group relative block h-full w-full"
                  >
                    <img src={video.thumbnail} alt="" className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-term-green bg-term-bg/80 text-term-green">
                        <Play size={18} />
                      </span>
                    </span>
                    <span className="absolute bottom-2 right-2 bg-term-bg/90 px-1.5 py-0.5 text-xs text-term-white">
                      {video.duration}
                    </span>
                  </button>
                )}
              </div>

              <div className="p-3">
                <p className="text-sm text-term-white">{video.title}</p>
                <p className="mt-1 text-xs text-term-gray-dim">{formatDate(video.date)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
