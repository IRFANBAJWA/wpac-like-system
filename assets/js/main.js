
function wpac_btn_position_select(){
    var currentval = jQuery("#btnPosition").val();
    if(currentval == 3) {
        jQuery(".wpac-short-code-notice").show();
    } else {
        jQuery(".wpac-short-code-notice").hide();
    }

}
if(wpac_pie.like !== "" && wpac_pie.dislike !==""){

var myConfig = {
    "type":"pie",
    "title":{
      "text": wpac_pie.date
    },
    "series":[
      {"values":[wpac_pie.like]},
      {"values":[wpac_pie.dislike]}
    ]
  };
  jQuery(document).ready(function() {
    zingchart.render({ 
        id : 'myChart', 
        data : myConfig, 
        height: 400, 
        width: "100%" 
    });
 });

}