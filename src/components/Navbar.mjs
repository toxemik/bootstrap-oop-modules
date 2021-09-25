class Navbar {
  constructor(title = '', links= [], container = 'app') {
    this.title = title
    this.links = links
    this.container = container
    this.refresh(container)
  }

  getTitle() {
    return this.title
  }

  setTitle(title) {
    this.title = title
    this.refresh(this.container)
  }

  getLinks(links) {
    let nav = ''
    for(const link of links)
      nav += `
        <li class="nav-item">
          <a class="nav-link" href="#">${ link }</a>
        </li>
      `
    return nav
  }

  setLinks(links) {
    this.links = links
    this.refresh(this.container)
  }

  getTemplate() {
    return `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">${ this.getTitle() }</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              ${ this.getLinks(this.links) }
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    `
  }

  refresh(container) {
    document.getElementById(container).innerHTML = this.getTemplate()
  }
}

export default Navbar
