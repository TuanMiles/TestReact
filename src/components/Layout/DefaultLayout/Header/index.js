import styles from './Header.css'
import classNames from 'classnames';

function Header() {
    const cx = classNames.bind(styles);
    return <header className={cx('wrapper')}></header>
}

export default Header;