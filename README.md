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

## 📎 Arquivos novos (rotina simples com Drive)

1. Suba o PDF no **Google Drive** (pasta do mês, como já fazem)
2. Clique em **Compartilhar → Qualquer pessoa com o link**
3. No ERP, ao lançar, cole o link no campo **"Link do Drive"**
4. O 👁 mostra o documento **dentro do sistema** (NF, comprovante, balancete ou saída)

O GitHub (`docs/`) segue como **acervo permanente** das 136 NFs + 61 comprovantes +
4 balancetes já publicados — espaço de sobra. Arquivos do mês corrente podem ir
só no Drive; no fechamento, a gente arquiva no `docs/`.

## 🔒 Privacidade

Repositório **privado**: só colaboradores com acesso ao repo enxergam o Pages.
