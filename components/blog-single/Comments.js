import React from 'react'

export default function Comments() {
    return (
        <div className="pt-5">
        <div className="section-title">
          <h2 className="mb-5">6 Comments</h2>
        </div>
        <ul className="comment-list">
          <li className="comment">
            <div className="vcard bio">
              <img src="images/person_1.jpg" alt="Image placeholder"/>
            </div>
            <div className="comment-body">
              <h3>Jean Doe</h3>
              <div className="meta">January 9, 2018 at 2:21pm</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
              <p><a href="#" className="reply">Reply</a></p>
            </div>
          </li>

          <li className="comment">
            <div className="vcard bio">
              <img src="images/person_1.jpg" alt="Image placeholder"/>
            </div>
            <div className="comment-body">
              <h3>Jean Doe</h3>
              <div className="meta">January 9, 2018 at 2:21pm</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
              <p><a href="#" className="reply">Reply</a></p>
            </div>

            <ul className="children">
              <li className="comment">
                <div className="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder"/>
                </div>
                <div className="comment-body">
                  <h3>Jean Doe</h3>
                  <div className="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="#" className="reply">Reply</a></p>
                </div>


                <ul className="children">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder"/>
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>

                      <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                            <img src="images/person_1.jpg" alt="Image placeholder"/>
                          </div>
                          <div className="comment-body">
                            <h3>Jean Doe</h3>
                            <div className="meta">January 9, 2018 at 2:21pm</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                            <p><a href="#" className="reply">Reply</a></p>
                          </div>
                        </li>
                      </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="comment">
            <div className="vcard bio">
              <img src="images/person_1.jpg" alt="Image placeholder"/>
            </div>
            <div className="comment-body">
              <h3>Jean Doe</h3>
              <div className="meta">January 9, 2018 at 2:21pm</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
              <p><a href="#" className="reply">Reply</a></p>
            </div>
          </li>
        </ul>
      </div>
    )
}
