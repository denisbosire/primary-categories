# primary-categories
 
run 'npm install'

then 'npn start'

I decided to use JS to build this plugin, another way would have been to register the metabox in php then use ajax to get the data, then use 'update_post_meta', I decided to use REST API.

## Primary Category Posts Block
This block displays posts from a primary category, added a SelectControl in the InspectoControl to select the primary category to be displayed.

I fetched the meta value, then cross referenced them with categories, then used wp_localize to send the data to JS. I needed to acces the WP_Terms object.

This is a dynamic block

## Show posts in primary category
~~I've created a shortcode (I know it's 2021) to display posts in primary category. Here's the shortcode [primaryposts].~~

The Primary Category Posts block now supports category selection. You no longer need the shortcode.



## How to test
Create multiple posts, add several categories & save.
Refresh the page & now you can select a primary category, add this to the posts just created.

This is saved in meta key _primary_category

To test on custom post type, make sure you've added support for 'custom-fields' or you'll get errors. (primary posts block doesn't work with this yet)


## Possible improvements:
~~I'm aware that there are several improvements I could make, for instance, add an inspector control to select which primary category to display in the post block, number of posts etc.~~

Add a disabled option on the category selector, currently only works if you have more than two primary categories to choose from
Perhaps add a custom post type selector to support CPTs.

Add CSS styles
