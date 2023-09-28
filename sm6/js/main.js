document.addEventListener("DOMContentLoaded", function() {
    const news = [
      {
        id: 1,
        name: "DigitalSkills 2023",
        author: "Фанзиля Гимадиева",
        date: "24.09.2023",
        text: "23 сентября, в Казань-Экспо состоялась торжественная церемония закрытия и награждения V Отраслевого чемпионата в сфере информационных технологий DigitalSkills 2023! "
      },
      {
        id: 2,
        name: "Студент МЦК-КТИТС показал хорошие результаты на первом Чемпионате высоких технологий",
        author: "Фанзиля Гимадиева",
        date: "22.09.2023",
        text: "Студент МЦК-КТИТС Гареев Данил занял третье место по компетенции «Летающая робототехника» на первом Чемпионате высоких технологий, который прошел с 18 по 21 сентября 2023 года в Великом Новгороде. "
    },
    {
        id: 3,
        name: "Встреча студентов МЦК-КТИТС с Главой администрации Советского района",
        author: "Фанзиля Гимадиева",
        date: "16.09.2023",
        text: "15 сентября, состоялась встреча студентов МЦК-КТИТС с Главой администрации Советского района, Романом Фатхутдиновым"
    },
    {
        id: 4,
        name: "Пробный день для первокурсников",
        author: "Фанзиля Гимадиева",
        date: "31.08.2023",
        text: "Сегодня, 31 августа, в МЦК-КТИТС прошёл «пробный день». Это ежегодное мероприятие проводится перед началом учебного года с ознакомительной целью. На «пробном» дне родители и студенты 1 курса знакомятся с куратором, преподавательским составом и коучами."
    },
    {
        id: 5,
        name: "Сотрудница МЦК-КТИТС стала финалисткой чемпионата ArtMasters по режиссуре монтажа!",
        author: "Фанзиля Гимадиева",
        date: "20.07.2023",
        text: "Фанзиля Гимадиева, выпускница МЦК-КТИТС 2022 года, являющаяся действующим сотрудником в качестве пресс-секретаря техникума, стала финалистом Национального открытого Чемпионата творческих компетенций ArtMasters в компетенции «Режиссёр монтажа»."
    }
    ];
  
    const newsContainer = document.getElementById("new");
  
    function createNewsElement(newsItem) {
      const newsElement = document.createElement("div");
      newsElement.classList.add("news");
  
      newsElement.innerHTML =
      `<div class="border">
       <div class="title-date">
          <h1 class="title">${newsItem.name}</h1>
          <p class="date-id">${newsItem.date}</p>
        </div>
        <p class="text">${newsItem.text}</p>
        <div class="author-id">
          <p class="author">${newsItem.author}</p>
          <p class="date-id">id: ${newsItem.id}</p>
        </div>
       </div>`;
  
      return newsElement;
    }
  
    news.forEach(newsItem => {
        const newsElement = createNewsElement(newsItem);
        newsContainer.appendChild(newsElement);
    });
});