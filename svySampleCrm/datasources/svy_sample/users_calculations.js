/**
 * @properties={type:12,typeid:36,uuid:"DD888CB0-C717-4E55-A064-3B266D1F1651"}
 */
 function name_full()
 {
 	var array = []
 	if(name_first) {
 		array.push(utils.stringTrim(name_first))
 	}
 	if(name_middle) {
 		array.push(utils.stringTrim(name_middle))
 	}
 	if(name_last) {
 		array.push(utils.stringTrim(name_last))
 	}

 	if(array.length == 0){
 		return username;
 	}
 	return array.join(' ');
 }
