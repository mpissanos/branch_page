import React, { Component } from 'react'

class BlogSlider extends Component {
    render() {
        return(
            <div className="blog-slider">
                <div className="blog-slider-card">
                    <img src="blog-pic.jpg" alt="blog thing topic"/>
                    <h5 className="blog-slider-title">Title of the blog post here.</h5>
                        <p>blah blah blah blha koegjisdg</p>
                        <button>READ MORE</button>
                </div>

                <div className="blog-slider-card">
                    <img src="blog-pic.jpg" alt="blog thing topic"/>
                    <h5 className="blog-slider-title">Title of the blog post here.</h5>
                        <p>blah blah blah blha koegjisdg</p>
                        <button>READ MORE</button>
                </div>

                <div className="blog-slider-card">
                    <img src="blog-pic.jpg" alt="blog thing topic"/>
                    <h5 className="blog-slider-title">Title of the blog post here.</h5>
                        <p>blah blah blah blha koegjisdg</p>
                        <button>READ MORE</button>
                </div>

            </div>

        )
    }
}

export default BlogSlider;