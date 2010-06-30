(function($activity) {


$activity.NS = {
		'xhtml' : 'http://www.w3.org/1999/xhtml',
		'atom' : 'http://www.w3.org/2005/Atom',
		'activity' : 'http://activitystrea.ms/spec/1.0/',
};




/*
Function: $activity.parse

	Parse an activity from an ATOM entry node. It is such because pubsub has
	multiple namespaces that contain activities--I've encountered /pubsub
	and /pubsub#events.

Parameters:

	entryNode - The ATOM entry node to parse the event from


Returns:

	A JSON replresentation of the activity. 

	: { id, title, published, verb, name, jid, object: [{id, published, objectType, ...}] }


*/

$activity.parse = function(entryNode) {
	var activity;

	$(entryNode).xmlns( $activity.NS, function() {
	
		activity = {
			'id' : this.find("atom|id").text(),
			'title' : this.find("atom|title").text(),
			'published' : this.find("atom|published").text(),

			'verb' : this.find("activity|verb").text(),
			'name' : this.find("activity|actor > atom|name").text(),
			'jid' : this.find("activity|actor > atom|uri").text(),
/*
			// FIXME refactor this to osw code.
			'acl' : this.find("osw|acl-rule").map(function() { 
				return osw.acl.parse(this);
			}),
*/
			'objects' : this.find("activity|object").map(function() { 
				return $activity.object.parse( this );
			}),
		};
	});

	return activity;

}

	/*
	Function: $activity.create
		Create an activity that can be added to a publication or other node. It
		creates it in the context of an ATOM entry node.

	Parameters:
		title - The title of the activity. This is generally the same as an appended 'status' object, but not necessary.
		children - An array of DOM child nodes, generally created by $activity.object.create.

	Example:

		An activity can have multiple objects and ACL rules. This example creates
		a picture with a status caption, and allows everyone except enemies
		to view it.

		: $activity.create( 'Some Activity', [ osw.object.status('Some Activity'), osw.object.picture('http://example.com/picture.jpg' ], [ osw.acl.rule('grant', 'view', 'everyone'), osw.acl.rule('deny', view', 'enemies' ] );

	*/

$activity.create = function(title, children) {
	var builder = $build('entry', {'xmlns': $activity.NS.atom})
		.c('title').t( title ).up()
		.c('verb', {'xmlns': $activity.NS.activity}).t( 'http://activitystrea.ms/schema/1.0/post' ).up();

	if( children ) {
		$.each(children, function(i, child) {
			builder.cnode( child ).up();
		});
	}

	return builder.tree();
}




/*
Class: $activity.object

	A class for creating and paring objects for activities.

*/
$activity.object = {

	'_types' : {},

	/*
		Function: create
			Create an object of any known type and return a DOM node
	*/
	'create' : function(type, fields) {
		return $activity.object._types[ type ].createFn( fields );
	},


	/*
		Function: parse
			TODO

	*/
	'parse' : function(entryNode) {
		var obj;
		$(entryNode).xmlns( $activity.NS, function() {
			obj = {
				'id': this.find("id").text(),
				'published': this.find("atom|published").text(),
				'objectType': this.find("activity|object-type").text()
			}; 

			$activity.object._types[ obj.objectType ].parseFn( this, obj );
		});

		return obj;
	},


	'addType': function(options) {
		$activity.object._types[ options.ns ] = options; 
		$activity.object[ options.type ] = options.createFn;
	}

}




$activity.object.addType({
	'type' : 'status',

	'ns' : 'http://onesocialweb.org/spec/1.0/object/status',

	'createFn' : function(fields) {
		// this could include text/html and other formats. for now, just text.
		fields.contentType = fields.contentType || 'text/plain';

		return $build('object', {'xmlns': $activity.NS.activity})
			.c('object-type', {'xmlns': $activity.NS.activity})
				.t($activity.object.type.status).up()
			.c('content', {xmlns: $activity.NS.atom,type: contentType})
				.t( fields.status ).up()
			.tree();
	},

	'parseFn' : function(objectNode, obj) {
		obj.status = $(objectNode).find("atom|content").text();
	}
});

$activity.object.addType({
	'type' : 'photo',

	'ns' : 'http://onesocialweb.org/spec/1.0/object/photo',

	'createFn' : function(builder, fields) {
		fields.rel = fields.rel || 'alternate';

		return $build('object', {'xmlns': $activity.NS.activity})
			.c('object-type', {'xmlns': $activity.NS.activity})
				.t($activity.object.type.picture).up()
			.c('link', {'xmlns': $activity.NS.xhtml, 'rel': fields.rel, 'href' : fields.photo}).up()
			.tree();
	},

	'parseFn' : function(objectNode, obj) {
		obj.photo = $(objectNode).find("atom|link[rel='alternate']").attr("href");
	}
});



})(window.$activity = {});

