import React, { Component } from 'react'
import QuoteForm from './QuoteForm'
import Reviews from './Reviews'
import ServiceArea from './ServiceArea'
import BlogSlider from './BlogSlider'
import ServicesBox from './ServicesBox'
import BottomQuoteBar from './BottomQuoteBar';

class Body extends Component {
    
    render() {
        return (
            <div className="body">
                <div className="row">
                    <div className="column left-column">
                        <div className="blog-article">
                            <div className="title">
                                <h1>WE ARE YOUR <br/><span className="location">FORT LAUDERDALE</span> <br/>MOVERS</h1>
                            </div>
                            
                            <p><img className="blog-image" src="blog-pic.jpg" alt="blog featured"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Tempus imperdiet nulla malesuada pellentesque. Est ante in nibh mauris cursus mattis molestie a. Viverra tellus in hac habitasse. Faucibus nisl tincidunt eget nullam non nisi. Tortor pretium viverra suspendisse potenti. Consectetur adipiscing elit pellentesque habitant morbi tristique. Amet commodo nulla facilisi nullam vehicula. Ridiculus mus mauris vitae ultricies leo. Eget est lorem ipsum dolor sit amet consectetur. Ultricies tristique nulla aliquet enim tortor. Auctor urna nunc id cursus.
                            <br/><br/>
                                Magna sit amet purus gravida. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Aliquet lectus proin nibh nisl condimentum id venenatis a. Odio facilisis mauris sit amet massa vitae tortor. Sit amet commodo nulla facilisi nullam vehicula. Sed risus ultricies tristique nulla aliquet enim tortor. Risus commodo viverra maecenas accumsan lacus vel. Id ornare arcu odio ut sem nulla pharetra diam. Nunc scelerisque viverra mauris in. Id semper risus in hendrerit gravida rutrum quisque non. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Velit dignissim sodales ut eu. Morbi tristique senectus et netus et malesuada fames ac turpis. 

                                Odio eu feugiat pretium nibh ipsum consequat nisl vel. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Accumsan tortor posuere ac ut consequat semper viverra. Magna ac placerat vestibulum lectus. Aenean pharetra magna ac placerat vestibulum lectus. Sit amet tellus cras adipiscing. Quisque non tellus orci ac auctor augue mauris augue neque. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Tincidunt id aliquet risus feugiat in ante metus dictum at. Dolor purus non enim praesent elementum facilisis leo vel. Tortor consequat id porta nibh venenatis cras.
                            <br/><br/>
                                Facilisis gravida neque convallis a cras semper. Vel pretium lectus quam id leo in vitae. Risus pretium quam vulputate dignissim suspendisse in est. Venenatis cras sed felis eget velit aliquet. Nunc sed velit dignissim sodales. Risus ultricies tristique nulla aliquet enim tortor at. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Suscipit adipiscing bibendum est ultricies integer. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Tortor aliquam nulla facilisi cras fermentum. Aliquam sem et tortor consequat id porta nibh venenatis.

                                Quis auctor elit sed vulputate mi sit amet. Viverra nam libero justo laoreet sit amet cursus sit amet. Semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum. Dapibus ultrices in iaculis nunc. Sagittis id consectetur purus ut faucibus pulvinar. Lobortis elementum nibh tellus molestie nunc. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Suspendisse in est ante in nibh mauris cursus. Cursus euismod quis viverra nibh cras pulvinar. Arcu cursus euismod quis viverra nibh.
                            </p>
                    </div>
                            <ServicesBox />
                    </div>
                    
                    <div className="column right-column">
                        <QuoteForm />
                        <ServiceArea />
                        <Reviews />
                    </div>
                </div>
                    <BlogSlider />
                    <BottomQuoteBar />
                </div>  
        );
    }
}

export default Body;
