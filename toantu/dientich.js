function thearea() {
    let inpWidth = document.getElementById("width").value;
    let inpHeight = document.getElementById("height").value;
     inpWidth = parseInt(inpWidth);
     inpHeight = parseInt(inpHeight);
    area = inpWidth * inpHeight;
    document.getElementById("thearea").value = area;

}