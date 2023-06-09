import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "l615xasq",
  dataset: "production",
  title: "SRKE-Shree Radhey Krishna Enterprises",
  apiVersion: "2023-06-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config