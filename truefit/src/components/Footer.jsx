import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="py-5">
          <div class="row footer-center">
            <div class="col-2">
              <h5>TrueFit</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Foods</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Exercise</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact</a></li>
              </ul>
            </div>

            <div class="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                  <button class="btn btn-dark" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p className="center-text">© 2021 TrueFit</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer