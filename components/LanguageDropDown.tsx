import { useAppDispatch } from '@/redux/hooks';

import { setLocale } from '../redux/slices/newsSlice';

import styles from '../styles/Button.module.scss';

import { buttonsLanguage } from '../const/buttons';

import { Button } from './Button';

export const LanguageDropDown = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.dropDown}>
      <ul className={styles.menu}>
        {buttonsLanguage.map((btn) => (
          <li key={btn.label} className={styles.menuItem}>
            <Button label={btn.label} icon={btn.icon} handleClick={() => dispatch(setLocale(btn.id))} />
          </li>
        ))}
      </ul>
    </div>
  );
};
