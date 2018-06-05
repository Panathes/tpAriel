var stories = [storyMain];
var render = function(array, index){
  let ui = {
    background: document.querySelector('.storyBackground'),
    questionContainer: document.querySelector('.storyChoices'),
    text: document.querySelector('.storyText'),
    textContainer: document.querySelector('.storyTextContainer'),
    textImg: document.querySelector('.storyTextImg')
  }
  ui.questionContainer.innerHTML = '';
  let story = stories[array][index];

  let img = document.createElement('img');
  ui.background.insertBefore(img, ui.background.firstChild);
  let img2 = document.createElement('img');
  ui.background.appendChild(img2);
  let anim = document.createElement('div');
  ui.background.appendChild(anim);
  if ((story.animation.img !== false)&&(story.animation.css !== false)) {
    img2.src = story.animation.img;
    img2.classList.add('storyImg');
    img2.classList.add(story.animation.css);
  } else {
    if (story.animation.img !== false) {
      img.src = story.animation.img;
      img.classList.add('storyImg');
    }
    if (story.animation.css !== false) {
      anim.classList.add(story.animation.css);
    }
  }

  ui.text.textContent = story.text[0].text;
  ui.textImg.src = './src/img/'+story.text[0].who+'.png';
  let question = document.createElement('p');
  question.classList.add('storyChoice');
  ui.questionContainer.appendChild(question);
  var textCount = 1;
  var questionOnce = false;
  ui.textContainer.addEventListener('click', function(){
    if (textCount < story.text.length) {
      ui.text.textContent = story.text[textCount].text;
      ui.textImg.src = './src/img/'+story.text[textCount].who+'.png';
      textCount++;
    } else if (questionOnce === false) {
      questionOnce = true;
      question.textContent = story.question;
      for (let i = 0; i < story.answers.length; i++) {
        let choice = document.createElement('button');
        ui.questionContainer.appendChild(choice);
        choice.innerHTML = story.answers[i].content;
        choice.addEventListener('click', function(){
          img2.classList.add('storyShutterOver');
          setTimeout(function(){
            ui.background.removeChild(anim);
            ui.background.removeChild(img);
            ui.background.removeChild(img2);
          }, 3000);
          render(story.answers[i].target[0], story.answers[i].target[1]);
        })
      }
    }
  });

}
render(0, 0);
