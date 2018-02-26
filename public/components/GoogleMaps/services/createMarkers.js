const createMarkers = (quests, map) => {
  const markers = [];
  const infoWindow = new google.maps.InfoWindow({
    content: 'You clicked on marker'
  });
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

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });

  return markers;
};

export { createMarkers as default };
