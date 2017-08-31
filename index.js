function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div div div div.target');
}

function increaseRankBy(n){
  var nList = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < nList.length; i++){
    nList[i].textContent = parseInt(nList[i].textContent, 10) + n ;
  }
  return nList
}

function deepestChild() {
  let deep = document.getElementById('grand-node');
  let next = deep.children[0];

  while (next){
    deep = next;
    next = deep.children[0];
  }
  return deep;
}
