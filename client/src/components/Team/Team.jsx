import React from "react";
import "./Team.css"

const Team = () => {
  return (
    <>
      <div className="team">
        <div className="teaminfo">
          <h1>MEET OUR TEAM</h1>
          <hr style={{ width: "30px", height:"3px", border:"none" ,backgroundColor: "red" }} />
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>

        <div className="cards">

            <div className="card1">
                <img className="image" src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg" alt="team" /> <br />
               <div className="text">
               <h3>Gonzalez Gina</h3>
               <br />
                <p>Web Devoloper</p>
               </div>
            </div>

            <div className="card1">
                <img className="image" src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg" alt="team" /> <br />
               <div className="text">
               <h3>Gonzalez Gina</h3>
               <br />
                <p>Web Devoloper</p>
               </div>
            </div>

            <div className="card1">
                <img className="image" src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg" alt="team" /> <br />
               <div className="text">
               <h3>Gonzalez Gina</h3>
               <br />
                <p>Web Devoloper</p>
               </div>
            </div>


        </div>
      </div>
    </>
  );
};

export default Team;
