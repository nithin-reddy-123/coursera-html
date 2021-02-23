for (var i=0;i<names.length;i++){
  var firstLetter=names[i].charAt(0).toLowerCase();
  if (firstLetter==='j') {
    console.log("Goodbye "+names[i]);// byeSpeaker.xxxx
  } else {
    console.log("Hello "+names[i]);// helloSpeaker.xxxx
  }
}
