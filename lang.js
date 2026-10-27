(function(){
  var l;
  try{l=localStorage.getItem('mk_lang')}catch(e){}
  if(l!=='de'&&l!=='en'){l=(navigator.language||'de').slice(0,2)==='de'?'de':'en'}
  document.documentElement.lang=l;
  window.toggleLang=function(){
    l=l==='de'?'en':'de';document.documentElement.lang=l;
    try{localStorage.setItem('mk_lang',l)}catch(e){}
  };
})();
