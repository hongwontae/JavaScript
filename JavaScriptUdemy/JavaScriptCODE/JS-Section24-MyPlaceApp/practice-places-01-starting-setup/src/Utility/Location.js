const GOOGLE_API_KEY = 'AIzaSyBT2EEB8bYlAegJblbZslJ03q6FXL7YFfM'

export async function getCoordsFromAddress(address){
    const URLAddress = encodeURI(address);
    console.log(URLAddress)
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