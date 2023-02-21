import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";


function Categories() {

  const { t } = useTranslation();

  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  const [movieCategory, setMovieCategory] = useState([]);


  //Get Category from Api
  async function getAllCategories() {
    await axios.get(baseUrlCategory).then((response) => {
      setMovieCategory(response.data);
    });
  }

  useEffect(() => {

    getAllCategories();
  }, []);

 

  return (
    <div className="widget blog-widget">
      <div className="widget-title mb-5">
        <h5 className="title">{t(`categories`)}</h5>
      </div>
      <div className="sidebar-cat">
        <ul>
          {movieCategory.map((category, index) => {
            return (
              <li key={index}>
                <button
                  className="action"                 
                >
                  {t(`${category.name}`)}
                  {/* {category.name} */}
                </button>{" "}
                <span>12</span>
              </li>
            );
          })}

         
        </ul>
      </div>
    </div>
  );
}

export default Categories;
