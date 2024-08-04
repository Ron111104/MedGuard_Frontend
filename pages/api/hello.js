export default async function handler(req, res) {
  const prodUrl = process.env.BACKEND_URL_PROD;
  const devUrl = process.env.BACKEND_URL_DEV;
  console.log(prodUrl);
  try {
    // Attempt to fetch from production URL
    const response = await fetch(`${prodUrl}/hello/`);
    
    if (response.ok) {
      // Process response from production URL
      const data = await response.json();
      console.log(`Data from production backend: ${JSON.stringify(data)}`);
      return res.status(200).json(data.message);
    } else {
      console.warn(`Production URL returned non-ok status: ${response.status}. Falling back to development URL.`);
      // Fetch from development URL if production fails
      const fallbackResponse = await fetch(`${devUrl}/hello/`);
      
      if (!fallbackResponse.ok) {
        throw new Error(`Development URL returned non-ok status: ${fallbackResponse.status}`);
      }
      
      const fallbackData = await fallbackResponse.json();
      console.log(`Data from development backend: ${JSON.stringify(fallbackData)}`);
      return res.status(200).json(fallbackData.message);
    }
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    return res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
}
