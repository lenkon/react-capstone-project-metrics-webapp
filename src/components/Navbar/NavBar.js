import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.displayFlex}>
      <NavLink to="/">
        {' '}
      </NavLink>
      <div className={styles.title}>
        <h1>Community TV Data</h1>
      </div>
      <div className={styles.icons}>
        <FaMicrophone size={24} />
        <FaCog size={24} />
      </div>
    </div>
  );
}
