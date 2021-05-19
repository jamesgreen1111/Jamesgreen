import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './AmbrosiaProject.module.css';

import AmbrosiaImg from '../../../../Images/Ambrosia-Cover.jpg';
import AmbrosiaImg2 from '../../../../Images/Ambrosia-img2.jpg';
import AmbrosiaImg3 from '../../../../Images/Ambrosia-img3.jpg';
import AmbrosiaImg4 from '../../../../Images/Ambrosia-img4.jpg';
import AmbrosiaImg5 from '../../../../Images/Ambrosia-img5.jpg';
import AmbrosiaImg6 from '../../../../Images/Ambrosia-img6.png';
import AmbrosiaImg7 from '../../../../Images/Ambrosia-img7.png';
import AmbrosiaImg8 from '../../../../Images/Ambrosia-img8.png';
import AmbrosiaImg9 from '../../../../Images/Ambrosia-img9.jpg';
import AmbrosiaImg10 from '../../../../Images/Ambrosia-img10.png';
import AmbrosiaImg11 from '../../../../Images/Ambrosia-img11.png';

class AmbrosiaProject extends Component {
    render () {
        return(
            <div className={classes.Container}>
                <h2 className={classes.Title}>Ambrosia 360° Campaign</h2>
                <img src={AmbrosiaImg} className={classes.Img}></img>

                <ul className={classes.Skills}>
                    <li>Branding</li>
                    <li>Package Design</li>
                    <li>Photoshop</li>
                </ul>
                <h3 className={classes.Titles}>Introduction</h3>
                <p className={classes.Para}>Ambrosia was a University project. I was tasked with producing a 360° Marketing Campaign for a product or 
                service of my choosing. This involved branding, designing and implementing elements to communicate a message across multiple platforms. 
                <br /><br />
                I decided to create a line of healthy energy drinks as an alternative to the current unhealthy market. The idea was to produce a pure, 
                ethical carbon negative product. To add a playful element and make customers want to buy the drinks, the product is themed around greek 
                gods and the idea that the drink is like an elyxir. Each drink represents a different god and flavour. I decided to choose Zeus, Athena, 
                Poseidon and Aphrodite due to them being well known. Through my research I found that many companies use their branding to give the customer 
                a specific feeling when they see their brand. I aimed to replicate this when introducing the theme behind my brand to make customers feel 
                special as if they were a god themselves. </p>

                    <img src={AmbrosiaImg2} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Brand Development</h3>
                <p className={classes.Para}>I started by looking at different names for the company related to greek mythology. My aim was to find a name 
                that I felt would create a good connection to my brand. The name I decided to go with was ‘Ambrosia’. This substance in greek mythology 
                was the food or drink consumed by the gods, the substance could turn a human immortal. 
                <br></br><br></br>
                On the other side of the image is my starting 
                moodboard that I created to help me understand the style I wanted to go for. Out of all the options I was drawn towards the matte black 
                bottles, they had a sophisticated, modern and professional look that I felt would work perfectly with my company.</p>

                    <img src={AmbrosiaImg3} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Logo Development</h3>
                <p className={classes.Para}>When producing my logo I created another Mindmap to help inspire some ideas. I didn’t want to go with a 
                generic lightning bolt and I felt that mount olympus wouldn’t have been understandable enough. When looking at other brands that have 
                a relation to greek gods I found that many of them used faces. 
                <br></br><br></br>
                I decided to continue with this idea and use zeus as the silhouette due to him being the most recognisable. The first design shown was 
                far too flat and not simplistic enough for a logo. For the second attempt I tried imitating the style of my favourite logo which led me 
                to produce the final design. The logo accurately reflects a connection to  greek gods whilst also being minimalist. For the choice of 
                colours I experimented with gold/bronze colours to reflect the greek god style.
</p>

                    <img src={AmbrosiaImg4} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Brand Guidlines</h3>
                <p className={classes.Para}>For my brand promise I wanted to form a sentence that encompasses all of my values into one. The strapline I chose aims 
                to tell the customer exactly what the product is. My brand mission is to be the customers daily energy drink choice in a shop.
                <br></br>               
                The last one shown is my slogan, I chose “drink of the gods” . It doesn't explain anything or have any real meaning but aims to give the customer 
                a feeling of power.
</p>

                    <img src={AmbrosiaImg5} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Brand Guidlines</h3>
                <p className={classes.Para}>The final section on branding is the brand guidelines shown above. The image shows how my brand should be 
                represented. I decided to prioritise a dark mode style for my brand as I feel it creates an aura of mystery and it also makes the logo 
                colours pop. For the choice of font I went with Cinzel as my primary as it reflects the ancient greek typeface style but also has a modern 
                professional look that gives a feeling of luxury. I used Avenir Next as my secondary font. I included this because I wanted a font that would 
                be more readable and simplistic for areas in the company where a decorative font is not needed.</p>

                    <img src={AmbrosiaImg6} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Packaging</h3>
                <p className={classes.Para}>When creating the packaging for the bottle of the drink I began implementing the position of the logo. 
                I have laid out the process in which I designed the style for the bottles above. I wanted them all to be similar in style at the core to 
                reflect a pattern and symmetry throughout the line of drinks. One idea I had from before was to implement some form of see-through section 
                to add depth and originality to the bottle. I designed each bottle with a unique symbol to represent the god this way I could also use these 
                symbols in further promotional pieces.</p>

                    <img src={AmbrosiaImg7} className={classes.Img}></img>
                    
                    <img src={AmbrosiaImg8} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Secondary Posters</h3>
                <p className={classes.Para}>For the start of the campaign I included a line of posters each one representing a different god, they all 
                include the line “who will you choose”. This is linked to the idea behind my campaign which is to pit each god against each other and find 
                out which one the public prefers. This would then be announced via social media or an event. These posters would be placed in the London tube 
                and also in bus stops as well as being promoted on social media.</p>

                    <img src={AmbrosiaImg9} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Main Poster</h3>
                <p className={classes.Para}>This is the main poster that links the four above together. The poster would be placed on billboards, 
                social media and also in shops next to the product. The poster uses another line which is “choose your immortal”, to make it unique from 
                the others. It also included the flavours below so customers can see the options.</p>

                    <img src={AmbrosiaImg10} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Social Media</h3>
                <p className={classes.Para}>Here is a quick mockup of the social media for Ambrosia. Unfortunately I didn’t have enough time to fully 
                explore this section but the aim would be that the campaign would also happen here with a build up to the brand launch and then a new 
                flavour/god revealed every day. At the end of the campaign the results would be revealed for the favourite drink.</p>

                    <img src={AmbrosiaImg11} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Interactive Promotion</h3>
                <p className={classes.Para}>For the final section I produced a concept for an interactive promotion demonstrated on this mockup shown above. 
                I would place this touchscreen style vending machine in a shopping mall. The screen would display that if the user can guess all the gods by 
                the symbols shown they would receive a free drink. As the UI shows they can scroll through and type the name of the god in. This interactive 
                fun idea would create a memorable connection for the user because who doesn’t want something for free.</p>

                <NavLink to="/" exact className={classes.link} ><p className={classes.Link}>Back to projects</p></NavLink>


            </div>
        )
    }
}
export default AmbrosiaProject;