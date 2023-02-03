function getall() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
    xhttp.send();
  }

  function get1() {
    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =this.responseText;
      }
    }
    xhttp1.open("GET","https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp1.send();
  }
function postrequest(){
  var xhr = new XMLHttpRequest();
xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
    document.getElementById("demo").innerHTML =
        this.responseText;
  }
};
xhr.send(JSON.stringify({"name":"test","salary":"123","age":"23"}));
}

function putrequest(){
  var xhr1 = new XMLHttpRequest();
xhr1.open("PUT", "https://reqres.in/api/users/2", true);
xhr1.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080");
xhr1.onreadystatechange = function () {
  if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
    console.log(xhr1.responseText);
  }
};
xhr1.send(JSON.stringify({"name":"test","salary":"123","age":"23"}));
}

function deleterequest() {
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp2.open("DELETE", "https://dummy.restapiexample.com/api/v1/delete/2/", true);
  xhttp2.send();
}