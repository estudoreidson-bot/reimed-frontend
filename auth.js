
import { API_BASE } from './config.js';
export function token(){ return localStorage.getItem('AUTH_TOKEN')||''; }
export function setToken(t){ localStorage.setItem('AUTH_TOKEN', t); }
export function logout(){ localStorage.removeItem('AUTH_TOKEN'); location.replace('login.html'); }
export async function api(path, method='GET', data=null){
  const h={'Content-Type':'application/json'};
  const t=token(); if(t) h.Authorization='Bearer '+t;
  const r = await fetch(API_BASE+path,{ method, headers:h, body:data?JSON.stringify(data):undefined });
  return r.json();
}
