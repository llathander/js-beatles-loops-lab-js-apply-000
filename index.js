var emptyArray = [];

function theBeatlesPlay(musicians, instruments) {
  for(var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  } 
  return emptyArray;
}

function johnLennonFacts(facts) {
  let emptyArray1 = [];
  let i = 0;
  while (i < facts.length) {
    emptyArray1.push(facts[i] + "!!!");
    i++;
  }
  return emptyArray1;
}

function iLoveTheBeatles(number) {
  let emptyArray2 = [];
  var i = 0;
  do {
    emptyArray2.push("I love the Beatles!");
    i++;
  } while (number < 15);
  return emptyArray2;
}

