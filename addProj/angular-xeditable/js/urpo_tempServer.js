
var GET_USER = function() {
	return URPO_USERLIST;
};

var GET_LASTUPDATE = function() {
	return LASTUPDATELIST;
};

var POST_LASTUPDATE = function(data) {
	var id = Number(data.project_id);
	//console.log(id);
	if(data.project_id == undefined) {
		console.log('project_id missing');
		return;
	}

	if (typeof(id) != typeof(234)) {
		console.log('project_id need to be a valid number');
		return('project_id need to be a valid number');
	}

	if(data.edit_state == undefined) {
		console.log('edit_state is undefined');
		return('edit_state is undefined');
	} else if (data.edit_state.add_or_edit == undefined) {
		console.log('add_or_edit is undefined');
		return('add_or_edit is undefined');
	} else if (data.edit_state.edit_person == undefined) {
		console.log('edit_person undefined');
		return('edit_person undefined');
	} else if (data.edit_state.edit_column == undefined) {
		console.log('edit_column is undefined');
		return('edit_column is undefined');
	}

	if(data.edit_state.length != undefined) {
		console.log('edit_state should only contain one object. you have length: ' + data.edit_state.length);
		return('edit_state should only contain one object. you have length: ' + data.edit_state.length);
	}

	if(data.edit_state.add_or_edit != "add" && data.edit_state.add_or_edit != "edit") {
		console.log('edit_state.add_or_edit must equal "add" or  "edit"');
		return('edit_state.add_or_edit must equal "add" or  "edit"');
	}

	LASTUPDATELIST.push(data);
	console.log('success');
	return data;
}

var GET_PM = function() {
	return PMLIST;
}

var GET_DRAFTLIST = function(){
	return DRAFTLIST;
}

var POST_DRAFTLIST = function(obj){
	//console.log(obj);

	var list = ["Category","Dept","Project_Name","Project_Description","Edit_Date","Project_Owners","Region","Institution","Competence","Project_Owners","Principal_Investigators","edit_state","file_system","memo"];

	for ( var i in list ){
		console.log(i);
		if ( !(list[i] in obj) ){
			console.log("Error: Your DRAFT don't have '" + list[i] + "' column");
			return "Error: Your DRAFT don't have '" + list[i] + "' column";
		}
	}

	for ( var i in obj["edit_state"]){
		if ( obj["edit_state"][i].add_or_edit != "add" && obj["edit_state"][i].add_or_edit != "edit"){
			console.log('Your DRAFT: edit_state.add_or_edit must equal "add" or  "edit"');
			return('Your DRAFT: edit_state.add_or_edit must equal "add" or  "edit"');
		}
		if ( obj["edit_state"][i].edit_person == undefined) {
			console.log('Your DRAFT: edit_person undefined');
			return('Your DRAFT: edit_person undefined');
		}
		if ( obj["edit_state"][i].edit_column == undefined) {
			console.log('Your DRAFT: edit_column undefined');
			return('Your DRAFT: edit_column undefined');
		}
	}

	DRAFTLIST.push(obj);
	console.log("success");
	return obj;
}

var GET_PROJECTLIST = function(){
	return PROJECTLIST;
}

var POST_PROJECTLIST = function(obj){
	//console.log(obj);

	var list = ["Category","Dept","Project_Name","Project_Description","Estimated_Start_Date","Estimated_End_Date","Region","Institution","Competence","Collaboration_Model","Project_Agreement_Status","Currency","Cash_Funding","Project_Owners","Principal_Investigators","Milestone","edit_state","file_system","memo"];

	//console.log(PROJECTLIST.length);

	for ( var i in list ){
		//console.log(i);
		if ( !(list[i] in obj) ){
			console.log("Error: Your PROJECT don't have '" + list[i] + "' column");
			return "Error: Your PROJECT don't have '" + list[i] + "' column";
		}
	}

	obj["id"] = String(PROJECTLIST.length);

	while( obj["id"].length != 5 ){
		obj["id"] = "0" + obj["id"];
	}

	for ( var i in obj["edit_state"]){
		if ( obj["edit_state"][i].add_or_edit != "add" && obj["edit_state"][i].add_or_edit != "edit"){
			console.log('Your PROJECT: edit_state.add_or_edit must equal "add" or  "edit"');
			return('Your PROJECT: edit_state.add_or_edit must equal "add" or  "edit"');
		}
		if ( obj["edit_state"][i].edit_person == undefined) {
			console.log('Your PROJECT: edit_person undefined');
			return('Your PROJECT: edit_person undefined');
		}
		if ( obj["edit_state"][i].edit_column == undefined) {
			console.log('Your PROJECT: edit_column undefined');
			return('Your PROJECT: edit_column undefined');
		}
	}

	//console.log(obj["id"]);

	PROJECTLIST.push(obj);
	console.log("success");
	return obj;
}