import React from 'react'
import Header from '../../../components/navigation/Header'
import MainLayout from '../../../layouts/MainLayout'
import DesignBlog from '../../../components/categories/Design/DesignBlog'
import DesignMostPopular from '../../../components/categories/Design/DesignMostPopular'
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
                <DesignBlog/>
                <DesignMostPopular/>
                <div className="container">
                    <Pagination/>
                </div>
            </MainLayout>
          </div>
       </React.Fragment>
    )
}
