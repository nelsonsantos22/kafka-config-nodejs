import kafka from 'node-rdkafka';
import eventType from '../eventType.js';

console.log('consumer...');

const consumer = kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer ready..');
    consumer.subscribe(['test']);
    consumer.consume();
}).on('data', (data) =>{
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
});