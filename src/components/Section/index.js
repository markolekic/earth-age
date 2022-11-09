import { React, useState } from "react";
import LightGallery from "lightgallery/react";
import { projectData } from "./Data";
import "./index.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

const Section = () => {
  const onInit = () => {};
  return (
    <div className='container'>
      {projectData.map((data) => {
        const { id, title, timeImage, yearsAgo, summery, description, quote, planetImage, imageAlt, eonColor, geographyInfo, lifeInfo, gallery } = data;
        return (
          <div key={id} className='card'>
            <div className='card__main-wrapper'>
              <div className='card__image-wrapper'>
                <img className='card__image' src={planetImage} alt={imageAlt} />
              </div>
              <div className='card__info-wrapper'>
                <h1 className='card__title'>{title}</h1>
                <h2 className='card__subtitle'>{yearsAgo}</h2>
                <p className='card__description'>{description}</p>
                <p className='card__summery'>{summery}</p>
              </div>
            </div>
            <blockquote className='card__quote'>{quote}</blockquote>
            <div className='card__content'>
              <div className='card__column-wrapper'>
                <div className='column-wrapper'>
                  <div className='column'>
                    <h3 className='column__title'>Paleo-Geography</h3>
                    <ul className='column__list'>
                      {geographyInfo.mainInfo.map((info, index) => {
                        return <li key={index}>{info}</li>;
                      })}
                    </ul>
                  </div>
                  <div className='column'>
                    <h3 className='column__title'>Life</h3>
                    <ul className='column__list'>
                      {lifeInfo.mainInfo.map((info, index) => {
                        return <li key={index}>{info}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className='image-wrapper'>
                  {timeImage.map((data, index) => {
                    const { caption, img, alt } = data;
                    return (
                      <div key={index} className='image-container'>
                        <img className='img-main' src={img} alt={alt} />
                        <figcaption className='img__caption'>{caption}</figcaption>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='gallery__container'>
                <h3 className='column__title'>Gallery</h3>
                <LightGallery onInit={onInit} download={false} speed={500} plugins={[lgThumbnail]}>
                  {gallery.map((data, index) => {
                    const { img, alt } = data;
                    return (
                      <a className='gallery-item' key={index} href={img}>
                        <img className='img-responsive' src={img} alt={alt} />
                      </a>
                    );
                  })}
                </LightGallery>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
