'use strict'

$('body').on('load', onInit())

function onInit() {
  init()
  renderProjs()
  renderProjsModal()
}

function renderProjs() {
  var projs = getProjs()
  var projsHTMLs = projs
    .map((proj) => {
      return `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a
            class="portfolio-link"
            data-toggle="modal"
            href="#${proj.id}"
          >
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              class="img-fluid"
              src="../img/portfolio/${proj.url}-thumb.jpg"
              alt="${proj.name}"
            />
          </a>
          <div class="portfolio-caption">
            <h4>${proj.title}</h4>
            <p class="text-muted">${proj.desc}</p>
          </div>
        </div>`
    })
    .join('')

  $('.proj-container').html(projsHTMLs)
}

function renderProjsModal() {
  var projs = getProjs()
  var projsHTMLs = projs
    .map((proj) => {
      return `
        <div
        class="portfolio-modal modal fade"
        id="${proj.id}"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.title}</h2>
                    <p class="item-intro text-muted">${proj.intro}</p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="../img/portfolio/${proj.url}-full.jpg"
                      alt=""
                    />
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.publishedAt}</li>
                      <li>Category: ${proj.labels.join(', ')}</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fa fa-times"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    })
    .join('')

  $('.proj-modal-container').html(projsHTMLs)
}
