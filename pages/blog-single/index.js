import React from 'react'
import Header from '../../components/navigation/Header'
import BlogPost from '../../components/blog-single/BlogPost'
import PopularPoatAtBlog from '../../components/blog-single/PopularPoatAtBlog'
import Comments from '../../components/blog-single/Comments'

export default function index() {
    return (
      <React.Fragment>
        <Header />
        <div className="site-section">
          <div className="container">
            <div className="row">
                <div className="col-lg-8 single-content">
                    <BlogPost/>
                    <Comments/>
                </div>
                    <PopularPoatAtBlog/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}