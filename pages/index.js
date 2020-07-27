import React from 'react'
import Header from '../components/navigation/Header'
import EditorPickLandscape from '../components/Home/EditorPickLandscape'
import EditorPick from '../components/Home/EditorPick'
import Trending from '../components/Home/Trending'
import EditorPickLandscape2 from '../components/Home/EditorPickLandscape2'
import Politics from '../components/Home/Politics'
import Business from '../components/Home/Business'
import RecentNews from '../components/Home/RecentNews'
import PopularPost from '../components/Home/PopularPost'

export default function index() {
  return (
    <React.Fragment>
      <div className="site-wrap">
        <div class="site-mobile-menu site-navbar-target">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        <Header />
        <EditorPickLandscape />
        <div className="site-section">
          <div className="container">
            <div className="row">
              <EditorPick />
              <Trending />
            </div>
          </div>
        </div>
        <EditorPickLandscape2 />
        <div className="site-section">
          <div className="container">
            <div className="row">
              <Politics />
              <Business />
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <RecentNews />
              <PopularPost />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
