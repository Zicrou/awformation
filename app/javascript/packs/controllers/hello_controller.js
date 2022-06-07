import { Controller } from "stimulus"

export default class extends Controller {
    alert() {
        alert(this.targets.find("name").value)
    }

}