
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"3C7A0CB6-FC25-48E0-BB7C-8DDFE4592146"}
 */
function onSolutionOpen(arg, queryParams) {
	application.output('!!open!!')
	application.output(arguments)
}

/**
 * @properties={typeid:24,uuid:"D7F290EB-C27F-4C83-B4C4-EF4D1E7756E8"}
 */
function test() {
	application.output('!!test!!')
	application.output(arguments)
}