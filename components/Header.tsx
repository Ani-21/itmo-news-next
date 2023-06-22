'use client';
import { useState } from 'react';

import styles from '../styles/Header.module.scss';

import { ItmoLogoIcon } from './icons/ItmoLogo';
import { DownArrowIcon, RusFlagIcon } from './icons';

import { Button } from './Button';
import { LanguageDropDown } from './LanguageDropDown';

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className={styles.header}>
      <ItmoLogoIcon />
      <div className={styles.language_menu}>
        <Button
          icon={<RusFlagIcon />}
          label="Рус"
          handleClick={() => setIsMenuOpened((prev) => !prev)}
          addOn={<DownArrowIcon />}
          isWhite
        />
        <div className={styles.language_selection}>{isMenuOpened && <LanguageDropDown />}</div>
      </div>
    </header>
  );
};
