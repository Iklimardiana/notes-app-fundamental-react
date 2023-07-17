import { useContext } from 'react';
import { LocaleContext } from '../../contexts/AllContext';
import content from '../../utils/content';

export const useLanguage = (type) => {
  const { locale } = useContext(LocaleContext);

  const text = content[`${type}Page`][locale];

  return text;
};
