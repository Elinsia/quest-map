const createInfoWindow = (title, description) => (
  `<div>
    <p>Title: ${title}</p>
    <p>Description: ${description}</p>
    <button>Let's go!</button>
  </div>`
);

export { createInfoWindow as default };
