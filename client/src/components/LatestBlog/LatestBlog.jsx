import React from 'react'
import "./LatestBlog.css"

const LatestBlog = () => {
  return (
    <>
    
    <div className="blog">

    <div className="bloginfo">    
          <h1>OUR LATEST BLOG</h1>
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
    <img className="image" src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="team" /> <br />
   <div className="textinfo">
    <a href="/details/:id"><h3>Playback: Akufo-Addo speaks to business community</h3></a>
   <br />
   <a href="/details/id"> <p>Posted by <b>admin</b> at 04 Feb, 2017</p></a>
   <br />
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br/> urna sed accumsan... <a className='a' href="/details/:id">Read more</a></p>
   </div>
</div>

<div className="card1">
    <img className="image" src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg" alt="team" /> <br />
   <div className="textinfo">
    <a href="/details/:id"><h3>Playback: Akufo-Addo speaks to business community</h3></a>
   <br />
   <a href="/details/id"> <p>Posted by <b>admin</b> at 04 Feb, 2017</p></a>
   <br />
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br/> urna sed accumsan... <a className='a' href="/details/:id">Read more</a></p>
   </div>
</div>

<div className="card1">
    <img className="image" src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg" alt="team" /> <br />
   <div className="textinfo">
    <a href="/details/:id"><h3>Playback: Akufo-Addo speaks to business community</h3></a>
   <br />
   <a href="/details/id"> <p>Posted by <b>admin</b> at 04 Feb, 2017</p></a>
   <br />
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br/> urna sed accumsan... <a className='a' href="/details/:id">Read more</a></p>
   </div>
</div>

</div>

    </div>

    </>
  )
}

export default LatestBlog