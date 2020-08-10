'use strict';

(function () {
  const boxContent = document.querySelector('.box__content');
  const boxTitle = document.querySelector('.box__title');

  const handler = (conference, division) => {
    const arr = teams.filter((team) => {
      return team.conference === conference && team.division === division;
    });

    boxTitle.innerHTML = `${arr[0].conferenceRu} ${arr[0].divisionRu}`;

    boxContent.innerHTML = ``;

    arr.forEach((team) => {
      let div = document.createElement('div');
      div.classList.add('team');

      div.innerHTML = `
        <h3>${team.cityRu} ${team.nameRu}</h3>
        <img src="${team.logo}" width="150">
        `;
      boxContent.append(div);
    });
  };

  const formBtn = document.querySelector('.form-btn');

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const conference = document.querySelectorAll('input[name=conf]:checked');
    const division = document.querySelectorAll('input[name=div]:checked');

    if (conference.length === 1 && division.length === 1) {
      handler(conference[0].id, division[0].id);
    }
  });
})();
