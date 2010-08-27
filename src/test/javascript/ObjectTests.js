jQuery(document).ready(function() {

	module("Object creation and parsing");

	test("Status: Create", function() {

		var statusNode = $activity.object.status({
			'status' : 'This is my status',
			'contentType' : 'text/wacky'
		});

		equals( toString(statusNode), '<object xmlns="http://activitystrea.ms/spec/1.0/"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/status</object-type><content type="text/wacky" xmlns="http://www.w3.org/2005/Atom">This is my status</content></object>' );

	});


	test("Status: Parse - All fields present", function() {

		var statusNode = toDom('<object xmlns="http://activitystrea.ms/spec/1.0/" xmlns:atom="http://www.w3.org/2005/Atom"><object-type>http://onesocialweb.org/spec/1.0/object/status</object-type><atom:content type="text/wacky">This is my status</atom:content><atom:published>2003-12-13T18:30:02Z</atom:published></object>');

		var obj = $activity.object.parse( statusNode );

		equals( obj.objectType, "http://onesocialweb.org/spec/1.0/object/status" );
		equals( obj.status, "This is my status" );
		equals( obj.contentType, "text/wacky" );
		equals( obj.published, "2003-12-13T18:30:02Z" );
	});


	test("Status: Parse - All fields missing (no errors)", function() {

		var statusNode = toDom('<object xmlns="http://activitystrea.ms/spec/1.0/" xmlns:atom="http://www.w3.org/2005/Atom"><object-type>http://onesocialweb.org/spec/1.0/object/status</object-type></object>');

		var obj = $activity.object.parse( statusNode );

		equals( obj.objectType, "http://onesocialweb.org/spec/1.0/object/status" );
		equals( obj.status, "" );
		equals( obj.contentType, "text/plain" );
		equals( obj.published, "" );
	});



	test("Photo: Create", function() {

		var photoNode = $activity.object.photo({
			'rel' : 'photo rel',
			'photo' : 'http://example.com/photo.jpg'
		});

		print( toString(photoNode) );

		equals( toString(photoNode), '<object xmlns="http://activitystrea.ms/spec/1.0/"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/photo</object-type><link href="http://example.com/photo.jpg" xmlns="http://www.w3.org/1999/xhtml" rel="photo rel"/></object>' );

	});


	test("Photo: Parse - All fields present", function() {

		var photoNode = toDom('<object xmlns="http://activitystrea.ms/spec/1.0/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:xhtml="http://www.w3.org/1999/xhtml"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/photo</object-type><xhtml:link href="http://example.com/photo.jpg" rel="photo rel"/><atom:published>2003-12-13T18:30:02Z</atom:published></object>');

		var obj = $activity.object.parse( photoNode );

		equals( obj.objectType, "http://onesocialweb.org/spec/1.0/object/photo" );		
		equals( obj.photo, "http://example.com/photo.jpg" );
		equals( obj.rel, "photo rel" );
		equals( obj.published, "2003-12-13T18:30:02Z" );
	});

	test("Photo: Parse - All fields missing (no errors)", function() {

		var photoNode = toDom('<object xmlns="http://activitystrea.ms/spec/1.0/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:xhtml="http://www.w3.org/1999/xhtml"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/photo</object-type></object>');

		var obj = $activity.object.parse( photoNode );

		equals( obj.objectType, "http://onesocialweb.org/spec/1.0/object/photo" );		
		equals( obj.photo, "" );
		equals( obj.rel, "alternate" );
		equals( obj.published, "" );
	});

});
