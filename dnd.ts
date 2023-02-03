var alignment: any[]= [];
var _classes: any[]=[];
console.log("has started")
const apiClasses='https://www.dnd5eapi.co/api/classes/?results';
const apiAlignment='https://www.dnd5eapi.co/api/alignments/?results';
const getOptions = async function() {
    //Alignment
  const alignRes = await fetch(apiAlignment);
  const align= await alignRes.json();
  console.log(align);
  align.results.map((element: any)=>{
    alignment.push(element)
  })
  const alignmentOptions= document.querySelector("#alignmentSelect");
  for(let i=0;i<alignment.length;i++){
    var option=new Option(alignment[i].name);
    option.value=alignment[i].name;
    option.text=alignment[i].name;
    alignmentOptions?.appendChild(option);
  }
  //Classes
  const classRes = await fetch(apiClasses);
  const _class= await classRes.json();
  console.log(_class);
  _class.results.map((element: any)=>{
    _classes.push(element)
  })
  const classOptions= document.querySelector("#clsSelect");
  for(let i=0;i<_classes.length;i++){
    console.log(_classes[i].name);
    var option=new Option(_classes[i].name);
    option.value=_classes[i].name;
    option.text=_classes[i].name;
    classOptions?.appendChild(option);
  }
}