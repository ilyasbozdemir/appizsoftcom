import { technologies } from "../../constants/technologies";

export default function handler(req, res) {
  res.status(200).json(technologies);
}
