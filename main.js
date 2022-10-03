var billAmount = document.getElementById("BillAmt");
var cashGiven = document.getElementById("CashGiven");
var change = 0;
var tNote = 0;
var fNote = 0;
var hNote = 0;
var twNote = 0;
var tenNote = 0;
var fiNote = 0;
var onNote = 0;
document.getElementById("submit").addEventListener("click", calcChange);

function calcChange() {
    if (billAmount.value == 0) {
        document.getElementById("PoorGuy").innerHTML = "Invalid Bill Amount";
    }
    change = cashGiven.value - billAmount.value;
    if (change < 0) {
        document.getElementById("PoorGuy").innerHTML = "Do You Want to Wash Plates ?"
    }


    if (change >= 2000) {
        tNote = Math.trunc(change / 2000);
        if (tNote >= 1) {
            change = change - (tNote * 2000);
        }
    }

    if (change >= 500) {
        fNote = Math.trunc(change / 500);
        if (fNote >= 1) {
            change = change - (fNote * 500);
        }
    }

    if (change >= 100) {
        hNote = Math.trunc(change / 100);
        if (hNote >= 1) {
            change = change - (hNote * 100);
        }

    }

    if (change >= 20) {
        twNote = Math.trunc(change / 20);
        if (twNote >= 1) {
            change = change - (twNote * 20);
        }

    }

    if (change >= 10) {
        tenNote = Math.trunc(change / 10);
        if (tenNote >= 1) {
            change = change - (tenNote * 10);
        }

    }

    if (change >= 5) {
        fiNote = Math.trunc(change / 5);
        if (fiNote >= 1) {
            change = change - (fiNote * 5);
        }

    }

    if (change >= 1) {
        onNote = Math.trunc(change / 1);
        if (onNote >= 1) {
            change = change - (onNote * 1);
        }

    }

    document.getElementById("tNote").innerHTML = tNote;
    document.getElementById("fNote").innerHTML = fNote;
    document.getElementById("hNote").innerHTML = hNote;
    document.getElementById("twNote").innerHTML = twNote;
    document.getElementById("tenNote").innerHTML = tenNote;
    document.getElementById("fiNote").innerHTML = fiNote;
    document.getElementById("onNote").innerHTML = onNote;
}
