function download(){
let url=document.getElementById('url').value;
fetch('/api/all?url='+encodeURIComponent(url))
.then(r=>r.json()).then(d=>{
if(d.profile_picture){
document.getElementById('result').innerHTML=
'<img src="'+d.profile_picture.hd+'"><br><a href="'+d.profile_picture.hd+'" download>Download</a>';
}
});
}