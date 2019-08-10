export var date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
export let importSession = "";

if (4 <= month <= 7) {
    importSession = year.toString() + "S";
} else if (8 <= month <= 11) {
    importSession = year.toString() + "W1";
} else if (0 <= month <= 3) {
    importSession = (year - 1).toString() + "W2";
}

