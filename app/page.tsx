import {
  Shield,
  Zap,
  Gift,
  Smartphone,
  CreditCard,
  Bitcoin,
  Wallet,
  Clock,
  CheckCircle2,
  Star,
  ChevronDown,
  Trophy,
  Gamepad2,
  Lock,
  Mail,
  User,
  Phone,
  ArrowRight,
  Sparkles,
  Flame,
  Crown,
  Users,
  MessageSquare,
  Copy,
} from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gold-gradient sm:h-10 sm:w-10">
              <span className="text-base font-black text-primary-foreground sm:text-lg">
                LB
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight sm:text-lg">
                Lucky Bear
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-primary sm:text-xs">
                Casino
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#overview" className="transition-colors hover:text-primary">
              Обзор
            </a>
            <a href="#mirror" className="transition-colors hover:text-primary">
              Зеркало
            </a>
            <a href="#slots" className="transition-colors hover:text-primary">
              Слоты
            </a>
            <a href="#register" className="transition-colors hover:text-primary">
              Регистрация
            </a>
            <a href="#bonuses" className="transition-colors hover:text-primary">
              Бонусы
            </a>
            <a href="#payments" className="transition-colors hover:text-primary">
              Выплаты
            </a>
            <a href="#mobile" className="transition-colors hover:text-primary">
              Мобильная
            </a>
            <a href="#faq" className="transition-colors hover:text-primary">
              FAQ
            </a>
          </nav>
          <a
            href="#register"
            className="inline-flex items-center gap-1.5 rounded-lg gold-gradient px-3 py-2 text-xs font-bold text-primary-foreground transition-transform hover:scale-105 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Вход / Регистрация
          </a>
        </div>
      </header>

      <main>
        <article>
          {/* Hero Section */}
          <section className="relative overflow-hidden border-b border-border/50">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at top, oklch(0.82 0.16 85 / 0.15) 0%, transparent 60%)',
              }}
            />
            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:mb-6 sm:text-sm">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Рабочее зеркало на сегодня — вход открыт
                </div>
                <h1 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="gold-text">Lucky Bear Casino</span> —
                  официальный сайт и зеркало для игры онлайн
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
                  Лаки Бир Казино — лицензионное онлайн-казино с моментальным
                  выводом через СБП за 5 минут, приветственным бонусом 100% и
                  фриспинами. Играйте в слоты, рулетку и live-игры без блокировок.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                    <Shield className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                    Лицензия Кюрасао
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                    <Zap className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                    Выплаты СБП 5 мин
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                    <Gift className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Бонус 100% + 200 FS
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                  <a
                    href="#register"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl gold-gradient px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/40 sm:w-auto sm:px-8 sm:text-lg"
                  >
                    <User className="h-5 w-5" />
                    Войти и играть
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href="#mirror"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-base font-semibold backdrop-blur transition-colors hover:bg-card sm:w-auto sm:px-8 sm:text-lg"
                  >
                    <Lock className="h-5 w-5 text-primary" />
                    Актуальное зеркало
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-6">
                  <div className="rounded-xl border border-border/50 bg-card/40 p-3 backdrop-blur sm:p-4">
                    <div className="text-2xl font-black text-primary sm:text-3xl">
                      5000+
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Игровых автоматов
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-card/40 p-3 backdrop-blur sm:p-4">
                    <div className="text-2xl font-black text-primary sm:text-3xl">
                      5 мин
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Вывод через СБП
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-card/40 p-3 backdrop-blur sm:p-4">
                    <div className="text-2xl font-black text-primary sm:text-3xl">
                      100%
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Бонус на депозит
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Official Site Overview */}
          <section
            id="overview"
            className="border-b border-border/50 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Crown className="h-3.5 w-3.5" />
                Обзор казино
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Lucky Bear Casino — официальный сайт и обзор казино{' '}
                <span className="gold-text">Лаки Бир</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  <strong className="text-foreground">
                    Lucky Bear Casino
                  </strong>{' '}
                  — это современное лицензионное онлайн-казино, работающее с
                  2021 года под лицензией Кюрасао (№8048/JAZ). Бренд{' '}
                  <strong className="text-foreground">Lucky Bear Casino</strong>{' '}
                  ориентирован на русскоязычных игроков и предлагает полный
                  спектр азартных развлечений: слоты, рулетку, блэкджек, баккару,
                  live-казино с живыми дилерами и ставки на спорт. Официальный
                  сайт <strong className="text-foreground">luckybear casino</strong>{' '}
                  переведён на 12 языков, включая русский, и принимает игроков из
                  России, Казахстана, Беларуси и других стран СНГ.
                </p>
                <p>
                  <strong className="text-foreground">
                    Luckybear casino официальный
                  </strong>{' '}
                  сайт работает на собственном софте с интеграцией более 60
                  провайдеров: Pragmatic Play, NetEnt, Microgaming, Play&apos;n GO,
                  Evolution Gaming, Yggdrasil, Quickspin, Endorphina и других.
                  Каталог насчитывает свыше 5000 игровых автоматов с RTP от 94%
                  до 98,5%. Средний показатель возврата по всем слотам{' '}
                  <strong className="text-foreground">лаки бир казино</strong>{' '}
                  составляет 96,2%, что соответствует стандартам индустрии и
                  гарантирует честную игру.
                </p>
                <p>
                  Платформа <strong className="text-foreground">лаки бир казино</strong>{' '}
                  использует сертифицированный генератор случайных чисел (RNG),
                  который регулярно проверяется независимыми аудиторами из
                  eCOGRA и iTech Labs. Все финансовые операции защищены
                  256-битным SSL-шифрованием, а личные данные игроков хранятся
                  на защищённых серверах в соответствии с политикой GDPR. На
                  сайте <strong className="text-foreground">luckybear casino официальный сайт</strong>{' '}
                  действует двухуровневая верификация аккаунта и система
                  ответственной игры с возможностью установить лимиты на депозиты
                  и ставки.
                </p>
                <p>
                  Интерфейс <strong className="text-foreground">
                    Lucky Bear Casino
                  </strong>{' '}
                  интуитивно понятен даже новичкам: на главной странице
                  расположены баннеры с актуальными акциями, быстрый доступ к
                  популярным слотам, раздел live-казино и панель поиска игр по
                  провайдеру, жанру или названию. Служба поддержки работает
                  круглосуточно на русском языке через онлайн-чат, email и
                  Telegram-бот. Среднее время ответа оператора — менее 2 минут.
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                <li className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-bold text-foreground">
                      Лицензия Кюрасао
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Легальная деятельность с 2021 года
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-bold text-foreground">
                      5000+ слотов
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      От 60+ провайдеров с RTP до 98,5%
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-bold text-foreground">
                      Выплаты за 5 минут
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      СБП, карты, криптовалюта
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-bold text-foreground">
                      Поддержка 24/7
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Чат, email, Telegram на русском
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Mirror */}
          <section
            id="mirror"
            className="border-b border-border/50 bg-card/20 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Lock className="h-3.5 w-3.5" />
                Обход блокировок
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Luckybear Casino зеркало — рабочее зеркало на сегодня и вход
                при блокировке
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  <strong className="text-foreground">
                    Luckybear Casino зеркало
                  </strong>{' '}
                  — это точная копия официального сайта, размещённая на
                  альтернативном домене. Зеркало{' '}
                  <strong className="text-foreground">лаки бир казино зеркало</strong>{' '}
                  полностью дублирует функционал основного ресурса: личный
                  кабинет, баланс, историю ставок, бонусы и турниры. Игроку не
                  нужно создавать новый аккаунт — достаточно войти под
                  существующим логином и паролем, и все данные будут доступны в
                  полном объёме.
                </p>
                <p>
                  Зеркала <strong className="text-foreground">luckybear casino</strong>{' '}
                  создаются для обхода блокировок интернет-провайдеров, которые
                  ограничивают доступ к азартным ресурсам на территории России.
                  Каждое рабочее зеркало{' '}
                  <strong className="text-foreground">лаки бир казино зеркало</strong>{' '}
                  использует тот же SSL-сертификат и ту же базу данных, что и
                  основной сайт, поэтому безопасность и конфиденциальность
                  игроков сохраняются на 100%. Список актуальных зеркал
                  обновляется ежедневно и публикуется в Telegram-канале{' '}
                  <strong className="text-foreground">Lucky Bear Casino</strong>.
                </p>
                <p>
                  Чтобы найти рабочее зеркало{' '}
                  <strong className="text-foreground">luckybear casino</strong>{' '}
                  на сегодня, воспользуйтесь одним из проверенных способов:
                  подпишитесь на официальный Telegram-канал казино, добавьте
                  сайт в закладки через email-рассылку или запросите актуальную
                  ссылку у службы поддержки в live-чате. Также можно
                  использовать VPN-сервис или браузер Tor для прямого доступа к{' '}
                  <strong className="text-foreground">luckybear casino зеркало</strong>.
                </p>
                <p>
                  Если основной сайт или зеркало{' '}
                  <strong className="text-foreground">лаки бир казино зеркало</strong>{' '}
                  недоступны, попробуйте очистить кэш браузера, переключиться
                  на мобильный интернет или воспользоваться функцией
                  «Турбо-режим» в Opera. В 99% случаев один из альтернативных
                  доменов <strong className="text-foreground">Lucky Bear Casino</strong>{' '}
                  работает стабильно. Все зеркала проходят регулярную проверку
                  на доступность и автоматически обновляются при блокировке.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5 sm:mt-10 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gold-gradient sm:h-12 sm:w-12">
                    <Copy className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-foreground sm:text-base">
                      Актуальное зеркало на сегодня
                    </div>
                    <div className="mt-1 break-all font-mono text-xs text-primary sm:text-sm">
                      https://luckybear22casino.vercel.app/
                    </div>
                    <a
                      href="#register"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline sm:text-sm"
                    >
                      Перейти на зеркало
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Slots */}
          <section
            id="slots"
            className="border-b border-border/50 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Gamepad2 className="h-3.5 w-3.5" />
                Игровой зал
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Слоты и игровые автоматы онлайн в{' '}
                <span className="gold-text">Lucky Bear Kazino</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  <strong className="text-foreground">Lucky Bear Kazino</strong>{' '}
                  предлагает более 5000 игровых автоматов от ведущих мировых
                  провайдеров. В каталоге{' '}
                  <strong className="text-foreground">лаки бир казино онлайн</strong>{' '}
                  представлены классические слоты с фруктами, современные
                  видеослоты с 3D-графикой, Megaways-автоматы с тысячами линий
                  выплат, а также эксклюзивные игры, выпущенные специально для
                  бренда <strong className="text-foreground">Lucky Bear Casino</strong>.
                  Все слоты доступны в демо-режиме без регистрации — можно
                  тестировать механики и бонусные функции бесплатно.
                </p>
                <p>
                  Средний RTP (процент возврата игроку) в{' '}
                  <strong className="text-foreground">lucky bear kazino</strong>{' '}
                  составляет 96,2%, что является одним из лучших показателей на
                  рынке. Самые «дающие» слоты с RTP выше 97% собраны в
                  отдельном разделе «Топ RTP». Среди них: Book of 99 (99%),
                  Mega Joker (99%), 1429 Uncharted Seas (98,6%), Blood Suckers
                  (98%) и Starburst (96,1%). Играть в{' '}
                  <strong className="text-foreground">лаки бир казино онлайн</strong>{' '}
                  можно как на реальные деньги, так и в бесплатном режиме.
                </p>
                <p>
                  Помимо слотов, в{' '}
                  <strong className="text-foreground">Lucky Bear Kazino</strong>{' '}
                  доступны настольные игры: европейская и американская рулетка,
                  блэкджек, баккара, покер, крэпс и сик бо. Раздел live-казино
                  предлагает более 200 столов с живыми дилерами от Evolution
                  Gaming, Pragmatic Play Live и Ezugi. Ставки в live-играх
                  начинаются от 50 рублей, а для хайроллеров предусмотрены VIP-столы
                  с лимитами до 500 000 рублей за раунд.
                </p>
              </div>

              {/* Providers Table */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border/50 bg-card/40 sm:mt-10">
                <div className="border-b border-border/50 bg-card/60 px-4 py-3 sm:px-6 sm:py-4">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    Топ провайдеры и RTP слотов
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-border/50 bg-card/30 text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-semibold sm:px-6 sm:py-4">
                          Провайдер
                        </th>
                        <th className="px-4 py-3 font-semibold sm:px-6 sm:py-4">
                          Игры
                        </th>
                        <th className="px-4 py-3 font-semibold sm:px-6 sm:py-4">
                          Средний RTP
                        </th>
                        <th className="px-4 py-3 font-semibold sm:px-6 sm:py-4">
                          Топ слот
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      <tr className="transition-colors hover:bg-card/40">
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          Pragmatic Play
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          450+
                        </td>
                        <td className="px-4 py-3 font-bold text-primary sm:px-6 sm:py-4">
                          96,5%
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          Gates of Olympus
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-card/40">
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          NetEnt
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          380+
                        </td>
                        <td className="px-4 py-3 font-bold text-primary sm:px-6 sm:py-4">
                          96,3%
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          Starburst
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-card/40">
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          Play&apos;n GO
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          320+
                        </td>
                        <td className="px-4 py-3 font-bold text-primary sm:px-6 sm:py-4">
                          96,2%
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          Book of Dead
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-card/40">
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          Microgaming
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          500+
                        </td>
                        <td className="px-4 py-3 font-bold text-primary sm:px-6 sm:py-4">
                          96,1%
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          Mega Moolah
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-card/40">
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          Evolution Gaming
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          200+ Live
                        </td>
                        <td className="px-4 py-3 font-bold text-primary sm:px-6 sm:py-4">
                          97,0%
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          Lightning Roulette
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-card/40">
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          Yggdrasil
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          180+
                        </td>
                        <td className="px-4 py-3 font-bold text-primary sm:px-6 sm:py-4">
                          96,4%
                        </td>
                        <td className="px-4 py-3 text-muted-foreground sm:px-6 sm:py-4">
                          Vikings Go Berzerk
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Registration */}
          <section
            id="register"
            className="border-b border-border/50 bg-card/20 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <User className="h-3.5 w-3.5" />
                Начало игры
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Регистрация в{' '}
                <span className="gold-text">Лаки Бир Казино официальный сайт</span>{' '}
                — пошаговая инструкция
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  Создать аккаунт на{' '}
                  <strong className="text-foreground">
                    лаки бир казино официальный сайт
                  </strong>{' '}
                  можно за 30 секунд. Регистрация доступна только совершеннолетним
                  игрокам (18+). Для жителей России, Казахстана и Беларуси
                  предусмотрена упрощённая форма через{' '}
                  <strong className="text-foreground">лакибир казино официальный сайт</strong>{' '}
                  — достаточно указать номер телефона и подтвердить его SMS-кодом.
                  После регистрации игрок получает доступ ко всем разделам{' '}
                  <strong className="text-foreground">лаки бир казино официальный</strong>{' '}
                  казино: слотам, live-играм, бонусам и турнирам.
                </p>
                <p>
                  Перед первым выводом средств необходимо пройти верификацию —
                  подтвердить личность и адрес проживания. Для этого загрузите
                  фото паспорта или водительского удостоверения в личном
                  кабинете <strong className="text-foreground">лаки бир казино</strong>{' '}
                  и дождитесь проверки документов службой безопасности (обычно
                  занимает не более 24 часов). Верификация — это стандартная
                  процедура KYC, которая защищает аккаунт от мошенников и
                  обеспечивает безопасность выплат.
                </p>
              </div>

              <ol className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
                <li className="flex gap-3 rounded-xl border border-border/50 bg-card/40 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground sm:h-10 sm:w-10 sm:text-base">
                    1
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground sm:text-lg">
                      Перейдите на официальный сайт
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      Откройте{' '}
                      <strong className="text-foreground">
                        luckybear casino официальный сайт
                      </strong>{' '}
                      или рабочее зеркало. Нажмите кнопку «Регистрация» в
                      правом верхнем углу.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 rounded-xl border border-border/50 bg-card/40 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground sm:h-10 sm:w-10 sm:text-base">
                    2
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground sm:text-lg">
                      Выберите способ регистрации
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      Доступна регистрация по номеру телефона, email или через
                      социальные сети (VK, Google, Telegram). Самый быстрый
                      способ — по номеру телефона.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 rounded-xl border border-border/50 bg-card/40 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground sm:h-10 sm:w-10 sm:text-base">
                    3
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground sm:text-lg">
                      Заполните форму
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      Укажите номер телефона или email, придумайте надёжный
                      пароль (минимум 8 символов) и выберите валюту счёта (RUB,
                      KZT, USD, EUR, BTC).
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 rounded-xl border border-border/50 bg-card/40 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground sm:h-10 sm:w-10 sm:text-base">
                    4
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground sm:text-lg">
                      Подтвердите аккаунт
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      Введите SMS-код или перейдите по ссылке из письма. После
                      подтверждения аккаунт{' '}
                      <strong className="text-foreground">
                        лакибир казино официальный сайт
                      </strong>{' '}
                      будет активирован.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 rounded-xl border border-border/50 bg-card/40 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground sm:h-10 sm:w-10 sm:text-base">
                    5
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground sm:text-lg">
                      Внесите первый депозит
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      Пополните счёт от 500 рублей через СБП, карту или
                      криптовалюту. Бонус 100% + 200 фриспинов начислится
                      автоматически.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 5: Bonuses */}
          <section
            id="bonuses"
            className="border-b border-border/50 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Gift className="h-3.5 w-3.5" />
                Акции и бонусы
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Бонусы, фриспины и кэшбэк в{' '}
                <span className="gold-text">Luckybear Casino</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  Бонусная программа{' '}
                  <strong className="text-foreground">Luckybear Casino</strong>{' '}
                  — одна из самых щедрых на рынке СНГ. Новые игроки получают
                  приветственный пакет на первые три депозита: 100% бонус до
                  100 000 рублей + 200 фриспинов на первый депозит, 75% до 75
                  000 рублей + 100 FS на второй и 50% до 50 000 рублей + 50 FS
                  на третий. Вейджер на бонусные средства — x40, на
                  фриспины — x35. Отыгрыш возможен в любых слотах{' '}
                  <strong className="text-foreground">luckybear casino</strong>{' '}
                  с учётом веса ставок.
                </p>
                <p>
                  Для постоянных игроков{' '}
                  <strong className="text-foreground">Lucky Bear Casino</strong>{' '}
                  предлагает еженедельный кэшбэк до 20% от проигранных средств,
                  который начисляется каждый понедельник. Кэшбэк не требует
                  отыгрыша и доступен для вывода сразу после зачисления. Также
                  действует программа лояльности с 7 уровнями: от «Новичка» до
                  «Легенды». За каждые 1000 рублей ставок начисляется 1
                  бонусный балл, который можно обменять на реальные деньги или
                  фриспины.
                </p>
                <p>
                  В <strong className="text-foreground">luckybear casino</strong>{' '}
                  регулярно проходят турниры с призовым фондом от 500 000 до 5
                  000 000 рублей. Самые популярные события — «Гонка слотов»,
                  «Live-чемпионат» и «Крипто-турнир» с джекпотом в
                  биткоинах. Участие бесплатное — достаточно делать ставки в
                  указанных играх в период турнира. Также казино{' '}
                  <strong className="text-foreground">Lucky Bear Casino</strong>{' '}
                  разыгрывает прогрессивные джекпоты: Mega Moolah, Divine
                  Fortune и Major Millions с призами до 50 000 000 рублей.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gold-gradient sm:h-12 sm:w-12">
                    <Gift className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-3 text-xl font-black text-primary sm:mt-4 sm:text-2xl">
                    100%
                  </div>
                  <div className="mt-1 text-sm font-bold text-foreground sm:text-base">
                    Бонус на депозит
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    До 100 000 ₽ + 200 FS на первый депозит
                  </p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-card/40 p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary sm:h-12 sm:w-12">
                    <Flame className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-3 text-xl font-black text-primary sm:mt-4 sm:text-2xl">
                    20%
                  </div>
                  <div className="mt-1 text-sm font-bold text-foreground sm:text-base">
                    Еженедельный кэшбэк
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    Возврат каждую неделю без отыгрыша
                  </p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-card/40 p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary sm:h-12 sm:w-12">
                    <Trophy className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-3 text-xl font-black text-primary sm:mt-4 sm:text-2xl">
                    5М ₽
                  </div>
                  <div className="mt-1 text-sm font-bold text-foreground sm:text-base">
                    Призовой фонд
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    Еженедельные турниры и джекпоты
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Payments */}
          <section
            id="payments"
            className="border-b border-border/50 bg-card/20 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Wallet className="h-3.5 w-3.5" />
                Финансы
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Вывод средств и депозиты в{' '}
                <span className="gold-text">Лаки Бир Казино сайт</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  <strong className="text-foreground">Лаки Бир Казино сайт</strong>{' '}
                  поддерживает все популярные платёжные методы для игроков из
                  России и СНГ. Минимальный депозит — 500 рублей, минимальный
                  вывод — 1000 рублей. Пополнение счёта происходит мгновенно
                  без комиссии со стороны казино. Вывод средств на{' '}
                  <strong className="text-foreground">лакибир казино</strong>{' '}
                  обрабатывается в течение 5 минут через Систему Быстрых
                  Платежей (СБП), что является одним из лучших показателей на
                  рынке.
                </p>
                <p>
                  Для депозитов и выводов на{' '}
                  <strong className="text-foreground">лаки бир казино сайт</strong>{' '}
                  доступны: банковские карты Visa/Mastercard/МИР, СБП (Сбербанк,
                  Тинькофф, Альфа-Банк, ВТБ), электронные кошельки (ЮMoney,
                  Qiwi, WebMoney), мобильные платежи (МТС, Билайн, МегаФон,
                  Tele2) и криптовалюты (Bitcoin, Ethereum, Litecoin, USDT).
                  Комиссия за вывод отсутствует при сумме от 1000 рублей.
                </p>
                <p>
                  VIP-игроки{' '}
                  <strong className="text-foreground">лакибир казино</strong>{' '}
                  получают персонального менеджера и повышенные лимиты на вывод
                  — до 5 000 000 рублей в сутки. Для всех остальных игроков
                  действуют стандартные лимиты: до 500 000 рублей в сутки, до 3
                  000 000 рублей в неделю и до 10 000 000 рублей в месяц. При
                  выводе крупных сумм может потребоваться дополнительная
                  верификация — это стандартная процедура безопасности.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-xl border border-border/50 bg-card/40 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground sm:text-base">
                        СБП
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Вывод за 5 минут
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border/50 bg-card/40 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground sm:text-base">
                        Карты
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Visa, MC, МИР
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border/50 bg-card/40 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Bitcoin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground sm:text-base">
                        Крипта
                      </div>
                      <div className="text-xs text-muted-foreground">
                        BTC, ETH, USDT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Mobile */}
          <section
            id="mobile"
            className="border-b border-border/50 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Smartphone className="h-3.5 w-3.5" />
                Мобильная версия
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Мобильная версия{' '}
                <span className="gold-text">Lucky Bear Casino</span> для
                смартфонов
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base lg:text-lg">
                <p>
                  <strong className="text-foreground">Lucky Bear Casino</strong>{' '}
                  полностью адаптирован для мобильных устройств. Мобильная
                  версия сайта работает на iOS и Android без необходимости
                  скачивать приложение — достаточно открыть{' '}
                  <strong className="text-foreground">luckybear casino</strong>{' '}
                  в браузере смартфона. Интерфейс автоматически подстраивается
                  под размер экрана: кнопки увеличены для удобного нажатия,
                  меню упрощено, а слоты загружаются в полноэкранном режиме с
                  горизонтальной ориентацией.
                </p>
                <p>
                  Для пользователей Android доступно нативное приложение{' '}
                  <strong className="text-foreground">Lucky Bear Casino</strong>{' '}
                  в формате APK. Приложение весит всего 25 МБ, работает на
                  устройствах с Android 6.0 и выше и поддерживает push-уведомления
                  о новых бонусах и турнирах. Для iOS приложение пока
                  недоступно в App Store, но мобильная версия сайта в Safari
                  работает без ограничений и поддерживает функцию «Добавить на
                  главный экран» для быстрого доступа.
                </p>
                <p>
                  Мобильная версия{' '}
                  <strong className="text-foreground">luckybear casino</strong>{' '}
                  сохраняет весь функционал десктопной: регистрацию, депозиты,
                  выводы, бонусы, турниры и live-казино. Играть в слоты на
                  смартфоне так же удобно, как и на компьютере — все игры
                  оптимизированы для сенсорного управления и поддерживают
                  портретную и ландшафтную ориентацию. Среднее время загрузки
                  слота на мобильном устройстве — менее 3 секунд при
                  стабильном 4G-соединении.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <div className="mt-3 text-base font-bold text-foreground sm:text-lg">
                    iOS
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Мобильная версия в Safari. Поддержка iPhone и iPad с iOS
                    12+. Функция «Добавить на главный экран».
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <div className="mt-3 text-base font-bold text-foreground sm:text-lg">
                    Android
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Нативное приложение APK (25 МБ) или мобильная версия в
                    Chrome. Поддержка Android 6.0+.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="faq"
            className="border-b border-border/50 bg-card/20 py-12 sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <MessageSquare className="h-3.5 w-3.5" />
                Частые вопросы
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                FAQ — ответы на частые вопросы о{' '}
                <span className="gold-text">Lucky Bear Casino</span>
              </h2>

              <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
                <details className="group rounded-xl border border-border/50 bg-card/40 open:bg-card/60 open:ring-1 open:ring-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 text-sm font-bold text-foreground sm:p-5 sm:text-base">
                    <span>
                      Как найти рабочее зеркало Lucky Bear Casino на сегодня?
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5 sm:text-base">
                    <p>
                      Актуальное зеркало{' '}
                      <strong className="text-foreground">
                        luckybear casino зеркало
                      </strong>{' '}
                      можно получить тремя способами: подписаться на
                      Telegram-канал{' '}
                      <strong className="text-foreground">
                        Lucky Bear Casino
                      </strong>
                      , запросить ссылку у службы поддержки в live-чате или
                      подписаться на email-рассылку. Все зеркала{' '}
                      <strong className="text-foreground">
                        лаки бир казино зеркало
                      </strong>{' '}
                      обновляются ежедневно и гарантируют полный доступ ко всем
                      функциям казино.
                    </p>
                  </div>
                </details>

                <details className="group rounded-xl border border-border/50 bg-card/40 open:bg-card/60 open:ring-1 open:ring-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 text-sm font-bold text-foreground sm:p-5 sm:text-base">
                    <span>
                      Как зарегистрироваться в Лаки Бир Казино официальный сайт?
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5 sm:text-base">
                    <p>
                      Регистрация на{' '}
                      <strong className="text-foreground">
                        лаки бир казино официальный сайт
                      </strong>{' '}
                      занимает 30 секунд. Нажмите кнопку «Регистрация»,
                      укажите номер телефона или email, придумайте пароль и
                      подтвердите аккаунт SMS-кодом. После регистрации на{' '}
                      <strong className="text-foreground">
                        лакибир казино официальный сайт
                      </strong>{' '}
                      вы получите бонус 100% на первый депозит.
                    </p>
                  </div>
                </details>

                <details className="group rounded-xl border border-border/50 bg-card/40 open:bg-card/60 open:ring-1 open:ring-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 text-sm font-bold text-foreground sm:p-5 sm:text-base">
                    <span>
                      Какие слоты доступны в Lucky Bear Kazino?
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5 sm:text-base">
                    <p>
                      В каталоге{' '}
                      <strong className="text-foreground">
                        lucky bear kazino
                      </strong>{' '}
                      более 5000 игровых автоматов от 60+ провайдеров: Pragmatic
                      Play, NetEnt, Microgaming, Play&apos;n GO, Evolution Gaming и
                      других. Средний RTP — 96,2%. Играть в{' '}
                      <strong className="text-foreground">
                        лаки бир казино онлайн
                      </strong>{' '}
                      можно бесплатно в демо-режиме или на реальные деньги.
                    </p>
                  </div>
                </details>

                <details className="group rounded-xl border border-border/50 bg-card/40 open:bg-card/60 open:ring-1 open:ring-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 text-sm font-bold text-foreground sm:p-5 sm:text-base">
                    <span>
                      Как быстро вывести деньги с Лаки Бир Казино сайт?
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5 sm:text-base">
                    <p>
                      Вывод средств с{' '}
                      <strong className="text-foreground">
                        лаки бир казино сайт
                      </strong>{' '}
                      через СБП занимает 5 минут. Также доступны выводы на
                      банковские карты (до 24 часов), электронные кошельки (до
                      2 часов) и криптовалюты (до 30 минут). Минимальная сумма
                      вывода — 1000 рублей. Комиссия отсутствует.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="border-b border-border/50 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Users className="h-3.5 w-3.5" />
                Отзывы игроков
              </div>
              <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Отзывы реальных игроков о{' '}
                <span className="gold-text">Lucky Bear Casino</span>
              </h2>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground">
                      АК
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        Алексей К.
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Играю в{' '}
                    <strong className="text-foreground">
                      Lucky Bear Casino
                    </strong>{' '}
                    уже год. Вывод через СБП реально приходит за 5 минут.
                    Слоты не подкручивают — проверял на длинной дистанции.
                    Отличное казино!
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    2 дня назад
                  </div>
                </article>

                <article className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground">
                      МС
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        Мария С.
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Бонус на первый депозит 100% — реально отыграла за 3 дня.
                    Зеркало{' '}
                    <strong className="text-foreground">
                      luckybear casino
                    </strong>{' '}
                    всегда работает, поддержка отвечает быстро. Рекомендую!
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    5 дней назад
                  </div>
                </article>

                <article className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground">
                      ДВ
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        Дмитрий В.
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Выиграл в Gates of Olympus 87 000 рублей на{' '}
                    <strong className="text-foreground">
                      лаки бир казино
                    </strong>
                    . Вывели за 4 минуты на карту. Честное казино с быстрыми
                    выплатами.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    1 неделю назад
                  </div>
                </article>

                <article className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground">
                      ЕН
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        Елена Н.
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Мобильная версия{' '}
                    <strong className="text-foreground">
                      Lucky Bear Casino
                    </strong>{' '}
                    работает идеально на iPhone. Играю в метро, на работе в
                    обед — всё летает. Удобное приложение!
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    2 недели назад
                  </div>
                </article>

                <article className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground">
                      ИП
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        Игорь П.
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Кэшбэк 20% каждую неделю — реально помогает. В{' '}
                    <strong className="text-foreground">
                      luckybear casino
                    </strong>{' '}
                    играю полгода, ни разу не было проблем с выводом.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    3 недели назад
                  </div>
                </article>

                <article className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-sm font-black text-primary-foreground">
                      ОЛ
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        Ольга Л.
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Live-казино в{' '}
                    <strong className="text-foreground">
                      Lucky Bear Casino
                    </strong>{' '}
                    — огонь! Дилеры профессиональные, стримы в HD. Играю в
                    рулетку каждый вечер.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    1 месяц назад
                  </div>
                </article>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          {/* Hashtag Cloud */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground sm:text-base">
              Популярные запросы
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                '#LuckyBearCasino',
                '#LuckybearCasino',
                '#LuckybearCasinoОфициальный',
                '#LuckyBearKazino',
                '#ЛакиБирКазино',
                '#ЛакибирКазино',
                '#ЛакиБирКазиноЗеркало',
                '#ЛакиБирКазиноОнлайн',
                '#ЛакиБирКазиноОфициальный',
                '#ЛакиБирКазиноОфициальныйСайт',
                '#ЛакибирКазиноОфициальныйСайт',
                '#ЛакиБирКазиноСайт',
                '#LuckybearCasinoЗеркало',
                '#LuckybearCasinoОфициальныйСайт',
                '#БрендЗеркало',
                '#БрендИграть',
                '#БрендБонус',
                '#БрендРегистрация',
                '#БрендВывод',
                '#БрендСлоты',
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="rounded-full border border-border/50 bg-card/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:text-sm"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-semibold text-foreground">
                  support@luckybear22casino.vercel.app
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
              <MessageSquare className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Live-чат</div>
                <div className="text-sm font-semibold text-foreground">
                  24/7 на русском
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Telegram</div>
                <div className="text-sm font-semibold text-foreground">
                  @luckybear_support
                </div>
              </div>
            </div>
          </div>

          {/* 18+ and Copyright */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row sm:pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-destructive bg-destructive/10 text-sm font-black text-destructive">
                18+
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Играйте ответственно. Азартные игры доступны только
                совершеннолетним (18+).
              </p>
            </div>
            <div className="text-center text-xs text-muted-foreground sm:text-right sm:text-sm">
              <div>© 2026 Lucky Bear Casino. Все права защищены.</div>
              <div className="mt-1">
                Лицензия Кюрасао №8048/JAZ. luckybear22casino.vercel.app
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
