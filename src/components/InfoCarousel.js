import React from 'react';
import man from '../assets/man.jpg';
import man2 from '../assets/man-2.jpg';
import women from '../assets/women.jpg';

const InfoCarousel = () => (
  <div className=" infoCarousel__wrapper pt-5">
    <h2 className="text-sm-gray text-center my-2 text-uppercase fw-bold">
      People are already enjoying the service
    </h2>
    <h1 className="text-lg-black text-center mb-3">
      Look what these have to say
    </h1>
    <div
      id="carouselExampleIndicators"
      className="carousel slide p-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner p-4">
        <div className="carousel-item active">
          <div className="shadow rounded infoCarousel__wrapper-desc-info p-4 mx-auto ">
            <img
              src={man}
              className="d-block mx-auto card-rounded-image"
              alt="..."
            />
            <h3 className="text-center fw-bold">John Hudson</h3>
            <p className="text-sm-gray text-center">Designer</p>
            <p className="text-sm-gray text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              doloremque! Harum repellendus vero voluptas exercitationem?
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="shadow rounded  infoCarousel__wrapper-desc-info p-4 mx-auto">
            <img
              src={man2}
              className="d-block mx-auto card-rounded-image"
              alt="..."
            />
            <h3 className="text-center fw-bold">Dean Hudson</h3>
            <p className="text-sm-gray text-center">Lawyer</p>
            <p className="text-sm-gray text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              doloremque! Harum repellendus vero voluptas exercitationem?
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="shadow rounded infoCarousel__wrapper-desc-info p-4 mx-auto">
            <img
              src={women}
              className="d-block mx-auto card-rounded-image my-2"
              alt="..."
            />
            <h3 className="text-center fw-bold">Emma Watson</h3>
            <p className="text-sm-gray text-center my-2">Designer</p>
            <p className="text-sm-gray text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              doloremque! Harum repellendus vero voluptas exercitationem?
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

export default InfoCarousel;
