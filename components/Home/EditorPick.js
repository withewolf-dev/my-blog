import React from 'react'

export default function EditorPick() {
    return (
        <div className="col-lg-8">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Editor's Pick</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="post-entry-1">
              <a href="post-single.html"><img src="/images/img_h_1.jpg" alt="Image" className="img-fluid"/></a>
              <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <div className="post-meta">
                <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="post-entry-2 d-flex bg-light">
            <img className="thumbnail" src="/images/img_h_2.jpg"
              alt="Girl in a jacket"/>
              <div className="contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="post-entry-2 d-flex">
              <img className="thumbnail" src="/images/img_h_1.jpg"
              alt="Girl in a jacket"/>
              <div className="contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="post-entry-2 d-flex">
            <img className="thumbnail" src="/images/img_h_3.jpg"
              alt="Girl in a jacket"/>
              <div className="contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
