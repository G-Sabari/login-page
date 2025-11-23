import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy check for now
  if (email === "test@gmail.com" && password === "1234") {
    return res.json(
        {
            success: true, 
            message: "Login success" 
        }
    );
  }

  return res.json({ 
    success: false, 
    message: "Invalid credentials" }
  );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
