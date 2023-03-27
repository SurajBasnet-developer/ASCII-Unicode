export default function handler(req, res) {
  res.status(200).json({
    Name: "Suraj Basnet",
    Country: "Nepal",
    Profession: "Web Developer",
    Education: "BICTE",
    Mobile: 9862897289,
    Hometown: "Ilam",
  });
}
