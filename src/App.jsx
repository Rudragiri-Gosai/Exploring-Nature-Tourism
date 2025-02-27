import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/Header/";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />

      <div>
        <section class="about" id="about">
          <div
            class="video-container"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <video
              src="about-vid-1.mp4"
              muted
              autoplay
              loop
              class="video"
            ></video>
            <div class="controls">
              <span class="control-btn" data-src="about-vid-1.mp4"></span>
              <span class="control-btn" data-src="about-vid-2.mp4"></span>
              <span class="control-btn" data-src="about-vid-3.mp4"></span>
            </div>
          </div>

          <div class="content" data-aos="fade-left" data-aos-delay="600">
            <span>why choose us?</span>
            <h3>Nature's Majesty Awaits You</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              fugit repellat error deserunt nam aperiam odit libero quos
              provident. Nostrum?
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </section>
        {/* 
    <!-- about section ends -->

    <!-- destination section starts  --> */}

        <section class="destination" id="destination">
          <div class="heading">
            <span>our destination</span>
            <h1>make yours destination</h1>
          </div>

          <div class="box-container">
            <div class="box" data-aos="fade-up" data-aos-delay="150">
              <div class="image">
                <img src="des-1.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="300">
              <div class="image">
                <img src="des-2.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="450">
              <div class="image">
                <img src="des-3.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="600">
              <div class="image">
                <img src="des-4.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="750">
              <div class="image">
                <img src="des-5.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="900">
              <div class="image">
                <img src="des-6.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="1150">
              <div class="image">
                <img src="des-7.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="1300">
              <div class="image">
                <img src="des-8.jpg" alt="" />
              </div>
              <div class="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- destination section ends -->

    <!-- services section starts  --> */}

        <section class="services" id="services">
          <div class="heading">
            <span>our services</span>
            <h1>countless expericences</h1>
          </div>

          <div class="box-container">
            <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
              <i class="fas fa-globe"></i>
              <h3>worldwide</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, cumque.
              </p>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
              <i class="fas fa-hiking"></i>
              <h3>adventures</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, cumque.
              </p>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
              <i class="fas fa-utensils"></i>
              <h3>food & drinks</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, cumque.
              </p>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="600">
              <i class="fas fa-hotel"></i>
              <h3>affordable hotels</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, cumque.
              </p>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="750">
              <i class="fas fa-wallet"></i>
              <h3>affordable price</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, cumque.
              </p>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="900">
              <i class="fas fa-headset"></i>
              <h3>24/7 support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, cumque.
              </p>
            </div>
          </div>
        </section>
        {/* 
    <!-- services section ends -->

    <!-- gallery section starts  --> */}

        <section class="gallery" id="gallery">
          <div class="heading">
            <span>our gallery</span>
            <h1>we record memories</h1>
          </div>

          <div class="box-container">
            <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
              <img src="gallery-img-1.jpg" alt="" />
              <span>travel spot</span>
              <h3>iceland</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
              <img src="gallery-img-2.jpg" alt="" />
              <span>travel spot</span>
              <h3>greenland</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
              <img src="gallery-img-3.jpg" alt="" />
              <span>travel spot</span>
              <h3>alaska</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
              <img src="gallery-img-4.jpg" alt="" />
              <span>travel spot</span>
              <h3>thailand</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
              <img src="gallery-img-5.jpg" alt="" />
              <span>travel spot</span>
              <h3>brazil</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
              <img src="gallery-img-6.jpg" alt="" />
              <span>travel spot</span>
              <h3>maldive</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
              <img src="gallery-img-7.jpg" alt="" />
              <span>travel spot</span>
              <h3>iceland</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
              <img src="gallery-img-8.jpg" alt="" />
              <span>travel spot</span>
              <h3>alaska</h3>
            </div>

            <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
              <img src="gallery-img-9.jpg" alt="" />
              <span>travel spot</span>
              <h3>maldive</h3>
            </div>
          </div>
        </section>
        {/* 
    <!-- gallery section ends -->

    <!-- review section starts  --> */}

        <section class="review">
          <div class="content" data-aos="fade-right" data-aos-delay="300">
            <span>testimonials</span>
            <h3>good news from our clients</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              laudantium corporis fugiat quae unde perspiciatis similique ab
              modi enim consequatur aperiam cumque distinctio facilis sit,
              debitis possimus asperiores non harum.
            </p>
          </div>

          <div class="box-container" data-aos="fade-left" data-aos-delay="600">
            <div class="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div class="user">
                <img src="pic-1.png" alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div class="user">
                <img src="pic-2.png" alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div class="user">
                <img src="pic-3.png" alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div class="user">
                <img src="pic-4.png" alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
    <!-- review section ends -->

    <!-- blogs section starts  --> */}

        <section class="blogs" id="blogs">
          <div class="heading">
            <span>blogs & posts</span>
            <h1>we untold stories</h1>
          </div>

          <div class="box-container">
            <div class="box" data-aos="fade-up" data-aos-delay="150">
              <div class="image">
                <img src="blog-1.jpg" alt="" />
              </div>
              <div class="content">
                <a href="#" class="link">
                  Life is a journey, not a destination
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, natus!
                </p>
                <div class="icon">
                  <a href="#">
                    <i class="fas fa-clock"></i> 21st may, 2021
                  </a>
                  <a href="#">
                    <i class="fas fa-user"></i> by admin
                  </a>
                </div>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="300">
              <div class="image">
                <img src="blog-2.jpg" alt="" />
              </div>
              <div class="content">
                <a href="#" class="link">
                  Life is a journey, not a destination
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, natus!
                </p>
                <div class="icon">
                  <a href="#">
                    <i class="fas fa-clock"></i> 21st may, 2021
                  </a>
                  <a href="#">
                    <i class="fas fa-user"></i> by admin
                  </a>
                </div>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="450">
              <div class="image">
                <img src="blog-3.jpg" alt="" />
              </div>
              <div class="content">
                <a href="#" class="link">
                  Life is a journey, not a destination
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, natus!
                </p>
                <div class="icon">
                  <a href="#">
                    <i class="fas fa-clock"></i> 21st may, 2021
                  </a>
                  <a href="#">
                    <i class="fas fa-user"></i> by admin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
    <!-- blogs section ends -->

    <!-- banner section starts  --> */}

        <div class="banner">
          <div class="content" data-aos="zoom-in-up" data-aos-delay="300">
            <span>start your adventures</span>
            <h3>Let's Explore This World</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptatum praesentium amet quibusdam quam officia suscipit odio.
            </p>
            <a href="#book-form" class="btn">
              book now
            </a>
          </div>
        </div>

        {/* <!-- banner section ends -->

    <!-- footer section starts  --> */}

        <section class="footer">
          <div class="box-container">
            <div class="box" data-aos="fade-up" data-aos-delay="150">
              <a href="#" class="logo">
                <i class="fas fa-paper-plane"></i>travel
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ad?
              </p>
              <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
              </div>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="300">
              <h3>quick links</h3>
              <a href="#home" class="links">
                <i class="fas fa-arrow-right"></i> home
              </a>
              <a href="#about" class="links">
                <i class="fas fa-arrow-right"></i> about
              </a>
              <a href="#destination" class="links">
                <i class="fas fa-arrow-right"></i> destination
              </a>
              <a href="#services" class="links">
                <i class="fas fa-arrow-right"></i> services
              </a>
              <a href="#gallery" class="links">
                <i class="fas fa-arrow-right"></i> gallery
              </a>
              <a href="#blogs" class="links">
                <i class="fas fa-arrow-right"></i> blogs
              </a>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="450">
              <h3>contact info</h3>
              <p>
                <i class="fas fa-map"></i> Muscat, Oman
              </p>
              <p>
                <i class="fas fa-phone"></i> +123-456-7890
              </p>
              <p>
                <i class="fas fa-envelope"></i> alalawiaabi26@gmail.com
              </p>
              <p>
                <i class="fas fa-clock"></i> 7:00am - 10:00pm
              </p>
            </div>

            <div class="box" data-aos="fade-up" data-aos-delay="600">
              <h3>newsletter</h3>
              <p>subscribe for latest updates</p>
              <form action="">
                <input
                  type="email"
                  name=""
                  placeholder="enter your email"
                  class="email"
                  id=""
                />
                <input type="submit" value="subscribe" class="btn" />
              </form>
            </div>
          </div>
        </section>

        <div class="credit">
          created by <span>Aabi.codes</span> | all rights reserved!
        </div>
      </div>
    </>
  );
}

export default App;

// built in React js Code
{
  /* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */
}
