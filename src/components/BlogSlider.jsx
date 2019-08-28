import React, { Component } from "react";

class BlogSlider extends Component {
  render() {
    return (
      <>
        <div className="blog-slider">
          <section className="blog-slider-body">
            <div className="blog-slider-card">
              <img src="blog-pic.jpg" alt="blog thing topic" />
              <h5 className="blog-slider-title">
                Title of the blog post here.
              </h5>
              <p className="blog-slider-card--text">
                Laborum exercitation aliquip ea adipisicing enim cupidatat
                eiusmod exercitation aliquip elit aute proident nisi voluptate.
                Proident laborum in tempor et et aute elit adipisicing anim
                fugiat cupidatat officia proident. 
              </p>
              <button>READ MORE</button>
            </div>

            <div className="blog-slider-card">
              <img src="blog-pic.jpg" alt="blog thing topic" />
              <h5 className="blog-slider-title">
                Title of the blog post here.
              </h5>
              <p className="blog-slider-card--text">
                Sint dolor enim quis proident. Qui laboris proident mollit quis
                velit deserunt nisi voluptate Lorem culpa esse ut. Sit in magna
                occaecat duis tempor ipsum nostrud mollit incididunt.
              </p>
              <button>READ MORE</button>
            </div>

            <div className="blog-slider-card">
              <img src="blog-pic.jpg" alt="blog thing topic" />
              <h5 className="blog-slider-title">
                Title of the blog post here.
              </h5>
              <p className="blog-slider-card--text">
                Duis reprehenderit nostrud commodo id aute ullamco quis esse
                velit cillum. Mollit dolore amet enim magna sunt ipsum
                consectetur. Irure magna pariatur sint qui nisi quis enim ipsum
                aute ut. Aliqua aliquip adipisicing non cupidatat. Labore
                proident duis exercitation minim officia incididunt laborum
                laboris velit.
              </p>
              <button>READ MORE</button>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default BlogSlider;
