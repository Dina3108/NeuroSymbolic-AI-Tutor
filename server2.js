const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated NeuroSymbolic evaluation logic for quadratic roots
function evaluateAnswer(answer) {
  const correctRoots = [3, -1];
  const answers = answer
    .split(",")
    .map((x) => parseFloat(x.trim()))
    .filter((x) => !isNaN(x));

  let feedback = "";
  let explanation = "";
  let hints = [
    "First, identify a, b, and c from the equation.",
    "Calculate the discriminant Δ = b² - 4ac.",
    "Use the quadratic formula to find the roots x = (-b ± √Δ) / 2a.",
  ];

  if (answers.length !== 2) {
    feedback = "Please enter two numeric roots separated by a comma.";
  } else {
    const isCorrect = answers.every((ans) =>
      correctRoots.some((cr) => Math.abs(cr - ans) < 0.1)
    );
    if (isCorrect) {
      feedback = "Correct! Well done.";
      explanation = `The coefficients were identified as a=2, b=-4, c=-6.\nDiscriminant calculated as 64.\nRoots calculated using quadratic formula resulting in x=3 and x=-1.\nSymbolic rules confirm solution correctness.`;
    } else {
      feedback = "Incorrect answer. Try again or ask for a hint.";
    }
  }

  return { feedback, explanation, hints };
}

// POST /api/evaluate
app.post("/api/evaluate", (req, res) => {
  const { answer } = req.body;
  if (!answer || typeof answer !== "string") {
    return res.status(400).json({ error: 'Invalid or missing "answer" field' });
  }
  const result = evaluateAnswer(answer);
  res.json(result);
});

// GET /api/student/profile
app.get("/api/student/profile", (req, res) => {
  const studentData = {
    masteredConcepts: 18,
    pendingConcepts: 7,
    averageScore: 85,
    strengths: ["Algebra", "Basic Physics", "Functions"],
    weaknesses: ["Calculus", "Electromagnetism", "Statistics"],
    practiceRecommendations: [
      "Practice Integrals and Differentiation",
      "Review Electromagnetic theory problems",
      "Try sample problems on Probability and Statistics",
    ],
    progressHistory: [
      { date: "2025-08-01", score: 65 },
      { date: "2025-08-15", score: 70 },
      { date: "2025-09-01", score: 75 },
      { date: "2025-09-15", score: 78 },
      { date: "2025-10-01", score: 82 },
      { date: "2025-10-15", score: 85 },
      { date: "2025-11-01", score: 88 },
      { date: "2025-11-15", score: 90 },
    ],
  };
  res.json(studentData);
});
app.get("/api/student/progress", (req, res) => {
  res.json(progressData);
});
app.get("/api/student/topics", (req, res) => {
  res.json(topicsData);
});
app.get("/api/student/notifications", (req, res) => {
  res.json(notificationsData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend API server running at http://localhost:${PORT}`);
});
