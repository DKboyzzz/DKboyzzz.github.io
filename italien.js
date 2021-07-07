let names = ['Tun', 'Darren', 'Julien', 'Yannick', 'Johan', 'Crack', 'Daniel', 'Jany', 'Alex']
function rand(items) {
    return items[items.length * Math.random() | 0];
}
function random(){
    let name = rand(names);
    name = 'Regelbeauftragten: ' + name;
    document.getElementById('name').innerHTML = name;
}
function zyklusclose(){
    document.getElementById("layer").style.display = "none";
}

function zyklus(){
    document.getElementById("layer").style.display = "block";
}