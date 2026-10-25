const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];
let currentSlide = 0;
let autoSlide;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}
function startAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => showSlide(currentSlide + 1), 6500);
}
document.getElementById('prevSlide').addEventListener('click', () => { showSlide(currentSlide - 1); startAutoSlide(); });
document.getElementById('nextSlide').addEventListener('click', () => { showSlide(currentSlide + 1); startAutoSlide(); });
dots.forEach(dot => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.slide)); startAutoSlide(); }));
startAutoSlide();

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const email = data.get('email') || 'Not provided';
  const service = data.get('service') || '';
  const address = data.get('address') || 'Not provided';
  const details = data.get('details') || 'Not provided';
  const message = `Hello BERA ELECTRIC,%0A%0AI would like to request a quotation.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0AAddress/Location: ${encodeURIComponent(address)}%0AProject Details: ${encodeURIComponent(details)}`;
  window.open(`https://wa.me/918967528097?text=${message}`, '_blank', 'noopener');
});