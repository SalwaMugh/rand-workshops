var facg6 = ["Angham116","denaHS","Anies12","AhmedAl-Almi","alaabadra","ahmedisam99","IsraaSulaiman","KhaderMurtaja","AymanAlqoqa","Fatmasiam","mohammedmh","naremanhilles","aminalakhsham","Jamalat-shamallakh","AbdallahAmmar96","engshorouq"]


// STACKOVERFLOW FUNCTION    START
var splitAt = function(i, xs) {
  var a = xs.slice(0, i);
  var b = xs.slice(i, xs.length);
  return [a, b];
};

var shuffle = function(xs) {
  return xs.slice(0).sort(function() {
    return .5 - Math.random();
  });
};

var zip = function(xs) {
  return xs[0].map(function(_,i) {
    return xs.map(function(x) {
      return x[i];
    });
  });
}

//  END

function generateS() {
  console.log("heere");
var randomNumber = Math.floor(Math.random() * (facg6.length));
document.querySelector('.studentName').innerHTML = facg6[randomNumber];

}

function generateP() {
    var myTableDiv = document.querySelector(".studentsName");
    myTableDiv.innerHTML="";
var result = zip(splitAt(facg6.length/2, shuffle(facg6)));
console.log(result);

  var table = document.createElement('TABLE');
  // table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < result.length; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < result[i].length; j++) {
      var td = document.createElement('TD');
      // td.width = '75';
    var sName = document.createElement('h4')
    sName.innerText=result[i][j];
      td.appendChild(sName);
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);

}
