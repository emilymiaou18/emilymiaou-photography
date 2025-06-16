import subprocess

category = 'weddings'
project_name = "2023-03-25 Juliet & Stephen"
date = project_name.split()[0]
project_id = "JulietStephen"
slug = 'juliet-stephen'

# Run a command and capture its output
# result = subprocess.run(['python', 'rename_images'], capture_output=True, text=True)

# print("STDOUT:")
# print(result.stdout)

# print("STDERR:")
# print(result.stderr)

f"""
    const {project_id} = Object.entries(import.meta.glob(
    '/src/assets/{project_name}/*.webp',
    {{ eager: true, import: 'default' }}
    )).map(([path, src], index) => ({{
    id: path,
    src,
    }}));
"""


# sevice.ts
# weddings_ui.ts