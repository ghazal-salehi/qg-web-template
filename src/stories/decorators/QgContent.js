import { DecoratorBase } from './DecoratorBase';

export const QgContent = (Child) => {
  const elem = DecoratorBase('div', Child);
  elem.id = 'qg-content';
  return elem;
};
