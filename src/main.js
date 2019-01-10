import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Haiku } from './haiku'; 
// import paper from './img/paper.png';

$(document).ready(function() {
  $('#haiku').submit(function(event) {
    event.preventDefault();
    // $("img").attr('src', paper);
    let lineOne = $('#lineOne').val();
    let lineTwo = $('#lineTwo').val();
    let lineThree = $('#lineThree').val();
    let newHaiku = new Haiku(lineOne, lineTwo, lineThree);

    let result1 = newHaiku.syllableCounter(lineOne);
    let result2 = newHaiku.syllableCounter(lineTwo);
    let result3 = newHaiku.syllableCounter(lineThree);
    
    $('.result1').text("Stanza One has " + result1 + " syllables.");
    $('.result2').text("Stanza Two has " + result2 + " syllables.");
    $('.result3').text("Stanza Three has " +result3 + " syllables.");
    $('.poem').html(lineOne +"<br>" +lineTwo +"<br>"+ lineThree);
    $('hr').show();

    if((result1==5)&&(result2==7)&&(result3==5)) {
      $('.conclusion').text("This is a Haiku.");
    } else {
      $('.conclusion').text("This is NOT a Haiku.");
    }

  });
});