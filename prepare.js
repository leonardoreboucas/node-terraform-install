const fs = require('fs');
const os = require('os');
console.log(os.homedir())
const filePath = os.homedir()+'/.terraform/terraform'; 
try {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
} catch(err) {
  console.error(err)
}
