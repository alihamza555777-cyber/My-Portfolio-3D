const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const app = express();
const PORT = process.env.PORT || 3001;
const PROJECTS_FILE = path.join(__dirname, 'projects.json');
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// Helper: Read & write projects.json
// ============================================

function readProjects() {
  try {
    const data = fs.readFileSync(PROJECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}



function readMessages() {
  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
}

// ============================================
// PUBLIC ROUTES
// ============================================

// GET /api/projects — anyone can view projects
app.get('/api/projects', (req, res) => {
  const projects = readProjects();
  res.json(projects);
});

// POST /api/contact — public facing contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const messages = readMessages();
  const newMessage = {
    id: `msg-${uuidv4().slice(0, 8)}`,
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  messages.push(newMessage);
  writeMessages(messages);
  res.status(201).json({ success: true, message: 'Message received!' });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`✅ Portfolio API server running on http://localhost:${PORT}`);
});
