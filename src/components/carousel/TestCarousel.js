import React from "react";
import Carousel from "nuka-carousel";

export default class extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    const imageArray = [
      "https://cdn-img.health.com/sites/default/files/styles/large_16_9/public/styles/main/public/gettyimages-522881398.jpg?itok=0g33xDwx",
      "http://placehold.it/1000x400/ffffff/c0392b/&text=slide2",
      "http://placehold.it/1000x400/ffffff/c0392b/&text=slide3",
      "http://placehold.it/1000x400/ffffff/c0392b/&text=slide4",
      "http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"
    ];

    const images = imageArray.map(img => {
      return <img src={img} />;
    });
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={slideIndex => this.setState({ slideIndex })}
      >
        {images}
      </Carousel>
    );
  }
}
