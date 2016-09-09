customProperties:"formComponent:true",
dataSource:"db:/svy_sample/contacts",
encapsulation:60,
initialSort:"c_name_full asc",
items:[
{
anchors:11,
dataProviderID:"email_1",
horizontalAlignment:2,
location:"46,70",
placeholderText:"Email",
selectOnEnter:true,
size:"155,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"0E2ED274-B71D-4A21-831A-263D60E78980"
},
{
json:{
faclass:"fa-location-arrow fa-2x",
location:{
x:12,
y:127
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,127",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"1782F390-1BB5-40B3-B06C-A96AEB0FE496"
},
{
height:370,
partType:5,
typeid:19,
uuid:"20E63882-5F19-4B72-B753-4E9EDCC352E3"
},
{
anchors:11,
dataProviderID:"phone_1",
location:"46,250",
placeholderText:"Phone Number",
size:"155,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"28788AB9-3E1E-484C-9EB6-829B3DD5746C"
},
{
anchors:11,
displayType:9,
editable:false,
location:"12,370",
name:"goImage",
size:"189,154",
typeid:4,
uuid:"297B129A-B4B3-414E-BC73-AA940537B93C",
visible:false
},
{
json:{
faclass:"fa-mobile fa-2x",
location:{
x:12,
y:290
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,290",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"33FE023C-2509-4CCB-855E-7820B99B068E"
},
{
anchors:11,
dataProviderID:"linkedin_1",
location:"46,330",
placeholderText:"Linkedin Profile",
size:"155,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"5C5773CE-A14F-46A1-966E-93FF0BD03D31"
},
{
json:{
faclass:"fa-envelope fa-2x",
location:{
x:12,
y:70
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,70",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"6A580117-47C7-4C4E-BBA5-6D5EADFF5E84"
},
{
dataProviderID:"contacts_to_addresses$type1.zipcode",
location:"46,160",
placeholderText:"Zip Code",
size:"117,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"8911F72F-F22F-4C9E-B0B4-DE6A99D7D3EC"
},
{
anchors:11,
dataProviderID:"contacts_to_addresses$type1.countrie_id",
location:"46,200",
placeholderText:"Country",
selectOnEnter:true,
size:"155,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"8CC4621F-DFF5-4550-B45D-BD9351C97C35",
valuelistID:"FE094231-B296-4C9E-89F0-72FE8ACBB5D9"
},
{
json:{
faclass:"fa-phone fa-2x",
location:{
x:12,
y:250
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,250",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"997CB1A1-65BD-4AB2-AD00-3CD60E90D9D6"
},
{
json:{
faclass:"fa-linkedin fa-2x",
location:{
x:12,
y:330
},
size:{
height:23,
width:23
},
styleclass:"fa-icon-orange"
},
location:"12,330",
size:"23,23",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"B53105E3-E7E6-40B3-8FE5-E683A72A0705"
},
{
anchors:11,
location:"0,0",
size:"212,33",
styleClass:"infotitle",
text:"Personal Information",
transparent:true,
typeid:7,
uuid:"B6EC7F8B-E0A1-4CE0-A562-20BF47375883"
},
{
anchors:11,
dataProviderID:"phone_3",
location:"46,290",
placeholderText:"Mobile Number",
size:"155,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"B9A5FB27-DAA6-4FC4-A1F8-D6E5EF1D8197"
},
{
anchors:11,
dataProviderID:"contacts_to_addresses$type1.city",
location:"168,160",
placeholderText:"City",
size:"33,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"D4CB5AA3-2133-4E25-A773-29721A40BB95"
},
{
anchors:11,
foreground:"#808080",
lineSize:1,
location:"0,50",
size:"212,1",
typeid:21,
uuid:"DC8EF0E2-9B5E-4A89-9266-17ECB1A11ED5"
},
{
anchors:11,
dataProviderID:"contacts_to_addresses$type1.line_1",
location:"46,120",
placeholderText:"Street Name",
size:"155,30",
styleClass:"field-placeholder-left field-no-border",
typeid:4,
uuid:"E6C0B05B-A5F3-4ECC-A9CB-7B71856580DE"
}
],
name:"frm_contact$infoPersonal",
scrollbars:36,
showInMenu:true,
size:"212,600",
styleClass:"sc-contact-details-mobile full-height",
titleText:"titleText\tDEFAULT",
typeid:3,
uuid:"6C36822F-BCE9-4558-8A7F-C9CCCE41D601"