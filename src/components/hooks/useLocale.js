import { useContext } from 'react';
import { LocaleContext } from '../../contexts/LocaleContext';

function useLocale(type) {
  const { locale } = useContext(LocaleContext);
}
