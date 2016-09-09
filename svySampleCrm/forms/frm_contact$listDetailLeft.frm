dataSource:"db:/svy_sample/contacts",
encapsulation:60,
initialSort:"c_name_full asc",
items:[
{
anchors:11,
dataProviderID:"c_job_company",
editable:false,
location:"90,60",
size:"24,20",
styleClass:"field-no-border",
transparent:true,
typeid:4,
uuid:"0AE7876F-B3FF-4538-97C3-25BA54E31554"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"c_favorite_icon",
displayType:9,
editable:false,
location:"129,35",
size:"16,16",
transparent:true,
typeid:4,
uuid:"18C0A9A9-1586-4327-BA4E-309DE12D1AFC"
},
{
anchors:15,
json:{
anchors:15,
dataProviderID:"searchValue",
foundset:{
dataproviders:{
dp0:null
},
foundsetSelector:"db:/svy_sample/contacts",
loadAllRecords:true
},
label:"Search contactperson",
location:{
x:37,
y:0
},
noResult OnActionMethodID:"FE556F81-FE1E-4047-808B-908C98FFB4FA",
noResultOnActionMethodID:"FE556F81-FE1E-4047-808B-908C98FFB4FA",
noResultText:"No Result found",
noResultonActionMethodID:"AEC08934-6826-43C0-98AD-8D05F7988E6A",
onActionMethodID:"1DD7DF65-F9D5-4A8C-A51D-BA3850ED2A8F",
size:{
height:20,
width:82
},
valuelistID:"8C58D921-28F1-4815-AA6A-707B47BF121D",
visible:true
},
location:"37,0",
name:"fldSearchbar",
size:"82,20",
typeName:"servoysample-sc-Searchbar",
typeid:47,
uuid:"294C5B1B-7B9B-453A-AF75-8AFEED817FDA"
},
{
anchors:11,
dataProviderID:"c_name_full",
editable:false,
location:"80,39",
size:"35,20",
styleClass:"field-no-border",
transparent:true,
typeid:4,
uuid:"497E3892-7EFF-43D3-9776-E7B7FF0A46FE"
},
{
json:{
faclass:"fa-plus fa-2x",
location:{
x:6,
y:3
},
onAction:"395DDB28-FDA2-4689-BE19-2DE812658BE4",
onActionMethodID:"395DDB28-FDA2-4689-BE19-2DE812658BE4",
size:{
height:28,
width:28
},
styleclass:"fa-icon-orange"
},
location:"6,3",
name:"fa_Icon_2",
size:"28,28",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"5101F2C6-166F-4485-95EF-6251F41923DA"
},
{
json:{
alternateImage:"792C2B4E-CD47-4B80-B02D-D21A70931F63",
dataProviderID:"image",
location:{
x:5,
y:35
},
size:{
height:65,
width:65
},
styleClass:"imgCircleDisplayEditPopup field-no-border",
visible:true
},
location:"5,35",
name:"fldImage",
size:"65,65",
typeName:"servoysample-sc-Image",
typeid:47,
uuid:"6B606AF8-E9AE-48EC-AB93-5FBE8C5BCB53"
},
{
height:106,
partType:5,
typeid:19,
uuid:"6B7DEA5C-ACA0-458B-BB0A-B21BCADDA5E3"
},
{
anchors:3,
json:{
anchors:3,
faclass:"fa-table fa-2x",
location:{
x:120,
y:4
},
onAction:"F41176D3-E46A-4C77-8FED-1772A9AD07FD",
onActionMethodID:"F41176D3-E46A-4C77-8FED-1772A9AD07FD",
size:{
height:28,
width:28
},
styleclass:"fa-icon-orange"
},
location:"120,4",
name:"fa_Icon_1",
size:"28,28",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"989AF2B7-A0D4-46C2-AAF6-C1BB5C0A2F30"
},
{
height:32,
partType:2,
typeid:19,
uuid:"C5670AB6-0636-4005-B5BD-8F1FB0E9B1DE"
}
],
name:"frm_contact$listDetailLeft",
scrollbars:34,
showInMenu:true,
size:"148,106",
styleClass:"form-contact-list bs-full-height",
transparent:true,
typeid:3,
uuid:"960B0CDD-751C-410B-A2CD-31E4D7EFC5CC",
view:1