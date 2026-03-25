const { execSync } = require('child_process');
const fs = require('fs');
try {
  const out = execSync('npx prisma validate', { encoding: 'utf-8' });
  fs.writeFileSync('out.txt', out, 'utf-8');
} catch (e) {
  fs.writeFileSync('out.txt', (e.stdout || '') + '\n' + (e.stderr || ''), 'utf-8');
}
