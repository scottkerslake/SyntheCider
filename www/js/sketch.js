var osc;
var playing = false;

var boxfreq; 
var input, button, printout;
var infreq = 240;

var rectColor; 
var newFreq;



var Oscillators = [];



var selecwave;
var env;
var index = 0;

var moodboy = 'happy';
var switchy = false;
var moodkey = 0;


function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("myCanvas");
  $("#moodtext").text(moodboy);
  // rectColor = color(255,255,255);
  // backgroundColor = color(255,0,255);
  // textAlign(CENTER);

  // input = createInput();
  // input.position(0,500);

  // button = createButton("enterval");
  // button.position(input.x + input.width, input.y);
  // button.mousePressed(inputFreq);

  // printout = createElement("h2", infreq);


  // osc = new p5.Oscillator();
  // osc.setType('triangle');
  // osc.freq(infreq);
  // osc.amp(0);
  // osc.start();

  $("#input").on("keypress", function(event){

  var x = "";

  x = $(this).val();
  // don't forget about newFreq

  x = x.toUpperCase();

  $("#msg").html("<span class='key'>" + x + "</span>");

    // $("#input").val("");

    document.getElementById("input").value = "";

    $("#msg").text
    

    // $(".key").remove();


  console.log(x);

  // this here will determine what note will be played from the keycode listener

  ////////////////MAJOR A SCALE STARTS HERE\\\\\\\\\\\\\\\\\\\\
  //q = A2
  if (moodkey == 0){ 
  if (x == "Q"){
    newFreq = 110;


  }
  //w = B2
  else if(x == "W"){
    newFreq = 123.47;

  }
  //e = C#3
  else if(x == "E"){
    newFreq = 138.81;

  }
  //r = D3
  else if(x == "R"){
    newFreq = 146.83;
  }
  //t = E3
  else if(x == "T"){
    newFreq = 164.81;

  }
  //y =F#3
  else if(x == "Y"){
    newFreq = 185.00;

  }
  //u =G#3
  else if(x == "U"){
    newFreq = 207.65;

  }
  //I = A3
  else if(x == "I"){
    newFreq = 220.00;

  }
  // The first octave is from q - I and includes the A major scale
  // next octave is below. It's going to jump around
  // O = a1
  else if(x == "O"){
    newFreq = 55.00;

  }
  // P = B3
  else if(x == "P"){
    newFreq = 41.20;

  }
  // A = c#4o
  else if(x == "A"){
    newFreq = 277.18;

  }
  // S = d4
  else if(x == "S"){
    newFreq = 293.66;

  }
  // D = e4
  else if(x == "D"){
    newFreq = 329.63;

  }
  // F = f#4
  else if(x == "F"){
    newFreq = 369.99;

  }
  // G = G#4 
  else if(x == "G"){
    newFreq = 415.30;

  }
  // h = A4
  else if(x == "H"){
    newFreq = 440;

  }
  // J = D5
  else if(x == "I"){
    newFreq = 587.33;

  }
  //k = b4
  else if(x == "J"){
    newFreq = 493.88;

  }
  //l = C#5
  else if(x == "K"){
    newFreq = 554.37;

  }
  //z = A6
  else if(x == "L"){
    newFreq = 880.00;

  }
  //x = e5
  else if(x == "X"){
    newFreq = 659.25;

  }
  //c = f#5
  else if(x == "C"){
    newFreq = 739.99;

  }
  //v = G#5
  else if(x == "V"){
    newFreq = 830.61;

  }
}

/// this is the minor key\\\\\
else if (moodkey == 1){
   //q = A2
  
  if (x == "Q"){
    newFreq = 110;


  }
  //w = B2
  else if(x == "W"){
    newFreq = 123.47;

  }
  //e = C3
  else if(x == "E"){
    newFreq = 130.81;

  }
  //r = D3
  else if(x == "R"){
    newFreq = 146.83;
  }
  //t = E3
  else if(x == "T"){
    newFreq = 164.81;

  }
  //y =F#3
  else if(x == "Y"){
    newFreq = 185.00;

  }
  //u =G#3
  else if(x == "U"){
    newFreq = 207.65;

  }
  //I = A3
  else if(x == "I"){
    newFreq = 220.00;

  }
  // The first octave is from q - I and includes the A major scale
  // next octave is below. It's going to jump around
  // O = a1
  else if(x == "O"){
    newFreq = 55.00;

  }
  // P = B3
  else if(x == "P"){
    newFreq = 41.20;

  }
  // A = c4
  else if(x == "A"){
    newFreq = 261.63;

  }
  // S = d4
  else if(x == "S"){
    newFreq = 293.66;

  }
  // D = e4
  else if(x == "D"){
    newFreq = 329.63;

  }
  // F = f#4
  else if(x == "F"){
    newFreq = 369.99;

  }
  // G = G#4 
  else if(x == "G"){
    newFreq = 415.30;

  }
  // h = A4
  else if(x == "H"){
    newFreq = 440;

  }
  // J = D5
  else if(x == "J"){
    newFreq = 587.33;

  }
  //k = b4
  else if(x == "K"){
    newFreq = 493.88;

  }
  //l = C5
  else if(x == "L"){
    newFreq = 523.25;

  }
  //z = A6
  else if(x == "Z"){
    newFreq = 880.00;

  }
  //x = e5
  else if(x == "X"){
    newFreq = 659.25;

  }
  //c = f#5
  else if(x == "C"){
    newFreq = 739.99;

  }
  //v = G#5
  else if(x == "V"){
    newFreq = 830.61;

  }




}



  





  //make a new osci object and push it to the array oscillators
  ranWave();
  Oscillators.push(new Osci(newFreq, 0.00001, 0.7));
  
  
  Oscillators[index].playEnv();

  index++;

  

  

  // var x = $(this).val();

  // if (event.keyCode == 13){

  //  $("#msg").text(x);
    
  // }

});

  $("#cleartext").on("click", function(){

    $(".key").remove();

    

    for (var l = 0; l < Oscillators.length; l++) {
      Oscillators[0].stoposc();
      Oscillators.splice(0,1);
      index = 0;
    }



  });
  //function to print the array to the console
  $("#printarray").on("click", function(){
    // this will print the oscillator array out 
    for (var i = 0; i < Oscillators.length; i++) {
      console.log(Oscillators[i]);

    }
    


  });

  $("#mood").on("click", function(){
   // this is the mood selection button. Can change from happy to sad.
   
   

   if(!switchy){
    moodboy = "sad"
    switchy = true;
    $("#moodtext").text(moodboy);
    moodkey = 1;


   }
   else{
    moodboy = "happy";
    switchy = false;
    $("#moodtext").text(moodboy);
    moodkey = 0;

   }

   



  });



}

function draw() {
  // background(255,0,255);
  // text('click to play', width/2, height/2);
  // fill(rectColor);
  // rect(0,0,200,200);




  
  
}


  // function inputFreq(){
  //    infreq = input.value();
  //    // printout.html(infreq);
  //    x = int(infreq);
  //    console.log(infreq);
  //    // print(infreq);



  // }
  // function Enve(){



  // }
  function Osci(freq, ampl, amp2){
    ranWave();
    
    this.actualosc = new p5.Oscillator(selecwave);

    this.ampli1 = ampl;
    this.ampli2 = amp2;
    this.frequency = freq;
    this.env = new p5.Env();
    this.env.setADSR(this.ampli1,0.2,0.2,this.ampli2);
    this.env.setRange(1.0,0);


    
    
    // this.actualosc.setType(selecwave);
    this.actualosc.amp(this.env);

    this.actualosc.freq(this.frequency);
    this.actualosc.start();
    

    


    // this.playosc = function(){
    //   playing = true;



    // };
    this.stoposc = function(){
      playing = false;
      this.actualosc.stop();


    };
    this.playEnv = function(){
      this.env.play();


    }




  }


  // the ranwave function will generate a random wave between the four 
  //choices given
  function ranWave(){


    var dice = random(5); 
    var conv =  int(dice);
   
    if (conv == 0){
      selecwave = "triangle";

    }
    else if (conv == 1){
      selecwave = "sine";



    }
    else if(conv == 2){
      selecwave = "square";



    }
    else {
      selecwave = "sawtooth";


    }
    // console.log(dice);
    // console.log(conv);



  }


