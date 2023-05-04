const content = document.getElementById('content');
const homebtn = document.getElementById('home');

homebtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    const homePage = [];

    const figure = document.createElement('figure');
    figure.setAttribute('class', 'figure');
    const figImg = document.createElement('img');
    figImg.setAttribute('id', 'title-image');
    figImg.setAttribute('src', './resources/faviconio-logo/logo.png');
    figImg.setAttribute('decoding', 'sync')
    figImg.setAttribute('alt', 'Charmaine Bacon');
    figure.appendChild(figImg);
    const figCaption = document.createElement('figcaption');
    figCaption.innerText = 'Photo credit: Colin Mehmel'
    figure.appendChild(figCaption);
    homePage.push(figure);

    const events = document.createElement('h2');
    events.innerText = 'Upcoming Events:';
    homePage.push(events);

    const eventTitle = document.createElement('h3');
    eventTitle.innerText = 'Saturday May 27, 1:00PM';
    homePage.push(eventTitle);

    const eventText = document.createElement('p');
    eventText.innerText = 'Flute Studio Recital';
    homePage.push(eventText);

    content.append(...homePage);
})