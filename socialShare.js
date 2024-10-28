
document.getElementById('shareArrow').addEventListener('click', function() {
  // Находим элементы кнопки и иконок
  var icons = document.getElementById('socialIcons');
  var button = document.getElementById('shareArrow');
  var iconImage = document.querySelector('.icon-share');

  // Переключаем отображение иконок
  if (icons.style.display === 'none' || icons.style.display === '') {
    icons.style.display = 'flex'; // Показываем иконки
  } else {
    icons.style.display = 'none'; // Скрываем иконки
  }

  // Переключаем класс 'active' для изменения цвета кнопки
  button.classList.toggle('active');
     // Изменить цвет иконки
  iconImage.classList.toggle('white');
});
