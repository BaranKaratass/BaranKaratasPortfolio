import { useState, useCallback } from 'react'
import './styles/globals.css'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import ProjectModal from './components/ProjectModal'
import { projects } from './data/projects'

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId) ?? null
    : null

  const handleCardClick = useCallback((projectId: string) => {
    setSelectedProjectId(projectId)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProjectId(null)
  }, [])

  return (
    <div className="app">
      <Hero />
      <ProjectsSection onCardClick={handleCardClick} />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}

export default App
