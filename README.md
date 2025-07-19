


# 🧱 JSON Schema Builder 

This is a frontend application built as part of the **HROne Frontend Intern Hiring Task**. The task was to build a dynamic and recursive **JSON Schema Builder** using React, Tailwind CSS, and ShadCN UI. The form logic is handled by `react-hook-form`.

---

## 📌 Project Description

The JSON Schema Builder allows users to:

- Add fields dynamically
- Edit field names (keys)
- Select field types (`String`, `Number`, `Float`, `Boolean`, `ObjectId`, `Nested`)
- Recursively add **nested fields** under the `Nested` type
- Delete any field (including nested ones)
- Toggle whether a field should appear in the JSON schema preview
- View a **live, real-time JSON preview** of the schema being built
- Submit the form to log the final schema

---

## ✨ Features

- 🔁 **Recursive nesting** of fields for complex schema creation
- 👀 **Live JSON Preview** that updates as you build the schema
- ✅ **Include Toggle**: Easily control which fields appear in the JSON output
- ⚡ Built with **React**, **Vite**, **TailwindCSS**, and **ShadCN UI**
- 🧠 Form state managed using **react-hook-form** for cleaner code and better performance

---

## 📽️ Demo Preview

> Not available in this repo, but functionality was built as described in the task video.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repo:

```bash
git clone https://github.com/HIMU-2001/json-schema-builder.git
cd json-schema-builder
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173/](http://localhost:5173) in your browser to see the app.

---

## 🛠️ Tech Stack

* **React** (with Hooks)
* **TypeScript**
* **Vite** (build tool)
* **Tailwind CSS** (utility-first styling)
* **ShadCN UI** (UI components)
* **React Hook Form** (form state management)
* **uuid** (for unique field IDs)

---

## 📁 Folder Structure

```
src/
│
├── components/
│   └── FieldBuilder.tsx        # Recursive field builder component
│
├── types/
│   └── schema.ts               # Type definitions for field types
│
├── utils/
│   └── generateSchema.ts       # Recursive schema generator based on field state
│
├── App.tsx                     # Main application file with preview logic
└── main.tsx                    # Entry point
```

---


