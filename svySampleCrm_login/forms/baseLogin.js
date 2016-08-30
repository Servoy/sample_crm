/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"86CF85BC-7F76-4EF0-A8C7-99E1F1FC250F"}
 */
var username;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B0E0C944-30C2-4A56-B1BB-43B7E64DD89E"}
 */
var password

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB534A33-AE4C-452B-810A-A3DC8834E25F"}
 */
var testDP = ''
/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"291D8FA5-F7FF-47F5-8478-C9C41A7A6E19"}
 */
function login(event) {
	application.output('Output:' +  testDP)
}

/**
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"783093DC-18DB-40EC-867B-9A221107E0A3"}
 */
function onDataChange(oldValue, newValue, event) {
	application.output(newValue)
	application.output(testDP)
	return false;
}
