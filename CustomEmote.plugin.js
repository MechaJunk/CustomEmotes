//META{"name":"CustomEmote"}*//

function CustomEmote() {}
CustomEmote.prototype.getName = function() { return "Custom Emotes"; };
CustomEmote.prototype.getDescription = function() { return "Custom Emotes"; };
CustomEmote.prototype.getVersion = function() { return "1.0.0"; };
CustomEmote.prototype.getAuthor = function() { return "bamboechop, MechaJunk and Valance"; };
CustomEmote.prototype.getSettingsPanel = function() { return ''; };

var timer;

CustomEmote.prototype.load = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " loaded.", "color: purple; font-weight: bold;", "");
};

CustomEmote.prototype.unload = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + "unloaded.", "color: purple; font-weight: bold;", "");
};

CustomEmote.prototype.start = function() {
    var messages = document.querySelectorAll(".message-text > .markup");
    BdApi.getPlugin("Custom Emotes").emotes(messages);
};

CustomEmote.prototype.stop = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " stopped.", "color: red; font-weight: bold;", "");
};

CustomEmote.prototype.onMessage = function() {
    timer = setTimeout(function() {
        var messages = $(".message .markup");
        
        BdApi.getPlugin("Custom Emotes").emotes(messages);
        timer = null;
    }, 500);

    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " [onMessage] event fired.", "color: purple; font-weight: bold;", "");
};

CustomEmote.prototype.onSwitch = function() {
    var messages = document.querySelectorAll(".message-text > .markup");
    BdApi.getPlugin("Custom Emotes").emotes(messages);
    
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " [onSwitch] event fired.", "color: purple; font-weight: bold;", "");
};

function getImageElement(url) {
    return '<img draggable="false" id="emotes" class="image" src="' + url + '">';
}

// Emote List
var map = { 
"test/" : 'https://i.imgur.com/axVo9XH.png', 
"test2/" : 'https://i.imgur.com/dsNhzqe.gif',

};

CustomEmote.prototype.emotes = function(messages) {
    //Checks through all messages
    forEach(messages, function(index, value) {
        var line = value.innerHTML;
        for (var key in map) {
            line = line.replaceAll(key, getImageElement(map[key]));
        }
        value.innerHTML = line;
		
    });
console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " [emotereplace] event fired.", "color: purple; font-weight: bold;", "");
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
}

var forEach = function(array, callback, scope) {
    for(var i=0; i<array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};
