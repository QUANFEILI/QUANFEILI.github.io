document.getElementById("intro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather data from the form
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("image-caption").value;
    const personalBackground = document.getElementById("personal-background").value;
    const professionalBackground = document.getElementById("professional-background").value;
    const academicBackground = document.getElementById("academic-background").value;
    const webDevBackground = document.getElementById("web-dev-background").value;
    const computerPlatform = document.getElementById("computer-platform").value;
    const courses = Array.from(document.getElementsByClassName("course-input")).map((input) => input.value).filter((value) => value);
    const funnyThing = document.getElementById("funny-thing").value;
    const anythingElse = document.getElementById("anything-else").value;

    // Display the result
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `
        <h2>Your Introduction Page</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mascot:</strong> ${mascot}</p>
        <p><strong>Image Caption:</strong> ${imageCaption}</p>
        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Background in Web Development:</strong> ${webDevBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${computerPlatform}</p>
        <p><strong>Courses Currently Taking:</strong> ${courses.join(", ")}</p>
        <p><strong>Funny Thing:</strong> ${funnyThing}</p>
        <p><strong>Anything Else:</strong> ${anythingElse}</p>
    `;

    // Reset form
    document.getElementById("intro-form").reset();
});

function addCourse() {
    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.className = "course-input";
    courseInput.placeholder = "Enter course name";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        courseInput.remove();
        deleteButton.remove();
    };

    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.appendChild(courseInput);
    coursesContainer.appendChild(deleteButton);
}
