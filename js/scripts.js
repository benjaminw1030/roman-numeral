// translate 1 to I //
// translate 1, 5, 10, 50, 100, 500, 1000 to I, V, X, L, C, D, M //
// will translate 3 to III //
// will translate 4 to IV //
// will translate 9 to IX //
// will translate 944 to CMXLIV
// will translate 1444 to MCDXLIV

function romanNumeral(number) {
  const roman = [];
  numberArray = number.split("");
  console.log(numberArray);
  for (i = 0; i <= numberArray.length - 1; i++) {
    if (i === numberArray.length - 2) {
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
      } else if (numberArray[i] === "0") {
        roman.push("");
      } else {
        return "not a valid roman numeral";
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
      } else if (numberArray[i] === "0" && numberArray.length > 1) {
        roman.push("");
      } else if (numberArray[i] === "0" && numberArray.length === 1) {
        roman.push("Not a valid roman numeral");
      } else {
        console.log(numberArray);
        return "not a valid roman numeral";
      }
    }
  }
  return roman.join("");
}

romanNumeral("80");