export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handleRoute();
  }

  handleRoute() {
    const pathname = window.location.pathname;
    const route = this.routes[pathname];

    fetch(route).then((data) =>
      data.text().then((html) => {
        document.querySelector("#app").innerHTML = html;
      })
    );
  }
}
