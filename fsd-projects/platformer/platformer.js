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
    createPlatform(300, 700, 100, 15, "White");
    createPlatform(600,500, 100, 15, "White");
    createPlatform(400, 600, 100, 15, "White");
    createPlatform(700, 500, 15, 100, "White");
    createPlatform(700, 600, 100, 15, "White");
    createPlatform(900, 500, 40, 15, "White");
    createPlatform(1100, 400, 40, 15, "White");
    createPlatform(1200, 500, 100, 15, "White");
    createPlatform(1300, 500, 15, 100, "White");
    createPlatform(1300, 600, 100, 15, "White");
    createPlatform(900, 300, 40, 15, "White");
    createPlatform(700, 200, 100, 15, "White");
    createPlatform(600, 200, 100, 15, "White");
    createPlatform(500, 200, 100, 15, "White");
    createPlatform(400, 300, 40, 15, "White");
    createPlatform(200, 300, 15, 100, "White");
    createPlatform(200, 400, 100, 15, "White");
    //TODO - Create Collectables
    createCollectable("steve", 730, 550);
    createCollectable("diamond", 1350, 550);
    createCollectable("diamond", 250, 350);
   

    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 700);
    createCannon("bottom", 1000, 700);
    createCannon("bottom", 800, 700);
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
