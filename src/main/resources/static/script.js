const API_URL = "http://localhost:8080/api/students";

document.addEventListener("DOMContentLoaded", loadStudents);

document.getElementById("studentForm").addEventListener("submit", addStudent);

function loadStudents() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("studentTable");
            table.innerHTML = "";
            data.forEach(s => {
                table.innerHTML += `
                <tr>
                    <td>${s.id}</td>
                    <td>${s.name}</td>
                    <td>${s.email}</td>
                    <td>${s.course}</td>
                    <td><button onclick="deleteStudent(${s.id})">Delete</button></td>
                </tr>`;
            });
        });
}

function addStudent(e) {
    e.preventDefault();

    const student = {
        name: name.value,
        email: email.value,
        course: course.value
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    }).then(() => {
        document.getElementById("studentForm").reset();
        loadStudents();
    });
}

function deleteStudent(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => loadStudents());
}
