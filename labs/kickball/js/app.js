//application level setup
//global variables
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var scene, camera, kickball, goal, timeoutId, particleSystem;

//create the scene
scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
})

scene.registerAfterRender (function() {
    //redraws all things on the scene
    if(kickball.intersectsMesh(goal, false)) {
        console.log("Yep!");
        
    //move the goal on reset
    goal.position.z = 2.5;
    goal.position.x = Math.random() * 5;

    //play a particle burst
    particleSystem.manualEmitCount = 21;
    particleSystem.start();

    //position the particles
    particleSystem.minEmitBox = kickball.position;
    particleSystem.maxEmitBox = kickball.position;
    
    //get the ball back when goal is hit
    resetBall();
    }
})


//what's in the scene
function createScene() {
    var scene = new BABYLON.Scene(engine);


    //basic scene setup
    var camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0, 0, -15), scene); //new type of camera, doesn't move around
    //light
    var light = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(0, -.7, 1), scene )

    //physics setup
    var gravityVector = BABYLON.Vector3(0, -9.84, 0); //try 100
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);

    ///setup ball
    ballSurface = new BABYLON.StandardMaterial("base", scene);

    kickball = BABYLON.MeshBuilder.CreateSphere("kickball", {diameter: 1.5}, scene);
    kickball.physicsImpostor = new BABYLON.PhysicsImpostor( //sets up the impostor, defines the weight and bounce of the sphere
                        kickball, BABYLON.PhysicsImpostor.SphereImpostor,
                        { mass: 1, restitution: .2 }, scene
                        );
    ballSurface.diffuseTexture = new BABYLON.Texture("images/marble.jpg"),
    ballSurface.specularColor = new BABYLON.Color3(.1, .1, 2);
    ballSurface.ambientColor = new BABYLON.Color3(.5,.5, .5)
    ballSurface.ambientColor = new BABYLON.Color3(1,1,1);

    kickball.material = ballSurface;

    //setup the ground
    groundSurface = new BABYLON.StandardMaterial("base", scene);
    ground = new BABYLON.MeshBuilder.CreateGround("ground", {height: 20, width: 20, subdivisions: 4}, scene);
    ground.position.y = -3;
    ground.position.z = 9;

    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
                        ground, BABYLON.PhysicsImpostor.BoxImpostor,
                        {mass: 0, restitution: .9}, scene
                        );
    groundSurface.diffuseTexture = new BABYLON.Texture("images/marble.jpg"),
    groundSurface.specularColor = new BABYLON.Color3(20, 520, 20);
    // groundSurface.ambientColor = new BABYLON.Color3(.5,.5, .5)
    
    ground.material = groundSurface;


    //create the goal
    goalSurface = new BABYLON.StandardMaterial("base", scene);
    goal = new BABYLON.MeshBuilder.CreateBox("goal", {height: 3, width: 3}, scene);
    goal.position.z = 2.5;
    goal.position.x = Math.random() * 5;

    // goalSurface.diffuseTexture = new BABYLON.Texture("images/texture.jpg"),

    goal.material = goalSurface;

    //create the particle system
    particleSystem = new BABYLON.ParticleSystem("particles",7, scene );
    particleSystem.emitter = new BABYLON.Vector3(0,0,0);
    particleSystem.minEmitPower = 10;
    particleSystem.maxEmitPower = 18;
    // particleSystem.addVelocityGradient(0,2);

    //load the particle texture
    particleSystem.particleTexture = new BABYLON.Texture("images/thumbs-up-02-01.png", scene);
    
    // particleSystem.start();
    


    return scene;
}

//put the ball back
function resetBall() {
    //reset position
    kickball.position = new BABYLON.Vector3();
    
    //reset velocity - linear and rolling
    kickball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3())
    kickball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3())

    //get rid of the timeout if its still on
    clearTimeout (timeoutId);
}


//more fun
window.addEventListener("click", function() {
    //getting the position of the mesh picked
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    //null check
    if(selectedObject) {
        
        //kick in a direction //working with the "normal" 90 degrees perpendicular
        var surfaceNormal = pickResult.getNormal(true);
        var forcedDirection = surfaceNormal.scale(-1000);

        //kick straight up
        selectedObject.physicsImpostor.applyForce(
            forcedDirection,
            selectedObject.getAbsolutePosition()
        )

        //reset the kickball after 3 seconds
        timeoutId = setTimeout(resetBall, 3000);
    }
})