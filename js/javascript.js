function promijeniVidljivost() {
    var kontaktForma = document.getElementById("kontaktForma");
    var kontaktButton = document.getElementById("kontaktButton");

    if (kontaktForma.style.display === "none") {
      kontaktForma.style.display = "block";
      kontaktButton.style.display = "none";
    } else {
      kontaktForma.style.display = "none";
      kontaktButton.style.display = "block";
    }

  }
