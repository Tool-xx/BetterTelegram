// Ждём загрузки страницы
window.onload = function() {
  // Создаём кнопку
  const btn = document.createElement('button');
  btn.id = 'better-tg-btn';
  btn.textContent = 'BetterTelegram';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.zIndex = '9999';

  // При клике показываем меню
  btn.addEventListener('click', () => {
    alert('Меню BetterTelegram!');
    // Здесь будет логика (темы, плагины и т.д.)
  });

  // Вставляем кнопку в страницу
  document.body.appendChild(btn);
};