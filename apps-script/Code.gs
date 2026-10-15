/******************************************************
 * ERP Biofisio — cofre no Google Drive (backend simples)
 *
 * O QUE FAZ: recebe arquivos do ERP (NF, comprovante,
 * balancete, anexo) e guarda na pasta "ERP Biofisio" do
 * Drive de vocês. Também guarda os lançamentos (JSON),
 * então ADM e gestor veem o mesmo fluxo de caixa.
 *
 * INSTALAÇÃO (5 min, 1 única vez, na conta Google da clínica):
 * 1. Acesse script.google.com → Novo projeto
 * 2. Apague o código e cole este arquivo inteiro
 * 3. Salve, clique em Executar → setup (autorize com a conta da clínica)
 *    → anote o DATA_ID do registro de execução (só conferência)
 * 4. Implantar → Nova implantação → tipo "App da Web":
 *    - Executar como: EU (sua conta)
 *    - Quem tem acesso: QUALQUER pessoa
 *    - Implantar → copie a URL https://script.google.com/.../exec
 * 5. Cole a URL no ERP (⚙️ → 🔗 Conexão, visível p/ ADM)
 *    ou me mande que eu já deixo fixa no sistema.
 ******************************************************/

var ROOT_NAME = 'ERP Biofisio';

function root_() {
  var it = DriveApp.getFoldersByName(ROOT_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(ROOT_NAME);
}

// Rode 1x para criar a pasta + o arquivo de dados
function setup() {
  var f = root_().createFile('erp-data.json', '{}', MimeType.PLAIN_TEXT);
  PropertiesService.getScriptProperties().setProperty('DATA_ID', f.getId());
  Logger.log('OK! DATA_ID = ' + f.getId());
}

function sub_(kind, mes) {
  var r = root_(), k, m;
  var ik = r.getFoldersByName(kind);
  k = ik.hasNext() ? ik.next() : r.createFolder(kind);
  var im = k.getFoldersByName(mes);
  m = im.hasNext() ? im.next() : k.createFolder(mes);
  return m;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

// Leitura dos dados (o ERP chama ao abrir)
function doGet() {
  var id = PropertiesService.getScriptProperties().getProperty('DATA_ID');
  if (!id) return out_({ ok: false, error: 'rode setup() uma vez' });
  var txt = DriveApp.getFileById(id).getBlob().getDataAsString() || '{}';
  return out_({ ok: true, data: JSON.parse(txt) });
}

// Escrita: {action:'save', data:{...}} ou {action:'upload', kind, mes, name, mime, b64}
function doPost(e) {
  var p = JSON.parse(e.postData.contents);
  if (p.action === 'save') {
    var id = PropertiesService.getScriptProperties().getProperty('DATA_ID');
    DriveApp.getFileById(id).setContent(JSON.stringify(p.data));
    return out_({ ok: true });
  }
  if (p.action === 'upload') {
    var blob = Utilities.newBlob(Utilities.base64Decode(p.b64), p.mime || 'application/pdf', p.name);
    var f = sub_(p.kind || 'anexos', p.mes || 'geral').createFile(blob);
    f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return out_({ ok: true, id: f.getId() });
  }
  return out_({ ok: false, error: 'acao invalida' });
}
