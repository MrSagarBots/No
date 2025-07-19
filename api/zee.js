export default function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    res.status(400).send("Missing 'query' parameter");
    return;
  }

  const redirectUrl = `https://www.zee5.com/search?q=${encodeURIComponent(query)}`;
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
