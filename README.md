# Parses YAML and returns its content

<p align="center">
  <a href="https://github.com/the-coding-turtle/ga-yaml-parser/actions"><img alt="javscript-action status" src="https://github.com/the-coding-turtle/ga-file-list/actions/workflows/test.yml/badge.svg"></a>
</p>

This small and simple plugin parses a YAML file and returns the flattend object in the outputs.

## Inputs

## `file`

**Required** The file (including path) to the YAML. (e.g., "test_gae.yaml","./configs/config.yml")

## `key`

**Optional** If you want only one value from the YAML file then you can set the key. The value will be saved into the "result" outputs variable

## `delimiter`

**Optional** (Default: "\_") The delimiter which is used at nested objects. "." as delimiter only works for "export_to_envs"

## `return_to_outputs`

**Optional** (Default: "true") Save the values into the outputs variable

## `export_to_envs`

**Optional** (Default: "false") Save the values into the envs

## Outputs

Dynamically built depending on your YAML file content.

## Usage

```yaml
uses: the-coding-turtle/ga-yaml-parser@v0.1
with:
  directory: "config.yaml"
```

```
recipe:
  flour: "200g"
  water: "100ml"
```

will be saved in the outputs variable "recipe_flour" and "recipe_water"
