import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Mousewheel, Zoom } from 'swiper';

import 'swiper/swiper-bundle.css';
import './App.css';

import bike from './assets/bike.jpg';
import Fuoripista from './assets/Fuoripista.jpg';
import bottle from './assets/bottle.jpg';
import instagram from './assets/instagram.png';
import fb from './assets/fb.svg';
import we_go from './assets/we_go.svg';

SwiperCore.use([Pagination, Mousewheel, Zoom]);

function App() {
  let swiper;

  useEffect(() => {
    swiper.zoom.in();
  }, []);

  return (
    <div className="container">
      <Swiper
        onInit={(swiperRef) => (swiper = swiperRef)}
        onSlideChangeTransitionStart={() => swiper.zoom.in()}
        onSlideChangeTransitionEnd={() => swiper.zoom.in()}
        zoom={{ maxRatio: 1.4, minRatio: 1, toggle: false }}
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        slidesPerView={1}
        speed={1200}
        touchReleaseOnEdges
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="imageWrapper">
            <img alt="" src={bike} className="slide-image" />
          </div>
          <div className="dark">
            <div
              className="texts"
              onMouseOver={() => swiper.zoom.out()}
              onMouseOut={() => swiper.zoom.in()}
            >
              <div className="title">Bike</div>
              <div>
                Un nuovo modo per interpretare
                <br />
                l'allenamento <em>indoor</em>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="imageWrapper">
            <img alt="" src={Fuoripista} className="slide-image" />
          </div>
          <div className="dark">
            <div
              className="texts"
              onMouseOver={() => swiper.zoom.out()}
              onMouseOut={() => swiper.zoom.in()}
            >
              <div className="title">Tuo</div>
              <div>
                Una soluzione funzionale
                <br />
                che interfaccia performance e <em>stile</em>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide>
          <div className="imageWrapper">
            <img alt="" src={bottle} className="slide-image" />
          </div>
          <div className="dark">
            <div
              className="texts"
              onMouseOver={() => swiper.zoom.out()}
              onMouseOut={() => swiper.zoom.in()}
            >
              <div className="title">Mia</div>
              <div>
                Un concetto di lifestyle
                <br />
                per il benessere <em>quotidiano</em>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Footer */}
      <div className="footer">
        {/* Upper Footer */}
        <div className="upper">
          <div className="links">
            <span>News</span>
            <span>Press</span>
            <span>FAQ</span>
            <span>Download</span>
          </div>
          <div className="social-networks">
            <img alt="" src={instagram} />
            <img alt="" src={fb} />
          </div>
        </div>
        <hr />

        {/* Lower Footer */}
        <div className="lower">
          <div>
            © Elite SRL | Reg.Impr.PD/C.F./P.I. Intrastat IT 04342350289 -&nbsp;
            <a id="privacy">Privacy Policy</a>
          </div>
          <div>
            <img alt="" src={we_go} id="we_go" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
