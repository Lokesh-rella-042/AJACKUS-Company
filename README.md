🚀 Employee Directory Web Interface
A front-end application for managing employee data using HTML, CSS, JavaScript, and Freemarker Templates. Features include view, search, filter, add, edit, and delete employee records with a responsive design.

📁 Folder Structure
css
Copy
Edit
employee-directory/
├── src/
│   └── main/
│       └── resources/
│           ├── static/
│           │   ├── css/
│           │   │   └── style.css
│           │   └── js/
│           │       ├── data.js
│           │       └── app.js
│           └── templates/
│               └── index.ftlh
├── README.md
💡 Features
List employees in a card layout.

Add/Edit/Delete employee details via modal form.

Filter by department and role.

Search by name or email.

Real-time UI updates without backend.

Responsive design for mobile and desktop.

⚙️ Tech Stack
HTML5 + Freemarker – templating UI and rendering mock data.

CSS3 – responsive design and layout.

Vanilla JavaScript – interactive UI behavior.

No backend required – all data handled on frontend via data.js.

🧪 How to Run
No build tools required. Just open in a browser.

Clone/download the repo.

Open index.ftlh in your Freemarker-enabled server OR simulate as index.html.

Ensure style.css, data.js, and app.js are correctly linked.

Interact with the UI directly.

📸 Screenshots
Add screenshots here showing:

Dashboard layout

Form modal

Search and filter in action

Responsive mobile view

🧠 Reflection
Challenges:
Balancing Freemarker templating with JavaScript rendering.

Ensuring filters/search/pagination work together.

Improvements if more time:
Add persistent storage (localStorage/API).

Implement pagination/infinite scroll.

Enhance validation with inline error messages.

✅ Evaluation Checklist
 Freemarker template usage

 Responsive HTML/CSS layout

 JavaScript interactivity (CRUD, filter, search)

 Clean, modular code

 README with usage, features, and reflection
