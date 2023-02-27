import React from 'react';
import './testimonial.css';

const Testimonial = () => {
  return (
    <div className="testi-body container">
      <h1 className="testi-tagline">CLIENT TESTIMONIALS</h1>
      <div class="testi-container">
        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-daniel.jpg"
              alt="Daniel Clifford"
              class="avatar"
            />
            <div class="details">
              <div class="name">Daniel Clifford</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            “Let me start by saying, I love, love, love, Interior design team.
            Thanks so much for capturing my vision and bringing my ordinary
            space to a level of brilliance! Every detail looks absolutely
            amazing.”
          </div>
          <div class="quote">
            I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup.
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-jonathan.jpg"
              alt="Jonathan Walters"
              class="avatar"
            />
            <div class="details">
              <div class="name">Jonathan Walters</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            The team was very supportive and kept me motivated
          </div>
          <div class="quote">
            “I own a small dental office and was having difficulty finding a
            designer who could quickly and effectively help me with my office
            design. their team exceeded my expectations. Designers were great,
            and super friendly. My team and I absolutely love the 3D renderings
            they've provided us with and I can't wait to get the plans
            completed. Everything is just perfect. ”
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-jeanette.jpg"
              alt="Jeanette Harmon"
              class="avatar"
            />
            <div class="details">
              <div class="name">Jeanette Harmon</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">An overall wonderful and rewarding experience</div>
          <div class="quote">
            Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love.
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-patrick.jpg"
              alt="Patrick Abrams"
              class="avatar"
            />
            <div class="details">
              <div class="name">Patrick Abrams</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            “We worked with our designer for over 4 months and it was great. She
            really put an effort on it and accommodated as many changes we
            needed. Very happy with the service”
          </div>
          <div class="quote">
            “They are so amazing! The designs were just gorgeous! I was looking
            for something that was more than "okay". I wanted beautiful, and
            they delivered. My designer helped me design two awesome kids rooms,
            which are also somehow elevated and exciting at the same time - not
            everyone has the ability to do that! They are beautiful havens that
            my kids will love for years to come. Thank you!”
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-kira.jpg"
              alt="Kira Whittle"
              class="avatar"
            />
            <div class="details">
              <div class="name">Kira Whittle</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            Such a life-changing experience. Highly recommend!
          </div>
          <div class="quote">
            “I had my fireplace tiled, which changed the look of the room. I
            wasn't certain how to proceed as my preferences were all over the
            place, I seriously needed a cohesive look. I decided I would try
            Decorilla for help, and it was one of the best investments I have
            made. The designer I selected seriously read my mind and it was nice
            to have two to choose from! I did submit images of rooms I liked
            (utilizing sites such as Pinterest, Houzz, and Decorilla), and she
            nailed the look I was after. The cost for the services is extremely
            reasonable, and they also provide fantastic discounts through their
            shopping portal for furniture/accessories that fit one's budget. I
            could go on and on with my experience, but you get the picture. It
            was an outstanding experience! “Amazing service....love the quality
            of the interior designers to choose from and the end results were
            amazing. They were very attentive to every small details and very
            flexible with my choices. I highly recommend them to anybody who's
            looking for a great interior design service online.””
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
