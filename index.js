const core = require("@actions/core");
const fs = require("fs");
const yaml = require("js-yaml");

async function run() {
  try {
    const file = core.getInput("file", { required: true });
    const key = core.getInput("key", { required: false });
    const delimiter = core.getInput("delimiter", { required: false });
    const returnToOutputs = core.getInput("return_to_outputs", {
      required: false,
    });
    const esportToEnvs = core.getInput("export_to_envs", { required: false });
    const content = yaml.load(fs.readFileSync(file, "utf8"));

    if (key) {
      const flattened_object = flattenObject(content);
      core.setOutput("result", flattened_object[key]);
    } else {
      const flattened_object = flattenObject(content, false, delimiter);
      const keys = Object.keys(flattened_object);
      keys.forEach((current) => {
        if (flattened_object[current] != null) {
          if (returnToOutputs.toLowerCase() == "true")
            core.setOutput(current, flattened_object[current]);
          if (esportToEnvs.toLowerCase() == "true")
            core.exportVariable(current, flattened_object[current]);
        }
      });
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

// Code from Stackoverflow Post: https://stackoverflow.com/a/59787588
// Author: https://stackoverflow.com/users/2977175/tofandel
/**
 * @param ob Object                 The object to flatten
 * @param prefix String (Optional)  The prefix to add before each key, also used for recursion
 **/
function flattenObject(ob, prefix = false, delimiter = ".", result = null) {
  result = result || {};

  // Preserve empty objects and arrays, they are lost otherwise
  if (
    prefix &&
    typeof ob === "object" &&
    ob !== null &&
    Object.keys(ob).length === 0
  ) {
    result[prefix] = Array.isArray(ob) ? [] : {};
    return result;
  }

  prefix = prefix ? prefix + delimiter : "";

  for (const i in ob) {
    if (Object.prototype.hasOwnProperty.call(ob, i)) {
      if (typeof ob[i] === "object" && ob[i] !== null) {
        // Recursion on deeper objects
        flattenObject(ob[i], prefix + i, delimiter, result);
      } else {
        result[prefix + i] = ob[i];
      }
    }
  }
  return result;
}

run();
