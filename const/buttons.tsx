import { EngFlagIcon, RusFlagIcon } from '@/components/icons';
import { IButtonLanguage } from '@/models';

interface IButtonsLanguage extends IButtonLanguage {
  id: number;
}

export const buttonsLanguage: IButtonsLanguage[] = [
  { icon: <EngFlagIcon />, label: 'Eng', id: 2 },
  { icon: <RusFlagIcon />, label: 'Рус', id: 1 },
];
