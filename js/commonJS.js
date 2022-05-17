
Global_placeholder_img = "../media/upload_placeholder.png";
fabric.textureSize=5000;
var sofa=30+30; //Sofa RElative Size in inch
function dragElement(elmnt) {
    // This Function Make Image Dragable on Room View
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function room_view(img, width, height, frameUrl, inchSize){  
      //This Function Called by Room View button
      let cssScale=(inchSize.height/sofa);
      if(inchSize.height>inchSize.width){
        cssScale=(inchSize.height/sofa);
      }
      else if(inchSize.height<inchSize.width){
        cssScale=(inchSize.width/sofa);
      }
      else{
        cssScale=(inchSize.width/sofa);
      }
    let room_cont = document.getElementById("room-container");
    room_cont.style.display="block";
    let show_img = document.createElement("img");
    show_img.src=img;
    show_img.setAttribute("style","width:"+width+"px; height: "+height+"px; transform: scale("+cssScale+"); cursor:move; position: absolute; left:350px; top: -50px; box-shadow: 1px 1px 10px 2px #808080");
    show_img.setAttribute("id","moveCanvas");
    if(frameUrl){
      show_img.style.border="20px solid transparent";
      show_img.style.borderImage="url("+frameUrl+") 90 round";
    }

    room_cont.appendChild(show_img);

    dragElement(document.getElementById("moveCanvas")); //this calling function make image dragable on room view

    //event listeners to remove old image if user again click room view with new image
    document.getElementById("close_rm").addEventListener("click", function (){
        document.getElementById('room-container').style.display='none';
        show_img.remove();
    });
}
function room_view2(img, width, height, frameUrl, inchSize){ // only difference is: in this there are no shadow  
  //This Function Called by Room View button
  let cssScale=(inchSize.height/sofa);
      if(inchSize.height>inchSize.width){
        cssScale=(inchSize.height/sofa);
      }
      else if(inchSize.height<inchSize.width){
        cssScale=(inchSize.width/sofa);
      }
      else{
        cssScale=(inchSize.width/sofa);
      }
let room_cont = document.getElementById("room-container");
room_cont.style.display="block";
let show_img = document.createElement("img");
show_img.src=img;
show_img.setAttribute("style","width:"+width+"px; height: "+height+"px; transform: scale("+cssScale+"); cursor:move; position: absolute; left:350px; top: -50px;");
show_img.setAttribute("id","moveCanvas");
if(frameUrl){
  show_img.style.border="20px solid transparent";
  show_img.style.borderImage="url("+frameUrl+") 90 round";
}

room_cont.appendChild(show_img);

dragElement(document.getElementById("moveCanvas")); //this calling function make image dragable on room view

//event listeners to remove old image if user again click room view with new image
document.getElementById("close_rm").addEventListener("click", function (){
    document.getElementById('room-container').style.display='none';
    show_img.remove();
});
}

function room_view_round(img, width, height, frameUrl){ // only difference is: in this there are no shadow  
  //This Function Called by Room View button
let room_cont = document.getElementById("room-container");
room_cont.style.display="block";
let show_img = document.createElement("img");
show_img.src=img;
show_img.setAttribute("style","width:"+width+"px; height: "+height+"px; transform: scale(0.5,0.5); cursor:move; position: absolute; left:350px; top: -50px; box-shadow: 1px 1px 10px 2px #808080;border-radius:50%;");
show_img.setAttribute("id","moveCanvas");

room_cont.appendChild(show_img);

dragElement(document.getElementById("moveCanvas")); //this calling function make image dragable on room view

//event listeners to remove old image if user again click room view with new image
document.getElementById("close_rm").addEventListener("click", function (){
    document.getElementById('room-container').style.display='none';
    show_img.remove();
});
}


function coaster_view(img, width, height, inchSize){  
  //Coaster View function
  let cssScale=(inchSize.height/sofa);
  if(inchSize.height>inchSize.width){
    cssScale=(inchSize.height/sofa);
  }
  else if(inchSize.height<inchSize.width){
    cssScale=(inchSize.width/sofa);
  }
  else{
    cssScale=(inchSize.width/sofa);
  }
let room_cont = document.getElementById("room-container");
room_cont.style.display="block";
let show_img = document.createElement("img");
show_img.src=img;
show_img.setAttribute("style","width:"+width+"px; height: "+height+"px; transform: scale("+cssScale+"); cursor:move; position: absolute; left:350px; top: -50px; box-shadow: 1px 1px 10px 2px #808080");
show_img.setAttribute("id","moveCanvas");

room_cont.appendChild(show_img);

dragElement(document.getElementById("moveCanvas")); //this calling function make image dragable on room view

//event listeners to remove old image if user again click room view with new image
document.getElementById("close_rm").addEventListener("click", function (){
    document.getElementById('room-container').style.display='none';
    show_img.remove();
});
}

function pillow_preview(imgFront,imgBack, width, height){  // pillow preview
let room_cont = document.getElementById("room-container");
room_cont.style.display="block";
let show_img = document.createElement("img");
show_img.src=imgFront;
show_img.setAttribute("style","width:"+width+"px; height: "+height+"px; transform: scale(1,1); position: relative; margin-top:10%");
document.getElementById("frontPreview").appendChild(show_img);


let show_img2 = document.createElement("img");
show_img2.src=imgBack;
show_img2.setAttribute("style","width:"+width+"px; height: "+height+"px; -webkit-transform: scaleX(-1); transform: scaleX(-1); position: relative; margin-top:10%");
document.getElementById("backPreview").appendChild(show_img2);

//event listeners to remove old image if user again click room view with new image
document.getElementById("close_rm").addEventListener("click", function (){
    document.getElementById('room-container').style.display='none';
    show_img.remove();
    show_img2.remove();
});
}

function view_3d(ffront, ftop, fbottom, fleft, fright, fwidth, fheight, fdepth, hook='http://canvaseditor.fadsan.com/preview/3d/1607419533_1207441539_hook.png'){
  localStorage.setItem("front", ffront);
  localStorage.setItem("top", ftop);
  localStorage.setItem("bottom", fbottom);
  localStorage.setItem("left", fleft);
  localStorage.setItem("right", fright);
  localStorage.setItem("width", fwidth);
  localStorage.setItem("height", fheight);
  localStorage.setItem("depth", fdepth);
  localStorage.setItem("hook", hook);
  
  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/3d/inspect.html";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}

function view_3d_box(ffront, ftop, fbottom, fleft, fright, fwidth, fheight, fdepth, hook='http://canvaseditor.fadsan.com/preview/3d/1607419533_1207441539_hook.png'){
  localStorage.setItem("front", ffront);
  localStorage.setItem("top", ftop);
  localStorage.setItem("bottom", fbottom);
  localStorage.setItem("left", fleft);
  localStorage.setItem("right", fright);
  localStorage.setItem("width", fwidth);
  localStorage.setItem("height", fheight);
  localStorage.setItem("depth", fdepth);
  localStorage.setItem("hook", hook);
  
  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/3d-box/inspect.html";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}


function view_3d_metal(ffront, ftop, fbottom, fleft, fright, fwidth, fheight, fdepth){
  localStorage.setItem("front", ffront);
  localStorage.setItem("top", ftop);
  localStorage.setItem("bottom", fbottom);
  localStorage.setItem("left", fleft);
  localStorage.setItem("right", fright);
  localStorage.setItem("width", fwidth);
  localStorage.setItem("height", fheight);
  localStorage.setItem("depth", fdepth);
  
  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/3d/metal-3d.html";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}
function acrylic_view_3d(ffront, fwidth, fheight){
  localStorage.setItem("front", ffront);
  localStorage.setItem("width", fwidth);
  localStorage.setItem("height", fheight);
  
  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/acrylic_3d/index.html";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}

function photoblock_view_3d(ffront, fwidth, fheight){
  localStorage.setItem("front", ffront);
  localStorage.setItem("width", fwidth);
  localStorage.setItem("height", fheight);
  
  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/photo-block-3d/index.html";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}

function acrylicPrint_view_3d(ffront, fwidth, fheight){
  localStorage.setItem("front", ffront);
  localStorage.setItem("width", fwidth);
  localStorage.setItem("height", fheight);
  
  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/acrylicPrint_3d/index.html";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}
function mug_3d(ffront,color){
  localStorage.setItem("front", ffront);

  let _3dCont = document.getElementById("3d-container");
  _3dCont.style.display="block";
  let frameElement = document.createElement("iframe");
  frameElement.src = "../preview/mug_3d/mugThree.js.html?mug.json,3000,"+color.slice(1, 7)+",0,0,0";
  frameElement.style.height = "100vh";
  frameElement.style.width = "100%";
  _3dCont.appendChild(frameElement);

  document.getElementById("close_fm").addEventListener("click",function(){
    document.getElementById("3d-container").style.display="none";
    frameElement.remove();
  });
}


let image_data;
async function urlToBinary(url){
  if(url){
    try{
      let blob = await fetch(url).then(r => r.blob());
    let reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
    let base64data = reader.result;
    image_data=base64data;
    return image_data;
    //localStorage.setItem("selected-image",base64data);
    }
  }
    catch(err){
      console.error(err);
    }
  }// Refference https://stackoverflow.com/questions/18650168/convert-blob-to-base64
}


var loadFile = function(event) {
  /* This Funcion Create ImG Element To upload Many IMages on Upload section  */
  var total_file=event.target.files.length;
  for(var i=0;i<total_file;i++)
  {
    let temmp_url=URL.createObjectURL(event.target.files[i]);
    $('#output').append(`<span class="uploaded-img" style="position:relative"><img src='${temmp_url}' draggable='true' ondragstart='drag(event)' onclick='singlePrint.addImageObject(this.src)' style='width:100px; height:100px; padding:5px; margin:5px; border:1px solid #142739;' class='uploaded-image'><a href="#" style="position:absolute; padding:2px; right:0px; background:#FF0000; color:#fff;" onclick="$(this).parent().remove();">&times;</a></span>`);
  }
};


function addText(){
  let oForm= document.getElementById("text-form");
  let text = oForm.elements["text"].value;
  let textStyle = oForm.elements["textStyle"].value;
  let textSize = oForm.elements["textSize"].value;
  let textColor = oForm.elements["textColor"].value;
  let textBold = oForm.elements["textBold"].value;
  let textU = oForm.elements["textU"].checked;
  let textS = oForm.elements["textS"].checked;
  let textAlign = oForm.elements["textAlign"].value;
  let textBgColor = "rgba(0,0,0,0)";
  if(oForm.elements["textBgBool"].checked){
      textBgColor = oForm.elements["textBgColor"].value;
  }
  singlePrint.addText(text, textSize, textStyle, textBold, textU, textS, "rgba(0,0,0,0)", 0, textAlign, textColor, textBgColor );
}
function modifyText(){
  let activeTextObject = singlePrint.state.canvases[0].getActiveObject();
  let oForm= document.getElementById("text-form");
  let text = oForm.elements["text"].value;
  let textStyle = oForm.elements["textStyle"].value;
  let textSize = oForm.elements["textSize"].value;
  let textColor = oForm.elements["textColor"].value;
  let textU = oForm.elements["textU"].checked;
  let textS = oForm.elements["textS"].checked;
  let textAlign = oForm.elements["textAlign"].value;
  let textBgColor = "rgba(0,0,0,0)";
  if(oForm.elements["textBgBool"].checked){
      textBgColor = oForm.elements["textBgColor"].value;
  }
  let textBold = "normal";
  if(oForm.elements["textBold"].checked){
      textBold = oForm.elements["textBold"].value;
  }
  activeTextObject.set({
      text: text,
      fontFamily: textStyle,
      fontSize: textSize,
      fontWeight: textBold,
      underline: textU,
      linethrough: textS,
      textAlign: textAlign,
      fill: textColor,
      textBackgroundColor: textBgColor,
  });
  singlePrint.state.canvases[0].renderAll();
  console.log(textU);
}


function printFontStyles(target){
  let fontStyles=["Adobe Arabic",
  "Adobe Devanagari",
  "Adobe Hebrew",
  "Adobe Ming Std L",
  "Adobe Myungjo Std M",
  "Adobe Song Std L",
  "Agency FB",
  "Aharoni",
  "Aldhabi",
  "Algerian",
  "Andalus",
  "Angsana New",
  "AngsanaUPC",
  "Aparajita",
  "Arabic Typesetting",
  "Arial",
  "Arial Black",
  "Arial Narrow",
  "Arial Rounded MT Bold",
  "Arial Unicode MS",
  "Arjun",
  "Autumn Moon",
  "AvantGarde Bk BT",
  "AvantGarde Md BT",
  "barcode font",
  "Baskerville Old Face",
  "Batang",
  "BatangChe",
  "Bauhaus 93",
  "Beauty",
  "Bell MT",
  "Berlin Sans FB",
  "Berlin Sans FB Demi",
  "Bernard MT Condensed",
  "Billenia Standard",
  "Blackadder ITC",
  "Bodoni MT",
  "Bodoni MT Black",
  "Bodoni MT Condensed",
  "Bodoni MT Poster Compr",
  "Book Antiqua",
  "Bookman Old Style",
  "Bookshelf Symbol 7",
  "Bradley Hand ITC",
  "Britannic Bold",
  "Broadway",
  "Browallia New",
  "BrowalliaUPC",
  "Brush Script MT",
  "Calibri",
  "Calibri Light",
  "Californian FB",
  "Calisto MT",
  "Cambria",
  "Cambria Math",
  "Candara",
  "Castellar",
  "Centaur",
  "Century",
  "Century Gothic",
  "Century Schoolbook",
  "Chiller",
  "Colonna MT",
  "Comic Sans MS",
  "Consolas",
  "Constantia",
  "Cooper Black",
  "Copperplate Gothic Bol",
  "Copperplate Gothic Lig",
  "Corbel",
  "Cordia New",
  "CordiaUPC",
  "Courier New",
  "Curlz MT",
  "DaunPenh",
  "David",
  "Devanagari New",
  "DFKai-SB",
  "DilleniaUPC",
  "DK Honeyguide Caps",
  "DokChampa",
  "Dotum",
  "DotumChe",
  "Ebrima",
  "Edwardian Script ITC",
  "Elephant",
  "endoell",
  "Engravers MT",
  "Eras Bold ITC",
  "Eras Demi ITC",
  "Eras Light ITC",
  "Eras Medium ITC",
  "Estrangelo Edessa",
  "EucrosiaUPC",
  "Euphemia",
  "FangSong",
  "Felix Titling",
  "FontAwesome",
  "Footlight MT Light",
  "Forte",
  "Franklin Gothic Book",
  "Franklin Gothic Demi",
  "Franklin Gothic Demi C",
  "Franklin Gothic Heavy",
  "Franklin Gothic Medium",
  "Franklin Gothic Medium",
  "FrankRuehl",
  "FreesiaUPC",
  "Freestyle Script",
  "French Script MT",
  "Gabriola",
  "Gadugi",
  "Garamond",
  "Gautami",
  "Georgia",
  "Gigi",
  "Gill Sans MT",
  "Gill Sans MT Condensed",
  "Gill Sans MT Ext Conde",
  "Gill Sans Ultra Bold",
  "Gill Sans Ultra Bold C",
  "Gisha",
  "Gloucester MT Extra Co",
  "Goudy Old Style",
  "Goudy Stout",
  "Gulim",
  "GulimChe",
  "Gungsuh",
  "GungsuhChe",
  "Haettenschweiler",
  "Harlow Solid Italic",
  "Harrington",
  "Hermes",
  "High Tower Text",
  "Impact",
  "Imprint MT Shadow",
  "Informal Roman",
  "IrisUPC",
  "Iskoola Pota",
  "JasmineUPC",
  "Javanese Text",
  "Jokerman",
  "Juice ITC",
  "Julietta",
  "KaiTi",
  "Kalinga",
  "Kartika",
  "Kaushan Script",
  "Khmer UI",
  "KodchiangUPC",
  "Kokila",
  "Kozuka Gothic Pr6N B",
  "Kozuka Gothic Pr6N EL",
  "Kozuka Gothic Pr6N H",
  "Kozuka Gothic Pr6N L",
  "Kozuka Gothic Pr6N M",
  "Kozuka Gothic Pr6N R",
  "Kozuka Mincho Pr6N B",
  "Kozuka Mincho Pr6N EL",
  "Kozuka Mincho Pr6N H",
  "Kozuka Mincho Pr6N L",
  "Kozuka Mincho Pr6N M",
  "Kozuka Mincho Pr6N R",
  "Kristen ITC",
  "Kundli",
  "Kundli English",
  "Kunstler Script",
  "Lao UI",
  "Latha",
  "Leelawadee",
  "Leelawadee UI",
  "Leelawadee UI Semiligh",
  "Letter Gothic Std",
  "Levenim MT",
  "LilyUPC",
  "Lobster 1.3",
  "Love The One You're Wi",
  "Lucida Bright",
  "Lucida Calligraphy",
  "Lucida Console",
  "Lucida Fax",
  "Lucida Handwriting",
  "Lucida Sans",
  "Lucida Sans Typewriter",
  "Lucida Sans Unicode",
  "Magneto",
  "Maiandra GD",
  "Malgun Gothic",
  "Mangal",
  "Marlett",
  "Master Works - Demo",
  "Matura MT Script Capit",
  "Meiryo",
  "Meiryo UI",
  "Microsoft Himalaya",
  "Microsoft JhengHei",
  "Microsoft JhengHei Lig",
  "Microsoft JhengHei UI",
  "Microsoft JhengHei UI",
  "Microsoft New Tai Lue",
  "Microsoft PhagsPa",
  "Microsoft Sans Serif",
  "Microsoft Tai Le",
  "Microsoft Uighur",
  "Microsoft YaHei",
  "Microsoft YaHei Light",
  "Microsoft YaHei UI",
  "Microsoft YaHei UI Lig",
  "Microsoft Yi Baiti",
  "MingLiU",
  "MingLiU-ExtB",
  "MingLiU_HKSCS",
  "MingLiU_HKSCS-ExtB",
  "Minion Pro",
  "Miriam",
  "Miriam Fixed",
  "Mistral",
  "Modern No. 20",
  "Mongolian Baiti",
  "Monotype Corsiva",
  "MoolBoran",
  "moonhouse",
  "MS Gothic",
  "MS Mincho",
  "MS Outlook",
  "MS PGothic",
  "MS PMincho",
  "MS Reference Sans Seri",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MV Boli",
  "Myanmar Text",
  "Myriad Hebrew",
  "Myriad Pro",
  "Myriad Pro Cond",
  "Myriad Pro Light",
  "Narkisim",
  "Niagara Engraved",
  "Niagara Solid",
  "Nirmala UI",
  "Nirmala UI Semilight",
  "North to South",
  "NSimSun",
  "Nyala",
  "OCR A Extended",
  "Old English Text MT",
  "Onyx",
  "Palace Script MT",
  "Palatino Linotype",
  "Papyrus",
  "Parchment",
  "Patty",
  "Peak Times",
  "Perpetua",
  "Perpetua Titling MT",
  "Plantagenet Cherokee",
  "Playbill",
  "PMingLiU",
  "PMingLiU-ExtB",
  "Poor Richard",
  "Pristina",
  "Raavi",
  "Rage Italic",
  "Ravie",
  "Rockwell",
  "Rockwell Condensed",
  "Rockwell Extra Bold",
  "Rod",
  "Sakkal Majalla",
  "Script MT Bold",
  "Segoe Print",
  "Segoe Script",
  "Segoe UI",
  "Segoe UI Black",
  "Segoe UI Emoji",
  "Segoe UI Light",
  "Segoe UI Semibold",
  "Segoe UI Semilight",
  "Segoe UI Symbol",
  "Shonar Bangla",
  "Showcard Gothic",
  "Shruti",
  "Shutter Stone Standard",
  "Signup",
  "SimHei",
  "Simplified Arabic",
  "Simplified Arabic Fixe",
  "SimSun",
  "SimSun-ExtB",
  "Sitka Banner",
  "Sitka Display",
  "Sitka Heading",
  "Sitka Small",
  "Sitka Subheading",
  "Sitka Text",
  "Snap ITC",
  "Special Touch",
  "Stencil",
  "Studio Gothic Alternat",
  "Studio Gothic Trial",
  "Super Natural - Demo",
  "Sylfaen",
  "Symbol",
  "Tahoma",
  "TeamViewer15",
  "Tempus Sans ITC",
  "The Blacklist",
  "Times New Roman",
  "Traditional Arabic",
  "Trebuchet MS",
  "Tunga",
  "Tw Cen MT",
  "Tw Cen MT Condensed",
  "Tw Cen MT Condensed Ex",
  "Urdu Typesetting",
  "Utsaah",
  "Vacations in Phuket",
  "Vani",
  "Vaughan Handstylish Fo",
  "Verdana",
  "Vijaya",
  "Viner Hand ITC",
  "Vivaldi",
  "Vladimir Script",
  "Vrinda",
  "Webdings",
  "Wide Latin",
  "Wingdings",
  "Wingdings 2",
  "Wingdings 3",
  "WP Arabic Sihafa",
  "WP ArabicScript Sihafa",
  "WP BoxDrawing",
  "WP CyrillicA",
  "WP CyrillicB",
  "WP Greek Century",
  "WP Greek Courier",
  "WP Greek Helve",
  "WP Hebrew David",
  "WP IconicSymbolsA",
  "WP IconicSymbolsB",
  "WP Japanese",
  "WP MathA",
  "WP MathB",
  "WP MathExtendedA",
  "WP MathExtendedB",
  "WP MultinationalA Cour",
  "WP MultinationalA Helv",
  "WP MultinationalA Roma",
  "WP MultinationalB Cour",
  "WP MultinationalB Helv",
  "WP MultinationalB Roma",
  "WP Phonetic",
  "WP TypographicSymbols",
  "Yu Gothic",
  "Yu Gothic Light",
  "Yu Mincho",
  "Yu Mincho Demibold",
  "Yu Mincho Light"];
  fontStyles.forEach(element => {
    let op = document.createElement("option");
    op.innerHTML=element;
    target.appendChild(op);
  });
}