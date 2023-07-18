const searchResults = [
  {
    id: 1,
    title: "Örnek Blog 1",
    description: "Bu bir örnek arama sonucudur.",
  },
  {
    id: 2,
    title: "Örnek Blog 2",
    description: "Bu da başka bir örnek arama sonucudur.",
  },
  {
    id: 3,
    title: "Örnek Blog 3",
    description: "Bu da daha  başka bir örnek arama sonucudur.",
  },
];

export default function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    res.status(400).json({
      statusCode: "400 Bad Request",
      error: `
      Arama sorgusu eksik. Lütfen bir arama sorgusu belirtin.
      "/api/search?query=seo" gibi
      `,
    });
    return;
  }

  const filteredResults = searchResults.filter((result) =>
    result.title.toLowerCase().includes(query?.toLowerCase())
  );

  if (filteredResults.length === 0) {
    res.status(400).json({ error: "Sonuç bulunamadı." });
  } else {
    res.status(200).json(filteredResults);
  }
}
