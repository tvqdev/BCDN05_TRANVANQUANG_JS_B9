
let tinhDTB = (id, ...diem) => {
    let tongDiem = 0;
    for (value of diem) {
        tongDiem += Number(value);
    }
    let diemTB = tongDiem / diem.length;
    document.getElementById(id).innerHTML = diemTB;
}
document.getElementById("btnKhoi1").onclick = () => {
    let toan = document.getElementById("inpToan").value;
    let ly = document.getElementById("inpLy").value;
    let hoa = document.getElementById("inpHoa").value;
    tinhDTB("tbKhoi1", toan, ly, hoa);
}
document.getElementById("btnKhoi2").onclick = () => {
    let van = document.getElementById("inpVan").value;
    let su = document.getElementById("inpSu").value;
    let dia = document.getElementById("inpDia").value;
    let eng = document.getElementById("inpEnglish").value;
    tinhDTB("tbKhoi2", van, su, dia, eng);
}

