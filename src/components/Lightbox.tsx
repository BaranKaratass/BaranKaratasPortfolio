import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Lightbox.module.css'

interface Props {
  images: string[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Klavye kontrolleri (ESC, Sağ, Sol oklar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, onClose])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  if (images.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* Kapat Butonu */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Kapat">
          <X size={24} />
        </button>

        {/* Çoklu görsel varsa Oklar ve Sayaç göster */}
        {images.length > 1 && (
          <>
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Önceki Görsel"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Sonraki Görsel"
            >
              <ChevronRight size={28} />
            </button>
            
            <div className={styles.counter}>
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}

        {/* Ana Görsel Alanı */}
        <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Galeri görseli ${currentIndex + 1}`}
              className={styles.image}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15 }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
