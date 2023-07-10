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
];

export default function handler(req, res) {
  const { query } = req.query;

  const filteredResults = searchResults.filter((result) =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredResults.length === 0) {
    res.status(400).send("Sonuç bulunamadı.");
  } else {
    res.status(200).json(filteredResults);
  }
}
