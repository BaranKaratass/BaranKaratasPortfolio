import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <h1 className={styles.name}>Baran Karataş</h1>
        <p className={styles.subtitle}>Yazılım Geliştirici</p>
        <div className={styles.accentLine} />
        <p className={styles.bio}>
          Mobil uygulama ve web geliştirme alanında projeler üreten,
          sürekli öğrenmeye odaklı bir yazılım mühendisliği öğrencisi.
        </p>
      </div>
    </section>
  )
}

export default Hero
