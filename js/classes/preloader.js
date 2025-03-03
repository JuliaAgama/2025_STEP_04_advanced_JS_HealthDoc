
// class PRELOADER


class PRELOADER {
    constructor() {
      this.preloader = document.createElement('div');
    }

    // Create preloader and render it in parentElement
  render(parentElement) {
    this.preloader.classList.add('preloader');
    parentElement.append(this.preloader);
  };


    // Remove preloader from parent
  remove() {
    this.preloader.remove();
  };
};

export default PRELOADER;

