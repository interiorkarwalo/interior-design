import React from 'react';
import { Link } from 'react-router-dom';

const SubGallery3 = () => {
  const randomImages = [
    {
      url: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Corporate Office Interior Contractor in India',
      path: 'corporate-office',
    },
    {
      url: 'https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Turnkey Interiors Contractor in India',
      path: 'turnkey-interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Office Furniture In India',
      path: 'corporate-office',
    },
    {
      url: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Interior Design Consultant in India',
      path: 'corporate-office',
    },
    {
      url: 'https://uploads-ssl.webflow.com/602c75ed03e1145b5fac2aed/603db0c0119b474884ff2d3e_bedroom_02-4_edited.jpg',
      title: 'Gypsum Partition Contractor In India',
      path: 'corporate-office',
    },
    {
      url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gypsum False Ceiling Contractor In India',
      path: 'corporate-office',
    },
  ];

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {randomImages.map((item) => (
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div
                class="flex relative cursor-pointer"
                style={{ transition: 'all 0.4s ease-in-out' }}
              >
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.url}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80"
                  style={{ transition: 'all 0.4s ease-in-out' }}
                >
                  {/* <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2> */}
                  <h1 class="title-font text-lg font-medium  mb-3">
                    <Link to={`/services/${item.path}`}> {item.title}</Link>
                  </h1>
                  {/* <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubGallery3;
