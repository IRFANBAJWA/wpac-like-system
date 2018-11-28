<?php
/**
 * Total Post like Dislike Summary
 */
function wpac_post_total_likedislike_widget() {
    wp_add_dashboard_widget(
            'wpac-post-view-summary', // Widget slug.
            __('Post Like/Dislike Summary', 'wpacademy-likedisklike'), // Title.
            'ptmp_montly_sales_dashboard_widget' // Display function.
    );
}
add_action('wp_dashboard_setup', 'wpac_post_total_likedislike_widget');

function ptmp_montly_sales_dashboard_widget(){
   $totallike = wpac_total_count_likes();
   $totaldislike = wpac_total_count_dislikes();

   echo  $totallike;
   echo  $totaldislike;
   echo '	<div id="myChart"></div>';

}