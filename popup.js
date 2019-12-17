
/*function doGet() { 
  var template = HtmlService.createTemplateFromFile('top');
  return template.evaluate();
}*/
var annot="Key point in ReviewMap";
var keywords="No keywords added";
var title="Go to Link"
document.write("<table style='width:700px; height:550px; border: 1px solid #E25822; color:#E25822; font-style: normal; font-weight: normal; font-size: 12px; line-height: 22px; background: linear-gradient(180deg, #EAF5FF 0%, #FDE3D9 151.49%);'><tr style='height :530px; text-align: center;'><td style='width:250px; height:530px;padding-right: 30px; padding-bottom: 30px; padding-left: 30px;'><img src='icon.png' style='width:100px;'><br><br><br>Annotation: <br><textarea rows='5' columns='30' id='annot' style='width: 180px; resize: none;'></textarea><br><br>Keywords: <br><textarea rows='5' columns='30' id='keywords' style='width: 180px; resize: none;'></textarea><br><br><button id='review' style='background: #f55800; color:#FFFFFF; padding: 10px 10px; border-radius: 30px;'>Add to Review Map</button><br></td><td><iframe style='text-align:center; border: 1px solid #FFFFFF; ' id='iframe' src='https://script.google.com/macros/s/AKfycbwmCp9EfUzVlSZUqaq5rddex1UDCLDVj8GPMVqE3mGR1gdOBG0/exec?'></iframe></td></tr></table>");
    var button = document.getElementById('review');
    button.onclick = function (){
    console.log(document.getElementById("annot").value)
    annot = document.getElementById("annot").value;
    keywords = document.getElementById("keywords").value;
    document.getElementById("annot").value="";
    document.getElementById("keywords").value="";


  chrome.tabs.executeScript( {
  code: "window.getSelection().toString();",
}, function(selection) {
  var query1 = encodeURIComponent(selection[0] || 'Nothing selected');
  
  var query = decodeURI(query1);
  query=unescape(query);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  //var annotret= document.getElementById("annot").innerHTML;
 chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
   var tab=tabs[0].url;
   title=tabs[0].title;
  myFunction(tab);
  
});

function myFunction(tablink) {
URL=tablink;
console.log(URL);
console.log(query);
console.log(annot);
console.log(keywords);
console.log(today);
console.log(title);
document.querySelector('iframe').src = 
'https://script.google.com/macros/s/AKfycbwmCp9EfUzVlSZUqaq5rddex1UDCLDVj8GPMVqE3mGR1gdOBG0/exec?'+'url='+URL+'&keypoint='+query+'&annot='+annot+'&date='+today+'&keywords='+keywords+'&title='+title;

}

});
};
//document.getElementById('review').addEventListener('click', reviewmap);