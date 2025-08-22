import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-3xl font-avenir-bold font-black text-white tracking-widest">
              AWG
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:tracking-widest">Услуги</a>
              <span className="text-gray-500">/</span>
              <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:tracking-widest">О компании</a>
              <span className="text-gray-500">/</span>
              <a href="#cases" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:tracking-widest">Кейсы</a>
              <span className="text-gray-500">/</span>
              <a href="#contacts" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:tracking-widest">Контакты</a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </nav>
          
          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-4 border-t border-gray-800 mt-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2">Услуги</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2">О компании</a>
              <a href="#cases" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2">Кейсы</a>
              <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2">Контакты</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url('/img/3ccf063c-b721-48e6-bb0f-dcc8a3b2fce6.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Скошенный градиент до середины */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, black 0%, black 33%, rgba(0,0,0,0.7) 50%, transparent 50%)'
          }}
        />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6">
            {/* Контент распределен по всей ширине */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-12">
              
              {/* Левая часть - основной текст */}
              <div className="flex-1 max-w-2xl">
                <div className="text-xl md:text-2xl font-avenir-bold font-black text-white mb-8 leading-none tracking-tight hover:tracking-wider transition-all duration-700">
                  next level IT
                </div>
                <p className="text-4xl md:text-5xl lg:text-6xl font-avenir-bold font-bold text-gray-300 mb-8 leading-none opacity-90 hover:opacity-100 transition-opacity duration-500">
                  Ведущий ИТ интегратор для выхода бизнеса на новый уровень
                </p>
              </div>
              
              {/* Правая часть - статистики */}
              <div className="flex-1 max-w-2xl">
                <div className="grid grid-cols-2 gap-8 lg:gap-12">
                  <div className="group cursor-pointer text-center lg:text-left">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-avenir-bold font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">40+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">Проектов</div>
                  </div>
                  <div className="group cursor-pointer text-center lg:text-left">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-avenir-bold font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">22&nbsp;000+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">Строк кода</div>
                  </div>
                  <div className="group cursor-pointer text-center lg:text-left">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-avenir-bold font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">1&nbsp;000+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">Часов работы</div>
                  </div>
                  <div className="group cursor-pointer text-center lg:text-left">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-avenir-bold font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">10</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">Лет опыта</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">Нам доверяют</p>
          </div>
          {/* Сектора бизнеса */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center max-w-4xl mx-auto">
              <div className="text-gray-700 font-medium">Ритейл</div>
              <div className="text-gray-700 font-medium">Финансовый</div>
              <div className="text-gray-700 font-medium">Промышленность и производство</div>
              <div className="text-gray-400 font-medium opacity-50">Банкинг</div>
              <div className="text-gray-400 font-medium opacity-50">IT-компании</div>
              <div className="text-gray-400 font-medium opacity-50">Страхование</div>
              <div className="text-gray-400 font-medium opacity-50">Транспорт и туризм</div>
              <div className="text-gray-400 font-medium opacity-50">Недвижимость и строительство</div>
              <div className="text-gray-400 font-medium opacity-50">Государственный</div>
              <div className="text-gray-400 font-medium opacity-50">Гостинично-ресторанный</div>
            </div>
          </div>
          
          {/* Логотипы компаний */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Первый ряд */}
            <div className="flex items-center justify-center w-24 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer group">
              <span className="text-red-600 font-bold text-sm group-hover:scale-105 transition-transform duration-300">Hoff</span>
            </div>
            <div className="w-24 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">М.Видео</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer group">
              <span className="text-green-600 font-bold text-xs group-hover:scale-105 transition-transform duration-300">Перекрёсток</span>
            </div>
            <div className="w-24 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">OZON</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer group">
              <span className="text-orange-600 font-bold text-xs group-hover:scale-105 transition-transform duration-300">Sportmaster</span>
            </div>
            <div className="w-24 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">Альфа-Банк</span>
            </div>
            
            {/* Второй ряд */}
            <div className="w-24 h-12 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 cursor-pointer group">
              <span className="text-black font-bold text-xs group-hover:scale-105 transition-transform duration-300">Лемана ПРО</span>
            </div>
            <div className="w-24 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">ВТБ</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer group">
              <span className="text-green-600 font-bold text-sm group-hover:scale-105 transition-transform duration-300">АШАН</span>
            </div>
            <div className="w-24 h-12 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">DNS</span>
            </div>
            <div className="w-24 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">Юлмарт</span>
            </div>
            <div className="w-24 h-12 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">Росгосстрах</span>
            </div>
            
            {/* Третий ряд */}
            <div className="w-24 h-12 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">Газпромбанк</span>
            </div>
            <div className="w-24 h-12 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">БНС Групп</span>
            </div>
            <div className="w-24 h-12 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">Донстрой</span>
            </div>
            <div className="w-24 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">Сбер</span>
            </div>
            <div className="w-24 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">Acer</span>
            </div>
            <div className="w-24 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-300 cursor-pointer group">
              <span className="text-white font-bold text-xs group-hover:scale-105 transition-transform duration-300">Beeline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white relative max-w-[1920px] mx-auto" style={{height: '1080px'}}>
        {/* Top border */}
        <div className="absolute top-20 left-10 right-10 h-px bg-black"></div>
        
        {/* Bottom border with opacity */}
        <div className="absolute h-px bg-black opacity-40" style={{left: '80px', right: '80px', top: '680px'}}></div>
        
        {/* Section number */}
        <div className="absolute text-black text-xl font-avenir" style={{left: '80px', top: '24px', letterSpacing: '-0.015em'}}>
          04
        </div>
        
        {/* Section title top */}
        <div className="absolute text-black text-xl font-avenir" style={{left: '80px', top: '100px', letterSpacing: '-0.015em'}}>
          Достижения
        </div>
        
        {/* Left column achievements */}
        <div className="absolute flex flex-col gap-3" style={{left: '480px', top: '100px', width: '640px'}}>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            ТОП-5 премии Tagline Awards 2023 в пяти номинациях
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            35 место в рейтинге CNews крупнейших поставщиков ИТ в розницу 2024
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            ТОП-100 лучших ИТ-работодателей в рейтинге от HH.ru
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            ТОП-15 рейтинга Хабр Карьера
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            1 место рейтинга Рунета 2024 Диджитал-подрядчик крупнейших компаний по консалтингу
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            1 место рейтинга Рунета 2024 Разработчик интернет-магазинов для отраслей «Украшения» и «Мебель»
          </div>
        </div>
        
        {/* Right column achievements */}
        <div className="absolute flex flex-col gap-3" style={{left: '1160px', top: '100px', width: '640px'}}>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            ТОП-5 рейтинга Рунета 2024 Поддержка и развитие сайтов в сфере электронной коммерции
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            1 место конкурса «Золотой Сайт» Сервис, портал в области строительства и недвижимости
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            2 место в Кубковом рейтинге диджитал-интеграторов 2024
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            2 место премии Ruward Award 2025 Отраслевая экспертиза/электронная коммерция
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            4-х кратный обладатель премии «Большой оборот»
          </div>
        </div>
        
        {/* Bottom section title */}
        <div className="absolute text-black text-xl font-avenir" style={{left: '80px', top: '700px', letterSpacing: '-0.015em'}}>
          Достижения
        </div>
        
        {/* Bottom achievements */}
        <div className="absolute" style={{left: '480px', top: '700px', width: '640px'}}>
          <div className="text-black text-lg font-avenir leading-6 mb-4" style={{letterSpacing: '-0.015em'}}>
            Член Российской ассоциации электронных коммуникаций
          </div>
          <div className="text-black text-lg font-avenir leading-6 mb-4" style={{letterSpacing: '-0.015em'}}>
            Член Ассоциации менеджеров России
          </div>
          <div className="text-black text-lg font-avenir leading-6 mb-4" style={{letterSpacing: '-0.015em'}}>
            Авторы ИТ-курсов Skillbox
          </div>
          <div className="text-black text-lg font-avenir leading-6 mb-4" style={{letterSpacing: '-0.015em'}}>
            Аккредитация Минкомсвязи РФ
          </div>
          <div className="text-black text-lg font-avenir leading-6" style={{letterSpacing: '-0.015em'}}>
            Резидент Сколково
          </div>
        </div>
      </section>
      
      {/* Omni retail rating Section */}
      <section className="bg-white relative" style={{height: '1080px'}}>
        {/* Vertical background strip */}
        <div className="absolute right-0 top-0 w-96 h-full bg-black opacity-5"></div>
        
        {/* Top border */}
        <div className="absolute top-20 left-10 right-10 h-px bg-black"></div>
        
        {/* Middle border */}
        <div className="absolute left-10 h-px bg-black opacity-25" style={{top: '280px', width: '900px'}}></div>
        
        {/* Section number */}
        <div className="absolute left-10 top-5 text-black text-2xl font-avenir" style={{letterSpacing: '-0.015em'}}>
          05
        </div>
        
        {/* Main title */}
        <div className="absolute left-10 text-black font-avenir" style={{top: '95px', fontSize: '95px', lineHeight: '105px', letterSpacing: '-0.015em'}}>
          Omni retail rating
        </div>
        
        {/* Subtitle */}
        <div className="absolute left-10 text-black font-avenir" style={{top: '300px', fontSize: '45px', lineHeight: '55px', letterSpacing: '-0.015em', width: '510px'}}>
          Формирование трендов в e-commerce
        </div>
        
        {/* Data Insight partnership */}
        <div className="absolute left-10 flex items-center gap-2.5" style={{top: '485px'}}>
          <span className="text-black text-2xl font-avenir" style={{letterSpacing: '-0.015em'}}>
            Cовместно с DataInsight
          </span>
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-2 h-4 bg-blue-600"></div>
              <div className="w-2 h-4 bg-red-500"></div>
              <div className="w-6 h-4 bg-gray-700"></div>
            </div>
          </div>
        </div>
        
        {/* Description text */}
        <div className="absolute left-10 text-black text-2xl font-avenir leading-8" style={{top: '540px', width: '670px', letterSpacing: '-0.015em'}}>
          AWG – ведущий digital интегратор, который исследует уровень омниканальности крупнейших российских ритейлеров и удобство клиентского сервиса. AWG и аналитическая компания Data Insight проводят совместное исследование рынка ритейла. На основании его результатов формируется рейтинг омниканальности: Omni retail rating отражает слабые и сильные стороны ритейлеров на стыке онлайна и офлайна в торговле.
        </div>
        
        {/* Website link */}
        <div className="absolute left-10 bottom-20 text-black text-2xl font-avenir" style={{letterSpacing: '-0.015em'}}>
          omnirating.ru
        </div>
        
        {/* Dashboard mockup */}
        <div className="absolute bg-gray-900 rounded-2xl" style={{right: '60px', top: '280px', width: '975px', height: '600px'}}>
          {/* Browser dots */}
          <div className="absolute top-3.5 left-3.5 flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white opacity-20 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white opacity-20 rounded-full"></div>
          </div>
          
          {/* Dashboard content placeholder */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gray-100 rounded-b-2xl flex items-center justify-center">
            <span className="text-gray-600 text-sm">Dashboard Preview</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-avenir font-bold text-black mb-12 leading-tight">
              Ведущий ИТ-интегратор
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  AWG — российская компания, специализирующаяся на ИТ-консалтинге, разработке программного обеспечения и интеграции высоконагруженных систем для крупного бизнеса.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Мы создаем e-commerce решения, омниканальные платформы и интегрируем сложные ИТ-системы с существующей инфраструктурой компаний.
                </p>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start hover:text-gray-800 transition-colors duration-300">
                    <Icon name="Check" size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    ИТ-консалтинг и аудит систем
                  </li>
                  <li className="flex items-start hover:text-gray-800 transition-colors duration-300">
                    <Icon name="Check" size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Разработка высоконагруженных решений
                  </li>
                  <li className="flex items-start hover:text-gray-800 transition-colors duration-300">
                    <Icon name="Check" size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    E-commerce и омниканальные платформы
                  </li>
                  <li className="flex items-start hover:text-gray-800 transition-colors duration-300">
                    <Icon name="Check" size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Интеграция с внешними сервисами
                  </li>
                  <li className="flex items-start hover:text-gray-800 transition-colors duration-300">
                    <Icon name="Check" size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Техническая поддержка и сопровождение
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-avenir font-semibold text-black mb-6">
                  Omni retail rating
                </h3>
                
                <div className="bg-gray-900 p-8 rounded-lg mb-8 hover:bg-black transition-colors duration-500 group cursor-pointer">
                  <div className="flex items-center justify-between text-white mb-6">
                    <div>
                      <div className="text-3xl font-bold group-hover:text-4xl transition-all duration-300">4.8</div>
                      <div className="text-sm text-gray-400">из 5.0</div>
                    </div>
                    <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-500">
                      <Icon name="Star" size={32} className="text-blue-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Высокие оценки клиентов по качеству разработки, соблюдению сроков и техническому сопровождению проектов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-avenir font-bold text-white mb-8 leading-tight">
              Бизнес и системная аналитика — одна из наших сильных сторон
            </h2>
          </div>

          {/* Service Stages */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 group cursor-pointer hover:-translate-y-2">
              <div className="text-6xl font-avenir font-bold text-white mb-4 group-hover:text-7xl transition-all duration-300">01</div>
              <h3 className="text-xl font-avenir font-semibold text-white mb-4">Анализ</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Глубокий анализ бизнес-процессов, существующих систем и потребностей компании для выработки оптимального решения
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 group cursor-pointer hover:-translate-y-2">
              <div className="text-6xl font-avenir font-bold text-white mb-4 group-hover:text-7xl transition-all duration-300">02</div>
              <h3 className="text-xl font-avenir font-semibold text-white mb-4">Проектирование</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Создание архитектуры решения, техническое проектирование и планирование этапов разработки с учетом масштабируемости
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 group cursor-pointer hover:-translate-y-2">
              <div className="text-6xl font-avenir font-bold text-white mb-4 group-hover:text-7xl transition-all duration-300">03</div>
              <h3 className="text-xl font-avenir font-semibold text-white mb-4">Реализация</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Разработка, тестирование и внедрение решения с последующей технической поддержкой и сопровождением
              </p>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-lg group-hover:opacity-30 transition-opacity duration-500"
              style={{ backgroundImage: `url('/img/ef497404-3952-4266-befe-5b1be05341a2.jpg')` }}
            />
            <div className="relative bg-gray-900/90 p-12 rounded-lg group-hover:bg-gray-900/95 transition-all duration-500">
              <h3 className="text-3xl font-avenir font-bold text-white mb-6">
                Достижение целевого результата, качественно и в срок
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
                Гарантия на выполненные работы до 12&nbsp;мес. Мы помогаем бизнесу войти на новый уровень и оставаться конкурентоспособными
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 hover:scale-105 transition-transform duration-300">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-avenir font-bold text-black mb-8">Консалтинг</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Search" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 group-hover:text-black transition-colors duration-300 relative z-10">Аудит ИТ-систем</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Комплексная оценка существующей ИТ-инфраструктуры и выявление точек оптимизации
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Target" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 group-hover:text-black transition-colors duration-300 relative z-10">Стратегическое планирование</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Разработка ИТ-стратегии развития и цифровой трансформации бизнеса
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Settings" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 group-hover:text-black transition-colors duration-300 relative z-10">Техническая экспертиза</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Экспертная оценка технических решений и рекомендации по оптимизации
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Users" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 group-hover:text-black transition-colors duration-300 relative z-10">Управление проектами</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Сопровождение ИТ-проектов от концепции до успешного внедрения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-avenir font-bold text-black mb-8">Сопровождение</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Monitor" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Мониторинг систем</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Круглосуточный мониторинг производительности и доступности ИТ-систем
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Shield" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Информационная безопасность</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Обеспечение защиты данных и соответствие требованиям безопасности
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Wrench" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Техническая поддержка</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Оперативное решение технических вопросов и поддержка пользователей
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="TrendingUp" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Развитие и модернизация</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Планомерное развитие ИТ-систем и внедрение новых функций
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-avenir font-bold text-black mb-8">Внедрение и интеграция</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="ShoppingCart" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">E-commerce решения</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Разработка и интеграция платформ электронной коммерции
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Layers" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Омниканальность</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Интеграция всех каналов продаж в единую экосистему
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Database" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Интеграция систем</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Связывание различных ИТ-систем и сервисов в единую инфраструктуру
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon name="Code" size={32} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-avenir font-semibold text-black mb-4 relative z-10">Разработка</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  Создание высоконагруженных решений и API для интеграции
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-avenir font-bold text-white mb-8">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Готовы обсудить ваш проект? Наши эксперты помогут найти оптимальное решение для вашего бизнеса.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Icon name="Mail" size={24} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">info@awg.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Icon name="Phone" size={24} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Телефон</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+7&nbsp;(495)&nbsp;123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Icon name="MapPin" size={24} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Офис</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Москва</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-avenir font-semibold text-white mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Опишите ваш проект" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white resize-none transition-all duration-300"
                    />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold hover:scale-105 transition-all duration-300">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-avenir font-black text-white mb-4 hover:tracking-widest transition-all duration-500 cursor-pointer">AWG</div>
            <p className="text-gray-400 mb-6 hover:text-gray-300 transition-colors duration-300">
              Ведущий ИТ-интегратор
            </p>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
              © 2024 AWG. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}