// scripts/clean.js
import { existsSync, rmSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const dirsToRemove = ['build', '.react-router'];

console.log('🧹 Limpando diretórios...\n');

dirsToRemove.forEach(dir => {
    const fullPath = join(rootDir, dir);

    if (existsSync(fullPath)) {
        try {
            rmSync(fullPath, { recursive: true, force: true });
            console.log(`✅ Removido: ${dir}`);
        } catch (error) {
            console.error(`❌ Erro ao remover ${dir}:`, error.message);
        }
    } else {
        console.log(`⏭️  Não existe: ${dir}`);
    }
});

console.log('\n✨ Limpeza concluída!\n');