import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
  return (
    <div style={{ backgroundImage: "url(/images/bg/blog_bg.jpg)" }}>
      <Navbar />
   


      <div className="container">
        <div style={{ paddingTop: "10%" }}>
          <p>
            <span style={{ fontSize: "18.6667px" }}>
              <strong>
                ABOUT US
                <br />
                <br />
              </strong>
            </span>
            After a hard and tiring working day, each of us would like to sit
            before the computer and watch our favorite series and movies.
            Previously, only TVs could give us this opportunity, but now, in the
            age of high technology, we can easily get this opportunity via the
            internet. For this purpose, hundreds of websites and portals are
            available worldwide. Unfortunately, we will not be able to say the
            same about the quality of content available on those websites.
          </p>
          <p>
            Tv movflix.com provided the latest, important, interesting,
            encyclopedic knowledge and information from the world of cinema in
            Azerbaijani, English and Russian languages ​​free of charge.
            Thousands of grateful users daily visiting our
            <span className="morecontent">
              site thank Tv movflix.com employees for their incredible dedication
              and high quality of work. Over the years, together with you, our
              subscribers, we have created a very good, functional, gigantic,
              informative and interactive portal for true movie lovers. Your
              participation has become an integral part of our site. From a
              simple project of three poor students, you turned Tv movflix.com into
              a large Internet portal. But in order to continue to serve a
              growing audience in high quality, we must go to new and serious
              expenses. We need new employees and equipment in our offices
              located in different countries of the world, we need to introduce
              a number of new technologies, continue activities in three
              languages ​​and distribute a large amount of news.
            </span>
          </p>
          <p>
            Our other mission is to convey the diversity of cinema to
            people.&nbsp;You can find information and articles about films for
            different age and taste in our website. It is enough just to have
            the internet. You can register at Movflix.COM.
          </p>
          <p>
            We give our users a wide range of choices. Our catalogue includes
            articles and information, photos and trailers of films shot by
            Hollywood, Bollywood, European, Russian cinematographers, Turkish
            films, Classic hits, Soviet films, world renowned TV series and
            cartoon animations. &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          </p>
          <p>
            Movflix.COM is compatible with computers, tablets and various mobile
            devices.&nbsp;
          </p>
          <p>
            &nbsp;We are open to all your feedback. Contact us: info@tv movflix.com
          </p>
          <p className="font_8">
            Head Office: Middle East and Africa, E1-1410A, Al Swan zone,
            Amberjem Tower, Ajman - UAE, Tel: +971 55 563 57 67 <br />
            <span className="color_11">
              Representative Office: Europe and CIS, SW18 2QE, 65 East Hill,
              Wandsworth, London - UK, Tel: +44 7340 67 67 30
              <br />
              <span className="wixGuard">
                Representative Office: Caucasus &amp; Central Asia,
                VOEN&nbsp;2001101662, Muzaffar Hasanov str., 2, AZ 10, Baku,
                Azerbaijan, Tel: +994 50 688 48 52
              </span>
              <br />
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
