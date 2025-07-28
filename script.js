
function checkAnswers() {
            let totalMarks = 0;

            const studentName = document.getElementById("studentName").value;

            if (document.getElementById("q1a").checked && !document.getElementById("q1b").checked) totalMarks += 5;
            if (document.getElementById("question2").value === "Convolution") totalMarks += 5;

            const q3 = document.querySelector('input[name="q3"]:checked');
            if (q3 && q3.value === "root") totalMarks += 5;

            const q4 = document.querySelector('input[name="q4"]:checked');
            if (q4 && q4.value === "punctuation") totalMarks += 5;

            if (document.getElementById("question5").value === "Accountability") totalMarks += 5;
            if (document.getElementById("question6").value === "Open access to data") totalMarks += 5;
            if (document.getElementById("question7").value === "entities") totalMarks += 5;

            const q8 = document.querySelector('input[name="q8"]:checked');
            if (q8 && q8.value === "grammar") totalMarks += 5;

            const q9 = document.querySelector('input[name="q9"]:checked');
            if (q9 && q9.value === "customers") totalMarks += 5;

            const q10 = document.querySelector('input[name="q10"]:checked');
            if (q10 && q10.value === "object") totalMarks += 5;

            const resultURL = `result.html?name=${encodeURIComponent(studentName)}&marks=${totalMarks}`;
            window.location.href = resultURL;
        }