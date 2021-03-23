const { __ } = wp.i18n; // Import __() from wp.i18n
const { Component, Fragment } = wp.element;
const { withSelect } = wp.data;
const { decodeEntities } = wp.htmlEntities;

import Thumbnail from './thumbnail';

class primaryPosts extends Component {
	render() {
		const { posts } = this.props;

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
				{ primaryCatPosts }
			</Fragment >
		);
	}
}
export default withSelect(
	( select ) => {
		return {
			posts: select( 'core' ).getEntityRecords( 'postType', 'post',
				{
					// Custom args.
					metaKey: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._primary_category, // filter by metadata
                    
				}
			),
		};
	}
)( primaryPosts );

