import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-mountain-dark/90 backdrop-blur-md border-b border-mountain-gray/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-white">
              AWG
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-mountain-light transition-colors">Услуги</a>
              <a href="#advantages" className="text-white hover:text-mountain-light transition-colors">Преимущества</a>
              <a href="#cases" className="text-white hover:text-mountain-light transition-colors">Кейсы</a>
              <a href="#reviews" className="text-white hover:text-mountain-light transition-colors">Отзывы</a>
              <a href="#contacts" className="text-white hover:text-mountain-light transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="hidden md:block border-white text-white hover:bg-white hover:text-mountain-dark">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-mountain-dark overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/img/f9fa990b-44ed-41e8-9a59-df4ac5afceb8.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-dark/80 to-mountain-dark/90" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-montserrat font-black text-white mb-6 leading-none">
              AWG
            </h1>
            <p className="text-xl md:text-2xl font-inter text-mountain-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Профессиональная разработка программного обеспечения для бизнеса любого масштаба
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-2">40+</div>
                <div className="text-mountain-light font-inter">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-2">22 000+</div>
                <div className="text-mountain-light font-inter">Строк кода</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-2">400+</div>
                <div className="text-mountain-light font-inter">Часов работы</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-2">60+</div>
                <div className="text-mountain-light font-inter">Клиентов</div>
              </div>
            </div>

            <Button size="lg" className="bg-white text-mountain-dark hover:bg-mountain-light font-montserrat font-semibold px-8 py-3">
              Начать проект
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">Услуги</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Комплексные IT-решения для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Code" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Веб-разработка</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Создание современных веб-приложений и сайтов с использованием передовых технологий
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Smartphone" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Мобильные приложения</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Database" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Backend системы</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Проектирование и разработка серверной части, API и баз данных
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Cloud" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Облачные решения</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Миграция в облако, настройка инфраструктуры и DevOps процессов
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Техническая поддержка</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Поддержка и развитие существующих IT-систем и приложений
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Консалтинг</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Экспертная консультация по выбору технологий и архитектурных решений
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-mountain-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">Преимущества</h2>
            <p className="text-xl text-mountain-light font-inter max-w-2xl mx-auto">
              Почему выбирают нас для реализации IT-проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Быстрая разработка</h3>
              <p className="text-mountain-light font-inter leading-relaxed">
                Agile-методология и современные инструменты позволяют сократить время разработки
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Высокое качество</h3>
              <p className="text-mountain-light font-inter leading-relaxed">
                Тщательное тестирование и code review обеспечивают надежность решений
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Target" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Индивидуальный подход</h3>
              <p className="text-mountain-light font-inter leading-relaxed">
                Каждое решение адаптируется под специфику и потребности вашего бизнеса
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Соблюдение сроков</h3>
              <p className="text-mountain-light font-inter leading-relaxed">
                Планирование и контроль этапов гарантируют выполнение проекта в срок
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="HeadphonesIcon" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Постоянная поддержка</h3>
              <p className="text-mountain-light font-inter leading-relaxed">
                Техническая поддержка и сопровождение проектов 24/7
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Масштабируемость</h3>
              <p className="text-mountain-light font-inter leading-relaxed">
                Архитектура решений позволяет легко расширять функциональность
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">Кейсы</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Успешные проекты, которые мы реализовали
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="ShoppingCart" size={64} className="text-primary" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">E-commerce</Badge>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Интернет-магазин электроники</h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4">
                  Полнофункциональная платформа с интеграцией платежных систем, управлением складом и аналитикой
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Node.js</Badge>
                  <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <Icon name="Building" size={64} className="text-secondary" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">CRM System</Badge>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">CRM для строительной компании</h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4">
                  Система управления клиентами с модулями планирования, учета материалов и отчетности
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Vue.js</Badge>
                  <Badge variant="outline" className="text-xs">Python</Badge>
                  <Badge variant="outline" className="text-xs">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Icon name="Smartphone" size={64} className="text-accent" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">Mobile App</Badge>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Мобильное приложение для фитнеса</h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4">
                  Кроссплатформенное приложение с трекингом активности, планами тренировок и социальными функциями
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">React Native</Badge>
                  <Badge variant="outline" className="text-xs">Firebase</Badge>
                  <Badge variant="outline" className="text-xs">Redux</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-mountain-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">Отзывы</h2>
            <p className="text-xl text-mountain-light font-inter max-w-2xl mx-auto">
              Что говорят наши клиенты о сотрудничестве
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-inter text-mountain-light mb-6 leading-relaxed">
                  "Команда AWG превзошла все ожидания. Проект был выполнен в срок, с высоким качеством кода и отличной документацией."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold">Алексей Петров</div>
                    <div className="text-sm text-mountain-light">CEO TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-inter text-mountain-light mb-6 leading-relaxed">
                  "Профессиональный подход, глубокое понимание бизнес-задач и отличное техническое исполнение. Рекомендуем!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold">Мария Иванова</div>
                    <div className="text-sm text-mountain-light">CTO InnovateLab</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-inter text-mountain-light mb-6 leading-relaxed">
                  "Благодаря AWG мы смогли автоматизировать ключевые бизнес-процессы и значительно повысить эффективность работы."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold">Дмитрий Козлов</div>
                    <div className="text-sm text-mountain-light">Director BusinessFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-8">Свяжитесь с нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground font-inter">hello@awg.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-medium text-foreground">Телефон</div>
                    <div className="text-muted-foreground font-inter">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-medium text-foreground">Офис</div>
                    <div className="text-muted-foreground font-inter">Москва, Тверская 1</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-inter focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-inter focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Опишите ваш проект" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-inter focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground font-montserrat font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-mountain-dark">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-montserrat font-bold text-white mb-4">AWG</div>
            <p className="text-mountain-light font-inter mb-6">
              Профессиональная разработка программного обеспечения
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-mountain-light hover:text-white transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-mountain-light hover:text-white transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-mountain-light hover:text-white transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-mountain-gray/30 text-mountain-light font-inter text-sm">
              © 2024 AWG. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}