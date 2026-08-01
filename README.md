# 🧩 EJS with Node.js Learning Project

[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![EJS](https://img.shields.io/badge/EJS-Template%20Engine-B4CA65)](https://ejs.co/)

A beginner-friendly learning repository for using EJS templates with Node.js applications to render dynamic HTML and separate presentation from server-side logic.

> This repository is maintained as an educational project. Review the source files and package versions before adopting it for production use.

---

## Project Overview

This project focuses on server-side HTML rendering with EJS in a Node.js environment.

Typical learning areas include:

- Installing and configuring EJS
- Passing data from Node.js to templates
- Rendering dynamic HTML
- Reusing layout and partial templates
- Separating application logic from presentation
- Organizing views, routes, and static assets

## Learning Objectives

After reviewing the project, learners should be able to:

1. Explain how server-side template engines work.
2. Configure EJS in a Node.js application.
3. Pass variables and collections into templates.
4. Create reusable partials and shared layouts.
5. Escape untrusted output correctly.
6. Structure a small server-rendered application clearly.

## Prerequisites

- Basic JavaScript knowledge
- Node.js and npm installed
- Basic HTML knowledge
- Introductory understanding of Express.js is helpful

## Getting Started

```bash
git clone https://github.com/PhuminDecOKnoi/my-ejs-node.js.git
cd my-ejs-node.js
npm install
```

Inspect `package.json` to confirm the available scripts and application entry point, then run the applicable script, for example:

```bash
npm start
```

The exact command may vary depending on the repository contents.

## Recommended Structure

```text
.
├── views/
│   ├── partials/
│   └── pages/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── routes/
├── app.js
├── package.json
└── README.md
```

## Template Safety Checklist

Before deploying a server-rendered application, verify:

- Untrusted content is escaped by default.
- Raw HTML output is used only when necessary and reviewed carefully.
- Secrets are stored in environment variables.
- Error pages do not reveal stack traces.
- Form input is validated on the server.
- Dependencies are reviewed and updated.
- Static assets and template paths are configured securely.

## Modernization Ideas

- Use a current Node.js LTS release.
- Add reusable layout components.
- Separate routes, controllers, and services.
- Add automated tests for rendered output.
- Add linting and formatting.
- Add centralized error handling.
- Document the rendering flow from route to template.

## Intended Audience

- Beginners learning Node.js templates
- Students learning EJS
- Developers building server-rendered web applications
- Instructors teaching separation of concerns

## Search Topics

`nodejs` · `ejs` · `template-engine` · `server-side-rendering` · `expressjs` · `html-rendering` · `javascript` · `learning-project`

## Author

Maintained by [PhuminDecOKnoi](https://github.com/PhuminDecOKnoi).

## License

No license statement is asserted here unless a license file exists in the repository. Review the repository contents before reuse or redistribution.
