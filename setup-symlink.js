const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceEnvPath = path.resolve(__dirname, './.env');  // Root-level .env file
const targetEnvPath = path.resolve(__dirname, './apps/backend/.env');  // Backend .env file

// Check if symlink already exists
if (fs.existsSync(targetEnvPath)) {
  if (fs.lstatSync(targetEnvPath).isSymbolicLink()) {
    console.log(`Symlink already exists: ${targetEnvPath}`);
  } else {
    console.log(`A file or folder exists at ${targetEnvPath}, cannot create symlink.`);
  }
} else {
  // Create symlink
  try {
    if (process.platform === 'win32') {
      execSync(`mklink "${targetEnvPath}" "${sourceEnvPath}"`, { stdio: 'inherit' });
      console.log('Symlink created on Windows');
    } else {
      execSync(`ln -s "${sourceEnvPath}" "${targetEnvPath}"`, { stdio: 'inherit' });
      console.log('Symlink created on Unix-like system');
    }
  } catch (err) {
    console.error('Error creating symlink:', err.message);
  }
}
