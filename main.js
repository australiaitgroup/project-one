function createNav() {
  var previous = '';
  var current = 'BLOG';

  changePage();
  changeNavItem();

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
    var className = 'page--active';

    if (previous) {
      var previousPage = document.querySelector('#' + previous);
      previousPage.classList.remove(className);
    }

    var page = document.querySelector('#' + current);
    page.classList.add(className);  
  }

  function changeNavItem() {
    var className = 'navbar__item--active';

    if (previous) {
      var previousNavItem = document.querySelector('[href="'+ previous +'"]');
      previousNavItem.classList.remove(className);
    }

    var navItem = document.querySelector('[href="'+ current +'"]');
    navItem.classList.add(className); 
  }
}

function main() {
  createNav();
}

main();