export const categoriesData = {
  finance: 'Финансы',
  shopping: 'Покупки',
  study: 'Учёба'
};

export const initialData = [
  {
    id: '1',
    name: 'Задача №1',
    category: categoriesData.finance,
    isComplete: false
  },
  {
    id: '2',
    name: 'Задача №2',
    category: categoriesData.shopping,
    isComplete: true
  },
  {
    id: '3',
    name: 'Задача №3',
    category: categoriesData.study,
    isComplete: false
  },
];

export const testTask = {
  id: '23432432',
  name: 'Задача №123',
  category: categoriesData.finance,
  isComplete: false
};
