!function(){"use strict";var n={Modules:{},Helpers:{},Events:$({}),init:function(){for(var o in n.Modules)"function"==typeof n.Modules[o].init&&n.Modules[o].init();n.Events.trigger("render")},log:function(n){window&&window.console&&window.console.log(n)},dir:function(n){window&&window.console&&window.console.dir(n)}};window.vis=n}();