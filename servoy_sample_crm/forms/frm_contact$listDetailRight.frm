customProperties:"formComponent:false",
dataSource:"db:/svy_sample/contacts",
encapsulation:60,
initialSort:"c_name_full asc",
items:[
{
anchors:3,
groupID:"grpNormal",
horizontalAlignment:0,
imageMediaID:"F5164CBD-0FBC-476A-A4CC-65038DE944D8",
location:"853,1",
name:"btnDelete",
onActionMethodID:"7F3C6F55-C3F9-4560-AB74-42C45D2EAB33",
showClick:false,
showFocus:false,
size:"32,32",
transparent:true,
typeid:7,
uuid:"0202FC51-F800-411E-A242-BBC752A86C1C"
},
{
location:"59,315",
size:"317,20",
styleClass:"infotitle",
text:"Personal Information",
transparent:true,
typeid:7,
uuid:"05751AA9-B416-4456-AFDC-8182D8ED9EB8"
},
{
foreground:"#808080",
lineSize:1,
location:"468,359",
size:"378,1",
typeid:21,
uuid:"0E7A7891-5573-4DC1-AD03-C1451CB47A45"
},
{
dataProviderID:"c_name_full",
editable:false,
location:"266,201",
placeholderText:"Full name",
size:"366,26",
styleClass:"sc-contact-detail-field",
typeid:4,
uuid:"115F225A-4A7B-4641-BE41-B13EC04C5285"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"c_favorite_icon",
displayType:9,
editable:false,
location:"806,38",
name:"favicon",
onActionMethodID:"7ABBDAE3-EECF-49D7-A4DE-344E0FFEF590",
size:"32,32",
transparent:true,
typeid:4,
uuid:"18E31F25-1984-4F7D-A297-84297B48F8DA"
},
{
json:{
faclass:"fa-linkedin fa-2x",
location:{
x:481,
y:588
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"481,588",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"25303579-2717-4145-894C-61C3DB6FD821"
},
{
dataProviderID:"contacts_to_addresses$type1.line_1",
editable:false,
location:"63,418",
placeholderText:"Street Name",
size:"323,20",
styleClass:"sc-contact-detail-address",
typeid:4,
uuid:"271CDE5B-D7EE-4900-A3F2-5BFE0E29C380"
},
{
json:{
faclass:"fa-envelope fa-2x",
location:{
x:482,
y:375
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"482,375",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"2931E315-91FD-4D1B-87E9-FCF09DB9AA3F"
},
{
dataProviderID:"contacts_to_addresses$type2.zipcode",
editable:false,
location:"521,445",
placeholderText:"Zip Code",
selectOnEnter:true,
size:"111,20",
styleClass:"sc-contact-detail-company-zipcode",
typeid:4,
uuid:"293622AF-FC3B-493C-BA5E-C3504977CD5B"
},
{
json:{
faclass:"fa-info-circle fa-2x",
location:{
x:481,
y:517
},
size:{
height:23,
width:49
},
styleclass:"sc-contact-envelope-icons"
},
location:"481,517",
size:"49,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"32033AF8-9626-45D4-BBD8-8025BAA8B6B3"
},
{
json:{
faclass:"fa-envelope fa-2x",
location:{
x:27,
y:374
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"27,374",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"3B50E714-E609-4F7D-A7C1-382523DCDAB8"
},
{
json:{
faclass:"fa-linkedin fa-2x",
location:{
x:29,
y:585
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"29,585",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"3EBDAC90-B02F-4956-B4B2-36D4044164F8"
},
{
dataProviderID:"c_job_company",
editable:false,
location:"265,239",
placeholderText:"Company",
selectOnEnter:true,
size:"369,30",
styleClass:"sc-contact-detail-field",
typeid:4,
uuid:"435C0812-9BF5-4314-9D45-2DE74764645D"
},
{
height:822,
partType:5,
typeid:19,
uuid:"44F0FDEF-A2CF-4756-8B4C-4AA54696484F"
},
{
json:{
anchors:0,
apiKey:"AIzaSyCBdY4vrndAD52OwBg1OpfReqe8xumQaTs",
location:{
x:1,
y:625
},
size:{
height:198,
width:887
}
},
location:"1,625",
name:"googleMaps",
size:"887,198",
typeName:"svygooglemaps-map",
typeid:47,
uuid:"4BF8A084-64C9-49B3-818B-C4A1AB3777CC"
},
{
dataProviderID:"contacts_to_addresses$type1.city",
editable:false,
location:"61,469",
placeholderText:"Country",
selectOnEnter:true,
size:"325,20",
styleClass:"sc-contact-detail-company-country",
typeid:4,
uuid:"4E83FDEF-92F7-4651-92CD-A4AD60BAEAAD",
valuelistID:"FE094231-B296-4C9E-89F0-72FE8ACBB5D9"
},
{
json:{
faclass:"fa-phone fa-2x",
location:{
x:480,
y:555
},
size:{
height:23,
width:41
},
styleclass:"sc-contact-envelope-icons"
},
location:"480,555",
size:"41,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"5C550CEA-BDE1-478B-861F-9374423D290B"
},
{
foreground:"#808080",
lineSize:1,
location:"15,358",
size:"378,1",
typeid:21,
uuid:"5EB37D80-667D-4BD2-A73C-A3C71FD74CBE"
},
{
dataProviderID:"contacts_to_addresses$type1.zipcode",
editable:false,
location:"62,445",
placeholderText:"Zip Code",
size:"117,20",
styleClass:"sc-contact-detail-zipcode",
typeid:4,
uuid:"6EF900C0-C685-489A-9589-FC831F7759C0"
},
{
json:{
faclass:"fa-user fa-2x",
location:{
x:231,
y:201
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"231,201",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"6F4B8259-EE3B-48B2-BB23-B68D4A0D97DF"
},
{
json:{
faclass:"fa-location-arrow fa-2x",
location:{
x:28,
y:425
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"28,425",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"7A1C0B91-774B-4586-9604-EBE17B4B156E"
},
{
dataProviderID:"contacts_to_addresses$type2.city",
editable:false,
location:"637,444",
placeholderText:"CIty",
size:"200,20",
styleClass:"sc-contact-detail-company-city",
typeid:4,
uuid:"7A892B70-7346-4092-A992-ACB22D813544"
},
{
dataProviderID:"linkedin_2",
editable:false,
location:"517,595",
placeholderText:"Linkedin Profile",
size:"319,20",
styleClass:"sc-contact-detail-company-linkedin",
typeid:4,
uuid:"847DE87A-6128-4E8D-805E-FF89C36CD3D3"
},
{
json:{
faclass:"fa-phone fa-2x",
location:{
x:28,
y:518
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"28,518",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"86CC9083-555E-45FA-B786-BC2837383C39"
},
{
dataProviderID:"phone_1",
editable:false,
location:"63,520",
placeholderText:"Phone Number",
size:"323,20",
styleClass:"sc-contact-detail-phone",
typeid:4,
uuid:"8A952145-3F2E-4A1F-AF46-AC4445D41BF8"
},
{
dataProviderID:"contacts_to_addresses$type1.city",
editable:false,
location:"521,469",
placeholderText:"Country",
selectOnEnter:true,
size:"316,20",
styleClass:"sc-contact-detail-company-country",
typeid:4,
uuid:"981DD0F1-7AEC-44B0-9623-9065C5A67C02"
},
{
anchors:3,
groupID:"grpNormal",
horizontalAlignment:0,
imageMediaID:"66BF16DE-39F2-4F82-948E-2E3F90376697",
location:"821,1",
name:"btnEdit",
onActionMethodID:"10D679FD-34C2-4484-ACF5-3602C3F57A49",
showClick:false,
showFocus:false,
size:"32,32",
transparent:true,
typeid:7,
uuid:"9DCB0B82-E6B2-4ED8-9758-224B612B48CD"
},
{
dataProviderID:"phone_3",
editable:false,
location:"63,557",
placeholderText:"Mobile Number",
size:"323,20",
styleClass:"sc-contact-detail-mobile",
typeid:4,
uuid:"A1DCB46E-8D6D-4091-9407-268B6F9D90D0"
},
{
json:{
faclass:"fa-mobile fa-2x",
location:{
x:33,
y:553
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"33,553",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"B20F4F4B-6F2B-4B65-ADCC-5276A000F626"
},
{
dataProviderID:"phone_2",
editable:false,
location:"516,559",
placeholderText:"Phone Number",
size:"322,20",
styleClass:"sc-contact-detail-company-phone",
typeid:4,
uuid:"B2F7A471-AA6F-4574-A486-1A707A3F4156"
},
{
dataProviderID:"email_2",
editable:false,
location:"521,380",
placeholderText:"Email",
size:"316,20",
styleClass:"sc-contact-detail-company-email",
typeid:4,
uuid:"B4B39DD4-F52C-45AF-9C32-91EACAEAED2D"
},
{
location:"512,308",
size:"329,33",
styleClass:"infotitle",
text:"Company information",
transparent:true,
typeid:7,
uuid:"B68A36DA-45CE-4968-BACB-41519615A575"
},
{
dataProviderID:"website",
editable:false,
location:"518,520",
placeholderText:"Website",
size:"320,20",
styleClass:"sc-contact-detail-company-website",
typeid:4,
uuid:"B8A16866-595B-4AD2-871A-280684AB248D"
},
{
json:{
faclass:"fa-building fa-2x",
location:{
x:230,
y:241
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"230,241",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"C36EDE9F-A7B6-482A-8A6D-F9DDDE789688"
},
{
dataProviderID:"email_1",
editable:false,
horizontalAlignment:2,
location:"63,380",
placeholderText:"Email",
selectOnEnter:true,
size:"323,20",
styleClass:"sc-contact-detail-email",
typeid:4,
uuid:"C9D705E1-6A20-42FF-9064-00E7B696B971"
},
{
json:{
alternateImage:"A568EE86-91F1-4BDE-BEA2-6444E262D4E9",
dataProviderID:"image",
location:{
x:376,
y:51
},
size:{
height:118,
width:117
},
styleClass:"imgCircleDisplayEditPopup"
},
location:"376,51",
size:"117,118",
typeName:"servoysample-sc-Image",
typeid:47,
uuid:"CA2D8218-FF90-485B-80A4-356AB0BAEDFC"
},
{
json:{
faclass:"fa-location-arrow fa-2x",
location:{
x:484,
y:425
},
size:{
height:23,
width:42
},
styleclass:"sc-contact-envelope-icons"
},
location:"484,425",
size:"42,23",
typeName:"svyfontawesome-fa-Icon",
typeid:47,
uuid:"CAAC5B13-911A-434C-8025-CA0135326B81"
},
{
dataProviderID:"linkedin_1",
editable:false,
location:"61,592",
placeholderText:"Linkedin Profile",
size:"325,20",
styleClass:"sc-contact-detail-linkedin",
typeid:4,
uuid:"D1F8E6DB-0461-4BD2-B65F-EA199CE00730"
},
{
dataProviderID:"contacts_to_addresses$type2.line_1",
editable:false,
location:"521,418",
placeholderText:"Street Name",
selectOnEnter:true,
size:"315,20",
styleClass:"sc-contact-company-address",
typeid:4,
uuid:"D2FCFC99-6137-4B78-94CB-2467557D312B"
},
{
dataProviderID:"contacts_to_addresses$type1.city",
editable:false,
location:"185,445",
placeholderText:"City",
size:"201,20",
styleClass:"sc-contact-detail-city",
typeid:4,
uuid:"FBBF70E9-CB53-4EB7-ADE0-9606A10D03C5"
}
],
name:"frm_contact$listDetailRight",
scrollbars:36,
showInMenu:true,
size:"886,822",
styleClass:"sc-contact-details-mobile",
titleText:"titleText\tDEFAULT",
typeid:3,
uuid:"BD4AECA2-241E-45BC-863F-ABED0EFE834E"