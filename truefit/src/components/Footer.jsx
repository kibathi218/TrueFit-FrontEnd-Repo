import React from "react";

// function Clear() {
//   document.getElementById("newsletter1").value = "1";
// }

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
<footer class="bg-dark text-center text-white footer">
  {/* <!-- Grid container --> */}
  <div class="container p-4">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- Facebook --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i>
      </a>

      {/* <!-- Twitter --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      {/* <!-- Github --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}

    {/* <!-- Section: Form --> */}
    <section class="">
      <form action="">
        {/* <!--Grid row--> */}
        <div class="row d-flex justify-content-center">
          {/* <!--Grid column--> */}
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-md-5 col-12">
            {/* <!-- Email input --> */}
            <div class="form-outline form-white mb-4">
              <input placeholder="Email Address" type="email" id="form5Example21" class="form-control" />
            </div>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-auto">
            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </form>
    </section>
    {/* <!-- Section: Form --> */}

    {/* <!-- Section: Text --> */}
    <section class="mb-4">
      <p>
        TrueFit. The all in one diet and fitness tracker you need to reach your goals.
      </p>
    </section>
    {/* <!-- Section: Text --> */}

    
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3">
    © 2022 TrueFit
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
    </div>
  )
}

export default Footer