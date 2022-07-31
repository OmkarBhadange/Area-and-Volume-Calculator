// Gets the inputs for the parameters
const lengthIn = $("input#length");
const heightIn = $("input#height");
const widthIn = $("input#width");

// Gets the buttons/selects to check for clicks/changes
const areaBtn = $("button#calcarea");
const volumeBtn = $("button#calcvolume");
const shapeType = $("select#shape");
const unitType = $("select#unit");

// Gets the output area for the code
const areaOut = $("#areaout");
const volumeOut = $("#volumeout");
const unitOutA = $("#unitouta");//  Unit type for area
const unitOutV = $("#unitoutv");// Unit type for area
const powA = $("#powouta")// Power output for area
const powV = $("#powoutv")// Power output for volume
let unit = "centimeters";
let shape = "rectangular prism";
let area = 0;
let volume = 0;

// When the buttons are clicked
$("#calcarea").on("click",calculateArea);
volumeBtn.click(calculateVolume);

// When the selects are changed
shapeType.on("change",changeShape);
unitType.on("change",changeUnit);

// Calculates the area dependant on the shape
function calculateArea(){
  if(shape == "rectangular prism"){
    let l = lengthIn.val();// Length
    let h = heightIn.val();// Height
    let w = widthIn.val();// Width
    area = 2*((w*l)+(h*l)+(h*w));
    }
  else if(shape == "sphere"){
    let r = widthIn.val();// Radius
    area = 4*3.14159*(Math.pow(r,2));
    }
  else if(shape == "cylinder")
  {
    let r = widthIn.val();// Radius
    let h = heightIn.val();// Height
    area = (2*(3.1415*r*h))+(2*(3.1415*(Math.pow(r,2))));
    }
    else if(shape == "cone"){
      let r = widthIn.val();// Radius
      let h = heightIn.val();// Height
      area = (3.14159*r)*(r+h);
      }
      else if(shape == "cube"){
        let a = widthIn.val();// Edge
        area = 6*(Math.pow(a,2));
        }
       else if(shape == "hexahedron"){
          let l = lengthIn.val();// Length
          let w = widthIn.val();// Width
          let h = heightIn.val();// Height
          area = 2*((l*w)+(w*h)+(h*l));
          }
          else if(shape == "hemishere")
          {
            let r = widthIn.val();// Radius
            area = 3*3.14159*(Math.pow(r,2));
            }

            else if(shape == "circle")
            {
              let r = widthIn.val();// Radius
              area = 3.14159*(Math.pow(r,2));
              }
              else if(shape == "triangle"){
                let r = widthIn.val();// Radius
                let h = heightIn.val();// Height
                area = (0.5*(r*h));
                }
                else if(shape == "square"){
                  let a = widthIn.val();// Radius
                  area = Math.pow(a,2);
                  }
                  else if(shape == "ellipse")
                  {
                    let a = widthIn.val();//Length A
                    let b = heightIn.val();//Length B
                    area = (3.14159*(a*b));
                    }
                    else if(shape == "parallelogram")
                    {
                      let b = widthIn.val();//Base
                      let h = heightIn.val();//Height
                      area = (b*h);
                      }
     
  else{
      console.log("Could not find a shape");
  }
  displayArea();
}

// Calculates the volume dependant on the shape
function calculateVolume()
{
  if(shape == "rectangular prism")
  {
    w = widthIn.val();
    h = heightIn.val();
    l = lengthIn.val();
    volume = w*h*l;
  }
  else if(shape == "sphere")
  {
    r = widthIn.val();
    volume = ((4/3)*3.1415)*Math.pow(r,3);
  }
  else if(shape == "cylinder"){
    r = widthIn.val();
    h = heightIn.val();
    volume = (3.1415*Math.pow(r,2));
  }
  else if(shape == "cone"){
    r = widthIn.val();
    h = heightIn.val();
    volume = ((1/3)*3.14*Math.pow(r,r)*h);
  }
  else if(shape == "cube"){
    a = widthIn.val();
    volume = (a*a*a);
  }
else if(shape == "hexahedron"){
    w = widthIn.val();
    h = heightIn.val();
    l = lengthIn.val();
    volume = w*h*l;
  }
  else if(shape == "hemishere"){
    r = widthIn.val();
    volume = 2*3.1415*Math.pow(r,2);
  }
  displayVolume();
}

// Changes the shape, which will affect calculations
function changeShape(){
  shape = shapeType.val();
  switch(shape){
    case "rectangular prism":
      lengthIn.slideDown();
      heightIn.slideDown();
      widthIn.slideDown();
      lengthIn.attr("placeholder","Length");
      heightIn.attr("placeholder","Height");
      widthIn.attr("placeholder","Width");
      break;
      
    case "sphere":
      lengthIn.slideUp();
      heightIn.slideUp();
      widthIn.slideDown();
      widthIn.attr("placeholder","Radius");
      break;
      
      case "cylinder":
      lengthIn.slideUp();
      heightIn.slideDown();
      widthIn.slideDown();
      heightIn.attr("placeholder","Height");
      widthIn.attr("placeholder","Radius");
      break;

      case "cone":
      lengthIn.slideUp();
      heightIn.slideDown();
      widthIn.slideDown();
      heightIn.attr("placeholder","Height");
      widthIn.attr("placeholder","Radius");
      break;

      case "cube":
      lengthIn.slideUp();
      heightIn.slideUp();
      widthIn.slideDown();
      widthIn.attr("placeholder","Radius");
      break;

      case "hexahedron":
      lengthIn.slideDown();
      heightIn.slideDown();
      widthIn.slideDown();
      lengthIn.attr("placeholder","Length");
      heightIn.attr("placeholder","Height");
      widthIn.attr("placeholder","Width");
      break;

      case "hemishere":
        lengthIn.slideUp();
        heightIn.slideUp();
        widthIn.slideDown();
        widthIn.attr("placeholder","Radius");
        break;

      case "circle":
          lengthIn.slideUp();
          heightIn.slideUp();
          widthIn.slideDown();
          widthIn.attr("placeholder","Radius");
          break;

         case "triangle":
          lengthIn.slideUp();
          heightIn.slideDown();
          widthIn.slideDown();
          heightIn.attr("placeholder","Base");
          widthIn.attr("placeholder","Height");
          break;
      case "square":
            lengthIn.slideUp();
            heightIn.slideUp();
            widthIn.slideDown();
            widthIn.attr("placeholder","Sides");
            break;
     case "ellipse":
      lengthIn.slideUp();
      heightIn.slideDown();
      widthIn.slideDown();
      heightIn.attr("placeholder","Length A");
      widthIn.attr("placeholder","Length B");
      break;
   case "parallelogram":
      lengthIn.slideUp();
      heightIn.slideDown();
      widthIn.slideDown();
      heightIn.attr("placeholder","base");
      widthIn.attr("placeholder","vertical height");
      break;
            

    default:
      console.log("Could not find Select option for '"+shape+"'.");
      break;
  }
}

// Changes the unit type depending on what the user selects
function changeUnit(){
  unit = unitType.val();
}

function displayArea(){
  area = area.toFixed(2);
  areaOut.text("Area: "+area);
  if(unit == "centimeters")unitOutA.text("cm");
  else if(unit == "meters")unitOutA.text("m");
  else if(unit == "kilometers")unitOutA.text("km");
  else if(unit == "inches")unitOutA.text('"');
  else if(unit == "feet")unitOutA.text("'");
  else if(unit == "yards")unitOutA.text("yd");
  else if(unit == "miles")unitOutA.text("mi");
  else console.log("Could not find Unit");
  powA.text("2");
}

function displayVolume(){
  volume = volume.toFixed(2);
  volumeOut.text("Volume: "+volume);
  if(unit == "centimeters")unitOutV.text("cm");
  else if(unit == "meters")unitOutV.text("m");
  else if(unit == "kilometers")unitOutV.text("km");
  else if(unit == "inches")unitOutV.text('"');
  else if(unit == "feet")unitOutV.text("'");
  else if(unit == "yards")unitOutV.text("yd");
  else if(unit == "miles")unitOutV.text("mi");
  else console.log("Could not find Unit");
  powV.text("3");
}