import React from "react";
import { useTranslation } from "react-i18next";

function BlogDetailComp({ blog }) {
  const { t } = useTranslation();

  let thumb = blog.blogImages?.find((item) => item.isMain == true).image;
  let detailImg = blog.blogImages?.filter((item) => item.isMain == false);
  console.log(detailImg);
  return (
    <>
      <div className="blog-post-item blog-details-wrap">
        <div className="blog-post-thumb">
          <a href="blog-details.html">
            <img src={`/images/blog/${thumb}`} alt="" />
          </a>
        </div>
        <div className="blog-post-content">
          <div className="blog-details-top-meta">
            <span className="user">
              <i className="far fa-user" /> {t(`by`)}{" "}
              <a href="#">{blog.name}</a>
            </span>
            <span className="date">
              <i className="far fa-clock" /> {blog.createDate}
            </span>
          </div>
          <h2 className="title">Your Free Movie Streaming Purposes</h2>
          <p>{blog.description}</p>
          <p>
            Printing and typetting industry. Lorem Ipsum has been the industry's
            standrd dummy text ever since the, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuies, but also the leap into electronic
            typesetting, remaining essentially unched. It was populrised in the
            1960s with the release of Letraset sheets containing .
          </p>
          <blockquote>
            <i className="fas fa-quote-right" />
            <p>
              {t(
                `Watch Mobflx movies & TV shows online or stream rights to your smart TV, game console, PC, mobile more.`
              )}
            </p>
            <figure>
              <span>Frenk Smith</span> {t(`founder ceo`)}
            </figure>
          </blockquote>
          <div className="blog-img-wrap">
            <div className="row">
              {detailImg?.map((img, i) => {
                return (
                  <div className="col-sm-6" key={i}>
                    <img src={`/images/blog/${img.image}`} alt="notfound" />
                  </div>
                );
              })}
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuies.
          </p>
          <p>
            Printing and typetting industry. Lorem Ipsum has been the industry's
            standrd dummy text ever since the, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuies, but also the leap into electronic
            typesetting, remaining essentially unched. It was populrised in the
            1960s with the release of Letraset sheets containing .
          </p>
          <div className="blog-post-meta">
            <div className="blog-details-tags">
              <ul>
                <li>
                  <i className="fas fa-tags" /> <span>Tags :</span>
                </li>
                <li>
                  <a href="#">Movies ,</a> <a href="#">Creative ,</a>{" "}
                  <a href="#">News ,</a> <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="blog-post-share">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-post mt-40 mb-80">
        <div className="post-avatar-img">
          <img src="/images/blog/post_avatar_img.png" alt="images" />
        </div>
        <div className="post-avatar-content">
          <h5>Thomas Herlihy</h5>
          <p>
            Printing and typetting industry. Lorem Ipsum has been the instry
            standrd the dummy text ever since the, when an unknown printer took
            a galley .
          </p>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-comment mb-80">
        <div className="widget-title mb-45">
          <h5 className="title"> {t(`comment's`)} (02)</h5>
        </div>
        <ul>
          <li>
            <div className="single-comment">
              <div className="comment-avatar-img">
                <img src="/images/blog/comment_avatar01.jpg" alt="images" />
              </div>
              <div className="comment-text">
                <div className="comment-avatar-info">
                  <h5>
                    Daisy Waterstone{" "}
                    <span className="comment-date">November 13, 2021</span>
                  </h5>
                  <a href="#" className="comment-reply-link">
                    {t(`reply`)} <i className="fas fa-reply-all" />
                  </a>
                </div>
                <p>
                  Printing and typetting industry. Lorem Ipsum has been the
                  instry standrd the dummy text ever since the, when an unknown
                  printer took a galley .
                </p>
              </div>
            </div>
          </li>
          <li className="comment-reply">
            <div className="single-comment">
              <div className="comment-avatar-img">
                <img src="/images/blog/comment_avatar02.jpg" alt="images" />
              </div>
              <div className="comment-text">
                <div className="comment-avatar-info">
                  <h5>
                    Jon Deo{" "}
                    <span className="comment-date">November 13, 2021</span>
                  </h5>
                  <a href="#" className="comment-reply-link">
                    Reply <i className="fas fa-reply-all" />
                  </a>
                </div>
                <p>
                  Printing and typetting industry. Lorem Ipsum has been the
                  instry standrd the dummy text ever since the, when an unknown
                  printer took a galley .
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="contact-form-wrap">
        <div className="widget-title mb-50">
          <h5 className="title"> {t(`post a comment`)}</h5>
        </div>
        <div className="contact-form">
          <form action="#">
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder={t(`your name *`)} />
              </div>
              <div className="col-md-6">
                <input type="email" placeholder={t(`your email`)} />
              </div>
            </div>
            <input type="text" placeholder={t(`subject`)} />
            <textarea
              name="message"
              placeholder={t(`your comment...`)}
              defaultValue={""}
            />
            <button className="btn"> {t(`send a message`)}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogDetailComp;
