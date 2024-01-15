document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.createElement('textarea');
  const button = document.createElement('button');
  button.textContent = 'Convert';
  
  document.body.appendChild(textarea);
  document.body.appendChild(button);
  
  button.addEventListener('click', function() {
    const text = textarea.value;
    const rows = text.split('\n');
    
    for (const [i, row] of rows.entries()) {
      const [first, ...rest] = row.toLowerCase().trim().split('_');
      const output = `${first}${rest.map(word => word.replace(word[0], word[0].toUpperCase())).join('')}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
  });
  
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
});