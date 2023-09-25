function removeVAT(input) {
  return input / 1.19;
}

browser.tabs.executeScript({
  code: "window.getSelection().toString();"
}).then(function(selection) {
  if (selection[0]) {
    let result = removeVAT(parseFloat(selection[0]));
    if (!isNaN(result)) {
      document.getElementById("result").textContent = "Without VAT: " + result.toFixed(2);
    } else {
      document.getElementById("result").textContent = "Invalid selection. Please select a number.";
    }
  }
});

