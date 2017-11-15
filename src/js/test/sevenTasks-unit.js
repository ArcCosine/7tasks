import assert from "assert";
import { sevenTasks } from "../sevenTasks.js";

descrive("sevenTasks", function() {
    it("doSevenTasks",function(){
        assert.equal(sevenTasks(1,2),3,'1+2=3');
    });
});
