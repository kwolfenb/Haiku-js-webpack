import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Haiku } from './haiku';


$(document).ready(function() {
  $('#haiku').submit(function(event) {
    event.preventDefault();
    let lineOne = $('#lineOne').val();
    let lineTwo = $('#lineTwo').val();
    let lineThree = $('#lineThree').val();
    let newHaiku = new Haiku(lineOne, lineTwo, lineThree);

    let result1 = newHaiku.syllableCounter(lineOne);
    let result2 = newHaiku.syllableCounter(lineTwo);
    let result3 = newHaiku.syllableCounter(lineThree);
    
    $('.result1').text("Stanza One: " + result1);
    $('.result2').text("Stanza Two: " + result2);
    $('.result3').text("Stanza Three:" +result3);

  });
});