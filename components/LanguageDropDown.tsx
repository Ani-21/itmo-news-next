import { buttonsLanguage } from '../const/buttons';
import { Button } from './Button';
import styles from '../styles/Button.module.scss';

export const LanguageDropDown = () => {
  return (
    <div className={styles.dropDown}>
      <ul className={styles.menu}>
        {buttonsLanguage.map((btn) => (
          <li key={btn.label} className={styles.menuItem}>
            <Button label={btn.label} icon={btn.icon} handleClick={() => {}} />
          </li>
        ))}
      </ul>
    </div>
  );
};
