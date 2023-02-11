var alignment: any[]= [];
var _classes: any[] = [];
var _races: any[] = [];
var races:any[]=[];
var standardArr: number[] = [15,14,13,12,10,8];
console.log("has started")
var testarr: any[] = [];
//API URLs
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

  //Races
  const raceRes = await fetch(apiRaces);
  const race= await raceRes.json();
  console.log(race);
  race.results.map((element: any)=>{
    _races.push(element)
    console.log('race fetch done')
  })
  //TestRace
  console.log('race done');
  const raceOptions = document.querySelector("#racesSelect");
  for (let i = 0; i < _races.length; i++){
    var option = new Option(_races[i].name);
    option.value = _races[i].name;
    option.text = _races[i].name;
    raceOptions?.appendChild(option);
  }
  const testRes = await fetch(apiRacesTest);
  const testing = await testRes.json();
  console.log(testing);
  testing.ability_bonuses.map((element: any) => {
    testarr.push(element)
    console.log(testarr);
  })
  console.log('AB '+testarr[0].bonus);
  console.log(standardArr)
  const asOptions = document.getElementsByClassName("ab-score");
  console.log(asOptions)
  for (let i = 0; i < standardArr.length; i++){
    for (let j = 0; j < standardArr.length; j++){
      
      var opt = new Option(standardArr[j].toString());
      opt.value = standardArr[j].toString();
      opt.text = standardArr[j].toString();
      asOptions[i].appendChild(opt);
    }
    
  }
}


  //RACES
   const raceRes = await fetch(apiRaces);
  const race= await raceRes.json();
  console.log(race);
  race.results.map((element: any)=>{
    races.push(element)
  })
  const raceOptions= document.querySelector("#raceSelect");
  for(let i=0;i<races.length;i++){
    var option=new Option(races[i].name);
    option.value=races[i].name;
    option.text=races[i].name;
    raceOptions?.appendChild(option);
  }
}

interface Character{
  _charName:string;
  _class:string;
  _level:number;
  _playerName:string;
  _race:string;
  _alignment:string;
  _stats:[];
}