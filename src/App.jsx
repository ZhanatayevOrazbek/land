import { useState } from "react";
import "./App.css";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="site">
            {/* Верхняя панель */}
            <header className="topbar">
                <div className="container topbar__row">
                    <div className="brand">Eventour</div>

                    <nav className="nav nav--desktop">
                        <a href="#contact">Связаться</a>
                        <a href="tel:+77056305594">+7 (705) 630 55 94</a>
                        <div className="social">
                            <SocialIcon type="tg" />
                            <SocialIcon type="ig" />
                        </div>
                    </nav>

                    <button
                        className="burger"
                        aria-label="Меню"
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M3 6h18M3 12h18M3 18h18"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="nav--mobile">
                        <div className="container">
                            <a href="#contact">Связаться</a>
                            <a href="tel:+77056305594">+7 (705) 630 55 94</a>
                            <div className="social">
                                <SocialIcon type="tg" />
                                <SocialIcon type="ig" />
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Главный блок */}
            <section className="hero" style={{ backgroundImage: "url('/3.png')" }}>
                <div className="hero__overlay" />
                <div className="container hero__inner">
                    <h1 className="hero__title">Eventour</h1>
                    <p className="hero__subtitle">
                        Маркетплейс развлекательных услуг для мероприятий
                    </p>
                    <div className="hero__actions">
                        <a href="#features" className="btn btn--light">
                            Посмотреть услуги
                        </a>
                        <a href="http://t.me/akii_ss" className="btn btn--primary">
                            Организовать событие!
                        </a>
                    </div>
                </div>
            </section>

            {/* Фотолента */}
            <section className="strip">
                <div className="container strip__grid">
                    <img src="/2.png" alt="Свадьба" className="strip__img" />
                    <img src="/1.png" alt="Вечеринка" className="strip__img" />
                </div>
            </section>

            {/* Преимущества */}
            <section id="features" className="features">
                <div className="container">
                    <div className="features__head">
                        <h2>Найдите всё для вашего идеального события</h2>
                        <p>
                            Откройте и забронируйте лучших артистов, площадки и услуги — всё
                            в одном месте.
                        </p>
                    </div>

                    <div className="features__grid">
                        <Feature
                            icon={<IconGrid />}
                            title="Широкий выбор услуг"
                            text="Ведущие, певцы, танцоры, фотографы и многое другое. Всё, что нужно вашему мероприятию — мы это организуем."
                        />
                        <Feature
                            icon={<IconShield />}
                            title="Проверенные площадки"
                            text="Найдите и забронируйте проверенные площадки — от уютных залов до больших банкетных помещений."
                        />
                        <Feature
                            icon={<IconSparkle />}
                            title="Подобранные таланты"
                            text="Мы тщательно отбираем лучших артистов и профессионалов, чтобы каждое событие стало незабываемым."
                        />
                        <Feature
                            icon={<IconBolt />}
                            title="Быстро и удобно"
                            text="Сравнивайте варианты, общайтесь напрямую и подтверждайте бронирование в несколько кликов."
                        />
                        <Feature
                            icon={<IconChat />}
                            title="Реальные отзывы"
                            text="Читайте честные отзывы клиентов, прежде чем сделать выбор."
                        />
                        <Feature
                            icon={<IconGift />}
                            title="Для любого повода"
                            text="От корпоративов до свадеб и дней рождения — у нас есть всё, чтобы ваше мероприятие прошло идеально."
                        />
                    </div>
                </div>
            </section>

            {/* Призыв к действию */}
            <section id="cta" className="cta">
                <div className="container cta__inner">
                    <h3>Сделайте ваше событие незабываемым</h3>
                    <p>Забронируйте таланты и площадки всего за несколько минут.</p>
                    <a href="http://t.me/akii_sst" className="btn btn--primary">
                        Организовать событие!
                    </a>
                </div>
            </section>

            {/* Подвал */}
            <footer id="contact" className="footer">
                <div className="container footer__inner">
                    <h4>Связаться с нами</h4>
                    <div className="social">
                        <a href="https://t.me/" aria-label="Telegram">
                            <SocialIcon type="tg" />
                        </a>
                        <a href="https://instagram.com/" aria-label="Instagram">
                            <SocialIcon type="ig" />
                        </a>
                    </div>
                    <p className="footer__copy">
                        © {new Date().getFullYear()} Eventour. Все права защищены.
                    </p>
                </div>
            </footer>
        </div>
    );
}

/* ---------- Компоненты ---------- */
function Feature({ icon, title, text }) {
    return (
        <div className="card">
            <div className="card__icon">{icon}</div>
            <div>
                <h3 className="card__title">{title}</h3>
                <p className="card__text">{text}</p>
            </div>
        </div>
    );
}

/* ---------- Иконки ---------- */
function SocialIcon({ type }) {
    if (type === "tg") {
        return (
            <svg width="20" height="20" viewBox="0 0 24 24" className="ico">
                <path
                    d="M9.5 13.5l-.3 4.2c.4 0 .5-.2.7-.4l1.7-1.6 3.5 2.6c.6.3 1 .1 1.1-.6l2-9.4c.2-.9-.3-1.3-1-1L5.1 10c-.9.3-.9.8-.2 1l3.7 1.1 8.6-5.4-7.1 6.8z"
                    fill="currentColor"
                />
            </svg>
        );
    }
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" className="ico">
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
    );
}

/* ---------- Мини-иконки ---------- */
function IconGrid() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" className="ico--accent">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
        </svg>
    );
}
function IconShield() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" className="ico--accent">
            <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    );
}
function IconSparkle() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" className="ico--accent">
            <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" />
        </svg>
    );
}
function IconBolt() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" className="ico--accent">
            <path d="M13 2L3 14h7v8l11-14h-7l-1-6z" />
        </svg>
    );
}
function IconChat() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" className="ico--accent">
            <path d="M21 11.5a7.5 7.5 0 10-3.4 6.3L21 21l-.9-3.6a7.4 7.4 0 00.6-2z" />
        </svg>
    );
}
function IconGift() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" className="ico--accent">
            <path d="M20 12v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8M22 7H2v5h20V7z" />
            <path d="M12 7v15M7 7s-1.5-4 2-4 3 4 3 4M17 7s1.5-4-2-4-3 4-3 4" />
        </svg>
    );
}
