import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const data = [
    {title: 'Главная', url: '/OtAdoYa'},
    {title: 'Отзывы', url: '/OtAdoYa/reviews'},
/*     {title: 'Оплата', url: '/OtAdoYa/basket'}, */
/*     {title: 'Доставка', url: '/OtAdoYa/basket'}, */
    {title: 'О нас', url: '/OtAdoYa/about'},
    {title: 'Контакты', url: '/OtAdoYa/contacts'},
]

const ItemOne = () => <div className={styles.itemOne}>
    <h3>От А до Я</h3>
</div>

const ItemTwo = () => <div className={styles.itemTwo}>
    <h4>Оптово-розничная продажа</h4>
    <h4>кондитерскими изделиями</h4>
</div>

const ItemThree = () => <div className={styles.itemTwo}>
        <a href="tel:+78782210133">
            <h1>+7 (8782) 21‒01‒33</h1>
        </a>
    <h5>Звонки с мобильных и городских бесплатный</h5>
    <div className={styles.itemButtons}>
    <a href="tel:+78782210133">
        <button>Статус заказа</button>
    </a>
    <a href="mailto:murzakuv@bk.ru">
        <button>Заказать звонков</button>
    </a>
    </div>
    
</div>

const Nav = () => {
    return <nav className={styles.navWrapper}>
         {data.map(item => <NavLink to={item.url} key={item.title}>
             <span style={{padding: '1em 5px'}}>
                 {item.title}
            </span></NavLink>)}
    </nav>
}

export default function Header() {
    return <>
        <div className={styles.wrapper}>
            <ItemOne />
            <ItemTwo />
            <ItemThree />
        </div>
        <Nav />
    </>
}

