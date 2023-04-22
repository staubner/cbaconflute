const content = document.getElementById('content');
const lessonbtn = document.getElementById('lessons');

lessonbtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    const lessonPage = [];

    const header = document.createElement('h1');
    header.setAttribute('id', 'content-header');
    header.innerText = 'Flute Lessons';
    lessonPage.push(header);

    const blurb = document.createElement('p');
    blurb.innerHTML = 'Lessons are held in-person at my studio in Silver Heights, in Winnipeg.<br><br>At my studio I welcome students of all ages and levels, and will be happy to work with you working towards your musical goals.';
    lessonPage.push(blurb);

    const info = document.createElement('h3');
    info.innerText = 'Lesson Information 2022-23:';
    lessonPage.push(info);

    const infoArray = ['Full terms are September-December, January-June, July-August.', 'All students are asked to have a flute in good working order and to purchase their own materials for lessons.', 'Winter Student Recital: Sunday January 29, 2023, 6:30pm', 'Spring Student Recital: Sunday May 27, 2023, 1:00pm', '2023 Lesson fees: $60/60 minutes, $50/45 minutes, $33/30 minutes.'];

    const infoList = document.createElement('ul');
    for (let i = 0; i < infoArray.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = infoArray[i];
        infoList.append(listItem);
    };

    lessonPage.push(infoList);

    const cancel = document.createElement('h3');
    cancel.innerText = 'Cancellation Policy:';
    lessonPage.push(cancel);

    const cancelArray = ['Lessons cancelled with less than 24 hours by the student for any reason including sickness, travel, etc. are non-refundable. If there is a schedule conflict, please tell me and if there is another cancellation or time slot that is available I will do my best to make up the lesson, but can not guarantee it.', 'Lessons cancelled by the teacher will be rescheduled before the end of the year, or a credit will be applied to the following term.', 'In the event that a student decides to withdraw from lessons mid-term, one month’s paid notice is required.'];

    const cancelList = document.createElement('ul');
    for (let i = 0; i < cancelArray.length; i++) {
        let cancelItem = document.createElement('li');
        cancelItem.innerText = cancelArray[i];
        cancelList.append(cancelItem);
    };

    lessonPage.push(cancelList);

    content.append(...lessonPage);
})