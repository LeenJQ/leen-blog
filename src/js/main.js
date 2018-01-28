import test from "./test.md"
import {markdown} from "markdown"
import {foo} from './m.js'

console.log(1)
console.log(foo)
setTimeout(()=>{console.log(foo)}, 10000)
const app = document.getElementById("app")
const blog = markdown.toHTML( test )
app.innerHTML = blog