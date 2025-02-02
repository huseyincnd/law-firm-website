'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type BaseSection = {
  type: 'paragraph' | 'subheading' | 'list' | 'quote' | 'conclusion';
};

type TextSection = BaseSection & {
  type: 'paragraph' | 'subheading' | 'quote' | 'conclusion';
  content: string;
};

type ListSection = BaseSection & {
  type: 'list';
  items: string[];
};

type ContentSection = TextSection | ListSection;

type BlogPost = {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: ContentSection[];
};

type BlogPosts = {
  [key: string]: BlogPost;
};

// Blog yazıları veritabanı
const blogPostsContent: BlogPosts = {
  'limited-sirket-kurulusunda-dikkat-edilmesi-gerekenler': {
    title: 'Limited Şirket Kuruluşunda Dikkat Edilmesi Gerekenler',
    category: 'Şirketler Hukuku',
    author: 'Av. Mehmet Yılmaz',
    date: '15 Mart 2024',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'Limited şirket kuruluşu, Türk ticaret hayatının en yaygın şirket türlerinden biridir. Bu yazımızda, limited şirket kuruluşunda dikkat edilmesi gereken önemli noktaları detaylı olarak ele alacağız.'
      },
      {
        type: 'subheading',
        content: '1. Şirket Sözleşmesinin Hazırlanması'
      },
      {
        type: 'paragraph',
        content: 'Limited şirket kuruluşunun ilk ve en önemli adımı, şirket sözleşmesinin hazırlanmasıdır. Sözleşmede bulunması gereken zorunlu unsurlar şunlardır:'
      },
      {
        type: 'list',
        items: [
          'Şirketin ticaret unvanı ve merkezi',
          'Esaslı noktaları belirtilmiş ve tanımlanmış şekilde şirketin işletme konusu',
          'Şirketin sermayesi ile ortakların sermaye payları',
          'Müdürlerin yetkileri ve temsil şekli'
        ]
      },
      {
        type: 'subheading',
        content: '2. Sermaye ve Pay Yapısı'
      },
      {
        type: 'paragraph',
        content: "Limited şirketlerde asgari sermaye miktarı 10.000 TL'dir. Sermayenin tamamının taahhüt edilmesi zorunludur. Nakdi sermayenin en az %25'inin tescilden önce ödenmesi gerekmektedir."
      },
      {
        type: 'quote',
        content: 'Sermaye paylarının devredilebilirliği, şirket sözleşmesinde aksi öngörülmemişse, ortaklar genel kurulunun onayına bağlıdır.'
      },
      {
        type: 'subheading',
        content: '3. Şirket Organlarının Oluşturulması'
      },
      {
        type: 'paragraph',
        content: 'Limited şirketlerde zorunlu organlar müdürler ve ortaklar genel kuruludur. Müdürler, şirketi temsil ve ilzama yetkilidir. En az bir ortağın, şirketi yönetim hakkının ve temsil yetkisinin bulunması gerekmektedir.'
      },
      {
        type: 'list',
        items: [
          'Müdürlerin yetki sınırlarının belirlenmesi',
          'Temsil yetkisinin kapsamı',
          'Genel kurul toplantı ve karar nisapları',
          'Oy hakları ve kullanımı'
        ]
      },
      {
        type: 'subheading',
        content: '4. Vergi ve Sosyal Güvenlik Yükümlülükleri'
      },
      {
        type: 'paragraph',
        content: 'Şirket kuruluşu sonrasında vergi dairesi ve sosyal güvenlik kurumu nezdinde yapılması gereken işlemler bulunmaktadır. Bunlar:'
      },
      {
        type: 'list',
        items: [
          'Vergi levhası alınması',
          'Defter tasdiki',
          'SGK işyeri dosyası açılması',
          'İşe giriş bildirgelerinin verilmesi'
        ]
      },
      {
        type: 'conclusion',
        content: 'Limited şirket kuruluşu, profesyonel destek alınması gereken önemli bir süreçtir. Yukarıda belirtilen hususlara dikkat edilmesi, ileride ortaya çıkabilecek hukuki sorunların önlenmesi açısından büyük önem taşımaktadır.'
      }
    ]
  },
  'is-sozlesmesi-feshinde-isverenin-haklari': {
    title: 'İş Sözleşmesi Feshinde İşverenin Hakları',
    category: 'İş Hukuku',
    author: 'Av. Ayşe Kaya',
    date: '12 Mart 2024',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'İş sözleşmesinin feshi, işveren açısından hem hukuki hem de ekonomik sonuçları olan önemli bir karardır. Bu yazımızda, iş sözleşmesinin feshinde işverenin haklarını detaylı olarak inceleyeceğiz.'
      },
      {
        type: 'subheading',
        content: '1. Haklı Nedenle Fesih Hakkı'
      },
      {
        type: 'paragraph',
        content: 'İş Kanunu madde 25 uyarınca işveren, aşağıdaki hallerde iş sözleşmesini haklı nedenle feshedebilir:'
      },
      {
        type: 'list',
        items: [
          'Sağlık sebepleri',
          'Ahlak ve iyi niyet kurallarına uymayan haller',
          'Zorlayıcı sebepler',
          'İşçinin gözaltına alınması veya tutuklanması'
        ]
      },
      {
        type: 'quote',
        content: 'Haklı nedenle fesih hakkının kullanılması için, olayın öğrenilmesinden itibaren 6 iş günü içinde fesih bildiriminde bulunulması gerekmektedir.'
      },
      {
        type: 'subheading',
        content: '2. Geçerli Nedenle Fesih Hakkı'
      },
      {
        type: 'paragraph',
        content: 'İşveren, işletmenin, işyerinin veya işin gereklerinden kaynaklanan geçerli bir sebebe dayanarak iş sözleşmesini feshedebilir. Geçerli nedenler şunları içerebilir:'
      },
      {
        type: 'list',
        items: [
          'Ekonomik güçlükler',
          'Verimlilik ve performans düşüklüğü',
          'Organizasyon değişiklikleri',
          'Teknolojik değişimler'
        ]
      },
      {
        type: 'subheading',
        content: '3. Fesih Sürecinde İzlenecek Prosedür'
      },
      {
        type: 'paragraph',
        content: 'İşveren, fesih sürecinde belirli prosedürlere uymak zorundadır:'
      },
      {
        type: 'list',
        items: [
          'Yazılı fesih bildirimi yapılması',
          'Fesih sebebinin açık ve kesin şekilde belirtilmesi',
          'Savunma alınması (gerekli hallerde)',
          'İhbar süresine uyulması veya ihbar tazminatı ödenmesi'
        ]
      },
      {
        type: 'conclusion',
        content: 'İş sözleşmesinin feshi, işveren açısından dikkatle yönetilmesi gereken bir süreçtir. Yasal prosedürlere uyulmaması, işe iade davaları ve tazminat yükümlülükleri gibi sonuçlar doğurabilir.'
      }
    ]
  },
  'anlasmali-bosanma-surecinde-onemli-noktalar': {
    title: 'Anlaşmalı Boşanma Sürecinde Önemli Noktalar',
    category: 'Aile Hukuku',
    author: 'Av. Ali Demir',
    date: '10 Mart 2024',
    readTime: '5 dk',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'Anlaşmalı boşanma, eşlerin karşılıklı anlaşarak evliliklerini sonlandırma kararı aldıkları bir boşanma türüdür. Bu yazımızda, anlaşmalı boşanma sürecinde dikkat edilmesi gereken önemli noktaları ele alacağız.'
      },
      {
        type: 'subheading',
        content: '1. Anlaşmalı Boşanma Protokolü'
      },
      {
        type: 'paragraph',
        content: 'Anlaşmalı boşanmanın temel şartı, tarafların boşanma ve boşanmanın sonuçları hakkında anlaşmış olmalarıdır. Bu anlaşma, bir protokol ile yazılı hale getirilmelidir.'
      },
      {
        type: 'list',
        items: [
          'Mal paylaşımı',
          'Varsa çocukların velayeti',
          'Nafaka düzenlemeleri',
          'Tazminat talepleri'
        ]
      },
      {
        type: 'quote',
        content: 'Anlaşmalı boşanma protokolü, tarafların karşılıklı rızasıyla hazırlanmalı ve her iki tarafın da menfaatlerini gözetmelidir.'
      },
      {
        type: 'subheading',
        content: '2. Çocukların Durumu'
      },
      {
        type: 'paragraph',
        content: 'Çocuklu çiftlerin anlaşmalı boşanma sürecinde özellikle dikkat etmeleri gereken hususlar vardır:'
      },
      {
        type: 'list',
        items: [
          'Velayetin düzenlenmesi',
          'Kişisel ilişki tesisi',
          'İştirak nafakası',
          'Çocuğun eğitim ve sağlık giderleri'
        ]
      },
      {
        type: 'subheading',
        content: '3. Mahkeme Süreci'
      },
      {
        type: 'paragraph',
        content: 'Anlaşmalı boşanma davası, normal boşanma davalarına göre daha kısa sürer. Ancak bazı önemli aşamalar vardır:'
      },
      {
        type: 'list',
        items: [
          'Dava dilekçesinin hazırlanması',
          'Protokolün mahkemeye sunulması',
          'Duruşmada tarafların dinlenmesi',
          'Kararın kesinleşmesi'
        ]
      },
      {
        type: 'conclusion',
        content: 'Anlaşmalı boşanma, diğer boşanma türlerine göre daha hızlı ve az maliyetli bir süreçtir. Ancak, hukuki haklarınızın korunması için mutlaka bir avukat desteği alınmalıdır.'
      }
    ]
  },
  'kat-karsiligi-insaat-sozlesmelerinde-riskler': {
    title: 'Kat Karşılığı İnşaat Sözleşmelerinde Riskler',
    category: 'Gayrimenkul Hukuku',
    author: 'Av. Mehmet Yılmaz',
    date: '8 Mart 2024',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'Kat karşılığı inşaat sözleşmeleri, arsa sahipleri ve müteahhitler arasında yapılan önemli bir sözleşme türüdür. Bu yazımızda, sözleşme sürecinde karşılaşılabilecek riskleri ve alınması gereken önlemleri inceleyeceğiz.'
      },
      {
        type: 'subheading',
        content: '1. Sözleşme Öncesi Riskler'
      },
      {
        type: 'paragraph',
        content: 'Sözleşme imzalanmadan önce dikkat edilmesi gereken önemli hususlar vardır:'
      },
      {
        type: 'list',
        items: [
          'Müteahhidin mali durumu ve referansları',
          'Arsanın imar durumu',
          'Projenin fizibilitesi',
          'Piyasa araştırması'
        ]
      },
      {
        type: 'subheading',
        content: '2. Sözleşme Aşamasındaki Riskler'
      },
      {
        type: 'paragraph',
        content: 'Sözleşmenin hazırlanması aşamasında özellikle dikkat edilmesi gereken noktalar:'
      },
      {
        type: 'list',
        items: [
          'Paylaşım oranları',
          'İnşaatın tamamlanma süresi',
          'Teknik şartname detayları',
          'Cezai şartlar'
        ]
      },
      {
        type: 'quote',
        content: 'Sözleşmede belirsiz ifadelerden kaçınılmalı, tüm hükümler açık ve net bir şekilde yazılmalıdır.'
      },
      {
        type: 'subheading',
        content: '3. İnşaat Sürecindeki Riskler'
      },
      {
        type: 'list',
        items: [
          'İnşaatın durması',
          'Malzeme kalitesi sorunları',
          'İş güvenliği riskleri',
          'Maliyet artışları'
        ]
      },
      {
        type: 'conclusion',
        content: 'Kat karşılığı inşaat sözleşmeleri, dikkatli bir hukuki değerlendirme gerektiren kompleks sözleşmelerdir. Profesyonel hukuki destek almadan bu tür sözleşmelerin imzalanmaması önerilir.'
      }
    ]
  },
  'ceza-yargilamasinda-mudafinin-rolu': {
    title: 'Ceza Yargılamasında Müdafinin Rolü',
    category: 'Ceza Hukuku',
    author: 'Av. Ayşe Kaya',
    date: '5 Mart 2024',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'Ceza yargılamasında müdafi, şüpheli veya sanığın haklarını koruyan ve savunmasını yapan avukattır. Bu yazımızda, müdafinin ceza yargılamasındaki rolünü ve önemini inceleyeceğiz.'
      },
      {
        type: 'subheading',
        content: '1. Soruşturma Aşamasındaki Görevler'
      },
      {
        type: 'paragraph',
        content: 'Müdafinin soruşturma aşamasındaki temel görevleri şunlardır:'
      },
      {
        type: 'list',
        items: [
          'İfade alma işlemlerine katılma',
          'Dosya inceleme ve örnek alma',
          'Delillerin toplanmasını talep etme',
          'Tutuklama ve adli kontrol işlemlerine itiraz'
        ]
      },
      {
        type: 'quote',
        content: 'Müdafinin soruşturma aşamasındaki etkin katılımı, adil yargılanma hakkının teminatıdır.'
      },
      {
        type: 'subheading',
        content: '2. Kovuşturma Aşamasındaki Görevler'
      },
      {
        type: 'list',
        items: [
          'Duruşmalara katılma',
          'Delil sunma ve itiraz etme',
          'Tanık dinletme',
          'Hukuki yardım sağlama'
        ]
      },
      {
        type: 'subheading',
        content: '3. Kanun Yollarına Başvuru'
      },
      {
        type: 'paragraph',
        content: 'Müdafi, kararın kesinleşmesinden önce başvurulabilecek kanun yolları konusunda müvekkilini bilgilendirmeli ve gerekli başvuruları yapmalıdır:'
      },
      {
        type: 'list',
        items: [
          'İstinaf başvurusu',
          'Temyiz başvurusu',
          'Yargılamanın yenilenmesi',
          'Bireysel başvuru hakkı'
        ]
      },
      {
        type: 'conclusion',
        content: 'Müdafinin ceza yargılamasındaki rolü, adil yargılanma hakkının ve savunma hakkının etkin kullanılması açısından vazgeçilmezdir. Bu nedenle, ceza soruşturması veya kovuşturmasında mutlaka bir müdafi desteği alınmalıdır.'
      }
    ]
  }
};

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog yazısı bulunamadı.</p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300"
          >
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-200 text-lg">
              <span>{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime} okuma</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((section, index) => {
              switch (section.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                      {section.content}
                    </p>
                  );
                case 'subheading':
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                      {section.content}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={index} className="space-y-3 mb-8">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-red-500 rounded-full mr-3" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case 'quote':
                  return (
                    <blockquote key={index} className="border-l-4 border-red-500 pl-6 my-8 italic text-gray-700">
                      {section.content}
                    </blockquote>
                  );
                case 'conclusion':
                  return (
                    <div key={index} className="bg-gray-50 rounded-2xl p-8 mt-12">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Sonuç</h3>
                      <p className="text-gray-600">{section.content}</p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>
        </div>
      </section>

      {/* Share and Navigation */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Blog'a Dön
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage; 