let jumpText = () => {
    let text = document.querySelector(".heading").innerHTML;
    let textArray = [...text];
    let newtextArray = textArray.filter(item => item !== " ");
    let content = "";
    for (let i in newtextArray) {
        content += `<span>${newtextArray[i]}</span>`;
    };
    document.querySelector(".heading").innerHTML = content;
}
jumpText();