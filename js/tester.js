function passvalues()
{
    let firstname= document.getElementById("txt").value;
    localStorage.setItem("textvalue",firstname);
    return false;
}