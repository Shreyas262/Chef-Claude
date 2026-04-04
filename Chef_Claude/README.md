# 👨‍🍳 Chef Claude – AI Recipe Generator

Chef Claude is a modern AI-powered web application that helps you discover recipes using the ingredients you already have. Simply input what’s available in your kitchen, and the app intelligently generates a recipe using advanced language models.

---

## 🚀 Features

- 🧠 AI-powered recipe generation using Hugging Face LLMs
- 📝 Add and manage ingredients dynamically
- 📋 Clean markdown-rendered recipe output
- ⚡ Fast and responsive UI built with React
- 🎯 Smart suggestions (doesn’t require all ingredients to be used)

---

## 🛠️ Tech Stack

### Frontend

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- CSS
- HTML

### AI Integration

- Hugging Face Inference API
- Mixtral-8x7B-Instruct Model

---

## 📂 Project Structure

```
src/
├── assets                # App Logo Icons
├── Header.jsx            # App header with logo
├── main.jsx              # Core app logic & state management
├── ingredientsList.jsx   # Displays user ingredients
├── claudeRecipe.jsx      # Renders AI-generated recipe
├── ai.js                 # Handles API calls to Hugging Face
├── index.css             # Styling
├── index.jsx             # App entry point
```

---

## ⚙️ How It Works

1. User enters ingredients via the input form
2. Ingredients are stored in React state
3. Once enough ingredients are added, a recipe option appears
4. Clicking “Get a Recipe” sends the ingredient list to the AI model
5. The AI generates a recipe in markdown format
6. The recipe is rendered dynamically on the UI

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_HUGGINGFACE_API_KEY=your_api_key_here
```

> ⚠️ Never expose your API key publicly.

---

## 🧪 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/chef-claude.git

# Navigate into the project directory
cd chef-claude

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📸 UI Overview

- Header with branding
- Ingredient input form
- Dynamic ingredient list
- AI-generated recipe section

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
