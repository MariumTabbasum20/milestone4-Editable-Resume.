// listing element
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement


// handle form submission
form.addEventListener('submit',(event:Event) => {
    event.preventDefault();
    //collect input values
    const ProfilePictureInput =(document.getElementById("Profile Picture") as HTMLInputElement)
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone= (document.getElementById('phone')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience= (document.getElementById('experience')as HTMLInputElement).value
    const skills= (document.getElementById('skills')as HTMLInputElement).value
    
      //picture elements
      const ProfilePictureFile = ProfilePictureInput.files?.[0]
      const ProfilePictureURL = ProfilePictureFile ? URL.createObjectURL(ProfilePictureFile) : '';
 
    //create resume output
    const resumeHTML = `
    <h2><b> editableResume</b></h2>
     ${ProfilePictureURL ? `<img src=" ${ProfilePictureURL}" alt="Profile Picture" class="profilePicture">`:''}
    <h3>Personal Information </h3>
    <p><b>Name:</b> <span contenteditable ="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable ="true"> ${email}</span></p>
    <p><b>Phone: </b><span contenteditable ="true"> ${phone}</span></p>

    <h3>Education</h3>
    <p> ${education}</p>

    <h3>Experience</h3>
    <p contenteditable ="true"> ${experience}</p>

    <h3>Skills</h3>
    <p contenteditable ="true"> ${skills}</p>
    `;

    //display the generated resume
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
    }else{
        console.error('the resume display element is missing.')
    };

});