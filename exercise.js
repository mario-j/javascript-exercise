//Exercise 1

var exampleInput = [{"id": 1, "name": "Alice", "score": 60}, {"id": 2, "name": "Bob", "score": 50}, {"id": 1, "name": "Alice", "score": 50}, {"id": 3, "name": "", "score": 100}, {"id": 4, "name": "Bob", "score": 60}, {"name": "Bob", "score": 90}, {"id": 5, "name": "Charles", "score": 51}]

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

console.log("Exercise 1 Test Input 1", cleanObjArray(exampleInput));

//Exercise 2
function scoreFunction(type, id, score) {
	var scoreArray = [{"id": 1, "score": 1}, { "id": 2, "score": 2}];
	switch(type) {
		case "create":
			var newId = Math.max.apply(Math, scoreArray.map(function(o) { return o.id; })) + 1;
			var objToAdd = { id: newId, score: score };
			scoreArray.push(objToAdd);
			return scoreArray;
			break;
		case "read":
			return scoreArray.filter(x => x.id == id)[0];
			break;
		case "update":
			return scoreArray.map(function (o) { if (o.id == id) { o.score = score; } return o});
			break;
		case "delete":
			return scoreArray.filter(x => x.id != id);
			break;
		default:
			return scoreArray;
	}
}
 
console.log("Exercise 2 Test Input 1 (Create)", scoreFunction("create", null, 3));

console.log("Exercise 2 Test Input 2 (Read)", scoreFunction("read", 2, null));

console.log("Exercise 2 Test Input 3 (Update)", scoreFunction("update", 2, 3));

console.log("Exercise 2 Test Input 4 (Delete)", scoreFunction("delete", 2, null));


