//below js code
var singlePrint = new CanvasPrint({
    width: 640,
    height: 360,
    depth:	0
},
{
    width: 1280,
    height: 720,
    depth: 0
},
"singlePrint");
singlePrint.drawCanvas("singlePrint");
if(screen.width<600){
    singlePrint.hwSize(8,8);
}

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

//Drag and Drop Functiion
{	
	function allowDrop(ev) {
	  ev.preventDefault();
	}

	function drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.src);
	}

	function drop(ev) {
	  ev.preventDefault();
	  var data = ev.dataTransfer.getData("text");
	  dropImage(data);
	}
	
	//Generate Fabric Image from url
	function dropImage(url){
		singlePrint.addImageObject(url);
	}
}

printFontStyles(document.getElementById("fontOptions"));
function updateEditorTitle(){
    singlePrint.product="Youtube Thumbnail";
    document.getElementById("editorTitle").innerHTML= singlePrint.product;
}
updateEditorTitle();
$("body").dblclick(function(){
  singlePrint.mouseupDeselect();
});

    $( "#roomViewBtn, #roomViewBtn2" ).click(function() {
    tshirt_2Dview(singlePrint.state.canvases[0].toDataURL(), singlePrint.state.canvases[0].width, singlePrint.state.canvases[0].height);
  });
  function tshirt_2Dview(img, width, height){  
    //This Function Called by Room View button
    let Aleft=(screen.width-600)/2;
    if(screen.width<600){
      Aleft=(screen.width-screen.width)/2;
    }
  let room_cont = document.getElementById("room-container");
  room_cont.style.display="block";
  let show_img = document.createElement("img");
  show_img.src=img;
  show_img.setAttribute("style","width:"+width+"px; height: "+height+"px;  ");
  document.getElementById("append_img_here").appendChild(show_img);
  document.getElementById("append_img_here2").src=img;
  document.getElementById("append_img_here3").src=img;
    
  //event listeners to remove old image if user again click room view with new image
  document.getElementById("close_rm").addEventListener("click", function (){
      document.getElementById('room-container').style.display='none';
      show_img.remove();
  });
  }



$("#file").change(function(e){
    singlePrint.addImageObject(URL.createObjectURL(e.target.files[0])); 
    //console.log(URL.createObjectURL(e.target.files[0]));
});
var loadFile = function(event) {
    /* This Funcion Create ImG Element To upload Many IMages on Upload section  */
    var total_file=event.target.files.length;
    for(var i=0;i<total_file;i++)
    {
      let temmp_url=URL.createObjectURL(event.target.files[i]);
      $('#output').append(`<span class="uploaded-img" style="position:relative"><img src='${temmp_url}' draggable='true' ondragstart='drag(event)' onclick='singlePrint.addImageObject(this.src)' style='width:100px; height:100px; padding:5px; margin:5px; border:1px solid #142739;'><a href="#" style="position:absolute; padding:2px; right:0px; background:#FF0000; color:#fff;" onclick="$(this).parent().remove();">&times;</a></span>`);
    }
};

$(document).ready(function(){
    $(".image-filter .product").click(function(){
        $(".image-filter .product").css("border","2px solid transparent");
      $(this).css("border","2px solid #1e3d58");
    });

    $('[data-toggle="tooltip"]').tooltip();

  });

  setInterval(singlePrint.ItextEditing, 500);
  
  //Bold
  document.getElementById("ibold").onchange = function(){
    if(this.checked){
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({fontWeight:'bold'});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='ibold'] i").css("background","#f0f0f0");
    }
    else{
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({fontWeight:''});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='ibold'] i").css("background","");
    }
  }

  //Underline
  document.getElementById("iunderline").onchange = function(){
    if(this.checked){
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({underline:true});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='iunderline'] i").css("background","#f0f0f0");
    }
    else{
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({underline:false});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='iunderline'] i").css("background","");
    }
  }
  
  //Italic
  document.getElementById("iitalic").onchange = function(){
    if(this.checked){
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({fontStyle:'italic'});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='iitalic'] i").css("background","#f0f0f0");
    }
    else{
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({fontStyle:''});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='iitalic'] i").css("background","");
    }
  }

  //StrkieThrough
  document.getElementById("istrike").onchange = function(){
    if(this.checked){
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({linethrough:true});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='istrike'] i").css("background","#f0f0f0");
    }
    else{
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({linethrough:false});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='istrike'] i").css("background","");
    }
  }

  //font Color
  document.getElementById("icolor").onchange = function(){
      let sobj = singlePrint.state.canvases[0].getActiveObject();
      sobj.setSelectionStyles({fill:this.value});
      singlePrint.state.canvases[0].renderAll();
      $("label[for='icolor'] i").css("color",this.value);
      $("label[for='ibackgroundColor'] i").css("color",this.value);
  }

  //font backgroundColor
  document.getElementById("ibackgroundColor").onchange = function(){
    let sobj = singlePrint.state.canvases[0].getActiveObject();
    sobj.setSelectionStyles({textBackgroundColor:this.value});
    singlePrint.state.canvases[0].renderAll();
    $("label[for='ibackgroundColor'] i").css("background-color",this.value);
}

//font Size
document.getElementById("ifontSize").onchange = function(){
  let sobj = singlePrint.state.canvases[0].getActiveObject();
  console.log(this.value);
  sobj.setSelectionStyles({fontSize:this.value});
  singlePrint.state.canvases[0].renderAll();
}

//font Family
document.getElementById("fontOptions").onchange = function(){
  let sobj = singlePrint.state.canvases[0].getActiveObject();
  console.log(this.value);
  sobj.setSelectionStyles({fontFamily:this.value});
  singlePrint.state.canvases[0].renderAll();
}

//text Alignment right
$("input[name='iAlignment']").each(function() {
  console.log( this.value + ":" + this.checked );
});

document.getElementById("istrike").onchange = function(){
  if(this.checked){
    let sobj = singlePrint.state.canvases[0].getActiveObject();
    sobj.setSelectionStyles({linethrough:true});
    singlePrint.state.canvases[0].renderAll();
    $("label[for='istrike'] i").css("background","#f0f0f0");
  }
  else{
    let sobj = singlePrint.state.canvases[0].getActiveObject();
    sobj.setSelectionStyles({linethrough:false});
    singlePrint.state.canvases[0].renderAll();
    $("label[for='istrike'] i").css("background","");
  }
}


$("#delement, #delement2").click(function(){
			var delement = document.createElement('a');
                  delement.setAttribute('href',singlePrint.state.canvases[0].toDataURL());
                  delement.setAttribute('download', "ANVA");
                  document.body.appendChild(delement);
                  delement.click();
})