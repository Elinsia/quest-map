// not good practice, rework this
const createInfoWindow = (title, description) => { // eslint-disable-line no-unused-expressions
  `<div>
    <p>Title: ${title}</p>
    <p>Description: ${description}</p>
    <button>Let's go!</button>
   </div>`;
};

export { createInfoWindow as default };
