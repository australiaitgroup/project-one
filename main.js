function createNav() {
  var previous = '';
  var current = 'HOME';

  document
    .querySelectorAll('.navbar__item')
    .forEach(function(element) {
      element.onclick = function(event) {
        event.preventDefault();

        var to = event.target.getAttribute('href');
        push(to);
      };
    });

  function push(to) {
    previous = current;
    current = to;

    changePage();
    changeNavItem();
  }

  function changePage() {
    var previousPage = document.querySelector('#' + previous);
    var page = document.querySelector('#' + current);

    var className = 'page--active';

    previousPage.classList.remove(className);
    page.classList.add(className);  
  }

  function changeNavItem() {
    var previousNavItem = document.querySelector('[href="'+ previous +'"]');
    var navItem = document.querySelector('[href="'+ current +'"]');

    var className = 'navbar__item--active';

    previousNavItem.classList.remove(className);
    navItem.classList.add(className); 
  }
}

function main() {
  createNav();
}

main();