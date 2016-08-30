//Namespace for our table manipulation functions
(function(exports) {
  //Add new row by clicking on Add button
  exports.AddRow = function() {
    //Get InitValue by string
    var table = document.getElementById("myTable");
    var row = table.rows[1].cloneNode(true);
    var footer = document.getElementById("footer");
    var body = document.getElementById("body");
    body.insertBefore(cleanRowValues(row), footer);
    setTotal();
  };

  //Calculate values in a row
  exports.CalculateValues = function(eventClick) {
    var target = eventClick.target || eventClick.srcElement;
    while (target && target.nodeName != "TR") {
      target = target.parentElement;
    }
    var cells = target.cells;
    if (!cells.length) {
      return;
    }
    var initValue = cells[0].getElementsByTagName("input")[0].value;
    var step = cells[1].getElementsByTagName("input")[0].value;
    if ((initValue === "undefined" || initValue === "") || (step == "undefined" || step === "")) {
      return;
    }
    cells[2].innerHTML = initValue;
    for (var i = 3; i < cells.length; i++) {
      cells[i].innerHTML = parseInt(step) + parseInt(cells[i - 1].innerHTML);
    }
    setTotal(cells.length);
  };

  //Clean row values when create new row
  function cleanRowValues(row) {
    var cells = row.cells;
    cells[0].getElementsByTagName("input")[0].value = 0;
    cells[1].getElementsByTagName("input")[0].value = 0;
    for (var i = 2; i < cells.length; i++) {
      cells[i].innerHTML = 0;
    }
    return row;
  }

  //Set total value in a column
  function setTotal(columnLength) {
    for (var i = 3; i <= columnLength; i++) {
      var cells = document.querySelectorAll(".sRow td:nth-of-type(" + i + ")");
      var totalCell = document.querySelectorAll("#footer td:nth-of-type(" + (i - 1) + ")")[0];
      totalCell.innerHTML = sumColumnValues(cells);
    }
  }

  //Sum total by column
  function sumColumnValues(cells) {
    var sum = 0;
    for (var i = 0; i < cells.length; i++) {
      sum = sum + parseInt(cells[i].innerHTML);
    }
    return sum;
  }
})(this.TableManipulation = {});

//Add event on click Add button
document.querySelector("#Add")
  .onclick = function() {
    TableManipulation.AddRow();
  };

//Add event on input value
document.getElementById("container")
  .addEventListener("input", function(eventClick) {
    TableManipulation.CalculateValues(eventClick);
  });