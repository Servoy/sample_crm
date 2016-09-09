customProperties:"formComponent:true",
dataSource:"db:/svy_sample/contacts",
encapsulation:60,
initialSort:"c_name_full asc",
items:[
{
anchors:11,
dataProviderID:"c_job_company",
editable:false,
fontType:"Helvetica Neue,0,14,Dialog",
horizontalAlignment:0,
location:"46,215",
placeholderText:"Company",
selectOnEnter:true,
size:"189,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"0F21C76E-B68B-433D-B637-5A9BF5EAF742"
},
{
json:{
faclass:"fa-building fa-2x",
location:{
x:12,
y:215
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,215",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"6AF70202-4C37-4223-ABE8-8E2FB8944F73"
},
{
anchors:11,
dataProviderID:"c_name_full",
editable:false,
fontType:"Helvetica Neue,0,14,Dialog",
horizontalAlignment:0,
location:"46,175",
placeholderText:"Full name",
size:"189,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"7FA94C24-BC05-4D4D-9D29-C85D3E809535"
},
{
height:256,
partType:5,
typeid:19,
uuid:"86997047-3ECD-4294-8F8E-4606110FE505"
},
{
json:{
faclass:"fa-user fa-2x",
location:{
x:12,
y:174
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,174",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"B00F28B5-7C90-40EF-AD57-BDC0C6297235"
},
{
anchors:11,
json:{
anchors:11,
containedForm:{
formcomponent_1:{
containedForm:{
DeleteButton:{

},
editButton:{

},
favicon:{

}
}
},
svy_form:"42AACE66-2067-4E5E-82B1-F52E56FBEA8A"
},
location:{
x:0,
y:0
},
size:{
height:165,
width:235
}
},
location:"0,0",
name:"formcomponent_1",
size:"235,165",
typeName:"servoycore-formcomponent",
typeid:47,
uuid:"DC2DFE03-3AE5-42FA-819C-7A5F51179203"
}
],
name:"frm_contact$infoSummary",
scrollbars:36,
showInMenu:true,
size:"235,256",
styleClass:"sc-contact-details-mobile full-height",
titleText:"titleText\tDEFAULT",
typeid:3,
uuid:"1BE720F4-524E-4DA4-AEAE-5B227D9FFE85"