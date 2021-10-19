# Parses YAML and returns its content

<p align="center">
  <a href="https://github.com/the-coding-turtle/ga-yaml-parser/actions"><img alt="javscript-action status" src="https://github.com/the-coding-turtle/ga-file-list/actions/workflows/test.yml/badge.svg"></a>
</p>

This small and simple plugin parses a YAML file and returns the flattend object in the outputs.

## Inputs

## `file`

**Required** The file (including path) to the YAML. (e.g., "test_gae.yaml","./configs/config.yml")

## Outputs

Dynamically built depending on your YAML file content.

## Usage

```yaml
uses: the-coding-turtle/ga-yaml-parser@v0.1
with:
  directory: "config.yaml"
```
