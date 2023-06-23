'use client';
import { useEffect } from 'react';
import { useRouter } from 'next-intl/client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { Language } from '@/models';
import { locale } from '@/redux/selectors';

import styles from '@/styles/Button.module.scss';

import { setLocale } from '@/redux/slices/newsSlice';

import { buttonsLanguage } from '@/const/buttons';

import { Button } from './Button';

export const LanguageDropDown = () => {
  const dispatch = useAppDispatch();
  const curLocale = useAppSelector(locale) === 1 ? Language.RUS : Language.ENG;
  const router = useRouter();

  useEffect(() => {
    router.push(curLocale);
  }, [curLocale, router]);

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
