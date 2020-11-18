var canvas = document.getElementById("myCanvas");

//create the 3D engine setup
var engine = new BABYLON.Engine(canvas, true);
var camera, mat;
var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();

var scene = createScene();

///render 
engine.runRenderLoop(function() {

    mat.diffuseTexture.vScale += .01;
    mat.diffuseTexture.uScale += .01;
    scene.render();

    window.addEventListener("click", function() {
        var pickResult = scene.pick(scene.pointerX, scene.pointerY)
        console.log(pickResult);
    })
})

///////////////////////////////////////////////////HELPER FUNCTIONS//////////////////////////////////////////////

function createScene() {

    //create the scene space
    var scene = new BABYLON.Scene(engine);
    scene.enablePhysics(gravityVector, physicsPlugin);
    sphere = BABYLON.MeshBuilder.CreateSphere("myPlane", {diameter: .5}, scene);
    sphere.position = new BABYLON.Vector3(0,1, 0)
    light = new BABYLON.DirectionalLight("DirectionalLighting", new BABYLON.Vector3(0 -1, 0), scene);

    //add a camera to the scene and attach it to the canvas
    // camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/4, 4, BABYLON.Vector3.Zero(), scene);camera.attachControl(canvas, true);
    
    //add lights to the scene x, y, z
    // var light= new BABYLON.DirectionalLight("myLight", new BABYLON.Vector3(0, -.5, 1.0), scene);

    //add ground to the scene
    // var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);

    ////////new on 11/17////
    
    //orb
    mat = new BABYLON.StandardMaterial("base", scene);
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //sphere
    mat.diffuseTexture = new BABYLON.Texture("textures/marble.jpg"),
    mat.specularColor = new BABYLON.Color3(.1, .1, 2);
    mat.ambientColor = new BABYLON.Color3(.5,.5, .5)
    mat.ambientColor = new BABYLON.Color3(1,1,1);

    //physics for the sphere
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1.5 }, scene);

    sphere.physicsImpostor.physicsBody.linearDamping = .6;
    sphere.physicsImpostor.physicsBody.angularDamping = .5;
    sphere.friction = 2;


    sphere.material = mat;

    //ground
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);

    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

    ground.physicsImpostor.friction = 10;


    sphere.physicsImpostor.applyForce(
        new BABYLON.Vector3(0,0,-2000), 
        sphere.getAbsolutePosition()
         );

    // scene.render();

    return scene;
}