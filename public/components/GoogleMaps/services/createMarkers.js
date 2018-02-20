const createMarkers = (quests, map) => {
  const markers = [];

  quests.map((quest) => { // eslint-disable-line array-callback-return
    const marker = new google.maps.Marker({
      position: {
        lat: quest.point.latitude,
        lng: quest.point.longitude
      },
      label: '!',
      map,
      draggable: false
    });
    markers.push(marker);
  });

  return markers;
};

export { createMarkers as default };
