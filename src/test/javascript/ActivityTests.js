jQuery(document).ready(function() {

	module("Activity creation and parsing");

	
	test("Activity: Create with no objects", function() {

		var entryNode = $activity.create("My Activity");

		equals( toString(entryNode), '<entry xmlns="http://www.w3.org/2005/Atom"><title>My Activity</title><verb xmlns="http://activitystrea.ms/spec/1.0/">http://activitystrea.ms/schema/1.0/post</verb></entry>');
	});

	test("Activity: Create with objects", function() {

		var statusNode = $activity.object.status({status: "My Status"});
		var entryNode = $activity.create("My Activity", [statusNode, statusNode]);

		equals( toString(entryNode), '<entry xmlns="http://www.w3.org/2005/Atom"><title>My Activity</title><verb xmlns="http://activitystrea.ms/spec/1.0/">http://activitystrea.ms/schema/1.0/post</verb><object xmlns="http://activitystrea.ms/spec/1.0/"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/status</object-type><content type="text/plain" xmlns="http://www.w3.org/2005/Atom">My Status</content></object></entry>');
	});


	test("Activity: Parse activity with no objects and all fields", function() {

		var entryNode = toDom('<entry xmlns="http://www.w3.org/2005/Atom" xmlns:activity="http://activitystrea.ms/spec/1.0/"><title>My Activity</title><id>testing</id><published>2003-12-13T18:30:02Z</published><activity:verb>http://activitystrea.ms/schema/1.0/post</activity:verb><activity:actor xmlns="http://www.w3.org/2005/Atom"><name>friend</name><uri>friend@example.com/home</uri></activity:actor></entry>');

		var activity = $activity.parse( entryNode );
		
		equals( activity.id, "testing" );
		equals( activity.title, "My Activity" );
		equals( activity.published, "2003-12-13T18:30:02Z" );
		equals( activity.verb, "http://activitystrea.ms/schema/1.0/post" );
		equals( activity.name, "friend" );
		equals( activity.jid, "friend@example.com/home" );
		equals( activity.objects.length, 0 );
	});

	test("Activity: Parse activity with no objects and no fields", function() {

		var entryNode = toDom('<entry xmlns="http://www.w3.org/2005/Atom" xmlns:activity="http://activitystrea.ms/spec/1.0/"></entry>');

		var activity = $activity.parse( entryNode );
		
		equals( activity.id, "" );
		equals( activity.title, "" );
		equals( activity.published, "" );
		equals( activity.verb, "" );
		equals( activity.name, "" );
		equals( activity.jid, "" );
		equals( activity.objects.length, 0 );
	});


	test("Activity: Parse activity with objects", function() {

		var entryNode = toDom('<entry xmlns="http://www.w3.org/2005/Atom"><title>My Activity</title><verb xmlns="http://activitystrea.ms/spec/1.0/">http://activitystrea.ms/schema/1.0/post</verb><object xmlns="http://activitystrea.ms/spec/1.0/"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/status</object-type><content type="text/plain" xmlns="http://www.w3.org/2005/Atom">My Status</content></object><object xmlns="http://activitystrea.ms/spec/1.0/"><object-type xmlns="http://activitystrea.ms/spec/1.0/">http://onesocialweb.org/spec/1.0/object/status</object-type><content type="text/plain" xmlns="http://www.w3.org/2005/Atom">My Status</content></object></entry>');

		var activity = $activity.parse( entryNode );

		equals( activity.objects.length, 2 );
	});

});
