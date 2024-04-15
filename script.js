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


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const blocks = document.querySelectorAll('.blocks .item-block');

    menuItems.forEach(function(menuItem, index) {
        menuItem.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1);
            blocks.forEach(function(block) {
                if (block.id === target) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            });

            menuItems.forEach(function(item) {
                item.classList.remove('text-[#0A8077]');
                item.classList.add('text-[#666666]');
            });       

            menuItem.classList.remove('text-[#666666]');
            menuItem.classList.add('text-[#0A8077]');     

             // Удаление класса активности для всех span элементов
             const allSpans = document.querySelectorAll('.menu-item span');
             allSpans.forEach(function(span) {
                 span.classList.remove('bg-[#0A8077]');
             });

              // Добавление класса активности для span элемента текущего пункта меню
            const currentSpan = this.querySelector('span');
            currentSpan.classList.add('bg-[#0A8077]');
        });
    });
});


function formatDate() {
  let date = new Date();
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

document.querySelector('#myDatepicker').value = formatDate();
document.querySelector('#myDatepicker2').value = formatDate();




