export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  images: string[];
  status: 'completed' | 'in-progress';
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'strivion',
    title: 'Strivion',
    subtitle: 'Turnuva ve bracket yönetim platformu',
    description:
      'Web ve mobil platformda çalışan, gerçek zamanlı turnuva oluşturma, bracket yönetimi ve canlı skor takibi sunan full-stack uygulama. React ile web arayüzü, React Native ile mobil uygulama geliştirildi. Firebase altyapısı ile anlık veri senkronizasyonu sağlandı. Kullanıcılar turnuva oluşturabilir, katılımcı ekleyebilir ve bracket üzerinden eşleşmeleri yönetebilir.',
    technologies: ['React', 'React Native', 'TypeScript', 'Firebase', 'Expo'],
    images: ['/images/projects/strivion/screenshot-1.png'],
    status: 'completed',
    githubUrl: 'https://github.com/barankaratas',
  },
  {
    id: 'game-dev-journey',
    title: 'Game Dev Journey',
    subtitle: 'Unity ile oyun geliştirme serüveni',
    description:
      'Unity ve C# kullanarak geliştirilen mini oyun koleksiyonu. Asteroid Shooter ile uzay temalı shooter mekanikleri, Match Royal ile match-3 puzzle mekanikleri uygulandı. Her oyun farklı bir konsept ve öğrenme hedefi içeriyor — fizik sistemi, çarpışma algılama, partikül efektleri, skor yönetimi ve UI tasarımı gibi temel oyun geliştirme konuları pratiğe döküldü.',
    technologies: ['Unity', 'C#', 'Game Design'],
    images: ['/images/projects/game-dev/screenshot-1.png'],
    status: 'completed',
    githubUrl: 'https://github.com/barankaratas',
  },
  {
    id: 'carvia',
    title: 'Carvia',
    subtitle: 'Araç kiralama ve risk yönetim uygulaması',
    description:
      'Flutter ve Firebase ile geliştirilen, müşteri güven puanlama sistemi (Trust Score Engine) içeren araç kiralama mobil uygulaması. Clean Architecture ve BLoC pattern ile modüler yapıda tasarlandı. Araç listeleme, filtreleme, rezervasyon oluşturma, favori sistemi, profil yönetimi ve güven puanına göre araç erişim kontrolü özellikleri mevcut. 10 adımlık profesyonel bir roadmap ile geliştirilmektedir.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
    images: ['/images/projects/carvia/screenshot-1.png'],
    status: 'in-progress',
    githubUrl: 'https://github.com/barankaratas',
  },
];
