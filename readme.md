# primary-categories
 
run 'npm install'

then 'npn start'

I decided to use JS to build this plugin, another way would have been to register the metabox in php then use ajax to get the data, then use 'update_post_meta', I decided to use REST API anyways.

## Primary Category Block
This block displays posts from a primary category, improvements to be made, add an inspector control for chosing which primary category to display, add support for custom post types another block.
You can view the code in src/block/sidebar.js

## Show posts in primary category
~~ I've created a shortcode (I know it's 2021) to display posts in primary category. Here's the shortcode [primaryposts]. ~~
The Primary Category Posts block now supports category selection. You no longer need the shortcode.

To create a template and display these posts use the code below

		$args = array(
			'meta_query' => array(
				array(
					'key' => '_primary_category',
					'value' => array(1,2,3,4), //primary category shares the same ID as the category
					'compare' => 'IN', // optional
				),
			),
		);
		$myQuery = new WP_Query($args);

		if ($myQuery->have_posts()) {
			while ($myQuery->have_posts()) {
				$myQuery->the_post();
				$html .= '<li class="post-item"><a href='.get_the_permalink().'>'.get_the_title().'</a></li>';
				echo $html;
			}
		}

## How to test
Create a post, add several categories & save.
Refresh the page & now you can select a primary category.

This is saved in metabox with the ID _primary_category

To test on custom post type, make sure you've added support for 'custom-fields' or you'll get errors.


## Possible improvements:
I'm aware that there are several improvements I could make, for instance, add an inspector control to select which primary category to display in the post block, number of posts etc.
