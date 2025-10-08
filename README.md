# reimed-frontend-whatsapp

Frontend estático pronto para publicar no Netlify, com redirecionamento para WhatsApp.

## Números
- Atendimento (pacientes): +55 75 9 8145 7012
- Médico humano (validação): +55 75 9 8102 3473

Os números e mensagens ficam centralizados em `config.js`.

## Páginas
- `index.html`: home. Redireciona automaticamente para o WhatsApp de atendimento e mantém botões de fallback.
- `medico.html`: abre o WhatsApp do médico humano para validação.
- `receptionist.html`: rota alternativa de recepção, também abre o WhatsApp de atendimento.
- `style.css`: estilos.
- `config.js`: configuração dos números e mensagens.

## Publicação
1. Faça upload dos arquivos no seu repositório `reimed-frontend` (pasta raiz).
2. Commit na branch `main`.
3. O Netlify fará o deploy automaticamente.
