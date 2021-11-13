
function GetLocalStorage (listname) {
  let people = localStorage.getItem(listname);
  if(people) {
    return JSON.parse(localStorage.getItem(listname));
  }
  else {
    return [];
  }
}

export default GetLocalStorage;