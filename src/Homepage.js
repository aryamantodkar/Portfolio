import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
        <div className='info-container'>
            <div className='info-data'>
                <div className='homepage-heading'>
                    <div className='info-heading'>Hey 👋 <br/>  I am Aryaman Todkar</div>
                    <div className='info-img'>
                        <img src="pfp.svg" alt="profile image" className='profile-img'/>
                    </div>
                </div>
                <div className='info-subtitle'>I'm a passionate coder with a strong problem-solving aptitude and a deep love for creativity. I've consistently exceeded expectations, delivering projects ahead of schedule. What truly drives me is the opportunity to craft aesthetic websites and captivating user interfaces that not only meet functional requirements but also engage users on a visual and emotional level.<br/><br/> Beyond coding, I'm an active individual who enjoys football, marathon running (with a personal record of completing a 42.2km race in just 5 hours and 47 minutes), and maintaining a well-rounded and healthy lifestyle. I believe my exceptional work ethic, creativity, and holistic approach make me an invaluable asset for any organization, where I can blend technical expertise with artistic flair to create outstanding digital experiences.</div>
                <div className='resume'>
                    <a href='https://drive.google.com/file/d/1-Y9Rb1RvJpMAdvhniDSuqyf-4zOFrsYN/view' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Resume</a>
                </div>
            </div>
        </div>

        <div className='outer-container'>
            <picture>
                <source media="(min-width:700px)" srcset="roadmap.svg"/>
                <source media="(min-width:360px)" srcset="roadmap-mobile.svg"/>
                <img src="roadmap.svg" alt="roadmap image" className='roadmap'/>
            </picture>
            {/* <img src="roadmap.svg" alt="roadmap image" className='roadmap'/> */}
            <div className='project-1'>
                <div className='project-heading'>GamersForum ~ <span className='gray-text'>Project</span></div>
                <div className='project-desc'>GamersForum is a responsive web app compatible with smartphones, tablets and desktop. It is a social news platform that allows users to discuss content that other users have submitted.</div>
                <div className='resume'>
                    <a href='https://gamersforum.netlify.app/' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Demo</a>
                </div>
            </div>
            <div className='project-2'>
                <div className='project-heading'>ShortlyUrl ~ <span className='gray-text'>Project</span></div>
                <div className='project-desc'>ShortlyURL is a responsive web app that allows users to reduce long links from top sites on the Internet made using NextJS.</div>
                <div className='resume'>
                    <a href='https://shortlyurl.vercel.app/' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Demo</a>
                </div>
            </div>
            <div className='internship-1'>
                <div>
                    <img src="shoonyatech.svg" className='internship-img'/>
                </div>
                <div className='internship-data'>
                        <div className='internship-heading'>Shoonya Technologies</div>
                        <div className='internship-duration'>May 1st, 2021 – July 31st, 2021 (Remote)</div>
                        <div className='internship-jd'>Frontend Developer Internship ~ <span className='gray-text'>React JS, Styled Components</span></div>
                        <div className='internship-desc gray-text'>
                        Implemented ChartsJS for charting for a personal finance management website.
                        <br/>
                        Revamped website with completely new and cleaner UI.
                        <br/>
                        Implemented individual components using Storybooks and handled Responsiveness and used Styled Components for styling.
                        </div>
                        <div className='resume'>
                            <a href='https://drive.google.com/file/d/1SJ289j9298T6uLOCZFoRHLwPbU-DVOC-/view' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Certificate</a>
                        </div>
                </div>
            </div>
            
            <div className='internship-2'>
                <div>
                    <img src="glowradius.svg" className='internship-img'/>
                </div>
                <div className='internship-data'>
                    <div className='internship-heading'>Glow Radius</div>
                    <div className='internship-duration'>May 1st, 2021 – August 1st, 2021 (Remote)</div>
                    <div className='internship-jd'>Fullstack Developer Internship ~ <span className='gray-text'>React JS, Node JS.</span></div>
                    <div className='internship-desc gray-text'>
                        Worked with multiple CRM API’s like Hubspot, Zoho and Salesforce in Nodejs anddeveloped RESTful API’s for client to manipulate data.
                    <br/>
                        Improved test coverage on old and new code by writing unit and integration tests toprevent breaking changes.
                    </div>
                    <div className='resume'>
                        <a href='https://drive.google.com/file/d/1-jqXkLMkw_m3qV9F7AnbpbLl4iX5_MRq/view' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Certificate</a>
                    </div>
                </div>
            </div>
            
            <div className='internship-3'>
                <div>
                    <img src="petmojo.svg" className='internship-img petmojo'/>
                </div>
                <div className='internship-data'>
                    <div className='internship-heading'>Petmojo</div>
                    <div className='internship-duration'>July 1st, 2022 – August 1st, 2022 (Remote)</div>
                    <div className='internship-jd'>Frontend Developer Internship ~ <span className='gray-text'>React JS.</span></div>
                    <div className='internship-desc gray-text'>
                        Worked with optimization techniques like Lazy Loading, used Cloudinary to storeimages and decrease load time.
                    <br/>
                        Hosted the site on Hostinger and created a mobile-first responsive website.
                    </div>
                    <div className='resume'>
                        <a href='https://drive.google.com/file/d/1-v4pR2YO8fpDQajpkgm37XV9LNKpbEF4/view' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Certificate</a>
                    </div>
                </div>
            </div>
            
            <div className='marathon-1'>
                <div>
                    <img src="marathon-1.svg" className='internship-img marathon-img'/>
                </div>
                <div className='internship-data'>
                    <div className='internship-heading'>36th Pune International Marathon</div>
                    <div className='marathon-desc'>Completed Half Marathon (21.1 km) in 2 hours 8 minutes</div>
                    <div className='resume'>
                        <a href='https://racetecresults.com/myresults.aspx?CId=19898&RId=3127&EId=3&AId=324693' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Certificate</a>
                    </div>
                </div>
            </div>
            
            <div className='internship-4'>
                <div>
                    <img src="deutschebank.svg" className='internship-img'/>
                </div>
                <div className='internship-data'>
                    <div className='internship-heading'>Deutsche Bank</div>
                    <div className='internship-duration'>June 5th, 2023 - July 28th, 2023 (Pune)</div>
                    <div className='internship-jd'>Frontend Developer Internship ~ <span className='gray-text'>Angular JS.</span></div>
                    <div className='internship-desc gray-text'>
                        Redesigned and overhauled the entire UI of the mobile banking app using AngularJS and Ionic Framework to make it responsive and visually appealing, considering the bank’s overall branding guidelines.
                    <br/>
                        Learned Figma and utilized it to design and create new icons and images for the mobile app.
                    <br/>
                        Implemented a consistent UI design across iOS and Android platforms for the mobile app.
                    </div>
                    <div className='resume'>
                        <a href='https://drive.google.com/file/d/1aL5wIXFSqfv2T5albFc8Oqu4kOoUENCU/view' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Certificate</a>
                    </div>
                </div>
            </div>
            <div className='marathon-2'>
                <div>
                    <img src="marathon-2.svg" className='internship-img marathon-img'/>
                </div>
                <div className='internship-data'>
                    <div className='internship-heading'>Apla Pune Marathon</div>
                    <div className='marathon-desc'>Completed Full Marathon (42.2 km) in 5 hours 47 minutes</div>
                    <div className='resume'>
                        <a href='https://www.sportstimingsolutions.in/share.php?event_id=75046&bib=42004' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Certificate</a>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Homepage