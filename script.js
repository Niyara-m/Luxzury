var nav = document.getElementById('nav');

function openMobileMenu() {
	document.getElementById('mobileMenu').style.display = 'block';
	document.getElementById('openIcon').style.display = 'none';
	document.getElementById('closeIcon').style.display = 'block';
}

function closeMobileMenu() {
	document.getElementById('mobileMenu').style.display = 'none';
	document.getElementById('openIcon').style.display = 'block';
	document.getElementById('closeIcon').style.display = 'none';
}

