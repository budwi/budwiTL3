function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aSuCsBP5QH":
        Script1();
        break;
      case "6MRm8NJGnqv":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;

}

