const API_KEY = "AIzaSyA2QxEv0tcQl7J-ykvwApmS4_my4vdPpVQ";
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
function generateBody(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}

async function callGoogleVisionAsync(image) {
    const body = generateBody(image);
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    // console.log(result);
    const detectedText = result.responses[0].fullTextAnnotation;
    return detectedText ? detectedText : false;
  }

  export default callGoogleVisionAsync;
