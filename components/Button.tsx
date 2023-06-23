import { cnb } from 'cnbuilder';

import { IButtonLanguage } from '@/models';

import styles from '@/styles/Button.module.scss';

interface ButtonProps extends IButtonLanguage {
  handleClick?: () => void;
  addOn?: React.ReactNode;
  isWhite?: boolean;
}

export const Button = ({ handleClick, icon, label, addOn, isWhite }: ButtonProps) => {
  return (
    <button
      className={cnb(styles.btnLanguage, {
        [styles.is_white]: isWhite,
      })}
      onClick={handleClick}
    >
      {icon}
      <p>{label}</p>
      {addOn}
    </button>
  );
};
