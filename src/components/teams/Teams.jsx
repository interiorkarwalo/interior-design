import React from 'react';
import './teams.css';
const Teams = () => {
  return (
    <div className="container">
      <h1 className="team-title">Our Team</h1>
      <div class="team-container ">
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://images.pexels.com/photos/6392981/pexels-photo-6392981.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Kirti Sharma</p>
            <p class="team-content">Senior Interior Designer</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://images.pexels.com/photos/7580994/pexels-photo-7580994.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Karan Singh</p>
            <p class="team-content">Interior Designer</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://images.pexels.com/photos/7581009/pexels-photo-7581009.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Rahul Sharma</p>
            <p class="team-content">Interior Design Coordinator</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://images.pexels.com/photos/7580764/pexels-photo-7580764.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Mohit Aggarwal</p>
            <p class="team-content">Interior Design</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://images.pexels.com/photos/7581115/pexels-photo-7581115.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Gaurav Jangid</p>
            <p class="team-content">Interior Design Lead</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://images.pexels.com/photos/5301744/pexels-photo-5301744.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Mahesh Thakur</p>
            <p class="team-content">Interior Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
