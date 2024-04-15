import './banner.css'
import img from './../../img/images/promo-img.jpg'

const Banner = () => {
  return (
    <section className='banner'>
      <img src={img} alt="img" className='banner__img' />
      <div className="banner__contend">
        <div className="banner__block">
          <span className="banner__title">
            <span>
              PAYDAY
            </span>
            SALE NOW
          </span>
          <span className="banner__text">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </span>
          <div className="banner__subtitle">
            <span className="banner__data">1 June - 10 June 2021</span>
            <span className="banner__apply">*Terms & Conditions apply</span>
          </div>
          <div className="banner__btn-wrap">
            <a href="#!" className='banner__button'>SHOP NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
}




export default Banner;