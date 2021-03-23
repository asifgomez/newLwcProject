import { LightningElement, track } from 'lwc';

export default class EventSimple extends LightningElement {
    page = 1;
    @track items = [];
    mydogHandler() {
        this.page = 'My Dogs';
        this.items = [
            {
                label: 'My Dogs',
                name: '1',
                expanded: true,
                items: [
                    {
                        label: 'My Dog 1',
                        name: '2',
                        'href' : 'https://heysalesforce.org/',
                       
                    },
                    {
                        label: 'My Dog 2',
                        name: '3',
                        'href' : 'https://heysalesforce.org/',
                    },
                ],
            },
        ];
    }

    videoHandler() {
        this.page = 'Videos';
        this.items = [
            {
                label: 'Videos',
                name: '1',
                expanded: true,
                items: [
                    {
                        label: 'Video 1',
                        name: '2',
                        'href' : 'https://heysalesforce.org/',
                       
                    },
                    {
                        label: 'Video 2',
                        name: '3',
                        'href' : 'https://heysalesforce.org/',
                    },
                ],
            },
        ];
    }

    surveyHandler() {
        this.page = 'Surveys';
        this.items = [
        {
            label: 'Surveys',
            name: '1',
            expanded: true,
            items: [
                {
                    label: 'Survey 1',
                    name: '2',
                    'href' : 'https://heysalesforce.org/',
                   
                },
                {
                    label: 'Survey 2',
                    name: '3',
                    'href' : 'https://heysalesforce.org/',
                },
            ],
        },
    ];
    console.log(this.items);
    }


}