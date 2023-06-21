import styles from '@/styles/TabInfo.module.scss';

interface TabInfoProps {
  text: string;
  children?: React.ReactNode;
}

export const TabInfo = ({ text, children }: TabInfoProps) => {
  return (
    <div className={styles.tab_container}>
      {children}
      <p>{text}</p>
    </div>
  );
};
