'use strict';

(function () {
  const resultContent = document.querySelector('.result__content');
  const resultTitle = document.querySelector('.result__title');

  const handler = (conference, division) => {
    const arr = teams.filter((team) => {
      return team.conference === conference && team.division === division;
    });

    resultTitle.innerHTML = `${arr[0].conferenceRu} ${arr[0].divisionRu}`;

    resultContent.innerHTML = ``;

    arr.forEach((team) => {
      let div = document.createElement('div');
      div.classList.add('result__card', 'team');

      div.innerHTML = `
        <h3 class="team__title">
          <span class="team__city">${team.cityRu}</span><br>
          <span class="team__name">${team.nameRu}</span>
        </h3>
        <img class="team__logo" src="img/${team.logo}" width="150">
        `;
      resultContent.append(div);
    });
  };

  const radioSwitcher = (list) => {
    const arr = document.querySelectorAll(`[data-list="${list}"]`);
    Array.from(arr).forEach((item) => {
      item.classList.remove('selector__radio--active');
      item.checked = false;
    });
    e.target.classList.add('selector__radio--active');
    e.target.checked = true;
  };

  const selectorForm = document.querySelector('.selector__form');

  selectorForm.addEventListener('click', (e) => {
    if (e.target.tagName === 'LABEL') {
      const list = e.target.dataset.list;
      if (list === 'conference' || list === 'division') {
        const arr = document.querySelectorAll(`[data-list="${list}"]`);
        Array.from(arr).forEach((item) => {
          item.classList.remove('selector__radio--active');
          item.checked = false;
        });
        e.target.classList.add('selector__radio--active');
        e.target.checked = true;
      }
    }
  });

  const formBtn = document.querySelector('.selector__btn');

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const conferenceChecked = document.querySelectorAll(
      'input[name=conference]:checked'
    );
    const divisionChecked = document.querySelectorAll(
      'input[name=division]:checked'
    );

    if (conferenceChecked.length === 1 && divisionChecked.length === 1) {
      handler(conferenceChecked[0].id, divisionChecked[0].id);
    }
  });
})();
