const fetchGeocodeData = async () => {
  const apiKey = 'AIzaSyBFh9xSjGRXRVt6XKYHLPv2FNo6_1A3RdA';
  const city = 'London';

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      const { lat, lng } = data.results[0].geometry.location;
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      return { lat, lng };
    } else {
      console.error('Geocoding request failed');
    }
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
  }
};

export default fetchGeocodeData;
