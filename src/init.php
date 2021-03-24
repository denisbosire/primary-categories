<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function primary_categories_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'primary_categories-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'primary_categories-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'primary_categories-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
	
	/*
	* Get _primary_categories, get categories, then only show categories that are also primary categories
	*/
	
	global $wpdb;
	$meta_key = '_primary_category';

	$data = $wpdb->get_results($wpdb->prepare( "SELECT DISTINCT meta_value FROM $wpdb->postmeta WHERE meta_key = %s", $meta_key) , ARRAY_N  );

	$result = [];
	$metaVar = [];
	foreach($data as $key => $value){
		$metaVar[] = $value[0];	
	}
	$splitVars = [];
	$splitVars = implode(',',$metaVar);
	//print_r($splitVars);
	$output_categories = array();
	$output_categories = get_categories(array(
		'orderby' => 'name',
		'include' => $splitVars,
	)
	);
	$myVars = $output_categories;

	

		
	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'primary_categories-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			'myVar' => $myVars,
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'pc/primary-posts', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'primary_categories-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'primary_categories-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'primary_categories-cgb-block-editor-css',
			//use Callback for dynamic block
			'render_callback' => 'primary_posts',
			'attributes'      => array(
				'newCategory' => array(
					'type' => 'number',
					'default' => '',
				),
			)
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'primary_categories_cgb_block_assets' );

//Add Metabox
function myprefix_register_meta() {
    register_meta('post', '_primary_category', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
        'sanitize_callback' => 'sanitize_text_field',
        'auth_callback' => function() { 
            return current_user_can('edit_posts');
        }
    ));
}
add_action('init', 'myprefix_register_meta');

function myprefix_add_meta_box() {
    add_meta_box( 
        'myprefix_post_options_metabox', 
        'Post Options', 
        'myprefix_post_options_metabox_html', 
        'post', //remember to add CPT support
        'normal', 
        'default',
        array('__back_compat_meta_box' => true)
    );
}


//Create shortcode to show posts with primary category
function primary_posts($attributes){
	$primaryCat = $attributes['newCategory'];
	$args = array(
		'post_type' => 'post',
		'meta_query' => array(
			//'relation' => 'AND',
			array(
				'key' => '_primary_category',
				'value' => array($primaryCat)),
				'compare' => 'IN', // optional
			),
		),
	);
	$myQuery = new WP_Query($args);
	$html = '';
	if ($myQuery->have_posts()) :
		while ($myQuery->have_posts()) : $myQuery->the_post();
			echo '<li class="post-item"><a href='.get_the_permalink().'>'.get_the_title().'</a></li>';
			
		endwhile;
	endif;
	//return $html;
}
