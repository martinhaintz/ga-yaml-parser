const process = require('process');
const cp = require('child_process');
const path = require('path');
const ip = path.join(__dirname, 'index.js');

test('test parse action.yaml file', () => {
  process.env['INPUT_FILE'] = "action.yml";

  const result = cp.execSync(`node ${ip}`, { env: process.env }).toString();

  expect(result).toContain("runs.using")
  expect(result).toContain("node12")
  expect(result).toContain("description")
})

test('test parse Google AppEngine test.yaml file', () => {
  process.env['INPUT_FILE'] = "test_gae.yaml";

  const result = cp.execSync(`node ${ip}`, { env: process.env }).toString();

  expect(result).toContain("env_variables.DJANGO_SETTINGS_MODULE")
  expect(result).toContain("test_settings")
  expect(result).toContain("automatic_scaling")
  expect(result).toContain("gunicorn -b :$PORT main:app -w 1 -c gunicorn_conf.py")
})