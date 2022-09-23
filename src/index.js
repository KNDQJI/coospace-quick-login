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