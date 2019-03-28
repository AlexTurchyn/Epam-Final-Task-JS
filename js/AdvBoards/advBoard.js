import {advertisementArray} from "./AdvArray/index"
import {setAdv} from "./advertisement"


function setAdvBoard (idArray, boardID) {
  const board = document.getElementById(boardID);

  
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, scope) {
        for(var i = 0, len = this.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }
  }

  
  for (let i = 0; i < idArray.length; i++) {
    advertisementArray.forEach(item => { 
      if (item.id == idArray[i]) {
        const adv = setAdv(item);
        board.appendChild(adv);
      }
    });
  }
}

export {setAdvBoard}