(() => {
  console.log('yadayada');

  let mobileNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon');

	function toggleNav() {
		console.log('should show nav dropdown');
		navPanel.classList.toggle('show-mobile-nav');
	}



	mobileNav.addEventListener('click', toggleNav);

})();
