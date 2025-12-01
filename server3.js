const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sample data as in your frontend demos
const progressData = [
  { label: "Mastered Concepts", number: 12 },
  { label: "Pending Lessons", number: 5 },
  { label: "Quizzes Completed", number: 3 },
];

const topicsData = [
  {
    title: "Algebra Basics",
    description: "Learn fundamental algebraic operations and equations.",
  },
  {
    title: "Physics Mechanics",
    description: "Explore motion, forces, and basic physical laws.",
  },
  {
    title: "Programming Foundations",
    description: "Understand programming concepts and algorithms.",
  },
  {
    title: "Geometry",
    description: "Study shapes, angles, and geometric reasoning.",
  },
  {
    title: "Calculus Intro",
    description: "Differentiation and integration fundamentals.",
  },
];

const notificationsData = [
  "New quiz available: Algebra Basics - Due Nov 25",
  "Assignment feedback received for Physics Mechanics",
  "Recommended practice: Calculus Intro problems",
];

// APIs serving the JSON data
app.get("/api/student/progress", (req, res) => {
  res.json(progressData);
});

app.get("/api/student/topics", (req, res) => {
  res.json(topicsData);
});

app.get("/api/student/notifications", (req, res) => {
  res.json(notificationsData);
});

app.listen(PORT, () => {
  console.log(`Backend API server running at http://localhost:${PORT}`);
});
