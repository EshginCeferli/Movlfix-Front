import React from 'react'

function Recent() {
  return (
    <div className="widget blog-widget">
                <div className="widget-title mb-3">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="rc-post">
                  <ul>
                    <li className="rc-post-item">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src="images/blog/rc_post_thumb01.jpg" alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="blog-details.html">
                            Express Management Effective
                          </a>
                        </h5>
                        <span className="date">
                          <i className="far fa-clock" /> 10 Mar 2021
                        </span>
                      </div>
                    </li>
                    <li className="rc-post-item">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src="images/blog/rc_post_thumb02.jpg" alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="blog-details.html">
                            Where watch English movies free?
                          </a>
                        </h5>
                        <span className="date">
                          <i className="far fa-clock" /> 10 Mar 2021
                        </span>
                      </div>
                    </li>
                    <li className="rc-post-item">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src="images/blog/rc_post_thumb03.jpg" alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="blog-details.html">
                            House movie streaming website
                          </a>
                        </h5>
                        <span className="date">
                          <i className="far fa-clock" /> 10 Mar 2021
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
  )
}

export default Recent