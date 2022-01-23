import kafka from 'node-rdkafka';
import eventType from '../eventType.js';

console.log('producer...');

const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, {topic: 'test'});

function qeueMessage() {

    const event = {
        category: 'DOG', 
        noise: 'bark'
    };

    const success = stream.write(eventType.toBuffer(event));
    if(success){
        console.log('message wrote successfully to stream');
    } else {
        console.log('something went wrong');
    }
};

setInterval(()=> {
    qeueMessage();
}, 3000);