const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚍 SafeRoute IA Backend funcionando");
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Usuario y contraseña son requeridos." });
  }

  if ((username === "admin" || username === "admin@saferoute.com") && password === "1234") {
    return res.json({ success: true, user: "Administrador SafeRoute IA" });
  }

  if (username === "invitado" && password === "invitado") {
    return res.json({ success: true, user: "Usuario Invitado" });
  }

  return res.status(401).json({ success: false, message: "Credenciales incorrectas." });
});

app.get("/api/stats", (req, res) => {
  res.json({
    drivers: 12,
    vehicles: 8,
    routes: 15,
    alerts: 3
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
