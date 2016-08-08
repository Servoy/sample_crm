/**
 * @properties={type:12,typeid:36,uuid:"1D4BFD4A-1411-48F3-80ED-6D18D4962425"}
 */
function c_job_company()
{
	if(job_title && company) {
		return job_title + ' at ' + company;
	} else if(job_title && !company) {
		return job_title;
	} else {
		return company;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"6A24133D-E584-44F7-A88D-5E309E138E3F"}
 */
function c_name_full()
{
	var result = [];
	if(name_first) {
		result.push(name_first);
	}
	if(name_middle) {
		result.push(name_middle);
	}
	if(name_last) {
		result.push(name_last);
	}
	return result.join(' ');
}
