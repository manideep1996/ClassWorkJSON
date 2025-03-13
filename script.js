
const style = document.createElement("style");
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    header {
        background: #333;
        color: white;
        padding: 15px;
    }

    .header-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .nav-links {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .nav-links span {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }

    .nav-links span:hover {
        text-decoration: underline;
    }

    #content {
        padding: 20px;
    }

    iframe {
        width: 80%;
        height: 500px;
        border: none;
        margin-top: 20px;
    }
`;
document.head.appendChild(style);


const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    
};

const header = document.getElementById("header");


const navLinks = document.createElement("div");
navLinks.classList.add("nav-links");

for (let key in works) {
    let span = document.createElement("span");
    span.textContent = works[key].title;
    span.dataset.url = works[key].url;
    span.addEventListener("click", function () {
        document.getElementById("workFrame").src = this.dataset.url;
    });
    navLinks.appendChild(span);
}


header.appendChild(navLinks);
