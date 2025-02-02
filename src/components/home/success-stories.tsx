'use client';

import { useState } from 'react';
import Image from 'next/image';

const successStories = [
  {
    id: 1,
    title: 'Uluslararası Ticari Anlaşmazlık Çözümü',
    description: 'Müvekkilimizin uluslararası bir ticari anlaşmazlıkta haklarını başarıyla savunduk ve lehine sonuç aldık.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    result: '2.5 Milyon TL Tazminat',
    category: 'Ticaret Hukuku',
  },
  {
    id: 2,
    title: 'Kurumsal Yeniden Yapılandırma',
    description: 'Büyük ölçekli bir şirketin yeniden yapılandırma sürecini başarıyla yönettik.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    result: 'Başarılı Yapılandırma',
    category: 'Şirketler Hukuku',
  },
  {
    id: 3,
    title: 'İş Hukuku Davası',
    description: 'Haksız yere işten çıkarılan müvekkilimizin işe iade davasını kazandık.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    result: 'İşe İade ve Tazminat',
    category: 'İş Hukuku',
  },
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Başarı Hikayelerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Müvekkillerimizin haklarını korumak ve en iyi sonucu elde etmek için gösterdiğimiz başarılı çalışmalarımız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={successStories[activeStory].image}
              alt={successStories[activeStory].title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm font-medium mb-2">
                {successStories[activeStory].category}
              </div>
              <div className="text-2xl font-bold mb-2">
                {successStories[activeStory].result}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`cursor-pointer p-6 rounded-lg transition-all duration-200 ${
                  activeStory === index
                    ? 'bg-blue-50 border-l-4 border-blue-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveStory(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Başarılı Dava</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Yıllık Tecrübe</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Mutlu Müvekkil</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Başarı Oranı</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 