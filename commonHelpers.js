import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const p=new URLSearchParams({key:"44778676-049b64250b69e7d3e774d3724",image_type:"photo",orientation:"horizontal",safesearch:"true"});function h(r){return fetch(`https://pixabay.com/api?q=${r}&${p}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(r){const t=document.querySelector(".gallery");t.innerHTML="",r.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"red",position:"topRight"});const s=r.map(({webformatURL:a,tags:e,likes:o,views:i,comments:m,downloads:u,largeImageURL:f})=>`<li class="gallery-item">
  <a class="gallery-link" href=${f} onclick="event.preventDefault()">
    <img
      class="gallery-image"
      src=${a}
      alt=${e} /></a>
      <div class="list-info">
      <ul class="info-items">
  <li class="item-info">
    <h3  class="item-title">Likes</h3>
    <p class="item-text">${o}</p>
  </li>
  <li class="item-info">
    <h3 class="item-title">Views</h3>
    <p class="item-text">${i}</p>
  </li>
  <li class="item-info">
    <h3 class="item-title">Comments</h3>
    <p class="item-text">${m}</p>
  </li>
  <li class="item-info">
    <h3 class="item-title">Downloads</h3>
    <p class="item-text">${u}</p>
  </li>
</ul>
      </div>
</li>`).join("");t.insertAdjacentHTML("beforeend",s)}const n=document.querySelector(".js-form");document.querySelector(".js-list");const c=document.querySelector(".js-loader");n.addEventListener("submit",y);function y(r){r.preventDefault();const t=n.elements.search.value.toLowerCase().trim();if(t==="")return l.show({message:"Please enter your request.",messageColor:"#fff",backgroundColor:"red",position:"topRight"});c.classList.add("loader"),h(t).then(s=>{g(s.hits),b.refresh()}).catch(L()).finally(()=>{n.reset(),c.classList.remove("loader")})}let b=new d(".gallery a",{captions:!0,captionType:"attr",captionPosition:"bottom",captionDelay:250,captionsData:"alt"});function L(){l.show({message:"Something went wrong, please try again",messageColor:"#fff",backgroundColor:"red",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
