import './choose-us.css';

const ChooseUs = () => {
  return (
    <div>
      <div class="container">
        <div class="section" id="hero">
          <div class="content">
            <h1 id="brand">UrbanClap</h1>
            <p id="sub-brand-text">Interior Design Blog</p>
          </div>
          <a
            id="hero-down-button"
            class="down-button"
            data-speed="1000"
            href="#blog-links"
          >
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/sem-content/misc/interior-designer-blog/down-arrow.png"
              alt="Show links"
            />
          </a>
          <div class="video-wrapper">
            <video
              id="hero-video"
              src="https://s3-ap-southeast-1.amazonaws.com/sem-content/misc/interior-designer-blog/hero-video.mp4"
              autoplay
              muted
              loop
            ></video>
          </div>
        </div>
        <div class="section" id="blog-links">
          <a
            class="blog-link type-image-2-1 row1 col1"
            href="https://www.urbanclap.com/blog/home-improvement/use-of-natural-stones-in-interior-design/"
          >
            <div
              class="article-image"
              style={{
                backgroundImage:
                  'url(https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/09/18171925/shutterstock_236969923.jpg)',
              }}
            ></div>
            <h3>Use of Natural Stones in Interior Design</h3>
          </a>
          <a
            class="blog-link type-image-2-1 row1 col2"
            href="https://www.urbanclap.com/blog/home-improvement/how-to-pick-lighting-for-your-home/"
          >
            <div
              class="article-image"
              style={{
                backgroundImage:
                  'url(https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/09/15115101/shutterstock_167076143-940x400.jpg)',
              }}
            ></div>
            <h3>How to Pick Lighting for your Home</h3>
          </a>
          <a
            class="blog-link type-paragraph-2-1 row1 col3"
            href="https://www.urbanclap.com/blog/home-improvement/wall-art-ideas-for-your-bedroom/"
          >
            <div
              class="article-image"
              style={{
                backgroundImage:
                  'url(https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/09/11164046/shutterstock_646806055.jpg)',
              }}
            ></div>
            <h3>Wall Art Ideas for Your Bedroom</h3>
            <p>
              Your bedroom is an extension of yourself, a respite from your
              day’s work, and a safe haven for your personal thoughts and time.
              As soon as your eyes fall on your bed, you feel relaxed and at
              peace. For these reasons it is important that your bedroom should
              represent who you are and what you like.
            </p>
            <p>
              There are various ways in which you can do up your bed wall,
              depending on your aesthetics and utility. Here are a few ...
            </p>
            <p class="continue">Continue reading</p>
          </a>
          <a
            class="blog-link type-color-2-1 row2 col1"
            href="https://www.urbanclap.com/blog/home-improvement/diy-ideas-for-home-decor-5-ways-to-reuse-old-glass-bottles-and-jars/"
          >
            <h3>
              DIY Ideas for Home Decor: 5 Ways to Reuse Old Glass Bottles and
              Jars!
            </h3>
          </a>
          <a
            class="blog-link type-image-2-1 row2 col2"
            href="https://www.urbanclap.com/blog/home-improvement/dining-table-decor-ideas-for-your-home/"
          >
            <div
              class="article-image"
              style={{
                backgroundImage:
                  'url(https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/09/13143621/shutterstock_4950170771-940x400.jpg)',
              }}
            ></div>
            <h3>Dining Table Decor Ideas for your Home</h3>
          </a>
          <a
            class="blog-link type-image-2-1 row2 col3"
            href="https://www.urbanclap.com/blog/home-improvement/6-ways-to-spruce-up-your-office-interiors/"
          >
            <div
              class="article-image"
              style={{
                backgroundImage:
                  'url(https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/09/06160520/Mad-Design-3-940x400.jpg)',
              }}
            ></div>
            <h3>6 Ways to Spruce Up Your Office Interiors</h3>
          </a>
          <a
            class="blog-link type-image-2-2 row3 col1"
            href="https://www.urbanclap.com/blog/home-improvement/5-home-decor-ideas-for-autumn-in-india/"
          >
            <span>Tips</span>
            <div
              class="article-image"
              style={{
                backgroundImage:
                  'url(https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/09/07111634/shutterstock_308859035.jpg)',
              }}
            ></div>
            <h3>5 Home Decor Ideas for Autumn in India</h3>
          </a>
          <a
            class="blog-link type-heading-1-1 row3 col3"
            href="https://www.urbanclap.com/blog/home-improvement/the-best-flooring-materials-for-humid-regions-in-india/"
          >
            <h3>The Best Flooring Materials for Humid Regions in India</h3>
          </a>
          <a
            class="blog-link type-heading-1-1 row3_5 col3"
            href="https://www.urbanclap.com/blog/home-improvement/finish-right-designing-home/"
          >
            <h3>How to Finish it Right- Designing Your Home</h3>
          </a>
        </div>
        <div class="section" id="footer">
          <div class="content">
            <h2>
              Tell us your requirements and get quotations from the best
              Interior Designers around you.
            </h2>
            <h2>Only on UrbanClap.</h2>
          </div>
          <footer>
            <span class="logo">UrbanClap</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
