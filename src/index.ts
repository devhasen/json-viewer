import fs from 'fs';

function parse(raw: string) {
  return JSON.stringify(JSON.parse(raw), null, 2);
}

const arg = process.argv[2];
if (arg && arg !== '-') {
  try { console.log(parse(fs.readFileSync(arg, 'utf8'))); }
  catch { console.error('invalid json'); process.exit(1); }
} else {
  let data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', c => { data += c; });
  process.stdin.on('end', () => {
    try { console.log(parse(data)); }
    catch { console.error('invalid json'); process.exit(1); }
  });
}
