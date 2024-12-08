import icon from '../../assets/icon.png';
import './Header.module.scss';


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={icon} alt="App Logo" />
                <h1>FlashLingua</h1>
            </div>
            <nav className="header__menu">
                <button className="menu-button">Список слов</button>
                <button className="menu-button">Мой словарь</button>
                <button className="menu-button">Карточки слов</button>
            </nav>
        </header>
    );
};

export default Header;
