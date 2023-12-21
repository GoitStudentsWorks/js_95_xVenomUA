/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Ондрій + Andrian Pohrebniak + Pasha
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import { refs } from '../js/refs';
import { APIProductSearch, APICategories } from './APIFoodBoutique';
import { FilterMarkUp } from './FilterMarkUp';
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// РЕНДЕР КАТЕГОРІЙ В СЕЛЕКТІ
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
async function GetCategories() {
  try {
    const categResult = await APICategories();
    categResult.push('Show all');
    const markUpCategories = categResult
      .map(data => `<option value="${data}">${data}</option>`)
      .join('');
    refs.categor.innerHTML += markUpCategories;
  } catch (error) {
    console.log(error);
  }
}

// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// РЕНДЕР КАРТОК В СЕЛЕКТІ
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
async function GetCards() {
  try {
    const seacrhresult = await APIProductSearch('', '', '', '', '', 1);
    const results = seacrhresult.results;
    FilterMarkUp(results);
  } catch (error) {
    console.log(error);
  }
}

GetCategories();
GetCards();

if (refs.form) {
  refs.form.addEventListener('input', handleFiltersInput);
  refs.form.addEventListener('submit', handleFiltersSubmit);
}

const localValueChange = { keyword: null };
const localValue = { keyword: null, category: null, page: 1, limit: 6 };

// функція запису в локалсторидж при введенні тексту в INPUT
async function handleFiltersInput() {
  const filtersValue = refs.filtersInput.value;
  localValueChange.keyword = filtersValue;
  if (filtersValue === '') {
    localValueChange.keyword = null;
  }

  localStorage.setItem('keyword', JSON.stringify(localValueChange));
}

// функція запису значень ключового слова і категорії в локалсторидж при нажатті на кнопку
async function handleFiltersSubmit() {
  const filtersValue = refs.filtersInput.value;
  localValue.keyword = filtersValue;
  if (filtersValue === '') {
    localValue.keyword = null;
  }
  const filtersCatValue = refs.filtersCategories.value;
  localValue.category = filtersCatValue;
  if (filtersCatValue === '') {
    localValue.category = null;
  }
  if (filtersCatValue === 'Show all') {
    localValue.category = null;
  }

  localStorage.setItem('filters', JSON.stringify(localValue));
}

// функція запису ключового слова з локал сторидж  в INPUT при перезавантаженні сторінки.
function changeForm() {
  try {
  const filtersParce = JSON.parse(localStorage.getItem('keyword'));
  if (refs.filtersInput) {
    refs.filtersInput.value = filtersParce.keyword || '';
  }
}
catch (error) {
  return
}
}
changeForm();
