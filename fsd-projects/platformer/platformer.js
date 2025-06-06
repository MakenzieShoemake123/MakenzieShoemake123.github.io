$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 630, 100, 15, "White");
    createPlatform(550, 550, 100, 15, "White");
    createPlatform(650, 440, 100, 15, "White");
    createPlatform(1000, 430, 100, 15, "White");
    createPlatform(800, 500, 100, 15, "White");
    createPlatform(900, 600, 100, 15, "White");
    createPlatform(800, 600, 200, 15, "White");
    createPlatform(1200, 500, 100, 15, "White");
    createPlatform(1300, 600, 100, 15, "White");
    createPlatform(900, 300, 100, 15, "White");
    createPlatform(800, 200, 100, 15, "White");
    createPlatform(700, 200, 100, 15, "White");
    createPlatform(1300, 500, 15, 100, "White");
    createPlatform(800, 500, 15, 100, "White");
    createPlatfrom(700, 300, 15, 100, "White");
   
    // TODO 3 - Create Collectables
    createCollectable("steve", 800, 550);
    createCollectable("diamond", 1350, 600);
   

    
    // TODO 4 - Create Cannons

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
