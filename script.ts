document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion and fixing ID names
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const FirstNameElement = document.getElementById("firstName") as HTMLInputElement;
    const LastNameElement = document.getElementById("lastName") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const usernameElement = document.getElementById("username") as HTMLInputElement;


    if (profilePictureInput && FirstNameElement && LastNameElement &&
         emailElement && phoneElement && addressElement 
        && educationElement && experienceElement && skillsElement && usernameElement) {

        const Firstname = FirstNameElement.value;
        const LastName = LastNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

        // Profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Creating Resume Output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>First Name:</strong> ${Firstname}</p>
        <p><strong>Last Name:</strong> ${LastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const downloadLink = document.createElement('a')
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024 Resume" ; 


        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

resumeOutputElement.appendChild(downloadLink)
            resumeOutputElement.style.display = "block";
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
