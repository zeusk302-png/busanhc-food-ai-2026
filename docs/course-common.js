'use strict';
window.Lab={
 esc:s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
 download(name,text,type='text/plain;charset=utf-8'){const u=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),3000);},
 links(){return Object.entries(CLASSROOM.courses).map(([k,v])=>`<a href="${v}">${{entry:'엔트리',health:'보건간호',food:'푸드디저트',it:'IT경영'}[k]}</a>`).join(' · ');},
 submit(){return `<section class="section panel"><h2>파일 저장 → 확인 → 전달</h2><ol class="numbered"><li>선생님이 정한 작품 코드를 파일명에 씁니다.</li><li>최종 이미지·영상·기획서를 저장한 뒤 다시 열어봅니다.</li><li>현장에서 선생님이 안내한 방법으로 파일이나 결과물 링크를 전달합니다.</li></ol><a href="classroom.html?v=20261103d">파일 저장·전달 안내 →</a></section>`;},
 mount(title,nav,label='2학년 · 3교시 · 150분'){document.body.innerHTML=`<a class="skip" href="#main">본문으로 이동</a><header class="topbar"><a class="brand" href="#home"><img class="school-emblem" src="assets/brand/busanhc-emblem.gif" alt="부산보건고등학교 교표" width="44" height="44"><span>${title}<small>BUSAN HEALTH HIGH SCHOOL</small></span></a><span class="course-label">${label}</span></header><div class="layout"><aside class="sidebar"><nav aria-label="수업 목차">${nav.map(([id,t],n)=>`<a href="#${id}"><span>${String(n).padStart(2,'0')}</span>${t}</a>`).join('')}</nav><p class="source-link">${this.links()}</p><a class="source-link" href="classroom.html?v=20261103d">파일 저장·전달 →</a><p class="hint">기록은 이 브라우저에 임시 저장됩니다. 파일도 저장하세요.</p></aside><main id="main" tabindex="-1"></main></div><footer class="footer">부산보건고 학생 실습 교재 · 11월 과정</footer><div class="toast" role="status" aria-live="polite"></div>`;},
 toast(s){const el=document.querySelector('.toast');el.textContent=s;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600);},
 async copy(s){try{await navigator.clipboard.writeText(s);this.toast('복사했습니다. AI 입력창에 붙여 넣으세요.');}catch{this.download('프롬프트.txt',s);}},
 heading(n,title,intro){return `<header class="page-title"><div class="eyebrow">STUDENT LAB / ${n}</div><h1>${title}</h1><p class="intro">${intro}</p></header>`;},
 next(id,t){return `<div class="stage-nav"><a class="button" href="#${id}">${t} →</a></div>`;},
 timeline(items){return `<ol class="numbered">${items.map(x=>`<li><b>${x.start}–${x.end}분</b> · ${this.esc(x.activity)}</li>`).join('')}</ol>`;},
 capture(file,caption){return `<figure class="capture"><a href="${file}" target="_blank"><img src="${file}" alt="${this.esc(caption)}" loading="lazy"></a><figcaption>${this.esc(caption)} · 누르면 원본</figcaption></figure>`;}
};
