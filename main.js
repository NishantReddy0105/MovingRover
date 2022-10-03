canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_surface_images = ["mars.jpg", "Mars1.jpeg","Mars2.jpeg","Mars3.jpeg","Mars4.jpeg","Mars5.jpeg","Mars6.jpeg"];
randomnumber = Math.floor(Math.random()*7)
rover_image = "rover.png";
background_image = mars_surface_images[randomnumber];
function add(){
    background_imgTag = new Image();
    background_imgTag.onLoad = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onLoad = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
rover_x = 10;
rover_y = 10;
rover_height = 90;
rover_width = 100;

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y)
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y)
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y)
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_y <=700)
    {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y)
        uploadBackground();
        uploadrover();
    }
}