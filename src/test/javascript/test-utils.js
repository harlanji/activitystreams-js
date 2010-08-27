// test utilities... ignore IE since it is meant to run in Rhino+EnvJS.

function toString(node) {
	var s = new XMLSerializer();  
	return s.serializeToString(node)
}

function toDom(string) {
    var parser = new DOMParser();
    return parser.parseFromString(string, "text/xml").documentElement;
}

