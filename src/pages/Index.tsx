import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-charcoal">
              Ananda Space
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#why-us" className="text-gray-600 hover:text-charcoal transition-colors">Почему мы</a>
              <a href="#services" className="text-gray-600 hover:text-charcoal transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-charcoal transition-colors">О нас</a>
              <a href="#reviews" className="text-gray-600 hover:text-charcoal transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-600 hover:text-charcoal transition-colors">Контакты</a>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (933) 611-32-28
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                г. Москва, ул. Гагарина, 15
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                10:00-20:00
              </div>
            </div>
            
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-light text-charcoal leading-tight">
                Студия пилатеса<br />
                <span className="font-semibold">Ananda Space</span><br />
                <span className="text-2xl lg:text-3xl text-gray-600 font-light">баланс тела и духа</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Групповые и индивидуальные занятия, курсы реформер‑пилатеса
              </p>
              
              <Button 
                size="lg" 
                className="bg-charcoal hover:bg-gray-700 text-white px-8 py-4 rounded-none text-lg font-normal"
              >
                Записаться на пробное занятие
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/img/0bc8698e-f811-4777-aa87-b10b82994be0.jpg" 
                alt="Студия пилатеса Ananda Space"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-light text-center mb-16 text-charcoal">
            То, что делает нашу студию особенной
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Академические преподаватели",
                description: "с сертификатами STOTT, Polestar и др."
              },
              {
                icon: "Heart",
                title: "Аутентичная атмосфера",
                description: "и уютный интерьер студии"
              },
              {
                icon: "Users",
                title: "Маленькие группы",
                description: "до 8 человек + персональные занятия"
              },
              {
                icon: "Calendar",
                title: "Удобное расписание",
                description: "утро/вечер, онлайн/оффлайн"
              },
              {
                icon: "Target",
                title: "Тестовые занятия",
                description: "и абонементы на любой уровень"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name={feature.icon} size={32} className="mx-auto mb-4 text-charcoal" />
                  <h3 className="text-lg font-medium mb-2 text-charcoal">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light mb-4 text-charcoal">
              Индивидуально. Эффективно. В вашем ритме
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Маты & базовый комплекс",
                description: "упражнения для гибкости и осанки",
                image: "🧘‍♀️"
              },
              {
                title: "Реформер-класс",
                description: "укрепление корпуса и глубоких мышц",
                image: "🏋️‍♀️"
              },
              {
                title: "Продвинутый Mat & reformer",
                description: "для опытных",
                image: "💪"
              },
              {
                title: "Приватные занятия",
                description: "поддержка 1‑на‑1",
                image: "👥"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-lg font-medium mb-3 text-charcoal">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full rounded-none border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                    подобрать время
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-charcoal">
              Опыт, знания и бережный подход
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                В центре всего — не идеальные формы, а живое движение, в котором вы чувствуете себя лучше с каждым занятием
              </p>
              <p>
                Мы создали студию пилатеса как пространство, где можно остановиться, почувствовать тело и вернуться к себе.
              </p>
              <p>
                Работаем с разными уровнями подготовки, телами и задачами: от восстановления до укрепления.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light mb-4 text-charcoal">
              С кем вы будете практиковать
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наш коллектив — сертифицированные преподаватели со стажем 5+ лет, надежные наставники для учеников любого уровня.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Анна Калинова", experience: "5+ лет опыта" },
              { name: "Мария Михайлюк", experience: "7+ лет опыта" },
              { name: "Кристина Шарпей", experience: "5+ года опыта" }
            ].map((instructor, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-gray-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-charcoal">{instructor.name}</h3>
                  <p className="text-gray-600 text-sm">{instructor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-light text-center mb-16 text-charcoal">
            Нам уже доверились
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария К., 34 года",
                review: "Это не просто студия — это место, где телу спокойно, а голове легко. Никто не торопит, всё очень бережно. После каждого занятия ощущение, будто перезагрузилась."
              },
              {
                name: "Анна П., 29 лет", 
                review: "Раньше думала, что пилатес — это \"что-то не для меня\", но попробовав здесь, влюбилась. Тренеры всё объясняют понятно, помогают адаптироваться. И тело реально стало другим — крепче и легче."
              },
              {
                name: "Екатерина С., 41 год",
                review: "Занимаюсь уже полгода, ушли боли в спине, улучшилась осанка. Колени перестали \"ныть\" после прогулок. Тренеры профессиональные и внимательные. Спасибо студии за чуткость и системный подход."
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">"{review.review}"</p>
                  <p className="font-medium text-charcoal">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-charcoal hover:bg-gray-700 text-white px-8 py-4 rounded-none text-lg font-normal"
            >
              Подобрать время
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-semibold mb-4">Ananda Space</div>
              <p className="text-gray-300 text-sm">
                Студия пилатеса для баланса тела и духа
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Навигация</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <a href="#why-us" className="block hover:text-white transition-colors">Почему мы</a>
                <a href="#services" className="block hover:text-white transition-colors">Услуги</a>
                <a href="#about" className="block hover:text-white transition-colors">О нас</a>
                <a href="#reviews" className="block hover:text-white transition-colors">Отзывы</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (933) 611-32-28
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Гагарина, 15
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  10:00-20:00
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="MessageCircle" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Send" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="MessageSquare" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-white text-charcoal hover:bg-gray-100 px-6 py-2 rounded-none text-sm font-normal"
                >
                  Подобрать время
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия обслуживания</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}