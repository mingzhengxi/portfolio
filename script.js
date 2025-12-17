const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const form = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    statusEl.textContent = '필수 항목을 모두 입력해 주세요.';
    statusEl.style.color = '#f87171';
    return;
  }

  statusEl.textContent = '메시지를 보내는 중...';
  statusEl.style.color = '#94a3b8';

  setTimeout(() => {
    statusEl.textContent = '전송 완료! 빠르게 답변드릴게요.';
    statusEl.style.color = '#34d399';
    form.reset();
  }, 900);
});


