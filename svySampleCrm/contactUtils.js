
/**
 * @enum 
 * @properties={typeid:35,uuid:"C4B6EDE6-1D1D-4973-8688-A6D34695C8FD",variableType:-4}
 */
var contactViewForm = {
	DETAIL: 'form_contact$content',
	CARD: 'frm_contact$cardBoard'
}
/**
 * @param {JSImage} file
 * @return {JSImage}
 * 
 * @properties={typeid:24,uuid:"81D2AA8D-9ED3-43C1-ADB8-E3159734DA9A"}
 */
function resizeImageRatio(file) {
	var imageToConvert = plugins.images.getImage(file)
	var maxWidth = 140;
	var maxHeight = 140;
	var ratio = 0;
	var width = imageToConvert.getWidth();
	var height = imageToConvert.getHeight();

	// Check if the current width is larger than the max
	if (width > maxWidth) {
		ratio = maxWidth / width;
		imageToConvert = imageToConvert.resize(maxWidth, (height * ratio));
		height = height * ratio;
		width = width * ratio;
	}

	if (height > maxHeight) {
		ratio = maxHeight / height;
		imageToConvert = imageToConvert.resize( (width * ratio), maxHeight);
		height = height * ratio;
		width = width * ratio;
	}
	
	return imageToConvert
}

/**
 * @param {String} fullName
 * @return {{firstName: String, middleName: String, lastName: String}}
 * 
 * @properties={typeid:24,uuid:"93E51D5A-F833-40C0-BA44-7641DB3EE13A"}
 */
function splitContactFullName(fullName) {
	/**@type {{firstName: String, middleName: String, lastName: String}} */
	var obj = {}
	var split = fullName.split(' ');
	if (split.length > 2) {
		obj.firstName = utils.stringInitCap(split.shift());
		obj.lastName = utils.stringInitCap(split.pop());
		obj.middleName = split.join(' ');
	} else if (split.length > 1) {
		obj.firstName = utils.stringInitCap(split.shift());
		obj.lastName = utils.stringInitCap(split.pop());
		obj.middleName = '';
	} else {
		obj.firstName = '';
		obj.lastName = utils.stringInitCap(split.pop());
		obj.middleName = '';
	}
	return obj
}
