 function lietkeCacCauTiengAnh(data) {
    var treeCacCauTiengAnh = document.getElementById('tree');
    var row = '';
    for (var i=0; i<data.length; i++) {
      
      row += "<li class='parent'><details><summary>"+(i+1)+". "+data[i].tencau+
          "</summary><ul id='"+data[i].linkaudio+"' onclick='playMusic(this, false)'>"+
          "<li class='cachdoc'>"+data[i].cachdoc+
          "</li><li class='phienam'>"+data[i].phienam+
          "</li><li class='dichnghia'>"+data[i].dichnghia+
          "</li><i class='fa-solid fa-volume-high'></i></ul></details></li><hr>";
      if (i == 9) {
        row += "<li class='nghetheophan' id='https://github.com/phaihoctienganhgioi/100caucuamiengmp3/blob/main/01-10.mp3?raw=true' onclick='playMusic(this, true)'><i class='fa fa-headphones' aria-hidden='true'></i>ALL FROM 01-10</li><hr>";
      }
      
      if (i == 19) {
        row += "<li class='nghetheophan' id='https://github.com/phaihoctienganhgioi/100caucuamiengmp3/blob/main/11-20.mp3?raw=true' onclick='playMusic(this, true)'><i class='fa fa-headphones' aria-hidden='true'></i>ALL FROM 11-20</li><hr>";
      }
      
      if (i == 29) {
        row += "<li class='nghetheophan' id='https://github.com/phaihoctienganhgioi/100caucuamiengmp3/blob/main/21-30.mp3?raw=true' onclick='playMusic(this, true)'><i class='fa fa-headphones' aria-hidden='true'></i>ALL FROM 21-30</li><hr>";
      }
      
      if (i == 39) {
        row += "<li class='nghetheophan' id='https://github.com/phaihoctienganhgioi/100caucuamiengmp3/blob/main/31-40.mp3?raw=true' onclick='playMusic(this, true)'><i class='fa fa-headphones' aria-hidden='true'></i>ALL FROM 31-40</li><hr>";
      }
      
      if (i == 49) {
        row += "<li class='nghetheophan' id='https://github.com/phaihoctienganhgioi/100caucuamiengmp3/blob/main/41-50.mp3?raw=true' onclick='playMusic(this, true)'><i class='fa fa-headphones' aria-hidden='true'></i>ALL FROM 41-50</li><hr>";
      }
      

      
    }
    treeCacCauTiengAnh.innerHTML += row;
  }
  
  function playMusic(elem, laplai) {
          	//alert("gfdghfdgfdg");
          	//var id = $(elem).attr("id");
    		//alert(id);
          	//let audio = new Audio(id);
          	//audio.play();
          music.pause();
          var id = $(elem).attr("id");
          if (laplai) {
    		music = new Audio(id);
    		music.play();
            music.loop = true;
          } else {
    		music = new Audio(id);
    		music.play();
            music.loop = false;
          }
          	
        }