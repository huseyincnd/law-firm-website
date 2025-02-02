'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { format, addDays, isSameDay, isAfter, isBefore, addMonths } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

const timeSlots = [
  { time: '09:00', period: 'Sabah' },
  { time: '09:30', period: 'Sabah' },
  { time: '10:00', period: 'Sabah' },
  { time: '10:30', period: 'Sabah' },
  { time: '11:00', period: 'Sabah' },
  { time: '11:30', period: 'Sabah' },
  { time: '13:00', period: 'Öğleden Sonra' },
  { time: '13:30', period: 'Öğleden Sonra' },
  { time: '14:00', period: 'Öğleden Sonra' },
  { time: '14:30', period: 'Öğleden Sonra' },
  { time: '15:00', period: 'Öğleden Sonra' },
  { time: '15:30', period: 'Öğleden Sonra' },
  { time: '16:00', period: 'Öğleden Sonra' },
  { time: '16:30', period: 'Öğleden Sonra' },
  { time: '17:00', period: 'Öğleden Sonra' }
];

const serviceTypes = [
  { id: 'sirketler-hukuku', label: 'Şirketler Hukuku' },
  { id: 'ceza-hukuku', label: 'Ceza Hukuku' },
  { id: 'is-hukuku', label: 'İş Hukuku' },
  { id: 'aile-hukuku', label: 'Aile Hukuku' },
  { id: 'gayrimenkul-hukuku', label: 'Gayrimenkul Hukuku' },
  { id: 'icra-iflas-hukuku', label: 'İcra ve İflas Hukuku' }
];

const getNext14Days = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const date = addDays(today, i);
    if (date.getDay() !== 0) { // Pazar günlerini hariç tut
      days.push(date);
    }
  }
  return days;
};

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: undefined as Date | undefined,
    time: '',
    description: ''
  });

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, time }));
  };

  const availableDates = getNext14Days();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '30px 30px' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Randevu Alın
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hukuki danışmanlık için ücretsiz ilk görüşme randevunuzu hemen alın.
              Size en uygun tarih ve saati seçerek başlayabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="0(5XX) XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Seçiniz</option>
                      {serviceTypes.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Calendar */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Randevu Tarihi
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide space-x-2 p-4">
                      {availableDates.map((date) => (
                        <motion.button
                          key={date.toISOString()}
                          onClick={() => handleDateSelect(date)}
                          className={cn(
                            "flex-shrink-0 flex flex-col items-center px-6 py-4 rounded-xl transition-all duration-200",
                            selectedDate && isSameDay(selectedDate, date)
                              ? "bg-red-600 text-white ring-2 ring-red-600 ring-offset-2"
                              : "bg-white border-2 border-gray-200 hover:border-red-200 hover:shadow-md text-gray-900"
                          )}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className={cn(
                            "text-xs font-medium mb-1",
                            selectedDate && isSameDay(selectedDate, date)
                              ? "text-white"
                              : "text-gray-500"
                          )}>
                            {format(date, 'EEEE', { locale: tr })}
                          </span>
                          <span className={cn(
                            "text-2xl font-bold",
                            selectedDate && isSameDay(selectedDate, date)
                              ? "text-white"
                              : "text-gray-900"
                          )}>
                            {format(date, 'd')}
                          </span>
                          <span className={cn(
                            "text-xs",
                            selectedDate && isSameDay(selectedDate, date)
                              ? "text-white"
                              : "text-gray-500"
                          )}>
                            {format(date, 'MMMM', { locale: tr })}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Randevu Saati
                      </label>
                      <div className="space-y-6">
                        {['Sabah', 'Öğleden Sonra'].map((period) => (
                          <div key={period} className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500">{period}</h4>
                            <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide space-x-2 p-4">
                              {timeSlots
                                .filter(slot => slot.period === period)
                                .map((slot) => (
                                  <motion.button
                                    key={slot.time}
                                    type="button"
                                    onClick={() => handleTimeSelect(slot.time)}
                                    className={cn(
                                      "flex-shrink-0 flex flex-col items-center px-6 py-4 rounded-xl transition-all duration-200 min-w-[100px]",
                                      selectedTime === slot.time
                                        ? "bg-red-600 text-white ring-2 ring-red-600 ring-offset-2"
                                        : "bg-white border-2 border-gray-200 hover:border-red-200 hover:shadow-md"
                                    )}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <span className={cn(
                                      "text-sm font-medium",
                                      selectedTime === slot.time
                                        ? "text-white"
                                        : "text-gray-900"
                                    )}>
                                      {slot.time}
                                    </span>
                                  </motion.button>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Randevu Konusu
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Randevu almak istediğiniz konu hakkında kısa bir açıklama yazın..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Randevu Oluştur
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ücretsiz İlk Görüşme
              </h3>
              <p className="text-gray-600">
                İlk görüşmemiz ücretsizdir. Bu görüşmede hukuki sürecinizi değerlendirir ve size en uygun çözüm yolunu belirleriz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hazırlık
              </h3>
              <p className="text-gray-600">
                Görüşme öncesinde konuyla ilgili belgeleri hazırlamanız ve durumu özetlemeniz faydalı olacaktır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                İletişim
              </h3>
              <p className="text-gray-600">
                Randevunuz onaylandığında size e-posta ve SMS ile bilgilendirme yapılacaktır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppointmentPage; 