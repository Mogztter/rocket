import '@rocket/navigation/rocket-navigation.js';
import '@rocket/drawer/rocket-drawer.js';
const drawer = document.querySelector('#sidebar');

// Toggle button
document.querySelector('#mobile-menu-trigger').addEventListener('click', function () {
  drawer.opened = true;
});
