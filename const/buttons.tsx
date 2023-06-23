import { EngFlagIcon, RusFlagIcon } from '@/components/icons';
import { IButtonLanguage, Language } from '@/models';

interface IButtonsLanguage extends IButtonLanguage {
  id: number;
}

export const buttonsLanguage: IButtonsLanguage[] = [
  { icon: <EngFlagIcon />, label: Language.engName, id: 2 },
  { icon: <RusFlagIcon />, label: Language.rusName, id: 1 },
];
