import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">İletişim</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Adres Bilgisi
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +90 (XXX) XXX XX XX
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@hukukburosu.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-white transition-colors duration-200">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Uzmanlık Alanları</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetlerimiz/corporate" className="hover:text-white transition-colors duration-200">
                  Şirketler Hukuku
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/criminal" className="hover:text-white transition-colors duration-200">
                  Ceza Hukuku
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/labor" className="hover:text-white transition-colors duration-200">
                  İş Hukuku
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/family" className="hover:text-white transition-colors duration-200">
                  Aile Hukuku
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Çalışma Saatleri</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Pazartesi - Cuma:</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Cumartesi:</span>
                <span>09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pazar:</span>
                <span>Kapalı</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Hukuk Bürosu. Tüm hakları saklıdır.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 