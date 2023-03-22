import React from 'react';
import { Link } from 'react-router-dom';

const SubGallery2 = () => {
  return (
    <section class="text-gray-600 body-font">
      <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        <h2>Title: </h2>
        <p>Body</p>
      </div>

      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-2/3 mx-auto">
          <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block opacity-80 absolute inset-0"
              src="https://media.istockphoto.com/id/1386951967/photo/modern-kitchen-interior-with-green-wall.jpg?b=1&s=170667a&w=0&k=20&c=6_d5XfDRbUJZdrzvv5fAPTTsBp3f3NgvHpdp-3T8aeE="
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-2xl  font-medium title-font mb-2">
                Turnkey Interior
              </h2>

              <Link
                to="/services/turnkey-interior"
                class="mt-3 text-indigo-500 inline-flex items-center"
              >
                Go To
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://media.istockphoto.com/id/1423732380/photo/cozy-luxury-and-modern-living-room-with-large-windows-sofa-chairs-decoration-and-fireplace.jpg?b=1&s=170667a&w=0&k=20&c=Da8zES2GtccNwS3tdOGJxQ_F_b-SpToOkKDepjELns0="
                />
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl  font-medium title-font mb-2">
                    Corporate Office
                  </h2>

                  <Link
                    to="/services/corporate-office"
                    class="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Go To
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://media.istockphoto.com/id/1354262369/photo/mock-up-poster-frame-in-modern-interior-background-living-room-scandinavian-style-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=_Hy3y9kx7kUejKVbdcwAHJpzQwrntc16jA1Tq6YmF00="
                />
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl  font-medium title-font mb-2">
                    Gypsum False
                  </h2>

                  <Link
                    to="/services/gypsum-false"
                    class="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Go To
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubGallery2;
