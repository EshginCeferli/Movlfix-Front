import { map } from "jquery";
import React ,{useState, useEffect}from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Banner() {
  const { t } = useTranslation();
  const url = "https://localhost:7079";
  const [banner, setbanner] = useState([]);
  

    //Get Banner from Api
    async function GetBanner() {
      await axios
        .get(`${url}/api/Banner/GetAll`)
        .then((res) => {
          setbanner(res.data);
        });
    }

    useEffect(() => {
      GetBanner();
      
    }, []);  


  return (
    <div>
      <>
        {/* banner-area */}
        {banner.map((ban, i) =>{
          return(<section key={i}
            className="banner-area banner-bg"
            style={{ backgroundImage: `url(data:image/jpeg;base64,${ban.image})` }}
          >
            <div className="container custom-container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="banner-content">
                    <h6
                      className="sub-title wow fadeInUp"
                      data-wow-delay=".2s"
                      data-wow-duration="1.8s"
                    >
                      {t(`movflix`)}
                    </h6>
                    <h2
                      className="title wow fadeInUp"
                      data-wow-delay=".4s"
                      data-wow-duration="1.8s"
                    >
                       {t(`unlimited`)} <span> {t(`movie`)}</span>,  {t(`shows`)}, &amp;  {t(`more`)}.
                    </h2>
                    <div
                      className="banner-meta wow fadeInUp"
                      data-wow-delay=".6s"
                      data-wow-duration="1.8s"
                    >
                      <ul>
                        <li className="quality">
                          <span>Pg 18</span>
                          <span>hd</span>
                        </li>
                        <li className="category">
                          <a href="#">Movies,</a>
                          <a href="#">Shows</a>
                        </li>
                        <li className="release-time">
                          <span>
                            <i className="far fa-calendar-alt" /> Movflix © 2022.
                          </span>
                        
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                      className="banner-btn btn popup-video wow fadeInUp"
                      data-wow-delay=".8s"
                      data-wow-duration="1.8s"
                    >
                      <i className="fas fa-play" />  {t(`watch now`)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>)
        })}
        
        {/* banner-area-end */}
      </>
    </div>
  );
}

export default Banner;
