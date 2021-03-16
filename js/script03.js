// JavaScript Document

$(function() {
	$( "#Dialog1" ).dialog({
		autoOpen: false,
		show:{
			effect: "blind",
			duration: 1000
		},
		hide:{
			effect: "explode",
			duration: 1000
		},
		modal: true,
		buttons: {
			"Aceptar": function(){
				$("#opener").html("Mostrar DW (cookies)");
				$(this).dialog("close");
			},
			"Cancelar":function(){
				$(this).dialog("close");
			}
		}
	}); 
	$("#opener").on("click", function(){
		$("#Dialog1").dialog("open");
	});
	$( "#Tabs1" ).tabs({
		event: "mouseover"
	}); 
	
	$( "#Progressbar1" ).progressbar({
		value: 50
	}); 
	$( "#Slider1" ).slider({
		value: 75,
		slide: updateProgress,
		change: updateProgress
	}); 
	
	function updateProgress(){
		var valor = $( "#Slider1" ).slider("value");
		$( "#Progressbar1" ).progressbar({
			value: valor
		});
	}
});
