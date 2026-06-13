import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import styles from './ProjectModal.module.css'

interface Props {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: Props) {
  /* ESC tuşu ile kapatma */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.backdrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className={styles.content}>
              {/* Üst kısım: başlık + kapat */}
              <div className={styles.header}>
                <div className={styles.headerLeft}>
                  <h2 className={styles.title}>{project.title}</h2>
                  <span className={`${styles.badge} ${
                    project.status === 'completed' ? styles.badgeCompleted : styles.badgeInProgress
                  }`}>
                    {project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor'}
                  </span>
                </div>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Kapat">
                  <X size={18} />
                </button>
              </div>

              {/* Açıklama */}
              <p className={styles.description}>{project.description}</p>

              {/* Teknolojiler */}
              <div className={styles.techSection}>
                <h3>Kullanılan Teknolojiler</h3>
                <div className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Görsel galerisi */}
              <div className={styles.gallerySection}>
                <h3>Görseller</h3>
                {project.images.length > 0 ? (
                  <div className={styles.gallery}>
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} görsel ${i + 1}`}
                        className={styles.galleryImage}
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : (
                  <div className={styles.noImages}>
                    Görseller yakında eklenecek
                  </div>
                )}
              </div>

              {/* GitHub butonu */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                >
                  <ExternalLink size={16} />
                  GitHub'da Görüntüle
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
