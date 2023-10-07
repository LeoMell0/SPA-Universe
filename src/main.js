import { Router } from "./router.js";

const router = new Router();

function handleBackground() {
    const currentPath = window.location.pathname;
    if (currentPath === '/theuniverse') {
        document.body.className = 'universo';
        document.querySelector('#universe').classList.add('selected');
    } else if (currentPath === '/explore') {
        document.body.className = 'exploracao';
        document.querySelector('#explore').classList.add('selected');
    } else if(currentPath === '/'){
        document.body.className = 'home';
        document.querySelector('#home').classList.add('selected');
    }
    return currentPath;
}

router.add("/", "/pages/home.html");
router.add("/theuniverse", "/pages/theuniverse.html");
router.add("/explore", "/pages/explore.html");

router.handleRoute();

window.onpopstate = () => router.handleRoute();
window.route = () => router.route();

window.addEventListener('popstate', function () {
    const routeName = getRouteName();
    console.log('Nome da rota:', routeName);
});

handleBackground();