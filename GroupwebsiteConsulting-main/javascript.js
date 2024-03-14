function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#f2f2f2";
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.style.backgroundColor = "#ddd";
}

// Set the default tab to be opened
document.getElementById("cyberSecurity").style.display = "block";
document.getElementsByClassName("tablinks")[0].style.backgroundColor = "#ddd";

function submitForm() {
    var query = document.querySelector('.search-input').value;
    var searchMessage = document.getElementById('search-message');
    if (query.trim() === '') {
        searchMessage.style.display = 'block';
        return;
    } else {
        searchMessage.style.display = 'none';
        // Redirect to search results page or perform search operation
        // For demonstration, let's just show the message
        alert("Perform search operation here");
    }
}

function submitContact() {
    var query = document.querySelector('.search-input').value;
    var searchMessage = document.getElementById('search-message');
    if (query.trim() === '') {
        searchMessage.style.display = 'block';
        return;
    } else {
        searchMessage.style.display = 'none';
        // Redirect to search results page or perform search operation
        // For demonstration, let's just show the message
        alert("Perform search operation here");
    }
}
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.getElementById("sendMessageButton").addEventListener("click", function() {
  document.getElementById("messageNotification").style.display = "block";
  setTimeout(function() {
    document.getElementById("messageNotification").style.display = "none";
  }, 2000); 
});

