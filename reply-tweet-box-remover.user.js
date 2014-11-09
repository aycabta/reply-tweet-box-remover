// ==UserScript==
// @name       Reply Tweet Box Remover
// @namespace  http://aycabta.github.io/
// @version    0.1.0
// @description  Remove the 'reply tweet box' on tweet permalink for screenshot.
// @include    /^https:\/\/twitter.com\/[0-9a-zA-Z_]+\/status\/\d+/
// @copyright  2014+, Code Ass
// ==/UserScript==

(function() {
    var tweetbox = document.getElementsByClassName('inline-reply-tweetbox')[0];
    var userImage = tweetbox.getElementsByClassName('inline-reply-user-image')[0];
    var removeReplyTweetbox = function() {
        tweetbox.parentNode.removeChild(tweetbox);
        var permalinkTweet = document.getElementsByClassName('permalink-tweet')[0];
        permalinkTweet.style.padding = '10px 40px';
        permalinkTweet.style.borderBottom = '1px solid #e1e8ed';
    };
    userImage.addEventListener('click', removeReplyTweetbox);
})();

