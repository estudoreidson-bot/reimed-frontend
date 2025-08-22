
export const API_BASE = (localStorage.getItem('API_BASE')||'https://remedy-queimadas-api.onrender.com');

export function token(){ return localStorage.getItem('AUTH_TOKEN')||''; }
export function isAuthed(){ return !!token(); }
export function setToken(t){ localStorage.setItem('AUTH_TOKEN', t); try{ window.dispatchEvent(new CustomEvent('auth-changed',{detail:{authed:true}})); }catch(_){} }
export function logout(){ localStorage.removeItem('AUTH_TOKEN'); try{ window.dispatchEvent(new CustomEvent('auth-changed',{detail:{authed:false}})); }catch(_){} }
export async function api(path, method='GET', data=null){
  const headers = { 'Content-Type':'application/json' };
  const t = token(); if(t) headers['Authorization'] = 'Bearer '+t;
  const resp = await fetch(API_BASE+path, { method, headers, body: data?JSON.stringify(data):undefined });
  if(resp.status===401){ localStorage.removeItem('AUTH_TOKEN'); }
  return resp.json();
}
