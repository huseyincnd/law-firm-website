'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Blog kategorileri
const categories = [
  { id: 1, name: 'Şirketler Hukuku', slug: 'sirketler-hukuku' },
  { id: 2, name: 'Ceza Hukuku', slug: 'ceza-hukuku' },
  { id: 3, name: 'İş Hukuku', slug: 'is-hukuku' },
  { id: 4, name: 'Aile Hukuku', slug: 'aile-hukuku' },
  { id: 5, name: 'Gayrimenkul Hukuku', slug: 'gayrimenkul-hukuku' },
];

// Örnek blog yazıları
const blogPosts = [
  {
    id: 1,
    title: 'Limited Şirket Kuruluşunda Dikkat Edilmesi Gerekenler',
    slug: 'limited-sirket-kurulusunda-dikkat-edilmesi-gerekenler',
    excerpt: 'Limited şirket kuruluşu sürecinde önemli yasal gereklilikler ve pratik öneriler.',
    category: 'Şirketler Hukuku',
    author: 'Av. Mehmet Yılmaz',
    date: '15 Mart 2024',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'İş Sözleşmesi Feshinde İşverenin Hakları',
    slug: 'is-sozlesmesi-feshinde-isverenin-haklari',
    excerpt: 'İş sözleşmesinin feshi sürecinde işverenlerin yasal hakları ve yükümlülükleri.',
    category: 'İş Hukuku',
    author: 'Av. Ayşe Kaya',
    date: '12 Mart 2024',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
    featured: true
  },
  {
    id: 3,
    title: 'Anlaşmalı Boşanma Sürecinde Önemli Noktalar',
    slug: 'anlasmali-bosanma-surecinde-onemli-noktalar',
    excerpt: 'Anlaşmalı boşanma sürecinin aşamaları ve dikkat edilmesi gereken hususlar.',
    category: 'Aile Hukuku',
    author: 'Av. Ali Demir',
    date: '10 Mart 2024',
    readTime: '5 dk',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Kat Karşılığı İnşaat Sözleşmelerinde Riskler',
    slug: 'kat-karsiligi-insaat-sozlesmelerinde-riskler',
    excerpt: 'Kat karşılığı inşaat sözleşmelerinde tarafların hak ve yükümlülükleri.',
    category: 'Gayrimenkul Hukuku',
    author: 'Av. Mehmet Yılmaz',
    date: '8 Mart 2024',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Ceza Yargılamasında Müdafinin Rolü',
    slug: 'ceza-yargilamasinda-mudafinin-rolu',
    excerpt: 'Ceza yargılaması sürecinde müdafinin hak ve yetkileri.',
    category: 'Ceza Hukuku',
    author: 'Av. Ayşe Kaya',
    date: '5 Mart 2024',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80'
  },
];

const BlogPage = () => {
  // Öne çıkan yazıları filtrele
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
          alt="Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Hukuki konularda güncel bilgiler, makaleler ve önemli kararlar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/kategori/${category.slug}`}
                className="px-6 py-3 rounded-xl bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 shadow-sm border border-gray-100"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Öne Çıkan Yazılar</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative h-[400px] rounded-3xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="inline-block px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium mb-4">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center text-gray-200 text-sm">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} okuma</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Son Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-lg bg-red-50 text-red-600 text-sm font-medium mb-4">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} okuma</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hukuki Gelişmelerden Haberdar Olun
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Aylık bültenimize üye olun, güncel hukuki gelişmeleri ve makaleleri kaçırmayın.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Üye Ol
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage; 