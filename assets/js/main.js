let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
];

//div#content in einer variable speichern und headline-"Projekt Quiz" in das div#content einfügen
let content = document.getElementById("content");
let headline = document.createElement("h1");
let x = 0;
headline.innerText = "Projekt Quiz";
content.appendChild(headline);

//function quiz, in der wird das ganze Quiz erstellt & visualisiert
function quiz() {


    //wir loopen uns jetzt mal durch unser array data[]
    data.forEach((e, y) => {
        //Hier erstellen wir für jedes object in unserem array data ein paar HTML-Elemente
        // Eine section pro Quizfrage
        let section = document.createElement("section");

        // Ein div => das wird später unser Quizbild
        let div = document.createElement("div");

        // hier erstellen wir unsere h2 für die Quizfrage
        let question = document.createElement("h2");

        // in dieses div gebe ich dann später die buttons rein
        let flexDiv = document.createElement("div");

        //Hier fügen wir das ganze nun semantisch korrekt ein
        content.appendChild(section); // section kommt ins div#content
        section.appendChild(div); // das div für unser bild kommt in die secton
        section.appendChild(question); // die frage kommt direkt unters bild
        section.appendChild(flexDiv); // zum schluss kommen unsere choice buttons

        //jetzt geben wir jeder Section eine id um später onclick zu der nächsten zu kommen
        section.setAttribute("id", `section${x}`);
        x++;

        //Hier fügen wir nun unserem bild die css-klasse img hinzu
        div.classList.add("img");

        //jedes div bekommt das background image des jeweiligen objectes mit dem `url(${e.url})`
        div.style.backgroundImage = `url(${e.url})`;
        question.innerText = e.question;

        //Um die Buttons zu erstellen entschied ich mich für eine for loop, damit wir uns durch das array data choice[i] durchloopen
        // Wir benutzen als Bedinung (i <e.choice.length;) um unser loop dynamisch halten 
        // (Choice kann vielleicht nur 2 inhalte oder mal 4 enthalten)
        for (let i = 0; i < e.choice.length; i++) {

            //für jedes element in dem array data.choice[i] wird nun ein button erstellt.
            let button = document.createElement("button");
            // jeder button bekommt noch ein a rein, damit wir onclick zur nächsten section scrollen
            let a = button.appendChild(document.createElement("a"));
            a.innerText = e.choice[i];


            // hier bekommt der Container von unseren Buttons die CSS-Klasse "flex"
            flexDiv.classList.add("flex");

            // nun fügen wir die buttons unseren FlexBox container ein
            flexDiv.appendChild(button);
            //Das wird die Funktion, die herausfindet ob unsere Antwort die richtige Antwort auf die Quizfrage war
            //Sie wird ausgeführt sobald jemand auf unsere Buttons klickt
            button.addEventListener("click", (event) => {



                if (a.innerText === e.answer.toString()) {
                    //mit href attribut können wir zur nächsten section springen
                    a.setAttribute("href", `#section${y + 1}`);

                    //richtige Antwort = grün, 
                    button.style.backgroundColor = "lime";
                    button.style.color = "black";
                    button.style.transform = "scale(1.3)";

                } else {
                    //falsche Antwort = rot
                    button.style.backgroundColor = "red";
                    button.style.transform = "scale(0.9)";
                }





            });
        }
    });
};
quiz();

// ist nur für mein scroll to top element
let scrollToTop = () => {
    let arrow = document.createElement("button");
    let toTop = document.createElement("a");
    toTop.innerText = "^";
    document.body.appendChild(arrow);
    arrow.appendChild(toTop);
    arrow.classList.add("arrow");
    toTop.setAttribute("href", "#section0");
};
scrollToTop();

console.log("Reines JS Game :P #lachs")

