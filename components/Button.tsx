import { IButtonLanguage } from '@/models';

import styles from '../styles/Button.module.scss';

interface ButtonProps extends IButtonLanguage {
  handleClick: () => void;
  addOn?: React.ReactNode;
}

export const Button = ({ handleClick, icon, label, addOn }: ButtonProps) => {
  return (
    <button className={styles.btnLanguage} onClick={handleClick}>
      {icon}
      <p>{label}</p>
      {addOn}
    </button>
  );
};
