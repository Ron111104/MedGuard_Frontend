export default async function handler(req, res) {
    const prodUrl = process.env.BACKEND_URL_PROD;  // Production backend URL
    const devUrl = process.env.BACKEND_URL_DEV;    // Development backend URL
  
    const { symptoms } = req.body;  // Extract the symptoms from the request body
  
    console.log('Received symptoms:', symptoms);
  
    try {
      // Try to fetch from the production URL
      const response = await fetch(`${prodUrl}/predict-disease/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ symptoms }),
    });
    
  
      if (response.ok) {
        // If the response is successful, return the predicted disease data
        const data = await response.json();
        console.log(`Data from production backend: ${JSON.stringify(data)}`);
        return res.status(200).json({ predicted_disease: data.diagnosis });
      } else {
        console.warn(`Production URL returned non-ok status: ${response.status}. Falling back to development URL.`);
        
        // If production fails, fallback to the development URL
        const fallbackResponse = await fetch(`${devUrl}/predict-disease/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ symptoms }),
        });
  
        if (!fallbackResponse.ok) {
          throw new Error(`Development URL returned non-ok status: ${fallbackResponse.status}`);
        }
  
        const fallbackData = await fallbackResponse.json();
        console.log(`Data from development backend: ${JSON.stringify(fallbackData)}`);
        return res.status(200).json({ predicted_disease: fallbackData.diagnosis });
      }
    } catch (error) {
      console.error(`Error during API communication: ${error.message}`);
      return res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
  }
  