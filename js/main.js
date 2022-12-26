const pop = document.querySelector(`.popover__content`)
const icon_pop = document.querySelector(`.popover`)
icon_pop.addEventListener('click', () => {
  pop.classList.toggle(`popover__content_show`)
})

const filterTime = document.querySelector(`.filter-items__times`)
const filterRec = document.querySelector(`.filter-items__rec`)

const timeSelector = document.querySelector(`.time-selectors`)
const recSelector = document.querySelector(`.rec-selectors`)

filterRec.addEventListener('click', () => {
  recSelector.classList.toggle(`rec-selectors__show`)
}
)

filterTime.addEventListener('click', () => {
  timeSelector.classList.toggle(`time-selectors__show`)
}
)

const offers = [
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `33 часа`,
    title: `Основы дизайна`,
    price: `10 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Photoshop</li>`, 
      `<li class="offer__skills_skill">Lightroom</li>`,
      `<li class="offer__skills_skill">Illustrator</li>`,
      `<li class="offer__skills_skill">Figma</li>`,
      `<li class="offer__skills_skill">Experience Design</li>`,
      `<li class="offer__skills_skill">Avocode</li>`,
      `<li class="offer__skills_skill">Sketch</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `50 часа`,
    title: `Front-end основы`,
    price: `50 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">HTML</li>`,
      `<li class="offer__skills_skill">CSS</li>`,
      `<li class="offer__skills_skill">JS</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `60 часа`,
    title: `Back-end основы`,
    price: `100 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">PHP</li>`,
      `<li class="offer__skills_skill">SQL</li>`,
      `<li class="offer__skills_skill">SQLSEVER</li>`,
      `<li class="offer__skills_skill">MySQL</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `20 часа`,
    title: `JAVA основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">JAVA</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `40 часа`,
    title: `Python основы`,
    price: `40 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Python</li>`,
      `<li class="offer__skills_skill">Библиотеки Python</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `100 часа`,
    title: `Unity основы`,
    price: `140 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">Unity</li>`,
      `<li class="offer__skills_skill">3D моделирование</li>`,
      `<li class="offer__skills_skill">C#</li>`,
      `<li class="offer__skills_skill">Level design</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },
  {
    time: `25 часа`,
    title: `C++ основы`,
    price: `30 000 руб.`,
    spec: `IT - технологии`,
    skills: [
      `<li class="offer__skills_skill">C++</li>`,
    ],
    link: `#`,
    date: `27 августа`
  },

 
]


const offerBlock = document.querySelector(`.offer-container`);
let offerNum = 1;

offers.forEach(offer => {

  offerBlock.innerHTML +=
  `<div class="offer" data-num  = ${offerNum}>
  <ul class="offer__description">
    <li class="offer__description_course-time">${offer.time}</li>
    <li class="offer__description_course-title">${offer.title}</li>
    <li class="offer__description_course-price">${offer.price}</li>
    <li class="offer__description_course-spec">${offer.spec}</li>
  </ul>

  <ul class="offer__skills">
    ${offer.skills.join('')}
  </ul>

<div class="answer">

  <a href="${offer.link}" class="course-link">Перейти к курсу</a>
  <input type="button" value="В избранное" class="courese-like">
  <span class="courese-date">${offer.date}</span>

</div>
<div class="line"></div>
</div>`
offerNum++;

});


let countOffers = offers.length; 
let displayOffers = 10; 
let cnt_page = Math.ceil(countOffers / displayOffers); 

let paginator = document.querySelector(".pages");
let page = "";

for (let i = 0; i < cnt_page; i++) {
  page += `<span data-page="${i * displayOffers}" id = "page${i + 1}" class="page-number">${i + 1}</span>`;
}
paginator.innerHTML = page;


let div_num = document.querySelectorAll(".offer");


for (let i = 0; i < div_num.length; i++) {
  if (i < displayOffers) {
    div_num[i].style.display = "flex";
  }
}

let current_page = document.getElementById("page1");
current_page.classList.remove("page-number");
current_page.classList.add("page-number_active");


paginator.addEventListener('click', (event) =>{
  let e = event || window.event;
  let target = e.target;
  let id = target.id;

  let data_page = +target.dataset.page;
 
  current_page.classList.add("page-number");
  current_page = document.getElementById(id);
  current_page.classList.remove("page-number");
  current_page.classList.add("page-number_active");


  let j = 0;
  for (let i = 0; i < div_num.length; i++) {
    let data_num = div_num[i].dataset.num;

    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";

  }
  for (let i = data_page; i < div_num.length; i++) {
    if (j >= displayOffers) break;
    div_num[i].style.display = "flex";
    j++;
  }
})

