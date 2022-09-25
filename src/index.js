if (window.location.href.split('?')[0] == 'https://www.coosp.etr.u-szeged.hu/') {
  const KEY = 'coospace-pw';
  const button = document.querySelector('input[type="submit"]');
  const passHolder = document.querySelector('#password');
  button.addEventListener('click', () => {
    const pw = passHolder.value;
    localStorage.setItem(KEY, pw);
  });

  const pw = localStorage.getItem(KEY);
  if (pw) {
    passHolder.value = pw;
    button.click();
  }
}
if (window.location.href.split('?')[0] == 'https://www.coosp.etr.u-szeged.hu/Home') {
  [...document.querySelectorAll('.scenes>ul.compact')][0].style.display = 'none';
}
