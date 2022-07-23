const fs = require('fs');
const os = require('');
const filePath = os.homedir()+'/.terraform/terraform'; 
try {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
} catch(err) {
  console.error(err)
}
