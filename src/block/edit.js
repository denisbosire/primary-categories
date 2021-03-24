const { __ } = wp.i18n; // Import __() from wp.i18n
const { Component, Fragment } = wp.element;
const { withSelect } = wp.data;
const { decodeEntities } = wp.htmlEntities;
import { PanelBody, PanelRow, Disabled, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

import Thumbnail from './thumbnail';

class primaryPosts extends Component {
	render() {
		const { posts, attributes, setAttributes } = this.props;
		const { newCategory } = attributes;
		const filteredCategories = cgbGlobal.myVar;
		const onChangeCategories = ( newCategory ) => {
			setAttributes( { newCategory } );
		};
		const primaryCatPosts = posts && posts.map( function( post ) {
			return (
				<li className={ 'primary-posts' } key={ post.id } >
					<div className={ 'primary-posts__featured-image' } >
						{ ( undefined !== post.featured_media && 0 !== post.featured_media ) && (
							<Thumbnail
								id={ post.featured_media }
								link={ post.link }
								alt={ post.title.rendered }
								size={ attributes.imageSize } //set image size, should add this setting on the inspeactorControl
							/>
						) }
						<div className={ 'primary-posts__title ' }>
							<h2>
								<a href={ post.link } >
									{ decodeEntities( post.title.rendered ) }
								</a>
							</h2>

						</div>
					</div>
				</li>
			);
		} );
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Select Primary Category" initialOpen={ true }>
						<PanelRow>
							<SelectControl
								label={ __( 'Categories' ) }
								onChange={ onChangeCategories }
								options={ filteredCategories && filteredCategories.map( category => ( { value: category.term_id, label: category.name } ) ) }
								value={ newCategory }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				{ primaryCatPosts }
			</Fragment >
		);
	}
}

export default withSelect(
	( select, props ) => {
		const { attributes } = props;
		const { newCategory } = attributes;
		return {

			posts: select( 'core' ).getEntityRecords( 'postType', 'post', {
				categories: newCategory,
			} ),

		};
	}
)( primaryPosts );
