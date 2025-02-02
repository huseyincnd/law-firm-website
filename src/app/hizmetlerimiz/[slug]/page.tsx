'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type ServiceContent = {
  title: string;
  description: string;
  image: string;
  content: {
    overview: string;
    keyPoints: string[];
    services: {
      title: string;
      items: string[];
    }[];
    process: {
      title: string;
      steps: string[];
    };
    faq: {
      question: string;
      answer: string;
    }[];
  };
};

type Services = {
  [key: string]: ServiceContent;
};

const servicesContent: Services = {
  'sirketler-hukuku': {
    title: 'Şirketler Hukuku',
    description: 'Şirket kuruluşu, birleşme ve devralmalar, ticari sözleşmeler ve kurumsal yönetim konularında danışmanlık.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    content: {
      overview: 'Şirketler hukuku alanında sunduğumuz hizmetler, şirketinizin kuruluşundan tasfiyesine kadar tüm süreçleri kapsar. Deneyimli ekibimiz, ticari faaliyetlerinizin hukuki altyapısını en sağlam şekilde oluşturmanıza yardımcı olur.',
      keyPoints: [
        'Kapsamlı hukuki due diligence süreç yönetimi',
        'Şirket birleşme ve devralmaları için detaylı analiz',
        'Profesyonel sözleşme hazırlama ve müzakere desteği',
        'Kurumsal yönetim danışmanlığı'
      ],
      services: [
        {
          title: 'Şirket Kuruluş ve Yapılandırma',
          items: [
            'Limited ve anonim şirket kuruluşları',
            'Şube ve temsilcilik açılışları',
            'Yabancı sermayeli şirket kuruluşları',
            'Ortaklık yapısı düzenlemeleri'
          ]
        },
        {
          title: 'Kurumsal İşlemler',
          items: [
            'Genel kurul ve yönetim kurulu toplantıları',
            'Sermaye artırım/azaltım işlemleri',
            'Esas sözleşme değişiklikleri',
            'Pay devir işlemleri'
          ]
        }
      ],
      process: {
        title: 'Hizmet Süreci',
        steps: [
          'İlk görüşme ve ihtiyaç analizi',
          'Hukuki strateji belirleme',
          'Belgelerin hazırlanması',
          'Resmi işlemlerin takibi',
          'Süreç sonrası destek'
        ]
      },
      faq: [
        {
          question: 'Şirket kuruluşu ne kadar sürer?',
          answer: 'Gerekli belgelerin hazır olması durumunda, şirket kuruluşu ortalama 3-5 iş günü içinde tamamlanabilmektedir.'
        },
        {
          question: 'Yabancı ortaklı şirket kuruluşu için özel şartlar var mı?',
          answer: 'Evet, yabancı ortaklı şirket kuruluşlarında ek belgeler ve prosedürler gerekebilmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
        }
      ]
    }
  },
  'ceza-hukuku': {
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında savunma, soruşturma ve kovuşturma süreçlerinde hukuki destek.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80',
    content: {
      overview: 'Ceza hukuku alanında, soruşturma aşamasından temyiz sürecine kadar tüm aşamalarda müvekkillerimizin haklarını en etkin şekilde savunuyoruz. Uzman ekibimiz, her dosyaya özel savunma stratejisi geliştirerek en iyi sonucu elde etmeyi hedefler.',
      keyPoints: [
        'Profesyonel müdafilik hizmeti',
        'Kapsamlı dosya analizi ve strateji geliştirme',
        'Etkin delil toplama ve değerlendirme',
        'Uzman bilirkişi desteği'
      ],
      services: [
        {
          title: 'Soruşturma Aşaması',
          items: [
            'İfade alma işlemlerinde müdafilik',
            'Gözaltı sürecinde hukuki destek',
            'Koruma tedbirleri ile ilgili işlemler',
            'Delil toplama ve değerlendirme'
          ]
        },
        {
          title: 'Kovuşturma Aşaması',
          items: [
            'Duruşmalarda temsil',
            'Savunma hazırlama',
            'Tanık dinletme',
            'İtiraz ve temyiz başvuruları'
          ]
        }
      ],
      process: {
        title: 'Savunma Süreci',
        steps: [
          'Dosya inceleme ve analiz',
          'Savunma stratejisi belirleme',
          'Delillerin toplanması',
          'Duruşma hazırlığı',
          'Karar ve kanun yolları'
        ]
      },
      faq: [
        {
          question: 'Müdafi ne zaman talep edilebilir?',
          answer: 'Soruşturmanın her aşamasında müdafi talep edilebilir. Özellikle ifade alma ve sorgu işlemlerinden önce müdafi talebinde bulunulması önemlidir.'
        },
        {
          question: 'Zorunlu müdafilik nedir?',
          answer: 'Bazı suç tipleri ve şüpheli/sanık durumları için kanun gereği müdafi atanması zorunludur. Bu durumda, şüpheli/sanık müdafi talep etmese bile kendisine bir müdafi görevlendirilir.'
        }
      ]
    }
  },
  'is-hukuku': {
    title: 'İş Hukuku',
    description: 'İşçi-işveren ilişkileri, iş sözleşmeleri, işe iade ve tazminat davalarında uzman destek.',
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80',
    content: {
      overview: 'İş hukuku alanında hem işveren hem de işçi tarafına kapsamlı hukuki danışmanlık hizmeti sunuyoruz. İş ilişkisinin başlangıcından sona ermesine kadar tüm süreçlerde hukuki destek sağlıyoruz.',
      keyPoints: [
        'İş sözleşmelerinin hazırlanması ve revizyonu',
        'İşe iade davalarında temsil',
        'Tazminat hesaplamaları ve davaları',
        'Toplu iş hukuku uyuşmazlıkları'
      ],
      services: [
        {
          title: 'İşveren Hizmetleri',
          items: [
            'İş sözleşmesi hazırlama',
            'Fesih süreçleri yönetimi',
            'İş yeri yönetmelikleri hazırlama',
            'Disiplin prosedürleri'
          ]
        },
        {
          title: 'İşçi Hakları',
          items: [
            'Kıdem ve ihbar tazminatı davaları',
            'İşe iade davaları',
            'Fazla mesai alacakları',
            'Mobbing davaları'
          ]
        }
      ],
      process: {
        title: 'Çözüm Süreci',
        steps: [
          'Ön değerlendirme',
          'Hukuki analiz',
          'Strateji belirleme',
          'Dava/arabuluculuk süreci',
          'Sonuç ve takip'
        ]
      },
      faq: [
        {
          question: 'İşe iade davası ne kadar sürer?',
          answer: 'İşe iade davaları, arabuluculuk aşaması dahil ortalama 4-8 ay içinde sonuçlanmaktadır.'
        },
        {
          question: 'Arabuluculuk başvurusu zorunlu mu?',
          answer: 'Evet, iş hukukundan kaynaklanan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak zorunludur.'
        }
      ]
    }
  },
  'aile-hukuku': {
    title: 'Aile Hukuku',
    description: 'Boşanma, velayet, nafaka ve miras hukuku konularında danışmanlık ve dava takibi.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    content: {
      overview: 'Aile hukuku alanında, hassas yaklaşım gerektiren tüm süreçlerde müvekkillerimize profesyonel destek sağlıyoruz. Özellikle boşanma, velayet ve nafaka konularında uzman kadromuzla yanınızdayız.',
      keyPoints: [
        'Anlaşmalı ve çekişmeli boşanma davaları',
        'Velayet ve kişisel ilişki tesisi',
        'Nafaka davaları',
        'Mal paylaşımı uyuşmazlıkları'
      ],
      services: [
        {
          title: 'Boşanma Süreçleri',
          items: [
            'Anlaşmalı boşanma protokolü',
            'Çekişmeli boşanma davaları',
            'Mal rejimi tasfiyesi',
            'Tazminat talepleri'
          ]
        },
        {
          title: 'Çocuk Hakları',
          items: [
            'Velayet davaları',
            'İştirak nafakası',
            'Kişisel ilişki tesisi',
            'Çocuk teslimi'
          ]
        }
      ],
      process: {
        title: 'Hizmet Süreci',
        steps: [
          'İlk görüşme ve durum değerlendirmesi',
          'Hukuki yol haritası belirleme',
          'Dava/protokol hazırlığı',
          'Süreç yönetimi',
          'Sonuç ve uygulama'
        ]
      },
      faq: [
        {
          question: 'Anlaşmalı boşanma ne kadar sürer?',
          answer: 'Anlaşmalı boşanma davaları, tarafların anlaşma şartlarını belirlemesi halinde genellikle tek celsede sonuçlanır.'
        },
        {
          question: 'Çocukların velayeti nasıl belirlenir?',
          answer: 'Velayet, çocuğun üstün yararı gözetilerek belirlenir. Yaş, eğitim durumu, sosyal çevre gibi faktörler değerlendirilir.'
        }
      ]
    }
  },
  'gayrimenkul-hukuku': {
    title: 'Gayrimenkul Hukuku',
    description: 'Taşınmaz alım-satımı, kira sözleşmeleri ve imar hukuku konularında danışmanlık.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    content: {
      overview: 'Gayrimenkul hukuku alanında, alım-satım işlemlerinden imar hukukuna, kira uyuşmazlıklarından kat mülkiyeti davalarına kadar geniş bir yelpazede hukuki danışmanlık hizmeti sunuyoruz. Uzman ekibimiz, gayrimenkul işlemlerinizin güvenli ve hukuka uygun şekilde yürütülmesini sağlar.',
      keyPoints: [
        'Gayrimenkul alım-satım süreçlerinde hukuki danışmanlık',
        'Kira sözleşmeleri ve uyuşmazlık çözümleri',
        'İmar hukuku ve yapı ruhsatı süreçleri',
        'Kat mülkiyeti ve site yönetimi danışmanlığı'
      ],
      services: [
        {
          title: 'Gayrimenkul İşlemleri',
          items: [
            'Tapu işlemleri ve devir süreçleri',
            'Gayrimenkul satış vaadi sözleşmeleri',
            'Arsa payı karşılığı inşaat sözleşmeleri',
            'Ön alım hakkı işlemleri'
          ]
        },
        {
          title: 'Uyuşmazlık Çözümleri',
          items: [
            'Kira uyuşmazlıkları ve tahliye davaları',
            'Kat mülkiyeti uyuşmazlıkları',
            'İmar ve yapı ruhsatı davaları',
            'Kamulaştırma işlemleri'
          ]
        }
      ],
      process: {
        title: 'Çözüm Süreci',
        steps: [
          'Gayrimenkul ve tapu kayıtlarının incelenmesi',
          'Hukuki risk analizi',
          'Sözleşme hazırlık ve müzakere',
          'Resmi işlemlerin takibi',
          'Süreç sonrası destek'
        ]
      },
      faq: [
        {
          question: 'Yabancıların gayrimenkul alımında özel şartlar var mı?',
          answer: 'Evet, yabancıların Türkiye\'de gayrimenkul alımında bazı özel şartlar ve kısıtlamalar bulunmaktadır. Askeri bölgeler, özel güvenlik bölgeleri gibi alanlarda kısıtlamalar mevcuttur.'
        },
        {
          question: 'Kat irtifakı ile kat mülkiyeti arasındaki fark nedir?',
          answer: 'Kat irtifakı henüz inşaat tamamlanmadan kurulan bir haktır ve yapı kullanma izin belgesi alındıktan sonra kat mülkiyetine geçilir. Kat mülkiyeti ise tamamlanmış binalarda bağımsız bölümler üzerinde kurulan mülkiyet hakkıdır.'
        }
      ]
    }
  },
  'icra-iflas-hukuku': {
    title: 'İcra ve İflas Hukuku',
    description: 'Alacak takibi, icra takibi ve iflas süreçlerinde hukuki destek.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    content: {
      overview: 'İcra ve İflas Hukuku alanında, alacaklarınızın tahsili için gerekli tüm hukuki süreçleri yönetiyoruz. Borçlu ve alacaklı taraf için icra takibi, iflas ve konkordato süreçlerinde profesyonel hukuki destek sağlıyoruz.',
      keyPoints: [
        'Etkin alacak takibi ve tahsilat stratejileri',
        'İcra takip süreçlerinin yönetimi',
        'İflas ve konkordato danışmanlığı',
        'Haciz işlemleri ve ihalelerde temsil'
      ],
      services: [
        {
          title: 'İcra Takip Hizmetleri',
          items: [
            'İlamsız icra takibi başlatma',
            'İlamlı icra takibi yürütme',
            'Haciz işlemleri yönetimi',
            'İcra ihalelerine katılım'
          ]
        },
        {
          title: 'İflas ve Yeniden Yapılandırma',
          items: [
            'İflas davalarında temsil',
            'Konkordato süreç yönetimi',
            'Yeniden yapılandırma danışmanlığı',
            'Alacaklılar toplantısı temsili'
          ]
        }
      ],
      process: {
        title: 'Takip Süreci',
        steps: [
          'Alacak ve borç analizi',
          'Strateji belirleme',
          'Takip başlatma',
          'Tahsilat süreç yönetimi',
          'Hukuki yolların takibi'
        ]
      },
      faq: [
        {
          question: 'İcra takibi ne kadar sürer?',
          answer: 'İcra takibinin süresi, borçlunun ödeme yapması veya mal varlığının bulunması gibi faktörlere bağlı olarak değişkenlik gösterir. Basit bir icra takibi birkaç ay içinde sonuçlanabilirken, karmaşık durumlarda bu süre uzayabilir.'
        },
        {
          question: 'Konkordato nedir ve nasıl başvurulur?',
          answer: 'Konkordato, borçlarını ödeyemeyen veya ödeyememe tehlikesi altında olan borçluların, alacaklıları ile anlaşarak borçlarını yeniden yapılandırmasını sağlayan bir kurumdur. Başvuru için mali durumu gösteren belgeler ve konkordato ön projesi ile mahkemeye başvurulması gerekir.'
        }
      ]
    }
  }
};

const ServicePage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesContent[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hizmet Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız hizmet sayfası bulunamadı.</p>
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300"
          >
            Hizmetlere Dön
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
          src={service.image}
          alt={service.title}
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Genel Bakış</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.content.overview}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.content.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-red-600">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sunduğumuz Hizmetler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.content.services.map((serviceGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{serviceGroup.title}</h3>
                <ul className="space-y-4">
                  {serviceGroup.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-red-500 rounded-full mr-3" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{service.content.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
                {index < service.content.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-red-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-8">
            {service.content.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hukuki Destek İçin Yanınızdayız
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Profesyonel ekibimizle size en iyi hukuki desteği sağlamak için hazırız.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300"
            >
              Ücretsiz İlk Görüşme İçin Randevu Alın
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage; 