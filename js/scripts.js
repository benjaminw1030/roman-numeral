// translate 1 to I //
// translate 1, 5, 10, 50, 100, 500, 1000 to I, V, X, L, C, D, M //
// will translate 3 to III //
// will translate 4 to IV //
// will translate 9 to IX //
// will translate 944 to CMXLIV //
// will translate 1444 to MCDXLIV //

// Business Logic

function romanNumeral(number) {
  const roman = [];
  const noString = parseFloat(number);
  if (noString > 3999 || noString < 1 || isNaN(noString) || !Number.isInteger(noString)) {
    return "Not a valid roman numeral."
  } else
    numberArray = number.split("");
  for (i = 0; i <= numberArray.length - 1; i++) {
    if (i === numberArray.length - 4) {
      if (numberArray[i] === "1") {
        roman.push("M");
      } else if (numberArray[i] === "2") {
        roman.push("MM");
      } else if (numberArray[i] === "3") {
        roman.push("MMM");
      } else {
        roman.push("");
      }
    } else if (i === numberArray.length - 3) {
      if (numberArray[i] === "1") {
        roman.push("C");
      } else if (numberArray[i] === "2") {
        roman.push("CC");
      } else if (numberArray[i] === "3") {
        roman.push("CCC");
      } else if (numberArray[i] === "4") {
        roman.push("CD");
      } else if (numberArray[i] === "5") {
        roman.push("D");
      } else if (numberArray[i] === "6") {
        roman.push("DC");
      } else if (numberArray[i] === "7") {
        roman.push("DCC");
      } else if (numberArray[i] === "8") {
        roman.push("DCCC");
      } else if (numberArray[i] === "9") {
        roman.push("CM");
      } else {
        roman.push("");
      }
    } else if (i === numberArray.length - 2) {
      if (numberArray[i] === "1") {
        roman.push("X");
      } else if (numberArray[i] === "2") {
        roman.push("XX");
      } else if (numberArray[i] === "3") {
        roman.push("XXX");
      } else if (numberArray[i] === "4") {
        roman.push("XL");
      } else if (numberArray[i] === "5") {
        roman.push("L");
      } else if (numberArray[i] === "6") {
        roman.push("LX");
      } else if (numberArray[i] === "7") {
        roman.push("LXX");
      } else if (numberArray[i] === "8") {
        roman.push("LXXX");
      } else if (numberArray[i] === "9") {
        roman.push("XC");
      } else {
        roman.push("");
      }
    } else if (i === numberArray.length - 1) {
      if (numberArray[i] === "1") {
        roman.push("I");
      } else if (numberArray[i] === "2") {
        roman.push("II");
      } else if (numberArray[i] === "3") {
        roman.push("III");
      } else if (numberArray[i] === "4") {
        roman.push("IV");
      } else if (numberArray[i] === "5") {
        roman.push("V");
      } else if (numberArray[i] === "6") {
        roman.push("VI");
      } else if (numberArray[i] === "7") {
        roman.push("VII");
      } else if (numberArray[i] === "8") {
        roman.push("VIII");
      } else if (numberArray[i] === "9") {
        roman.push("IX");
      } else {
        roman.push("");
      }
    }
  }
  return roman.join("");
}

//UI Logic

$(document).ready(function(){
  $("form#translator").submit(function(event){
    event.preventDefault();
    const number = $("#number").val();
    $("#roman").html(romanNumeral(number));
  });
});