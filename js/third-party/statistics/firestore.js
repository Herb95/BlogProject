firebase.initializeApp({apiKey:CONFIG.firestore.apiKey,projectId:CONFIG.firestore.projectId});(function(){const n=(o,n)=>{return o.get().then(e=>{let t=e.exists?e.data().count:0;if(n){t++;o.set({count:t})}return t})};const e=firebase.firestore();const r=e.collection(CONFIG.firestore.collection);document.addEventListener("page:loaded",()=>{if(CONFIG.page.isPost){const t=document.querySelector(".post-title").textContent.trim();const o=r.doc(t);let e=CONFIG.hostname===location.hostname;if(localStorage.getItem(t)){e=false}else{localStorage.setItem(t,true)}n(o,e).then(e=>{document.querySelector(".firestore-visitors-count").innerText=e})}else if(CONFIG.page.isHome){const e=[...document.querySelectorAll(".post-title")].map(e=>{const t=e.textContent.trim();const o=r.doc(t);return n(o)});Promise.all(e).then(e=>{const o=document.querySelectorAll(".firestore-visitors-count");e.forEach((e,t)=>{o[t].innerText=e})})}})})();