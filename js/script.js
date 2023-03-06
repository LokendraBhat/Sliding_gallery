let images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg", "i.jpg", "j.jpg", "k.jpg", "l.jpg", "m.jpg", "n.jpg", "o.jpg", "p.jpg", "q.jpg", "r.jpg"];
let i = 0;
function next() {
    if (i < images.length-1) {
        document.getElementById("img").src = "js\\"+images[i+1];
        i += 1;
        document.getElementById("st").innerHTML = (i+1)+"/"+images.length;
    }
    else{
        document.getElementById("img").src = "js\\"+images[images.length-1];
    }  
    
}

function previous() {
    if (i > 0) {
        document.getElementById("img").src = "js\\"+images[i-1];
        document.getElementById("st").innerHTML = (i)+"/"+images.length;
        i -= 1;
    }
    else {
        document.getElementById("img").src = "js\\"+images[0];
    }
}
