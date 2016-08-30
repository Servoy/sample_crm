customProperties:"formComponent:false",
dataSource:"db:/svy_sample/users",
encapsulation:60,
items:[
{
height:270,
partType:5,
typeid:19,
uuid:"0CAE7F4D-63B1-4924-8EF0-259C7400F127"
},
{
borderType:"LineBorder,1,#d6dbd6",
dataProviderID:"username",
location:"15,224",
size:"337,25",
styleClass:"field-profile",
transparent:true,
typeid:4,
uuid:"1CD7AB7F-0A91-4DD6-9195-51A138D55F2E"
},
{
formIndex:2,
location:"15,203",
styleClass:"label-fieldLabel",
text:"Username:",
transparent:true,
typeid:7,
uuid:"20DAB754-DA76-483E-B2E7-B1A498FD0B57"
},
{
json:{
faclass:"fa-pencil fa-2x",
location:{
x:216,
y:135
},
onActionMethodID:"C6579050-9255-4BE6-8F4D-2A30DEE634A7",
size:{
height:23,
width:28
},
styleclass:"fa-icon-orange"
},
location:"216,135",
size:"28,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"86A913C5-DD06-4D2E-97C2-829341E60D9B"
},
{
anchors:3,
formIndex:1,
json:{
anchors:3,
enabled:true,
faclass:"fa-times fa-2x",
location:{
x:334,
y:1
},
onActionMethodID:"F14EA076-8EED-45A2-96F1-D6FFF1610DC7",
size:{
height:30,
width:30
},
styleclass:"faCloseDialog"
},
location:"334,1",
name:"btn_close",
size:"30,30",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"A091AB95-DD91-40B4-A8D9-6F122CA4CBD8"
},
{
borderType:"LineBorder,1,#d6dbd6",
dataProviderID:"name_full",
location:"15,173",
onDataChangeMethodID:"2505821E-27C8-43B2-8140-73AD48B3FC05",
size:"337,25",
styleClass:"field-profile",
transparent:true,
typeid:4,
uuid:"A29F57C7-413D-4A38-9E5E-F30AA5B6FA57"
},
{
horizontalAlignment:0,
location:"7,3",
size:"355,25",
text:"Profile",
transparent:true,
typeid:7,
uuid:"A775DE18-7740-4608-8B7E-C7BD480975E0"
},
{
json:{
alternateImage:"A568EE86-91F1-4BDE-BEA2-6444E262D4E9",
dataProviderID:"profile_photo",
location:{
x:124,
y:38
},
size:{
height:120,
width:120
},
styleClass:"imgCircleProfilePopup",
tabSeq:3
},
location:"124,38",
size:"120,120",
typeName:"servoysample-sc-Image",
typeid:47,
uuid:"DDE52D6E-7D9A-4B34-B5FE-C1C2DC63F5A1"
},
{
formIndex:2,
location:"15,152",
styleClass:"label-fieldLabel",
text:"Name:",
transparent:true,
typeid:7,
uuid:"E25B35A9-98D8-402C-A72C-7D5889AC377F"
},
{
background:"#f8f8f8",
height:33,
partType:2,
typeid:19,
uuid:"F4DC1C13-79CB-4038-9B16-B1912432ADB6"
}
],
name:"userProfile",
navigatorID:"-1",
scrollbars:36,
showInMenu:true,
size:"367,297",
typeid:3,
uuid:"82D74BF7-AEBC-4F8B-9E3E-27DD7D37D02D"