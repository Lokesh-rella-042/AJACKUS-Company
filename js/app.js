let employees = [...mockEmployees];
let editingId = null;

function renderList() {
  const list = document.getElementById('employee-list');
  list.innerHTML = employees.map(emp => `
    <div class="employee-card" data-id="${emp.id}">
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>Email: ${emp.email}</p>
      <p>Department: ${emp.department}</p>
      <p>Role: ${emp.role}</p>
      <button class="edit-btn" data-id="${emp.id}">Edit</button>
      <button class="delete-btn" data-id="${emp.id}">Delete</button>
    </div>
  `).join('');
}

document.getElementById('add-btn').addEventListener('click', () => {
  editingId = null;
  document.getElementById('employee-form').reset();
  document.getElementById('form-modal').classList.remove('hidden');
});

document.getElementById('employee-form').addEventListener('submit', e => {
  e.preventDefault();
  const emp = {
    id: editingId || Date.now(),
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    email: document.getElementById('email').value,
    department: document.getElementById('department').value,
    role: document.getElementById('role').value
  };
  if (editingId) {
    employees = employees.map(e => e.id === editingId ? emp : e);
  } else {
    employees.push(emp);
  }
  renderList();
  document.getElementById('form-modal').classList.add('hidden');
});

document.getElementById('employee-list').addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    const id = +e.target.dataset.id;
    employees = employees.filter(emp => emp.id !== id);
    renderList();
  }
  if (e.target.classList.contains('edit-btn')) {
    const id = +e.target.dataset.id;
    const emp = employees.find(emp => emp.id === id);
    if (emp) {
      editingId = id;
      document.getElementById('first-name').value = emp.firstName;
      document.getElementById('last-name').value = emp.lastName;
      document.getElementById('email').value = emp.email;
      document.getElementById('department').value = emp.department;
      document.getElementById('role').value = emp.role;
      document.getElementById('form-modal').classList.remove('hidden');
    }
  }
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  document.getElementById('form-modal').classList.add('hidden');
});

document.getElementById('search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  employees = mockEmployees.filter(emp =>
    emp.firstName.toLowerCase().includes(term) ||
    emp.lastName.toLowerCase().includes(term) ||
    emp.email.toLowerCase().includes(term)
  );
  renderList();
});

document.getElementById('apply-filters').addEventListener('click', () => {
  const dept = document.getElementById('filter-dept').value.toLowerCase();
  const role = document.getElementById('filter-role').value.toLowerCase();
  employees = mockEmployees.filter(emp =>
    (dept ? emp.department.toLowerCase().includes(dept) : true) &&
    (role ? emp.role.toLowerCase().includes(role) : true)
  );
  renderList();
});

renderList();