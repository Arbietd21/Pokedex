let pokemonRepository=function(){let t=[];function e(e){t.push(e)}function n(){return t}function o(t){pokemonRepository.loadDetails(t).then(function(){var e;let n,o,i,a,r,l,s,c;e=t,n=$(".modal-body"),$(".modal-header"),o=$(".modal-title"),i=$("#modal-container"),o.empty(),n.empty(),a=$(`<h1>${e.name}</h1>`),(r=$("<img class='modal-img'>")).attr("src",e.imageUrlFront),(l=$("<img class='modal-img'>")).attr("src",e.imageUrlBack),s=$(`<p>Height: ${e.height}</p>`),c=$(`<p>Weight: ${e.weight}</p>`),o.append(a),n.append(r),n.append(l),n.append(s),n.append(c),i.on("click",function(){i.addClass("modal(close)")})})}return{getAll:n,add:e,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),i=document.createElement("li");i.classList.add("list-group-item");let a=document.createElement("button");a.innerText=e.name,a.classList.add("btn-primary"),a.classList.add("btn"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#modal-container"),i.appendChild(a),n.appendChild(i),a.addEventListener("click",function(t){o(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrlFront=t.sprites.front_default,e.imageUrlBack=t.sprites.back_default,e.height=t.height,e.types=t.types,e.weight=t.weight}).catch(function(t){console.error(t)})},showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});