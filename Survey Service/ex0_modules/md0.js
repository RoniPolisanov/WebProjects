"use strict";
var events = require('events');
var eventsConfig = require('../config').events;

const MAX_VOTES = 5; //Limit of votes per topic
global.log = "";

class Survey extends events.EventEmitter {
    constructor(_data) {
        super();
        this.votes = 0;
        this.topic = 0;
        this.data = _data;
    };
    //Get topic's data
    getAllData() {
        console.log(`${this.data.topic}, Votes: ${this.data.votes}`);
        LOG(`${this.data.topic}, Votes: ${this.data.votes}`);
    };
    //Reset vote rates
    reset() {
        if (this.data.votes != 0) {
            this.data.votes = 0;
            console.log(`${this.data.topic} Reset Successfully.`);
            LOG(`${this.data.topic} Reset Successfully.`);
            this.emit(eventsConfig.RESET, this.data);
        } else {
            console.log(`${this.data.topic} UN-Reseted - Is Reset.`);
            LOG(`${this.data.topic} UN-Reseted - Is Reset.`);
            this.emit(eventsConfig.UNRESET, this.data);
        }
    };
    //Lovely vote
    increment() {
        if (this.data.votes < MAX_VOTES) {
            ++this.data.votes;
            console.log(`${this.data.topic} Incremented Successfully.`);
            LOG(`${this.data.topic} Incremented Successfully.`);
            this.emit(eventsConfig.INC, this.data);
        } else {
            console.log(`${this.data.topic} UN-Incremented - Reached max votes.`);
            LOG(`${this.data.topic} UN-Incremented - Reached max votes.`);
            this.emit(eventsConfig.UNINC, this.data);
        }
    };
}

//Browser response LOG function
var LOG = (string) => {
    log += `${string}<br>`;
};

//Creating instance of topic and Catching FireEvents
module.exports = (_data) => {
    var topic = new Survey(_data);

    topic.increment();
    topic.reset();
    topic.getAllData();

    topic.on(eventsConfig.INC, (data) => {
        console.log(`#EMIT: INC - ${data.topic}, Votes: ${data.votes}`);
    });

    topic.on(eventsConfig.RESET, (data) => {
        console.log(`#EMIT: RESET - ${data.topic}, Votes: ${data.votes}`);
    });
};