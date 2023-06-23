import { useState } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { locale } from '@/redux/selectors';

import { Language } from '@/models';

import styles from '@/styles/Header.module.scss';

import { Button } from './Button';
import { LanguageDropDown } from './LanguageDropDown';
import { DownArrowIcon, EngFlagIcon, RusFlagIcon } from './icons';

export const LanguageSwitcher = () => {
  const curLocale = useAppSelector(locale);

  return (
    <div className={styles.language_menu}>
      <Button
        icon={curLocale === 1 ? <RusFlagIcon /> : <EngFlagIcon />}
        label={curLocale === 1 ? Language.rusName : Language.engName}
        addOn={<DownArrowIcon />}
        isWhite
      />
      <div className={styles.language_selection}>
        <LanguageDropDown />
      </div>
    </div>
  );
};
