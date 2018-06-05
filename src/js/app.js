var stories = [storyMain];
var render = function(){
  let story = document.querySelector('.gameContainer');
  story.innerHTML = '';
}
render(0, 0);
<div class="gameBackground"></div>
<img src="./src/img/Cockpitbg.png" alt="" class="gameCockpit">
<section class="gameChoices">
  <p class="gameChoice">Que faire?</p>
  <button class="gameChoice1">choix 1</button>
  <button class="gameChoice2">choix 2</button>
  <button class="gameChoice3">choix 3</button>
</section>
<div class="gameTextContainer">
  <p class="gameText">Bonjour machin, tu vas bien?</p>
  <img src="./src/img/Tom.png" alt="" class="gameTextImg">
</div>
