(function (root) {
	"use strict";
	var Tone;
	//constructs the main Tone object
	function mainModule(func){
		Tone = func();
	}
	//invokes each of the modules with the main Tone object as the argument
	function toneModule(func){
		func(Tone);
	}
	