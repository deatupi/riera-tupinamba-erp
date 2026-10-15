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

## ☁️ Upload permanente pela interface (ADM e gestor)

Marcando **☁️ Publicar online** ao subir NF, comprovante, balancete ou anexo,
o arquivo vai direto para `docs/` do repositório e aparece para todos em 1–2 min.
Exige **token 1x por aparelho** (⚙️ → ☁️ Publicação online):

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained**
2. Repository access: **Only select repositories → riera-tupinamba-erp**
3. Permissions → **Contents: Read and write** → Generate → colar no ERP

## 🔒 Privacidade

Repositório **privado**: só colaboradores com acesso ao repo enxergam o Pages.
