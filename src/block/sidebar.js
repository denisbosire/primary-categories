import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, Disabled, SelectControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';

let PluginMetaFields = ( props, setAtrributes ) => {
	return (
		<fragment>

			<SelectControl
				label={ __( 'Select Primary Category' ) }
				onChange={ ( value ) => props.onMetaFieldChange( value ) }
				options={ props.categories && props.categories.map( category => ( { value: category.id, label: category.name } ) ) }
				value={ props.primaryCategory }
			/>

		</fragment>
	);
};

/**
 * Returns categories selected in this post
 * Returns metabox value _primary_category
 * use withSelect to get data using REST SidebarJS
 */
PluginMetaFields = withSelect(
	( select ) => {
		return {
			//postType: select('core/editor').getCurrentPostType(),

			primaryCategory: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._primary_category,
			categories: select( 'core' ).getEntityRecords( 'taxonomy', 'category', { post: select( 'core/editor' ).getCurrentPostId() } ),
		};
	}
)( PluginMetaFields );

/**
 * saves custom metabox value
 *
 */
PluginMetaFields = withDispatch(
	( dispatch ) => {
		return {
			onMetaFieldChange: ( value ) => {
				dispatch( 'core/editor' ).editPost( { meta: { _primary_category: value } } );
			},
		};
	}
)( PluginMetaFields );

/**
 * Creates panel for the primary category
 *
 */
const PrimaryCategoriesDemo = () => (
	<PluginDocumentSettingPanel
		name="primary-category-panel"
		title="Primary Category"
		className="primary-category-panel"
	>
		{ PluginMetaFields }
	</PluginDocumentSettingPanel>
);

registerPlugin( 'plugin-document-setting-panel-demo', {
	render: PrimaryCategoriesDemo,
	icon: 'paperclip',
	attributes: {
		category: {
			type: 'string',
		},
	},
} );
