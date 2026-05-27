export function decodedResistorValue(listOfColors: Array<string>): string{
  const digits1and2: Record<string, string> = {
    "black": "0",
    "brown": "1",
    "red": "2",
    "orange": "3",
    "yellow": "4",
    "green": "5",
    "blue": "6",
    "violet": "7",
    "grey": "8",
    "white": "9"
    }
  const magnitude: Record<string, string> = {
    "black": "",
    "brown": "0",
    "red": "00",
    "orange": "000",
    "yellow": "0000",
    "green": "00000",
    "blue": "000000",
    "violet": "0000000",
    "grey": "00000000",
    "white": "000000000"
    }

  let value1: string = ""
  if (listOfColors[0] !== "black"){
    value1 = digits1and2[listOfColors[0]]
  }
  
  let value2: string = digits1and2[listOfColors[1]]  
  let value3: string= magnitude[listOfColors[2]]

  let value: string = value1 + value2 + value3  

  if(value.includes("000000000")){
    return value.replace("000000000", " gigaohms");
  }
  else if(value.includes("00000000")){
    return value.replace("00000000", "00 megaohms");
  }
  else if(value.includes("0000000")){
    return value.replace("0000000", "0 megaohms");
  }
  else if(value.includes("000000")){
    return value.replace("000000", " megaohms");
  }  
  else if(value.includes("00000")){
    return value.replace("000000", "00 kiloohms");  
  }
   else if(value.includes("0000")){
     return value.replace("0000", "0 kiloohms");
  } 
   else if(value.includes("000")){
     return value.replace("000", " kiloohms");
  }
   else if(value === "00"){
     return "0 ohms";
   }
  else {
  return value + " ohms";
  }
}