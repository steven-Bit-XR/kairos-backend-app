const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Kairos Backend est en ligne 🔥");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
