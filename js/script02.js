// JavaScript Document


$(function() {
	$( "#Accordion1" ).accordion({
		collapsible: true, 
		heightStyle: "content"
	}); 
	$( "#Datepicker1" ).datepicker({
      changeMonth: true,
      changeYear: true, minDate: -20, maxDate: "+1M +10D"
    }); 
	
	var paises = ["Peru","Argentina","Chile",
	"Bolivia","Ecuador","Colombia",	"Venezuela",
	"Brasil","Paraguay","Uruaguay"];
	
	$( "#Autocomplete1" ).autocomplete({source : paises}); 
	
	$("#menu").menu();
});