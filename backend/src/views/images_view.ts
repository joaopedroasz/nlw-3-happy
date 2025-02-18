import Image from "../model/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.0.11:8000/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
