'use client';
import { Button } from './Button';
import { ItmoLogoIcon } from './icons/ItmoLogo';
import { DownArrowIcon, RusFlagIcon } from './icons';
import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <ItmoLogoIcon />
      <Button icon={<RusFlagIcon />} label="Рус" handleClick={() => {}} addOn={<DownArrowIcon />} />
    </header>
  );
};
