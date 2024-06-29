import it from '@assets/translations/it.json';
import ptBR from '@assets/translations/pt-BR.json';
import en from '@assets/translations/en.json';

const lang = {
  'pt-BR': ptBR,
  it,
  en,
};

export const flattenMessages = (nestedMessages, prefix = '') =>
  Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});

export default lang;
