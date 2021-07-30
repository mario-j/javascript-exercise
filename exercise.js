var inputOne= [{"id": 1, "name": "Alice", "score": 60}, {"id": 2, "name": "Bob", "score": 50}, {"id": 1, "name": "Alice", "score": 50}, {"id": 3, "name": "", "score": 100}, {"id": 4, "name": "Bob", "score": 60}, {"name": "Bob", "score": 90}, {"id": 5, "name": "Charles", "score": 51}, {"id": 5, "name": "Charles", "score": 99}]

var inputTwo = [{"id": 1, "name": "Alice", "score": 60}, {"id": 4, "name": "Bob", "score": 60}, {"id": 5, "name": "Charles", "score": 51}]

function cleanObjArray(objArray) {
	var sorted = objArray.sort(compare); 
	var filtered = sorted.filter(filterConditions);
	var removedDups = filtered.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id && t.name===v.name))===i);
	return removedDups;
}

function filterConditions(obj) {
	return (obj.hasOwnProperty('id') && obj.hasOwnProperty('name') && obj.hasOwnProperty('score')) 
		&& (obj.id && obj.name && obj.score) 
		&& (obj.score > 50);
}

function compare( a, b ) {
  if ( a.score > b.score ){
    return -1;
  }
  if ( a.score < b.score ){
    return 1;
  }
  return 0;
}


console.log("Example Input 1", cleanObjArray(inputOne));
console.log("Example Input 2", cleanObjArray(inputTwo));