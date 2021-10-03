let Employees = [];

window.onload = function () {
  LoadAllEmployees();
};

function LoadAllEmployees() {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php"
  );
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status == 200) {
      Employees = JSON.parse(request.response);

      BindAllEmployees();
    } else {
      alert("'+request.status+'");
    }
  };
}

function BindAllEmployees() {
  var html = "";
  var objectNameArray = ["1", "2", "3"];
  for (var i = 0; i < objectNameArray.length; ++i) {
    if (Employees[objectNameArray[i]]) {
      var currentObj = Employees[objectNameArray[i]];

      html += '<div class="col-4 col-s-12"><div class="aside">';
      if (currentObj.employeeisfeatured == "1")
        html += '<img src="images/crown.png" class="crown">';
      else html += '<img src="" class="crown">';
      html +=
        '<img src="http://sandbox.bittsdevelopment.com/code1/employeepics/' +
        currentObj.employeeid +
        '.jpg" id="circle" class="circle"><br/>' +
        "<span>" +
        currentObj.employeefname +
        " " +
        currentObj.employeelname +
        "</span><br/>" +
        "<span>" +
        currentObj.employeebio +
        "</span><br/><br/><br/>";
      var role = currentObj.roles;
      for (var j = 0; j < role.length; j++) {
        html +=
          '<span style="background-color:' +
          role[j].rolecolor +
          '" class="spnRole">' +
          role[j].rolename +
          "</span>";
      }

      html += "</div></div>";
    }
  }

  let ele = document.getElementById("rowId");
  ele.innerHTML = html;
}
