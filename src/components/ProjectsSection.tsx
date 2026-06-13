import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.css'

interface Props {
  onCardClick: (projectId: string) => void;
}

function ProjectsSection({ onCardClick }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  /* Scroll durumunu kontrol et */
  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  /* Ok butonlarıyla kaydırma */
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = 340
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.heading}>
        Proje<span className={styles.headingAccent}>lerim</span>
      </h2>

      <div className={styles.scrollWrapper}>
        {/* Sol ok */}
        <button
          className={`${styles.arrowBtn} ${styles.arrowLeft} ${!canScrollLeft ? styles.arrowBtnHidden : ''}`}
          onClick={() => scroll('left')}
          aria-label="Sola kaydır"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Kartlar */}
        <div className={styles.scrollContainer} ref={scrollRef}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onCardClick(project.id)}
            />
          ))}
        </div>

        {/* Sağ ok */}
        <button
          className={`${styles.arrowBtn} ${styles.arrowRight} ${!canScrollRight ? styles.arrowBtnHidden : ''}`}
          onClick={() => scroll('right')}
          aria-label="Sağa kaydır"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default ProjectsSection
