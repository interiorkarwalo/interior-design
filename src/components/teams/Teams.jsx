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
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Andrea Reay</p>
            <p class="team-content">Senior Interior Designer</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Prescription01&hatColor=Red&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Serious&skinColor=Pale"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Anil Daal</p>
            <p class="team-content">Interior Designer</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Red&clotheType=ShirtScoopNeck&clotheColor=PastelOrange&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Yellow"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">John Doe</p>
            <p class="team-content">Interior Design Coordinator</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hatColor=Pink&hairColor=Brown&facialHairType=Blank&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Brown"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Ashley Fratis</p>
            <p class="team-content">Interior Design</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Round&hairColor=Black&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Deer&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Tanned"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Susan</p>
            <p class="team-content">Interior Design Lead</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img
              class="team-image"
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Tanned"
            />
          </div>
          <div class="team-content-container">
            <p class="team-title">Jessica</p>
            <p class="team-content">Interior Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
