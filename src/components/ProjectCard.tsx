import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: Props) {
  return (
    <article className={styles.card} onClick={onClick} tabIndex={0} role="button"
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      {/* Durum badge'i */}
      <div className={styles.header}>
        <span className={`${styles.badge} ${
          project.status === 'completed' ? styles.badgeCompleted : styles.badgeInProgress
        }`}>
          {project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor'}
        </span>
      </div>

      {/* Proje adı + açıklama */}
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.subtitle}>{project.subtitle}</p>

      {/* Teknoloji tag'leri */}
      <div className={styles.tags}>
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className={styles.tag}>{tech}</span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
