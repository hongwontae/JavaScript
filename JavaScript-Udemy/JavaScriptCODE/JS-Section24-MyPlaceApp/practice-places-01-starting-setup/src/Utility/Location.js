const GOOGLE_API_KEY = 'AIzaSyBT2EEB8bYlAegJblbZslJ03q6FXL7YFfM'

export async function getAddressFromCoords(coords) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`)
    if (!response.ok) {
      throw new Error('Failed to fetch address. Please try again!');
    }
    const data = await response.json();
    if (data.error_message) {
      throw new Error(data.error_message);
    }
    const address = data.results[0].formatted_address;
    return address;
  }

export async function getCoordsFromAddress(address){
    const URLAddress = encodeURI(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${URLAddress}&key=${GOOGLE_API_KEY}`);

    if(!response.ok){
        throw new Error('Faild');
    }
    const data = await response.json();
    if(data.error_message){
        throw new Error(data.error_message);
    }
    
    const coordinates = data.results[0].geometry.location; // 위도와 경도를 가진 키이다.
    return coordinates;
}