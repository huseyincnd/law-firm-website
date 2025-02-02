'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Av. Mehmet Yılmaz',
      title: 'Kurucu Ortak',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      specialties: ['Şirketler Hukuku', 'Ticaret Hukuku'],
      education: 'İstanbul Üniversitesi Hukuk Fakültesi',
      experience: '15+ Yıl Deneyim'
    },
    {
      id: 2,
      name: 'Av. Ayşe Kaya',
      title: 'Kıdemli Ortak',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      specialties: ['Ceza Hukuku', 'İş Hukuku'],
      education: 'Ankara Üniversitesi Hukuk Fakültesi',
      experience: '12+ Yıl Deneyim'
    },
    {
      id: 3,
      name: 'Av. Ali Demir',
      title: 'Kıdemli Avukat',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80',
      specialties: ['Gayrimenkul Hukuku', 'İcra ve İflas Hukuku'],
      education: 'Galatasaray Üniversitesi Hukuk Fakültesi',
      experience: '10+ Yıl Deneyim'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Hukuk Büromuzun Kuruluşu' },
    { year: '2012', title: 'İstanbul Şubesinin Açılışı' },
    { year: '2015', title: 'Uluslararası Hukuk Ağına Katılım' },
    { year: '2018', title: 'Türkiye\'nin En İyi Hukuk Büroları Listesine Giriş' },
    { year: '2023', title: '1000+ Başarılı Dava' },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
          alt="Hukuk Büromuz"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Hukuki Çözüm Ortağınız
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              2008 yılından bu yana müvekkillerimize en yüksek standartlarda hukuki danışmanlık ve temsil hizmeti sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Müvekkillerimizin hukuki haklarını en üst düzeyde korumak, karmaşık hukuki süreçleri şeffaf ve anlaşılır bir şekilde yönetmek ve her zaman en iyi sonucu elde etmek için çalışıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin önde gelen hukuk bürolarından biri olarak, uluslararası standartlarda hizmet sunmak ve hukuk alanında yenilikçi çözümler üreten bir kurum olmaya devam etmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kilometre Taşlarımız</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full" />
                    <div className="w-1/2 p-4">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <span className="text-red-600 font-bold">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-gray-900 mt-1">{milestone.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve uzman kadromuzla her türlü hukuki sorununuza çözüm üretiyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.title}</p>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Uzmanlık: </span>
                      {member.specialties.join(', ')}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Eğitim: </span>
                      {member.education}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Deneyim: </span>
                      {member.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Profesyonellik',
                description: 'Her davada en yüksek standartlarda hizmet sunuyoruz.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Güvenilirlik',
                description: 'Müvekkillerimizin haklarını titizlikle koruyoruz.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Şeffaflık',
                description: 'Tüm süreçleri açık ve anlaşılır şekilde yönetiyoruz.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: 'Yenilikçilik',
                description: 'Hukuk alanındaki gelişmeleri yakından takip ediyoruz.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-red-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage; 