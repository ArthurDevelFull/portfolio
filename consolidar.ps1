# Script para consolidar conteúdo de arquivos em um único .txt
# Define o caminho da pasta
$pastaOrigem = "E:\meu-portfolio"
$arquivoSaida = "E:\meu-portfolio\consolidado.txt"

# Verifica se a pasta existe
if (-not (Test-Path $pastaOrigem)) {
    Write-Host "Erro: A pasta $pastaOrigem não existe!" -ForegroundColor Red
    exit
}

# Remove o arquivo de saída se já existir
if (Test-Path $arquivoSaida) {
    Remove-Item $arquivoSaida
}

# Cria o arquivo de saída
New-Item -Path $arquivoSaida -ItemType File -Force | Out-Null

Write-Host "Processando arquivos de $pastaOrigem..." -ForegroundColor Green

# Obtém todos os arquivos recursivamente, excluindo node_modules
$arquivos = Get-ChildItem -Path $pastaOrigem -File -Recurse | Where-Object {
    $_.FullName -notmatch '\\node_modules\\'
}

$contador = 0

foreach ($arquivo in $arquivos) {
    # Pula o próprio arquivo de saída
    if ($arquivo.FullName -eq $arquivoSaida) {
        continue
    }
    
    $contador++
    Write-Host "[$contador/$($arquivos.Count)] Processando: $($arquivo.FullName)" -ForegroundColor Cyan
    
    # Adiciona o cabeçalho com o nome do arquivo
    $separador = "=" * 80
    Add-Content -Path $arquivoSaida -Value $separador
    Add-Content -Path $arquivoSaida -Value "ARQUIVO: $($arquivo.FullName)"
    Add-Content -Path $arquivoSaida -Value "TAMANHO: $($arquivo.Length) bytes"
    Add-Content -Path $arquivoSaida -Value $separador
    Add-Content -Path $arquivoSaida -Value ""
    
    try {
        # Lê o conteúdo do arquivo
        $conteudo = Get-Content -Path $arquivo.FullName -Raw -ErrorAction Stop
        Add-Content -Path $arquivoSaida -Value $conteudo
    }
    catch {
        # Se não conseguir ler (arquivo binário, sem permissão, etc.)
        Add-Content -Path $arquivoSaida -Value "[ERRO: Não foi possível ler o conteúdo deste arquivo]"
        Add-Content -Path $arquivoSaida -Value "Motivo: $($_.Exception.Message)"
    }
    
    # Adiciona espaçamento entre arquivos
    Add-Content -Path $arquivoSaida -Value ""
    Add-Content -Path $arquivoSaida -Value ""
}

Write-Host "`nProcessamento concluído!" -ForegroundColor Green
Write-Host "Total de arquivos processados: $contador" -ForegroundColor Yellow
Write-Host "Arquivo de saída: $arquivoSaida" -ForegroundColor Yellow