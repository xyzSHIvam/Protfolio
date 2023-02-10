import React from 'react'

const App = () => {
  return (
    <div className='App'>
      
      <div className="container">
        <img className="top-cloud" src="./Image/cloud.png" />
        <h1>I'm Shivam</h1>
        <p>Im a Web developer</p>
        <img className="lower-cloud" src="./Image/cloud.png" />
        <img className="mountain" src="./Image/mountain.png" />
    </div>



    <div className="middle-container">
        <div className="profile">
            <img className="shivam" src="./Image/shivam.png" alt=""/>
            <h2 className="h" style={{marginBottom:"0px"}}>Hello.</h2>
            <p >I m Shivam sarma roy, I have done my schooling from Kendriya Vidyalaya ,Tinsukia and I m currently pursuing
                B.tech from lovely professional university.
            </p>
        </div>
        <hr />




        <div className="skills">
            <h2>My Skills.</h2>
            <div className="skill-row">
                <img className="chilly" src="./Image/computer.png" alt="" />
                <h3>acheivements</h3>
                <ul>
                    <h3>projects</h3>
                    <li>1 tic-tac-toe game using C++(In 1st year of B.tech)</li>
                    <li>2 Tindog webpage FrontEnd(Bootstrap,css,html,js)(2nd year of B.tech)</li>
                    <li>3 Quiz game(Bootstrap,css,html ,javascript)(2nd year of B.tech)</li>
            
                    </ul>
               
            </div>
            <div className="skill-row">
                <img className="computer" src="./Image/computer.png" alt="" />
                <ul>
                <h3>E-commerce</h3>
                <li>•	It is a functional E-COMMERCE website for a fashion brand “PlayInFashion”(imaginary name) which is created using React, Styled Components, Redux as Front-end and Node.js , express.js, MONGODB, Mongoose as Back-end to access the content of the site. For Authentication we have used JWT(as middleware in requests). And it uses Stripe API for payment.</li>
                <li>•	Users can login or register the account, once they created their account or logged into their account (which happens through JWT). </li>
                <li>•	Users can login or register the account, once they created their account or logged into their account (which happens through JWT). 	Then they will land into our HOME page where the Add ,Filter, search items to cart and place order using stripe payment.
</li>
        
                </ul>
            </div>
        </div>
        <hr />



        <div className="contact-me">
            <h2>Get In Touch</h2>
            <h3>Shivam sarma roy</h3>
            <p className="contact">Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
            <a className="btn" href="mailto:shivamsarmaroy@email.com">CONTACT ME</a>
        </div>
    </div>











    <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/">Twitter</a>
        <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
        <p style={{paddingTop:"100px"}}>© Shivam sarma roy.</p>
    </div>
    </div>
  )
}

export default App
