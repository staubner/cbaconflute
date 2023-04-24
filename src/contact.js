const content = document.getElementById('content');
const contactbtn = document.getElementById('contact');

contactbtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    const contactPage = [];

    const header = document.createElement('h1');
    header.setAttribute('id', 'content-header');
    header.innerText = 'Contact';
    contactPage.push(header);

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-content');

    const contactForm = document.createElement('form');
    contactForm.setAttribute('id', 'contact-form');
    contactDiv.append(contactForm);

    //name input
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('id', 'namediv');
    contactForm.append(nameDiv);

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.innerText = 'Your Name';
    nameDiv.append(nameLabel);

    const br1 = document.createElement('br');
    nameDiv.append(br1);

    const name = document.createElement('input');
    name.setAttribute('type', 'name')
    name.setAttribute('id', 'name');
    name.setAttribute('name', 'name')
    name.setAttribute('size', '40');
    name.setAttribute('required', '');
    name.setAttribute('placeholder', 'required')

    nameDiv.append(name);

    contactForm.append(nameDiv);

    //email input
    const emailDiv = document.createElement('div');
    emailDiv.setAttribute('id', 'email-div');
    contactForm.append(emailDiv);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerText = 'Your Email Address';
    emailDiv.append(emailLabel);

    const br2 = document.createElement('br');
    emailDiv.append(br2);

    const email = document.createElement('input');
    email.setAttribute('type', 'email')
    email.setAttribute('id', 'email');
    email.setAttribute('name', 'email')
    email.setAttribute('size', '40');
    email.setAttribute('required', '');
    email.setAttribute('placeholder', 'required')

    emailDiv.append(email);

    contactForm.append(emailDiv);

    //subject input
    const subjectDiv = document.createElement('div');
    subjectDiv.setAttribute('id', 'subject-div');
    contactForm.append(subjectDiv);

    const subjectLabel = document.createElement('label');
    subjectLabel.setAttribute('for', 'subject');
    subjectLabel.innerText = 'Subject';
    subjectDiv.append(subjectLabel);

    const br3 = document.createElement('br');
    subjectDiv.append(br3);

    const subject = document.createElement('input');
    subject.setAttribute('type', 'text');
    subject.setAttribute('id', 'subject');
    subject.setAttribute('name', 'subject');
    subject.setAttribute('size', '40');

    subjectDiv.append(subject);

    contactForm.append(subjectDiv);

    //message input
    const messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'message');
    contactForm.append(messageDiv);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.innerText = 'Your Message';
    messageDiv.append(messageLabel);

    const br4 = document.createElement('br');
    messageDiv.append(br4);

    const message = document.createElement('textarea');
    message.setAttribute('form', 'contact-form');
    message.setAttribute('name', 'message');
    message.setAttribute('id', 'message');
    message.setAttribute('cols', '40');
    message.setAttribute('rows', '10');

    messageDiv.append(message);

    contactForm.append(messageDiv);

    //submit
    const submit = document.createElement('input');
    submit.setAttribute('id', 'submit-btn');
    submit.setAttribute('type', 'submit');

    contactForm.append(submit);

    contactPage.push(contactDiv);

    content.append(...contactPage);
});