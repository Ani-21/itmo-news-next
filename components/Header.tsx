'use client';
import Link from 'next/link';

import styles from '@/styles/Header.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { locale } from '@/redux/selectors';

import { ItmoLogoIcon } from './icons/ItmoLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const curLocale = useAppSelector(locale);
  return (
    <header className={styles.header}>
      <Link href="/">
        <ItmoLogoIcon isEng={curLocale === 2} />
      </Link>
      <LanguageSwitcher />
    </header>
  );
};
