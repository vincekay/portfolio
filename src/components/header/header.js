import React, { Component } from 'react';
import Typing from 'react-typing-animation';



export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <React.Fragment>
         
      {/*generated code*/}
      <header id="home">
         
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
    
         }
         <div className="row banner">
            <div className="banner-text">
            
    
   
            <h1 className="responsive-headline"><Typing>
              
       <span>I am.. a Designer.</span>
       <Typing.Delay ms={1000} />
       <Typing speed={25}></Typing>
       <Typing.Backspace count={20} />
    <span>I am.. a Developer.</span>
    <Typing.Delay ms={1000} />
    <Typing.Backspace count={20} />
    <Typing speed={25}></Typing>
    <span>I am.. a creator.</span>
    <Typing.Delay ms={1000} />
    <Typing.Backspace count={20} />
    <Typing speed={25}></Typing>
    <Typing.Reset count={1} delay={0} />
    I am.. Vincent Kay.
      </Typing></h1>  
            
      {/* <h1 className="responsive-headline"><Typing>
      <span>I am a Designer.</span>
      </Typing></h1>  */}
      
   
               <h3>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3> 
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
         
      </header>
     
      
      </React.Fragment>
      
    );
  }
}

    