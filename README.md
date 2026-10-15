# 🏊 BIOFISIO — Mini ERP (Riera e Tupinamba)

Mini ERP financeiro online via **GitHub Pages**. Sem servidor, sem instalação.

## 🌐 Acesso

Ative o Pages (abaixo) e acesse: `https://deatupi.github.io/riera-tupinamba-erp/`

## ✨ Rotina

| Aba | Uso |
|---|---|
| 📊 Dashboard | Saldo anterior, entradas, saídas e saldo final por mês |
| 💰 Fluxo de Caixa | Lançamentos + relatório no formato do PDF + **👁 view de docs na saída** |
| 🧾 Notas Fiscais | 136 NFs (mai–jul/2026) hospedadas + upload de novas |
| 📎 Comprovantes | 61 comprovantes hospedados + upload; vínculo com a saída |
| 📑 Balancetes | Demonstrações assinadas pela contadora + PGDASD, por mês |
| ⚙️ Tipos & Dados | Tipos de entrada, categorias, backup/restore JSON |

## 📁 Documentos

- `docs/nfs/2026-05|06|07/` — PDFs das NFs emitidas
- `docs/comprovantes/2026-05|06|07/` — comprovantes de pagamento
- `docs/balancetes/2026-05|06|07/` — demonstrações assinadas + PGDASD
- `docs/manifest.json` — índice lido pelo app (gerado automaticamente)

Para adicionar novos PDFs: suba o arquivo para a pasta do mês e regenere o `manifest.json`
(ou suba pela interface — fica salvo no navegador).

## 📎 Arquivos novos (gestor só anexa e vê subir)

Com o Drive conectado (⚙️ → 🔗 Conexão, 1x), o gestor só **escolhe o arquivo**:
barra de progresso → cai na pasta `ERP Biofisio` do Drive de vocês →
**aparece no 👁 do fluxo de caixa para todo mundo**. Sem link para colar,
sem token, sem GitHub. Os lançamentos também ficam compartilhados
(ADM e gestor veem o mesmo fluxo).

Conexão (1x, conta Google da clínica): `apps-script/Code.gs` →
script.google.com → colar → Executar `setup` → Implantar como
**App da Web (Executar como: eu / Acesso: qualquer pessoa)** →
colar a URL no ERP.

## 🗂 Acervo permanente (GitHub `docs/`)

## 🔒 Privacidade

Repositório **privado**: só colaboradores com acesso ao repo enxergam o Pages.
