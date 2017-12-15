import * as i18next from 'i18next';
import { en, ja } from './stringResources';
import { getConfigRoot } from './util';

i18next.init({
  lng: getConfigRoot().language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en
    },
    ja: {
      translation: ja
    }
  }
});

export default function translateTaggedTemplate(strings: TemplateStringsArray, ...keys: string[]) {
  return i18next.t(strings.raw[0]) || strings.raw[0];
}
