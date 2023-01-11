import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";

function BlogDetailComp(props) {
  const { t } = useTranslation();

  const url = "https://localhost:7079";

 
  // let thumb = props?.blog?.blogImages?.find((item) => item?.isMain == true)?.image;
 
  // let detailImg = props.blog.blogImages?.filter((item) => item.isMain == false);
  //Comment items
  const [by, setBy] = useState();
  const [context, setContext] = useState();
  const comments = props.blog.comments;

  //USer items
  let token = localStorage.getItem("token");
 
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const [user, setUser] = useState();

  useEffect(() => {  
    if (token != null) {
      let usermail = parseJwt(token).sub[1];
      axios.get(`${url}/api/Account/GetUserByEmail/${usermail}`).then((res) => {
        setUser(res.data);
      });
    }
  }, []);



  async function AddComment(e) {
    e.preventDefault();

    await axios
      .post(`${url}/api/Comment/Create`, {
        By: user?.userName,
        Context: context,
        BlogId: props.id,
      })

      .then(function (response) {
        if (response.data.status === "success" || response.status === 200) {
          Swal.fire({
            position: "center",

            title: "Your comment added",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload();
        }
      })
      .catch(function (err) {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: true,
          timer: 5000,
        });
      });
  }

  return (
    <>
      <div className="blog-post-item blog-details-wrap">
        <div className="blog-post-thumb">
          <a href="blog-details.html">
          <img src={`data:image/jpeg;base64,${props?.blog?.photo}`} alt="" />
          </a>
        </div>
        <div className="blog-post-content">
          <div className="blog-details-top-meta">
            <span className="user">
              <i className="far fa-user" /> {t(`by`)}{" "}
              <a href="#">{props.blog.by}</a>
            </span>
            <span className="date">
              <i className="far fa-clock" /> {props.blog.createDate}
            </span>
          </div>
          <h2 className="title">{props.blog.name}</h2>
          <p>{props.blog.description}</p>
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
          {/* <div className="blog-img-wrap">
            <div className="row">
              {detailImg?.map((img, i) => {
                return (
                  <div className="col-sm-6" key={i}>
                    <img src={`/images/blog/${img.image}`} alt="notfound" />
                  </div>
                );
              })}
            </div>
          </div> */}
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

      <div className="blog-comment mb-80">
        <div className="widget-title mb-45">
          <h5 className="title"> {t(`comment's`)} ({comments?.length})</h5>
        </div>
        <ul>
          {comments?.map((comment, i) => {
            return (
              <li key={i}>
                <div className="single-comment">
                  <div className="comment-avatar-img">
                    <img src="/images/blog/commentAvatar.png" alt="images" />
                  </div>
                  <div className="comment-text">
                    <div className="comment-avatar-info">
                      <h5>
                        {comment.by}
                        <span className="comment-date">{comment.createDate}</span>
                      </h5>
                      {/* <a href="#" className="comment-reply-link">
                        {t(`reply`)} <i className="fas fa-reply-all" />
                      </a> */}
                    </div>
                    <p>
                     {comment.context}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="contact-form-wrap">
        <div className="widget-title mb-50">
          <h5 className="title"> {t(`post a comment`)}</h5>
        </div>
        <div className="contact-form">
          <form onSubmit={(e) => AddComment(e)}>
            <div className="row">
             
              <div className="col-md-12">
                <textarea
                  type="text"
                  onChange={(e) => setContext(e.target.value)}
                  placeholder={t(`your email`)}
                />
              </div>
            </div>

            <button className="btn"> {t(`send a message`)}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogDetailComp;
