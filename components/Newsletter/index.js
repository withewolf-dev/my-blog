import React from 'react'

export default function index() {
    return (
      <div>
        <div class="site-section subscribe bg-light">
          <div class="container">
            <form action="#" class="row align-items-center">
              <div class="col-md-5 mr-auto">
                <h2>Newsletter Subcribe</h2>
                <p>
                this is going to be available for everyone who is going to register as a member to write articles
                
                </p>
              </div>
              <div class="col-md-6 ml-auto">
                <div class="d-flex">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                  <button type="submit" class="btn btn-secondary">
                    <span class="icon-paper-plane"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
