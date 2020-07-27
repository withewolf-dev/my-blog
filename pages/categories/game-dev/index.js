import React from 'react'
import Header from '../../../components/navigation/Header'
import MainLayout from '../../../layouts/MainLayout'
import GameDevBlog from '../../../components/categories/Game-Dev/GameDevBlog'
import GameDevMostPopular from '../../../components/categories/Game-Dev/GameDevMostPopular'
import Pagination from '../../../components/navigation/Pagination'

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
            <Header/>
            <MainLayout>
                <GameDevBlog/>
                <GameDevMostPopular/>
                <div className="container">
                    <Pagination/>
                </div>
            </MainLayout>
          </div>
       </React.Fragment>
    )
}
