export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const base = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  const headers = { Authorization: `Bearer ${token}` };

  try {
    if (req.method === 'POST') {
      // Increment and return new count
      const r = await fetch(`${base}/incr/fifa_kc_visits`, { method: 'POST', headers });
      const data = await r.json();
      return res.status(200).json({ count: data.result });
    } else {
      // Just read current count
      const r = await fetch(`${base}/get/fifa_kc_visits`, { headers });
      const data = await r.json();
      return res.status(200).json({ count: parseInt(data.result || '0', 10) });
    }
  } catch (err) {
    return res.status(500).json({ count: 0, error: err.message });
  }
}
