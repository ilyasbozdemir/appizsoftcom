// pages/api/check-domain.js

export default function handler(req, res) {
    const allowedDomains = ["example.vercel.app", "another.vercel.app"];
    const requestDomain = req.headers.host;
  
    if (allowedDomains.includes(requestDomain)) {
      res.status(200).json({ message: "Domain is allowed." });
    } else {
      res.status(403).json({ message: "Domain is not allowed." });
    }
  }