import React from "react";
import "./Bizpro.css";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Bizpro = () => {
  return (
    <>
  <div className="hdtxt">
            <h1>ABOUT OUR BIZPRO</h1>
            <hr style={{ width: "30px", height:"3px", border:"none" ,backgroundColor: "red" }} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>

  <div className="bizpro">
        <div className="bzp1">
          <div className="icon">
            <EditNoteIcon style={{fontSize:'60px'}}/>
          </div>
          <div className="part2">
            <h3>WEB DEVELOPMENT</h3> <br />
            <p style={{color:"gray"}}>Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.</p>
            <button className="detailbtn">More details</button>
          </div>
        
        </div>
     

   
        <div className="bzp1">
          <div className="icon">
            <EditNoteIcon style={{fontSize:'60px'}}/>
          </div>
          <div className="part2">
            <h3>WEB DEVELOPMENT</h3> <br />
            <p style={{color:"gray"}}>Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.</p>
            <button className="detailbtn">More details</button>
          </div>
        
        </div>
   


    
        <div className="bzp1">
          <div className="icon">
            <EditNoteIcon style={{fontSize:'60px'}}/>
          </div>
          <div className="part2">
            <h3>WEB DEVELOPMENT</h3> <br />
            <p style={{color:"gray"}}>Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.</p>
            <button className="detailbtn">More details</button>
          </div>
        
        </div>
  


        <div className="bzp1">
          <div className="icon">
            <EditNoteIcon style={{fontSize:'60px'}}/>
          </div>
          <div className="part2">
            <h3>WEB DEVELOPMENT</h3> <br />
            <p style={{color:"gray"}}>Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.</p>
            <button className="detailbtn">More details</button>
          </div>
        
        </div>
  

      </div>

    </>
  );
};

export default Bizpro;
