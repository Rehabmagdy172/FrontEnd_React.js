import React, { Component } from "react";
import bookAdd from '../../images/Image of add book.jpg'


class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: bookAdd
    };

   // if we are using arrow function binding is not required
   //  this.onImageChange = this.onImageChange.bind(this);
  }



  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
        // <div>
        // <div>
          <div>
            <div className="uploadimage-img d-flex justify-content-center">
              <img src={this.state.image} />
            </div>
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
      //   </div>
      // </div>
    );
  }
}
export default DisplayImage;