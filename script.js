class StudentRegistration {
    constructor() {
        this.id = 1;
        this.arrayStudents = [];
        this.editId = null;
    }
    create() {
        let student = this.readData();
        if (this.validateFields(student)) {
            this.add(student);
            this.read();
            this.cancel();
        }
        console.log(this.arrayStudents);
    }
    add(student) {
        this.arrayStudents.push(student);
        this.id++;
    }
    readData() {
        let student = {}

        student.id = this.id
        student.fullName = document.getElementById('nomeCompleto').value;
        student.ra = document.getElementById('ra').value;
        student.noteOne = document.getElementById('notaUm').value;
        student.noteTwo = document.getElementById('notaDois').value;
        student.numberOfAbsences = document.getElementById('numeroDeFaltas').value;

        return student;
    }
    cancel() {
        document.getElementById('nomeCompleto').value = ""
        document.getElementById('ra').value = ""
        document.getElementById('notaUm').value = ""
        document.getElementById('notaDois').value = ""
        document.getElementById('numeroDeFaltas').value = ""
    }
    read() {
        this.listInTable();
    }
    listInTable() {
        let tbody = document.getElementById('tbody');
        tbody.textContent = "";
        for (let i = 0; i < this.arrayStudents.length; i++) {
            let tr = tbody.insertRow();
            let tdId = tr.insertCell();
            let tdFullName = tr.insertCell();
            let tdRa = tr.insertCell();
            let tdNoteOne = tr.insertCell();
            let tdNoteTwo = tr.insertCell();
            let tdNumberOfAbsences = tr.insertCell();
            let tdAverage = tr.insertCell();
            let tdResult = tr.insertCell();
            let tdActions = tr.insertCell();

            tdId.textContent = this.arrayStudents[i].id;
            tdFullName.textContent = this.arrayStudents[i].fullName;
            tdRa.textContent = this.arrayStudents[i].ra;
            tdNoteOne.textContent = this.arrayStudents[i].noteOne;
            tdNoteTwo.textContent = this.arrayStudents[i].noteTwo;
            tdNumberOfAbsences.textContent = this.arrayStudents[i].numberOfAbsences;


            tdAverage.textContent = (this.arrayStudents[i].noteOne + this.arrayStudents[i].noteTwo) / 2


            tdId.classList.add("center");
            let imgEditar = document.createElement("img");
            imgEditar.src = "editar.png"
            imgEditar.setAttribute("onclick", "studentRegistration.update(" + JSON.stringify(this.arrayStudents[i]) +")");
            tdActions.appendChild(imgEditar);
            let imgDeletar = document.createElement("img");
            imgDeletar.src = "deletar.png"
            imgDeletar.setAttribute("onclick", "studentRegistration.delete(" + this.arrayStudents[i].id + ")");
            tdActions.appendChild(imgDeletar);
        }
    }
    update(data) {
        document.getElementById("nomeCompleto").value = data.fullName;
        document.getElementById("ra").value = data.ra;
        document.getElementById("notaUm").value = data.noteOne;
        document.getElementById("notaDois").value = data.noteTwo;
        document.getElementById("numeroDeFaltas").value = data.numberOfAbsences;

        document.getElementById("btnOne").textContent = "Atualizar";
    }
    delete(id) {
        if (confirm(`Deseja mesmo deletar o aluno do id ${id}?`)) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayStudents.length; i++) {
                if (this.arrayStudents[i].id == id) {
                    this.arrayStudents.splice(i, 1)
                    tbody.deleteRow(i);
                } ff
            }
        }
    }
    validateFields(student) {
        let message = "";
        if (student.fullName == "") {
            message += "Informe o nome completo do aluno \n"
        }
        if (student.ra == "") {
            message += "Informe o RA do aluno \n"
        }
        if (student.noteOne == "") {
            message += "Informe a nota um do aluno \n"
        }
        if (student.noteTwo == "") {
            message += "Informe a nota dois do aluno \n"
        }
        if (student.numberOfAbsences == "") {
            message += "Informe o número de faltas do aluno \n"
        }
        if (message != "") {
            alert(message);
            return false;
        }
        return true;
    }
}

var studentRegistration = new StudentRegistration();