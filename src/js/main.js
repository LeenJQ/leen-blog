import test from "./test.md"
import {markdown} from "markdown"

console.log()

const app = document.getElementById("app")
const blog = markdown.toHTML( test )
app.innerHTML = blog