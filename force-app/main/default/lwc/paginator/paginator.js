import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    videoHandler() {
        this.dispatchEvent(new CustomEvent('video'));
    }

    mydogHandler() {
        this.dispatchEvent(new CustomEvent('mydog'));
    }
    surveyHandler() {
        this.dispatchEvent(new CustomEvent('survey'));
    }
}