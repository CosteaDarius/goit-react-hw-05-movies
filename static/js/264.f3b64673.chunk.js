"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{98:(e,a,t)=>{t.d(a,{BC:()=>d,RZ:()=>r,g4:()=>n,ib:()=>o,q8:()=>l});var s=t(213);const i="96ecd8b7c0780c44b55f1aa303bc0edc",c="https://api.themoviedb.org/3",r=async()=>(await s.A.get(`${c}/trending/movie/day?api_key=${i}`)).data.results,d=async e=>(await s.A.get(`${c}/movie/${e}?api_key=${i}`)).data,o=async e=>(await s.A.get(`${c}/movie/${e}/credits?api_key=${i}`)).data.cast,n=async e=>(await s.A.get(`${c}/movie/${e}/reviews?api_key=${i}`)).data.results,l=async e=>(await s.A.get(`${c}/search/movie?api_key=${i}&query=${e}`)).data.results},264:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var s=t(43),i=t(98),c=t(287),r=t(579);const d=()=>{const[e,a]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(0,i.RZ)().then(a)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Trending Movies \ud83c\udfa5"}),(0,r.jsx)(c.A,{movies:e})]})}},287:(e,a,t)=>{t.d(a,{A:()=>c});t(43);var s=t(675),i=t(579);const c=e=>{let{movies:a}=e;return(0,i.jsx)("div",{className:"movie-list",children:a.map((e=>(0,i.jsx)("div",{className:"movie-card",children:(0,i.jsxs)(s.N_,{to:`/movies/${e.id}`,children:[(0,i.jsx)("img",{src:e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"/placeholder.png",alt:e.title}),(0,i.jsx)("div",{className:"movie-info",children:(0,i.jsx)("h3",{children:e.title})})]})},e.id)))})}}}]);
//# sourceMappingURL=264.f3b64673.chunk.js.map