'use strict'

function clicky(){
    $('#arrow').on('click', function(event){
        event.preventDefault();
        console.log('hello');
        $('#infoContainer').slideUp();
    });
}

let pageLoad = function(){
    $('.barLink').on('click', function(event){
        var linkAttr = $(this).attr("href");
        console.log(linkAttr + " was clicked")
        $(linkAttr).siblings().hide();
        $(linkAttr).show();
    })
    $('#logo').on('click', function (event){
        var linkAttr = $(this).attr("href");
        console.log(linkAttr + " was clicked")
        $('#home').show();
        $('#home').siblings().hide();
    })
  }

$(document).ready(function(){
    console.log("Page is loaded");
    $('#home').siblings().hide();
    clicky();
    pageLoad(); 
  });
