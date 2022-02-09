const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let colorHouse = () => {
    var content = "";
    document.querySelector(".house").classList.add("pallet");

    for (let i in colorList) {
        content += `<button class="color-button ${colorList[i]}"></button>`;
    };
    document.getElementById("colorContainer").innerHTML = content;
    document.querySelector(".color-button").classList.add("active");
    let colorBtnArr = document.querySelectorAll(".color-button");
    for (let value of colorBtnArr) {
        value.addEventListener("click", () => {
            document.querySelector(".active").classList.remove("active");
            value.classList.add("active");
            let colorClassName1 = document.querySelector(".active").className.split(' ')[1];
            let colorClassName2 = document.querySelector(".house").className.split(' ')[1];
            document.querySelector(".house").classList.remove(colorClassName2);
            document.querySelector(".house").classList.add(colorClassName1);
        });
    }
}
colorHouse();

