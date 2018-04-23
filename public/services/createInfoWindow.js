const createInfoWindow = (title, description, id) => (
  `<div>
    <p>Title: ${title}</p>
    <p>Description: ${description}</p>
    <button id="info-window-btn" data-quest-id="${id}">Let's go!</button>
  </div>`
);

export { createInfoWindow as default };
