import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.css'

interface Props {
  onCardClick: (projectId: string) => void;
}

function ProjectsSection({ onCardClick }: Props) {
  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.heading}>
        Proje<span className={styles.headingAccent}>lerim</span>
      </h2>

      <div className={styles.gridContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onCardClick(project.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
