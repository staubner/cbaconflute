const content = document.getElementById('content');
const aboutbtn = document.getElementById('about');

aboutbtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    const aboutPage = [];

    const header = document.createElement('h1');
    header.setAttribute('id', 'content-header')
    header.innerText = 'About';
    aboutPage.push(header);

    const thumbnail = document.createElement('img');
    thumbnail.setAttribute('id', 'about-img');
    thumbnail.setAttribute('src', './resources/profileflute.jpg');
    thumbnail.setAttribute('decoding', 'sync')
    thumbnail.style.display = 'inline';
    thumbnail.style.float = 'left';
    aboutPage.push(thumbnail);

    const aboutText = document.createElement('p');
    aboutText.setAttribute('id', 'about-text');
    aboutText.innerHTML = "Charmaine is a classically trained flutist and pianist. She is equally at home as a solo recitalist and ensemble musician, performing with the Winnipeg Wind Ensemble, Winnipeg Chamber Winds Collective, and in her own recital series Charmaine & Friends. Charmaine enjoys occasionally playing with the Winnipeg Symphony Orchestra and Manitoba Chamber Orchestra, and performing as a guest flutist at concerts and events around the city.<br><br>Charmaine teaches at her home studio in Silver Heights, Winnipeg MB. She has coached students from the University of Manitoba and Provincial Honour Bands, adjudicates for provincial festivals including the upcoming Brandon Festival of the Arts, and enjoys teaching flute clinics at schools around the province. Charmaine’s students participate in local festivals and honour bands, and several have continued their musical studies at the University of Manitoba and Brandon University.<br><br>Charmaine attended the University of Manitoba, University of Toronto, and The Glenn Gould School of Music. Her primary instructors include Jan Kocman and Laurel Ridd, she has also studied with Joanne Kosheluk, Martha Durkin, Dr. Kathleen Rudolph, and Leslie Newman.<br><br>Charmaine enjoys directing flute choirs and playing the smallest (piccolo) to nearly the largest instruments (contrabass) of the flute families. In her spare time she enjoys playing organ at her church McClure United, and piano for Margaret’s Choir and Joie de Vivre Choir."
    aboutPage.push(aboutText);

    content.append(...aboutPage);
})