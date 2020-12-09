import Shariff from 'shariff';

export const initSharing = () => {
    var buttonsContainer1 = document.querySelector('.social-fb-button');
    buttonsContainer1 && new Shariff(buttonsContainer1, {
        services: ["facebook"],
        url: "google.com",
        buttonStyle: "icon"
    });

    var buttonsContainer2 = document.querySelector('.social-telegram-button');
    buttonsContainer2 && new Shariff(buttonsContainer2, {
        services: ["telegram"],
        url: location.href,
        buttonStyle: "icon"
    });
}