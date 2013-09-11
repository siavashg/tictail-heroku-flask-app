(function() {
    function appStart(store, accessToken) {
        $('.app-container h1').append(' ' + store.name);
        $('.app-container button').click(share);
    }

    function share() {
        TT.showShareDialog({
            heading: 'You\'re awesome!',
            message: 'Hey, I just built my first app on Tictail!'
        });
    }

    TT.init(appStart);
})();
