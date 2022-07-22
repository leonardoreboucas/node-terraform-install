const fs = require('fs');
const filePath = '~/.terraform/terraform'; 
try {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
} catch(err) {
  console.error(err)
}
