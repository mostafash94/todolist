function addItem() {
  let inputData;
  inputData = document.getElementById("input").value;

  if (inputData === "") {
    alert("please fill the task!");
  } else {
    document.getElementById("input").value=""
    let Ptag = document.createElement("p");

    let tasktag = document.createElement("span");

    let task = document.createTextNode(inputData);

    tasktag.appendChild(task);

    Ptag.appendChild(tasktag);

    let result = document.getElementById("result");

    result.appendChild(Ptag);

    let remtag = document.createElement("span");

    let remtxt = document.createTextNode("×");

    remtag.appendChild(remtxt);

    Ptag.appendChild(remtag);

    Ptag.addEventListener("click", done);

    function done() {

      tasktag.style.textDecoration = "line-through";
    }

    let remove = document.createAttribute("onclick");

    remove.value = "this.parentNode.remove();";
    
    remtag.setAttributeNode(remove);
  }
}
